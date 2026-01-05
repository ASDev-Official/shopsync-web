# Deployment

Learn how to build and deploy ShopSync to various platforms.

## Overview

ShopSync supports deployment to:

- 📱 **Android** - Google Play Store
- 🌐 **Web** - Firebase Hosting
- ⌚ **WearOS** - Galaxy Store & Google Play
- 🍎 **iOS** - Coming soon

## Quick Start

### Prerequisites

- Flutter SDK 3.6.0+
- Firebase project configured
- Platform-specific SDKs installed

### Build Commands

=== "Android"
`bash
    flutter build apk --release
    flutter build appbundle --release
    `

=== "Web"
`bash
    flutter build web --release
    firebase deploy --only hosting
    `

=== "WearOS"
`bash
    flutter build apk --release --target-platform android-arm64
    `

## Platform Guides

### [Android Deployment](android.md)

Complete guide for deploying to Google Play Store:

- Signing configuration
- Build variants
- Release preparation
- Play Store submission

### [Web Deployment](web.md)

Deploy to Firebase Hosting:

- Build optimization
- Firebase setup
- Custom domains
- Performance tuning

### CI/CD Pipeline

Automate builds with GitHub Actions:

- Continuous integration
- Automated testing
- Release management
- Multi-platform builds

## Environment Configuration

### Development

```bash
# Development environment
flutter run --debug
```

### Staging

```bash
# Staging environment with Firebase
flutter run --dart-define=ENV=staging
```

### Production

```bash
# Production build
flutter build --release --dart-define=ENV=production
```

## Build Variants

### Debug Build

For development and testing:

```bash
flutter build apk --debug
```

Features:

- Hot reload enabled
- Debug symbols included
- Larger binary size
- Development Firebase config

### Release Build

For production deployment:

```bash
flutter build apk --release --obfuscate --split-debug-info=build/debug-info
```

Features:

- Code obfuscation
- Optimized performance
- Smaller binary size
- Production Firebase config

## Version Management

### Versioning Strategy

ShopSync follows semantic versioning:

```
MAJOR.MINOR.PATCH-CHANNEL

Example: 4.1.0-stable
```

**Increment:**

- `MAJOR`: Breaking changes
- `MINOR`: New features
- `PATCH`: Bug fixes

### Update `pubspec.yaml`

```yaml
version: 4.1.0+10
```

Format: `version+build_number`

## Pre-Deployment Checklist

- [ ] All tests passing
- [ ] Code review complete
- [ ] Version numbers updated
- [ ] Changelog updated
- [ ] Firebase config production-ready
- [ ] Secrets properly configured
- [ ] App icons updated
- [ ] Screenshots prepared
- [ ] Store listing complete
- [ ] Beta testing complete

## Monitoring & Analytics

### Firebase Crashlytics

Monitor app stability:

```dart
FirebaseCrashlytics.instance.recordError(error, stackTrace);
```

### Sentry Integration

Additional error tracking:

```dart
await Sentry.captureException(exception, stackTrace: stackTrace);
```

### Analytics Events

Track key metrics:

```dart
FirebaseAnalytics.instance.logEvent(
  name: 'list_created',
  parameters: {'list_type': 'grocery'},
);
```

## Rollback Strategy

If issues arise post-deployment:

1. **Immediate**: Halt rollout in Play Console
2. **Quick Fix**: Deploy hotfix if simple
3. **Rollback**: Revert to previous version
4. **Communicate**: Post status update and remediation ETA

## Resources

- [Flutter Deployment Docs](https://flutter.dev/docs/deployment)
- [Firebase Hosting Guide](https://firebase.google.com/docs/hosting)
- [Play Console Help](https://support.google.com/googleplay/android-developer)

---

See also: [CI/CD](ci-cd.md) | [Testing](../developer-guide/testing.md)
