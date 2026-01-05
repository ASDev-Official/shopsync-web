# Installation Guide

This guide covers setting up ShopSync for development. If you just want to use the app, see the [Quick Start Guide](quick-start.md) instead.

## Prerequisites

Before you begin, ensure you have the following installed:

### Required Software

| Software       | Minimum Version | Recommended           | Download                                                      |
| -------------- | --------------- | --------------------- | ------------------------------------------------------------- |
| Flutter SDK    | 3.6.0           | Latest stable         | [flutter.dev](https://flutter.dev/docs/get-started/install)   |
| Dart SDK       | 3.0.0           | Included with Flutter | -                                                             |
| Git            | 2.x             | Latest                | [git-scm.com](https://git-scm.com/downloads)                  |
| Android Studio | 2021.1+         | Latest                | [developer.android.com](https://developer.android.com/studio) |

### Optional Tools

- **VS Code** with Flutter extension (alternative to Android Studio)
- **Xcode** (for iOS development, macOS only)
- **Chrome** (for web development and debugging)

### System Requirements

=== "Windows" - Windows 10 or later (64-bit) - Disk Space: 2.8 GB (IDE + SDK) - RAM: 8 GB recommended

=== "macOS" - macOS 10.15 (Catalina) or later - Disk Space: 2.8 GB (IDE + SDK) - RAM: 8 GB recommended - Xcode for iOS development

=== "Linux" - Ubuntu 20.04 or later (or equivalent) - Disk Space: 2.8 GB (IDE + SDK) - RAM: 8 GB recommended

## Step 1: Install Flutter

Follow the official Flutter installation guide for your operating system:

=== "Windows"

````powershell # Download Flutter SDK from flutter.dev # Extract to C:\src\flutter # Add to PATH: C:\src\flutter\bin

    flutter doctor
    ```

=== "macOS"
```bash # Using Homebrew
brew install flutter

    # Or download from flutter.dev
    # Extract and add to PATH
    export PATH="$PATH:`pwd`/flutter/bin"

    flutter doctor
    ```

=== "Linux"
```bash # Download Flutter SDK
cd ~/development
tar xf ~/Downloads/flutter*linux*\*.tar.xz

    # Add to PATH in ~/.bashrc or ~/.zshrc
    export PATH="$PATH:$HOME/development/flutter/bin"

    flutter doctor
    ```

### Verify Installation

Run `flutter doctor` to check your installation:

```bash
flutter doctor
````

Expected output:

```
Doctor summary (to see all details, run flutter doctor -v):
[✓] Flutter (Channel stable, 3.35.3, on macOS 14.0)
[✓] Android toolchain - develop for Android devices
[✓] Chrome - develop for the web
[✓] Android Studio (version 2021.1)
[✓] VS Code (version 1.85.0)
[✓] Connected device (3 available)
```

!!! tip "Fix Any Issues"
If `flutter doctor` shows issues, follow the provided instructions to resolve them.

## Step 2: Clone the Repository

Clone the ShopSync repository from GitHub:

```bash
git clone https://github.com/ASDev-Official/ShopSync.git
cd ShopSync
```

## Step 3: Install Dependencies

Install all required Dart packages:

```bash
flutter pub get
```

This will download all dependencies defined in `pubspec.yaml`.

## Step 4: Configure Firebase

ShopSync uses Firebase for authentication and data storage. You'll need to set up your own Firebase project.

See the detailed [Firebase Setup Guide](firebase-setup.md) for step-by-step instructions.

Quick summary:

1. Create a Firebase project
2. Enable Authentication (Google Sign-In)
3. Create a Firestore database
4. Download configuration files:
   - `google-services.json` for Android
   - `GoogleService-Info.plist` for iOS (if applicable)
5. Add files to the appropriate directories

## Step 5: Verify Setup

Run the app to verify everything is set up correctly:

```bash
# List available devices
flutter devices

# Run on a specific device
flutter run -d <device-id>

# Or let Flutter choose
flutter run
```

## IDE Setup

### Android Studio

1. **Install Flutter Plugin**

   - Open Android Studio
   - Go to **Settings** → **Plugins**
   - Search for "Flutter"
   - Click **Install**
   - Restart Android Studio

2. **Configure Flutter SDK**

   - Go to **Settings** → **Languages & Frameworks** → **Flutter**
   - Set the Flutter SDK path
   - Click **Apply**

3. **Open Project**
   - **File** → **Open**
   - Select the ShopSync directory
   - Wait for indexing to complete

### VS Code

1. **Install Extensions**

   - Open VS Code
   - Install the **Flutter** extension
   - Install the **Dart** extension

2. **Configure Flutter**

   - Press `Cmd+Shift+P` (macOS) or `Ctrl+Shift+P` (Windows/Linux)
   - Type "Flutter: Select Flutter SDK"
   - Select your Flutter SDK path

3. **Open Project**
   - **File** → **Open Folder**
   - Select the ShopSync directory

## Platform-Specific Setup

### Android Setup

1. **Install Android Studio**

   Download from [developer.android.com](https://developer.android.com/studio)

2. **Install Android SDK**

   Android Studio will prompt you to install the SDK on first launch.

3. **Accept Licenses**

   ```bash
   flutter doctor --android-licenses
   ```

4. **Add Configuration Files**

   Copy `google-services.json` to:

   ```
   android/app/google-services.json
   ```

5. **Create a Virtual Device** (Optional)

   - Open **AVD Manager** in Android Studio
   - Click **Create Virtual Device**
   - Choose a device definition
   - Select a system image
   - Click **Finish**

### Web Setup

1. **Enable Web Support**

   ```bash
   flutter config --enable-web
   ```

2. **Verify Chrome Installation**

   ```bash
   flutter devices
   ```

   You should see Chrome listed as an available device.

3. **Run on Web**

   ```bash
   flutter run -d chrome
   ```

### iOS Setup (macOS only)

!!! warning "macOS Required"
iOS development requires a macOS computer.

1. **Install Xcode**

   Download from the Mac App Store.

2. **Install Command Line Tools**

   ```bash
   sudo xcode-select --switch /Applications/Xcode.app/Contents/Developer
   sudo xcodebuild -runFirstLaunch
   ```

3. **Accept License**

   ```bash
   sudo xcodebuild -license accept
   ```

4. **Add Configuration Files**

   Copy `GoogleService-Info.plist` to:

   ```
   ios/Runner/GoogleService-Info.plist
   ```

5. **Install CocoaPods**

   ```bash
   sudo gem install cocoapods
   cd ios
   pod install
   ```

## Building for Production

### Android APK

```bash
flutter build apk --release
```

Output: `build/app/outputs/flutter-apk/app-release.apk`

### Android App Bundle (for Play Store)

```bash
flutter build appbundle --release
```

Output: `build/app/outputs/bundle/release/app-release.aab`

### Web

```bash
flutter build web --release
```

Output: `build/web/`

## Troubleshooting

### Common Issues

??? question "Flutter command not found"

    Make sure Flutter is in your PATH. Run:

    ```bash
    echo $PATH
    ```

    If Flutter isn't listed, add it to your shell configuration file.

??? question "Android licenses not accepted"

    Run:

    ```bash
    flutter doctor --android-licenses
    ```

    Accept all licenses when prompted.

??? question "Firebase configuration missing"

    Ensure you've completed the [Firebase Setup](firebase-setup.md) and added the configuration files to the correct directories.

??? question "Gradle build failed"

    Clean the build:

    ```bash
    cd android
    ./gradlew clean
    cd ..
    flutter clean
    flutter pub get
    ```

??? question "CocoaPods not found (iOS)"

    Install CocoaPods:

    ```bash
    sudo gem install cocoapods
    ```

### Getting Help

If you encounter issues:

1. Check the [FAQ](../faq/index.md)
2. Search [existing issues](https://github.com/ASDev-Official/ShopSync/issues)
3. Ask in [GitHub Discussions](https://github.com/ASDev-Official/ShopSync/discussions)
4. Create a [new issue](https://github.com/ASDev-Official/ShopSync/issues/new)

## Next Steps

Now that you have ShopSync installed:

- :material-firebase: [Set up Firebase](firebase-setup.md)
- :material-code-braces: [Explore the Architecture](../developer-guide/architecture.md)
- :material-file-tree: [Understand Project Structure](../developer-guide/project-structure.md)
- :material-hand-heart: [Learn How to Contribute](../contributing/index.md)

---

Happy coding! :rocket:
