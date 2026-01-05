# Developer Guide

Welcome to the ShopSync Developer Guide! This section provides comprehensive technical documentation for developers who want to contribute to or understand the ShopSync codebase.

## Overview

ShopSync is built with:

- **Flutter** - Cross-platform UI framework
- **Firebase** - Backend services (Auth, Firestore)
- **Provider** - State management
- **Material Design 3** - UI components

## Quick Links

<div class="grid cards" markdown>

- :material-floor-plan:{ .lg .middle } **Architecture**

  ***

  Understand the app's structure and design patterns

  [:octicons-arrow-right-24: Architecture Guide](architecture.md)

- :material-file-tree:{ .lg .middle } **Project Structure**

  ***

  Navigate the codebase organization

  [:octicons-arrow-right-24: Project Structure](project-structure.md)

- :material-state-machine:{ .lg .middle } **State Management**

  ***

  Learn how ShopSync manages app state

  [:octicons-arrow-right-24: State Management](state-management.md)

- :material-firebase:{ .lg .middle } **Firebase Integration**

  ***

  Deep dive into Firebase services

  [:octicons-arrow-right-24: Firebase Guide](firebase.md)

- :material-cog:{ .lg .middle } **Services**

  ***

  Core services and utilities

  [:octicons-arrow-right-24: Services](services.md)

- :material-television:{ .lg .middle } **Screens**

  ***

  UI screens and navigation

  [:octicons-arrow-right-24: Screens](screens.md)

- :material-widgets:{ .lg .middle } **Widgets**

  ***

  Reusable UI components

  [:octicons-arrow-right-24: Widgets](widgets.md)

- :material-test-tube:{ .lg .middle } **Testing**

  ***

  Testing strategies and guidelines

  [:octicons-arrow-right-24: Testing](testing.md)

</div>

## Getting Started

### Prerequisites

- Flutter SDK (^3.6.0)
- Dart SDK (^3.0.0)
- Firebase project configured
- IDE (Android Studio or VS Code)

### Setup

1. Clone the repository
2. Run `flutter pub get`
3. Configure Firebase
4. Run `flutter run`

See [Installation Guide](../getting-started/installation.md) for detailed steps.

## Architecture Overview

ShopSync follows clean architecture principles:

```
lib/
├── main.dart              # App entry point
├── screens/               # UI screens
├── widgets/              # Reusable widgets
├── services/             # Business logic
├── models/               # Data models
├── utils/                # Utilities
└── l10n/                 # Localizations
```

## Key Concepts

### Offline-First

ShopSync is designed to work offline:

- Local data persistence
- Sync queue management
- Conflict resolution
- Background synchronization

### Real-time Collaboration

Multiple users can edit simultaneously:

- Firestore real-time listeners
- Optimistic UI updates
- Automatic conflict resolution

### State Management

Provider pattern for state:

- `ChangeNotifier` for reactive state
- `Consumer` widgets for UI updates
- Scoped providers for feature isolation

## Development Workflow

### Branch Strategy

- `main` - Production-ready code
- `develop` - Integration branch
- `feature/*` - New features
- `bugfix/*` - Bug fixes
- `release/*` - Release preparation

### Code Style

Follow Dart/Flutter style guidelines:

- Use `flutter format`
- Follow naming conventions
- Document public APIs
- Write meaningful commit messages

### Testing

Write tests for:

- Unit tests for services
- Widget tests for UI components
- Integration tests for user flows

### CI/CD

Automated pipelines:

- Linting and formatting checks
- Unit and widget tests
- Build verification
- Deployment to stores

## Contributing

We welcome contributions! See:

- [Contributing Guidelines](../contributing/index.md)
- [Development Setup](../contributing/development-setup.md)
- [Pull Request Process](../contributing/pull-requests.md)

## API Reference

### Core Services

- **`SharedPrefs`** - Local storage wrapper
- **`GoogleAuth`** - Authentication service
- **`ConnectivityService`** - Network status
- **`MigrationService`** - Data migration
- **`ThemeNotifier`** - Theme management

See [Services Documentation](services.md) for details.

### Firebase Services

- **Firebase Auth** - User authentication
- **Cloud Firestore** - Real-time database
- **Firebase Storage** - File storage (future)
- **Cloud Functions** - Server-side logic (future)

## Resources

- [Flutter Documentation](https://flutter.dev/docs)
- [Firebase Documentation](https://firebase.google.com/docs)
- [Material Design 3](https://m3.material.io)
- [Dart Language Tour](https://dart.dev/guides/language/language-tour)

## Common Tasks

### Adding a New Screen

1. Create file in `lib/screens/`
2. Define StatefulWidget
3. Add route in `main.dart`
4. Implement UI
5. Add navigation

### Adding a New Service

1. Create file in `lib/services/`
2. Define service class
3. Implement methods
4. Add to providers (if stateful)
5. Document API

### Adding Dependencies

1. Add to `pubspec.yaml`
2. Run `flutter pub get`
3. Import where needed
4. Update documentation

## Debugging

### Common Issues

**Build Failures:**

- Run `flutter clean`
- Delete `pubspec.lock`
- Run `flutter pub get`

**Firebase Issues:**

- Verify configuration files
- Check security rules
- Review console logs

**State Issues:**

- Check provider scope
- Verify notifyListeners() calls
- Use Flutter DevTools

## Next Steps

Ready to dive deeper?

- [Architecture Details](architecture.md)
- [Project Structure](project-structure.md)
- [Firebase Integration](firebase.md)
- [Contributing Guide](../contributing/index.md)

---

Questions? Open an issue on [GitHub](https://github.com/ASDev-Official/ShopSync/issues).
