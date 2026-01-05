# Firebase Setup Guide

ShopSync uses Firebase for authentication, real-time data synchronization, and cloud storage. This guide will walk you through setting up Firebase for your ShopSync development environment.

## Overview

Firebase services used by ShopSync:

- **Firebase Authentication** - Google Sign-In, email/password auth
- **Cloud Firestore** - Real-time database for lists and items
- **Firebase Hosting** - Web app deployment (optional)
- **Cloud Functions** - Server-side logic (future feature)

## Prerequisites

- Google account
- ShopSync source code cloned locally
- Basic understanding of Firebase console

## Step 1: Create Firebase Project

1. **Go to Firebase Console**

   Visit [console.firebase.google.com](https://console.firebase.google.com)

2. **Create New Project**

   - Click **Add project**
   - Enter project name: `ShopSync` (or your preferred name)
   - Click **Continue**

3. **Configure Google Analytics** (Optional)

   - Toggle Google Analytics on/off based on your preference
   - If enabled, select or create an Analytics account
   - Click **Create project**

4. **Wait for Setup**

   Firebase will take a few moments to create your project.

## Step 2: Enable Authentication

1.  **Navigate to Authentication**

    In the Firebase console sidebar, click **Authentication**.

2.  **Get Started**

    Click **Get started** button.

3.  **Enable Sign-in Methods**

    Enable the following providers:

    === "Google Sign-In"

        1. Click **Google** in the providers list
        2. Toggle **Enable**
        3. Enter project support email
        4. Click **Save**

    === "Email/Password"

        1. Click **Email/Password**
        2. Toggle **Enable**
        3. Click **Save**

4.  **Configure OAuth Consent Screen** (if prompted)

    - Set app name: ShopSync
    - Add support email
    - Save and continue

## Step 3: Create Firestore Database

1. **Navigate to Firestore Database**

   Click **Firestore Database** in the sidebar.

2. **Create Database**

   Click **Create database**.

3. **Set Security Rules**

   Choose **Start in test mode** for development:

   ```firestore
   rules_version = '2';
   service cloud.firestore {
     match /databases/{database}/documents {
       match /{document=**} {
         allow read, write: if request.time < timestamp.date(2024, 12, 31);
       }
     }
   }
   ```

   !!! warning "Production Security"
   Test mode rules allow anyone to read/write your database. Before deploying to production, update with proper security rules (see below).

4. **Select Location**

   Choose a Cloud Firestore location close to your users:

   - `nam5` (United States)
   - `eur3` (Europe)
   - `asia-southeast1` (Singapore)

   !!! important "Cannot Change Location"
   This location cannot be changed later, so choose carefully.

5. **Enable Database**

   Click **Enable** to create the database.

## Step 4: Register Your App

### Android App

1. **Add Android App**

   - In Project Overview, click the Android icon
   - Register app with package name: `com.aadishsamir.shopsync`
     (or your custom package name from `android/app/build.gradle`)

2. **Download google-services.json**

   - Download the `google-services.json` file
   - Move it to: `android/app/google-services.json`

3. **Add Firebase SDK**

   The ShopSync project already has Firebase dependencies configured. Verify in `android/build.gradle`:

   ```gradle
   dependencies {
       classpath 'com.google.gms:google-services:4.3.15'
   }
   ```

   And in `android/app/build.gradle`:

   ```gradle
   apply plugin: 'com.google.gms.google-services'
   ```

4. **Add SHA-1 Certificate**

   For Google Sign-In to work, add your SHA-1 certificate:

   ```bash
   # Debug certificate
   keytool -list -v -alias androiddebugkey \
     -keystore ~/.android/debug.keystore

   # Default password: android
   ```

   Copy the SHA-1 fingerprint and add it in Firebase Console:

   - Project Settings → Your apps → Android app
   - Click **Add fingerprint**
   - Paste SHA-1
   - Click **Save**

### iOS App (Optional)

1. **Add iOS App**

   - Click the iOS icon in Project Overview
   - Register app with bundle ID: `com.aadishsamir.shopsync`

2. **Download GoogleService-Info.plist**

   - Download the configuration file
   - Add to: `ios/Runner/GoogleService-Info.plist`

3. **Update Xcode Project**

   Open `ios/Runner.xcworkspace` in Xcode and verify the plist is included.

### Web App

1. **Add Web App**

   - Click the Web icon `< / >` in Project Overview
   - Register app with nickname: `ShopSync Web`
   - Check **Also set up Firebase Hosting** (optional)

2. **Copy Configuration**

   Firebase will show a JavaScript configuration object. You'll need this for web deployment.

3. **Update Firebase Options**

   The configuration is already set up in `lib/firebase_options.dart`. If you need to regenerate it:

   ```bash
   flutterfire configure
   ```

## Step 5: Configure FlutterFire CLI (Recommended)

The FlutterFire CLI automates Firebase setup:

1. **Install FlutterFire CLI**

   ```bash
   dart pub global activate flutterfire_cli
   ```

2. **Run Configuration**

   ```bash
   flutterfire configure
   ```

3. **Select Options**

   - Choose your Firebase project
   - Select platforms (Android, iOS, Web)
   - CLI will update `firebase_options.dart`

## Step 6: Set Up Security Rules

For production, use proper Firestore security rules:

### Firestore Rules

```firestore
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    // Helper function to check authentication
    function isSignedIn() {
      return request.auth != null;
    }

    // Helper function to check if user owns the document
    function isOwner(userId) {
      return isSignedIn() && request.auth.uid == userId;
    }

    // Users collection
    match /users/{userId} {
      allow read: if isSignedIn();
      allow write: if isOwner(userId);
    }

    // Shopping lists
    match /shoppingLists/{listId} {
      allow read: if isSignedIn() &&
        (resource.data.ownerId == request.auth.uid ||
         request.auth.uid in resource.data.sharedWith);

      allow create: if isSignedIn() &&
        request.resource.data.ownerId == request.auth.uid;

      allow update, delete: if isSignedIn() &&
        resource.data.ownerId == request.auth.uid;

      // Items subcollection
      match /items/{itemId} {
        allow read, write: if isSignedIn() &&
          (get(/databases/$(database)/documents/shoppingLists/$(listId)).data.ownerId == request.auth.uid ||
           request.auth.uid in get(/databases/$(database)/documents/shoppingLists/$(listId)).data.sharedWith);
      }
    }

    // List groups
    match /listGroups/{groupId} {
      allow read, write: if isSignedIn() &&
        resource.data.userId == request.auth.uid;
    }

    // Categories
    match /categories/{categoryId} {
      allow read: if isSignedIn();
      allow write: if isSignedIn() &&
        resource.data.userId == request.auth.uid;
    }

    // Recycle bin
    match /recycleBin/{userId}/items/{itemId} {
      allow read, write: if isOwner(userId);
    }
  }
}
```

To update rules:

1. Go to **Firestore Database** → **Rules**
2. Paste the rules above
3. Click **Publish**

### Storage Rules (if using Cloud Storage)

```firestore
rules_version = '2';
service firebase.storage {
  match /b/{bucket}/o {
    match /user-uploads/{userId}/{allPaths=**} {
      allow read: if request.auth != null;
      allow write: if request.auth != null && request.auth.uid == userId;
    }
  }
}
```

## Step 7: Test the Setup

1. **Run the App**

   ```bash
   flutter run
   ```

2. **Test Authentication**

   - Launch the app
   - Click **Sign in with Google**
   - Verify successful sign-in

3. **Test Firestore**

   - Create a shopping list
   - Add items
   - Check Firebase Console → Firestore Database to see data

4. **Check Console Logs**

   Monitor for any Firebase errors:

   ```bash
   flutter logs
   ```

## Optional: Firebase Emulator Suite

For local development without using production Firebase:

1. **Install Firebase CLI**

   ```bash
   npm install -g firebase-tools
   ```

2. **Login to Firebase**

   ```bash
   firebase login
   ```

3. **Initialize Emulators**

   ```bash
   firebase init emulators
   ```

4. **Start Emulators**

   ```bash
   firebase emulators:start
   ```

5. **Connect App to Emulators**

   In `lib/main.dart`, add before initializing Firebase:

   ```dart
   if (kDebugMode) {
     await FirebaseAuth.instance.useAuthEmulator('localhost', 9099);
     FirebaseFirestore.instance.useFirestoreEmulator('localhost', 8080);
   }
   ```

## Troubleshooting

??? question "Google Sign-In not working on Android"

    1. Verify SHA-1 certificate is added to Firebase Console
    2. Check package name matches in Firebase and `build.gradle`
    3. Ensure `google-services.json` is in the correct location
    4. Rebuild the app: `flutter clean && flutter run`

??? question "Firestore permission denied"

    1. Check security rules in Firebase Console
    2. Ensure user is authenticated
    3. Verify rules allow the operation
    4. Check console logs for specific error messages

??? question "Firebase initialization failed"

    1. Verify `google-services.json` is present
    2. Run `flutterfire configure` to regenerate configuration
    3. Check `firebase_options.dart` has correct project ID
    4. Ensure Firebase dependencies are up to date in `pubspec.yaml`

??? question "Web app shows 'Firebase: No Firebase App' error"

    1. Verify `firebase_options.dart` is generated
    2. Check that `DefaultFirebaseOptions.currentPlatform` is used
    3. Ensure Firebase is initialized before app runs

## Best Practices

!!! tip "Use Multiple Projects"
Create separate Firebase projects for development, staging, and production environments.

!!! tip "Monitor Usage"
Keep an eye on Firebase usage in the console to avoid exceeding free tier limits.

!!! tip "Backup Firestore"
Regularly export Firestore data for backups:
`bash
    gcloud firestore export gs://your-bucket/backups
    `

!!! tip "Secure API Keys" - Never commit Firebase config files to public repositories - Add to `.gitignore`: `google-services.json`, `GoogleService-Info.plist` - Use environment variables for sensitive data

## Next Steps

- :material-code-braces: [Explore Firebase Integration](../developer-guide/firebase.md)
- :material-security: [Learn About Security Rules](../reference/configuration.md)
- :material-cloud-upload: [Deploy to Firebase Hosting](../deployment/web.md)
- :material-chart-line: [Monitor with Firebase Analytics](../developer-guide/services.md)

---

Your Firebase setup is complete! :fire:
