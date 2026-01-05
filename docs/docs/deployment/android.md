# Android Deployment

Complete guide to deploying ShopSync to the Google Play Store.

## Prerequisites

- Android Studio installed
- Java JDK 11+ configured
- Google Play Developer account
- App signing key created

## Setup

### 1. Configure Signing

Create `android/key.properties`:

```properties
storePassword=your_store_password
keyPassword=your_key_password
keyAlias=upload
storeFile=../upload-keystore.jks
```

!!! warning "Security"
Add `key.properties` to `.gitignore`. Never commit credentials!

### 2. Update `build.gradle`

In `android/app/build.gradle`:

```gradle
def keystoreProperties = new Properties()
def keystorePropertiesFile = rootProject.file('key.properties')
if (keystorePropertiesFile.exists()) {
    keystoreProperties.load(new FileInputStream(keystorePropertiesFile))
}

android {
    ...

    signingConfigs {
        release {
            keyAlias keystoreProperties['keyAlias']
            keyPassword keystoreProperties['keyPassword']
            storeFile keystoreProperties['storeFile'] ? file(keystoreProperties['storeFile']) : null
            storePassword keystoreProperties['storePassword']
        }
    }

    buildTypes {
        release {
            signingConfig signingConfigs.release
            minifyEnabled true
            shrinkResources true
        }
    }
}
```

### 3. Generate Signing Key

```bash
keytool -genkey -v -keystore upload-keystore.jks \
  -keyalg RSA -keysize 2048 -validity 10000 \
  -alias upload
```

Follow prompts to set passwords and details.

## Building for Release

### APK Build

For testing or direct distribution:

```bash
flutter build apk --release
```

Output: `build/app/outputs/flutter-apk/app-release.apk`

### App Bundle (Recommended)

For Play Store submission:

```bash
flutter build appbundle --release
```

Output: `build/app/outputs/bundle/release/app-release.aab`

!!! tip "Why App Bundle?"

    - Smaller downloads for users
    - Automatic APK optimization
    - Required for Play Store

### Build Variants

**Different architectures:**

```bash
# ARM64 only (most devices)
flutter build apk --release --target-platform android-arm64

# Multiple architectures
flutter build apk --release --split-per-abi
```

## Play Store Submission

### 1. Create App in Play Console

1. Go to [Play Console](https://play.google.com/console)
2. Click **Create app**
3. Fill in app details
4. Set up store listing

### 2. Prepare Store Listing

**Required:**

- App name (30 chars max)
- Short description (80 chars)
- Full description (4000 chars)
- App icon (512x512 PNG)
- Feature graphic (1024x500)
- Screenshots (2-8 images)

**Screenshots sizes:**

- Phone: 16:9 or 9:16
- Tablet: 16:9 or 9:16 (optional)
- Wear: 1:1 (optional)

### 3. Upload App Bundle

1. Go to **Release** → **Production**
2. Click **Create new release**
3. Upload `app-release.aab`
4. Add release notes
5. Review and rollout

### 4. Content Rating

Complete questionnaire for age ratings:

1. Navigate to **Policy** → **App content**
2. Complete rating questionnaire
3. Submit for rating
4. Apply ratings

### 5. Privacy Policy

Required if app collects data:

1. Add privacy policy URL
2. Ensure it covers:
   - Data collected
   - How it's used
   - User rights
   - Contact information

## App Updates

### Version Management

Update in `pubspec.yaml`:

```yaml
version: 4.2.0+11
```

Format: `version+buildNumber`

### Release Updates

1. Increment version number
2. Update changelog
3. Build new app bundle
4. Upload to Play Console
5. Add release notes
6. Review and release

### Staged Rollout

Gradual rollout to minimize risk:

1. Start at 5% of users
2. Monitor crash reports
3. Increase to 20%, 50%, 100%
4. Halt if issues detected

## Testing

### Internal Testing

Quick testing with team:

1. Create **Internal testing** track
2. Add tester emails
3. Upload APK/AAB
4. Share test link

### Closed Testing

Beta testing with select users:

1. Create **Closed testing** track
2. Create tester list (up to 2000)
3. Upload APK/AAB
4. Collect feedback

### Open Testing

Public beta:

1. Create **Open testing** track
2. Set opt-in link
3. Upload APK/AAB
4. Monitor metrics

## Build Optimization

### ProGuard/R8

Shrink and obfuscate code:

```gradle
buildTypes {
    release {
        minifyEnabled true
        shrinkResources true
        proguardFiles getDefaultProguardFile('proguard-android-optimize.txt'), 'proguard-rules.pro'
    }
}
```

### Code Obfuscation

In build command:

```bash
flutter build appbundle --release \
  --obfuscate \
  --split-debug-info=build/debug-info
```

### App Size Reduction

```gradle
android {
    ...
    bundle {
        language {
            enableSplit = true
        }
        density {
            enableSplit = true
        }
        abi {
            enableSplit = true
        }
    }
}
```

## Common Issues

### Signing Errors

**Issue:** Key not found

**Solution:**

- Verify `key.properties` path
- Check keystore file location
- Ensure passwords are correct

### Build Failures

**Issue:** Build failed with Gradle errors

**Solution:**

```bash
cd android
./gradlew clean
cd ..
flutter clean
flutter build appbundle --release
```

### Upload Rejected

**Issue:** Play Console rejects upload

**Common reasons:**

- Version code not incremented
- Signing certificate mismatch
- API level too low

## Release Checklist

- [ ] Version number incremented
- [ ] Changelog updated
- [ ] Signing configured
- [ ] Build successful
- [ ] Tested on multiple devices
- [ ] Store listing updated
- [ ] Screenshots current
- [ ] Privacy policy updated
- [ ] Content rating complete
- [ ] Release notes written

## Monitoring

### Crash Reports

View in Play Console:

1. **Quality** → **Android vitals**
2. Review crash clusters
3. Download stack traces
4. Fix and release update

### Performance

Monitor key metrics:

- ANR (App Not Responding) rate
- Crash rate
- Battery usage
- Rendering times

## Resources

- [Play Console Help](https://support.google.com/googleplay/android-developer)
- [Android App Bundle](https://developer.android.com/guide/app-bundle)
- [Flutter Android Deployment](https://docs.flutter.dev/deployment/android)

---

See also: [CI/CD](ci-cd.md) | [Web Deployment](web.md)
