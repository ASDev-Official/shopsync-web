# Project Structure

Understanding ShopSync's file organization and architecture.

## Directory Overview

```
ShopSync/
├── android/                # Android-specific code
├── ios/                    # iOS-specific code (planned)
├── web/                    # Web-specific code
├── lib/                    # Main Dart code
│   ├── models/            # Data models
│   ├── providers/         # State management
│   ├── screens/           # UI screens
│   ├── services/          # Business logic
│   ├── utils/             # Helper functions
│   └── widgets/           # Reusable widgets
├── assets/                 # Images, fonts, etc.
├── test/                   # Unit & widget tests
└── functions/              # Firebase Cloud Functions

```

## Core Directories

### `/lib/models/`

Data models and entities:

```
models/
├── shopping_list.dart      # List model
├── shopping_item.dart      # Item model
├── user_model.dart         # User data
├── category.dart           # Category model
└── list_share.dart         # Sharing model
```

**Key Models:**

- `ShoppingList`: List entity with metadata
- `ShoppingItem`: Individual list items
- `UserModel`: User profile and settings
- `Category`: Item categorization

### `/lib/providers/`

State management with Provider pattern:

```
providers/
├── auth_provider.dart      # Authentication state
├── lists_provider.dart     # Lists management
├── items_provider.dart     # Items CRUD
├── theme_provider.dart     # App theming
└── sync_provider.dart      # Offline sync
```

**Responsibilities:**

- Manage application state
- Provide data to widgets
- Handle business logic
- Coordinate with services

### `/lib/screens/`

UI screens and pages:

```
screens/
├── auth/
│   ├── login_screen.dart
│   ├── signup_screen.dart
│   └── forgot_password_screen.dart
├── home/
│   ├── home_screen.dart
│   └── lists_overview.dart
├── list/
│   ├── list_detail_screen.dart
│   └── item_editor_screen.dart
└── settings/
    ├── settings_screen.dart
    └── profile_screen.dart
```

### `/lib/services/`

Business logic and external integrations:

```
services/
├── firebase_service.dart   # Firebase operations
├── auth_service.dart       # Authentication
├── database_service.dart   # Firestore CRUD
├── storage_service.dart    # Local storage
├── sync_service.dart       # Offline sync
└── ml_service.dart         # TensorFlow Lite
```

### `/lib/widgets/`

Reusable UI components:

```
widgets/
├── common/
│   ├── custom_button.dart
│   ├── loading_indicator.dart
│   └── error_dialog.dart
├── list/
│   ├── list_card.dart
│   ├── list_tile.dart
│   └── list_grid_item.dart
└── item/
    ├── item_tile.dart
    ├── item_card.dart
    └── item_editor.dart
```

### `/lib/utils/`

Helper functions and utilities:

```
utils/
├── constants.dart          # App constants
├── validators.dart         # Input validation
├── formatters.dart         # Data formatting
├── extensions.dart         # Dart extensions
└── helpers.dart            # Helper functions
```

## Configuration Files

### `pubspec.yaml`

Dependencies and app metadata:

```yaml
name: shopsync
description: Smart shopping list app
version: 4.1.0

dependencies:
  flutter:
    sdk: flutter
  firebase_core: ^2.24.0
  cloud_firestore: ^4.13.5
  provider: ^6.1.1
  # ... more dependencies
```

### `firebase.json`

Firebase configuration:

```json
{
  "hosting": {
    "public": "build/web",
    "ignore": ["firebase.json"],
    "rewrites": [
      {
        "source": "**",
        "destination": "/index.html"
      }
    ]
  }
}
```

## Platform-Specific Code

### Android

```
android/
├── app/
│   ├── src/main/
│   │   ├── AndroidManifest.xml
│   │   ├── kotlin/
│   │   └── res/
│   └── build.gradle
└── build.gradle
```

### Web

```
web/
├── index.html              # Entry point
├── manifest.json           # PWA manifest
├── firebase-init.js        # Firebase setup
└── icons/                  # App icons
```

## Asset Organization

```
assets/
├── images/
│   ├── logo.png
│   ├── splash.png
│   └── icons/
├── fonts/
│   └── Roboto/
└── ml_models/
    └── suggestions_model.tflite
```

## Testing Structure

```
test/
├── models/
│   └── shopping_list_test.dart
├── services/
│   └── firebase_service_test.dart
├── providers/
│   └── lists_provider_test.dart
└── widgets/
    └── list_card_test.dart
```

## Cloud Functions

```
functions/
├── src/
│   ├── index.ts
│   ├── triggers/
│   │   ├── onListCreate.ts
│   │   └── onItemAdd.ts
│   └── api/
│       └── exportList.ts
├── package.json
└── tsconfig.json
```

## Build Outputs

```
build/
├── app/                    # Android build
├── ios/                    # iOS build (planned)
└── web/                    # Web build
```

## Key Files

### `main.dart`

Application entry point:

```dart
void main() async {
  WidgetsFlutterBinding.ensureInitialized();
  await Firebase.initializeApp();
  runApp(MyApp());
}
```

### `app.dart`

Main app widget:

```dart
class MyApp extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return MultiProvider(
      providers: [...],
      child: MaterialApp(...)
    );
  }
}
```

## Code Organization Principles

### Separation of Concerns

- **Models**: Data structures only
- **Providers**: State management
- **Services**: External integrations
- **Widgets**: UI components
- **Screens**: Page composition

### Naming Conventions

**Files:**

- `snake_case.dart` for all files
- Descriptive names
- Clear purpose

**Classes:**

- `PascalCase` for classes
- `Provider` suffix for providers
- `Service` suffix for services
- `Screen` suffix for screens

**Variables:**

- `camelCase` for variables
- `kConstantName` for constants
- `_private` for private members

## Dependencies

### Core Dependencies

```yaml
firebase_core: ^2.24.0 # Firebase SDK
cloud_firestore: ^4.13.5 # Database
firebase_auth: ^4.15.2 # Authentication
provider: ^6.1.1 # State management
```

### UI Dependencies

```yaml
flutter_svg: ^2.0.9 # SVG images
cached_network_image: ^3.3.0 # Image caching
shimmer: ^3.0.0 # Loading effects
```

### Development Dependencies

```yaml
flutter_test:
  sdk: flutter
mockito: ^5.4.4 # Mocking
build_runner: ^2.4.7 # Code generation
```

---

See also: [Architecture](architecture.md) | [State Management](state-management.md)
