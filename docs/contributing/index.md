# Contributing to ShopSync

Thank you for your interest in contributing to ShopSync! We welcome contributions from everyone.

## Ways to Contribute

<div class="grid cards" markdown>

- :material-bug:{ .lg .middle } **Report Bugs**

  ***

  Found a bug? Let us know so we can fix it!

  [:octicons-arrow-right-24: Report Bug](https://github.com/ASDev-Official/ShopSync/issues/new?template=bug_report.md)

- :material-lightbulb:{ .lg .middle } **Suggest Features**

  ***

  Have an idea? Share it with us!

  [:octicons-arrow-right-24: Request Feature](https://github.com/ASDev-Official/ShopSync/issues/new?template=feature_request.md)

- :material-code-braces:{ .lg .middle } **Write Code**

  ***

  Contribute code improvements and new features

  [:octicons-arrow-right-24: Development Setup](development-setup.md)

- :material-translate:{ .lg .middle } **Localization**

  ***

  Help translate ShopSync to your language

  [:octicons-arrow-right-24: Crowdin Project](https://crowdin.com/project/as-shopsync)

- :material-book-edit:{ .lg .middle } **Documentation**

  ***

  Improve or add documentation

  [:octicons-arrow-right-24: Docs Repository](https://github.com/ASDev-Official/shopsync-docs)

- :material-test-tube:{ .lg .middle } **Testing**

  ***

  Help test new features and report issues

  [:octicons-arrow-right-24: Testing Guide](../developer-guide/testing.md)

</div>

## Code of Conduct

By participating in this project, you agree to abide by our [Code of Conduct](code-of-conduct.md).

## Getting Started

### 1. Fork & Clone

```bash
# Fork the repository on GitHub, then:
git clone https://github.com/YOUR_USERNAME/ShopSync.git
cd ShopSync
```

### 2. Set Up Development Environment

See the [Development Setup Guide](development-setup.md) for detailed instructions.

### 3. Create a Branch

```bash
git checkout -b feature/your-feature-name
```

### 4. Make Changes

Follow our coding guidelines and best practices.

### 5. Test Your Changes

```bash
flutter test
flutter analyze
flutter format .
```

### 6. Commit

```bash
git add .
git commit -m "feat: add your feature description"
```

Follow [Conventional Commits](https://www.conventionalcommits.org/) format.

### 7. Push & Create PR

```bash
git push origin feature/your-feature-name
```

Then create a Pull Request on GitHub.

## Coding Guidelines

### Dart/Flutter Style

- Follow the [Dart Style Guide](https://dart.dev/guides/language/effective-dart/style)
- Use `flutter format` before committing
- Run `flutter analyze` and fix all issues
- Keep functions small and focused
- Document public APIs with DartDoc comments

### Naming Conventions

```dart
// Classes: PascalCase
class ShoppingList {}

// Functions/Methods: camelCase
void addItem() {}

// Variables: camelCase
String itemName = '';

// Constants: lowerCamelCase
const maxItems = 100;

// Private: prefix with _
String _privateField = '';
```

### File Organization

```dart
// 1. Imports
import 'package:flutter/material.dart';
import 'package:shopsync/models/item.dart';

// 2. Main widget/class
class ItemList extends StatefulWidget {
  // 3. Constructor
  const ItemList({Key? key}) : super(key: key);

  // 4. Override methods
  @override
  State<ItemList> createState() => _ItemListState();
}

// 5. State class
class _ItemListState extends State<ItemList> {
  // 6. Fields
  final List<Item> _items = [];

  // 7. Lifecycle methods
  @override
  void initState() {
    super.initState();
  }

  // 8. Build method
  @override
  Widget build(BuildContext context) {
    return Container();
  }

  // 9. Other methods
  void _addItem() {}
}
```

## Commit Message Format

Follow [Conventional Commits](https://www.conventionalcommits.org/):

```
<type>(<scope>): <subject>

[optional body]

[optional footer]
```

### Types

- `feat`: New feature
- `fix`: Bug fix
- `docs`: Documentation changes
- `style`: Code style changes (formatting)
- `refactor`: Code refactoring
- `perf`: Performance improvements
- `test`: Adding tests
- `chore`: Build process or tooling changes

### Examples

```
feat(lists): add ability to sort items by category

fix(auth): resolve Google Sign-In crash on Android 13

docs(readme): update installation instructions

refactor(services): extract Firebase logic into repository
```

## Pull Request Guidelines

### Before Submitting

- ✅ Code follows style guidelines
- ✅ All tests pass
- ✅ No analyzer warnings
- ✅ Documentation updated
- ✅ Commit messages follow convention
- ✅ Branch is up to date with `main`

### PR Description Template

```markdown
## Description

Brief description of changes

## Type of Change

- [ ] Bug fix
- [ ] New feature
- [ ] Breaking change
- [ ] Documentation update

## Testing

How has this been tested?

## Screenshots

If applicable

## Checklist

- [ ] Code follows style guidelines
- [ ] Self-review completed
- [ ] Comments added for complex code
- [ ] Documentation updated
- [ ] No new warnings
- [ ] Tests added/updated
- [ ] Tests pass locally
```

## Testing Guidelines

### Unit Tests

Test business logic:

```dart
test('should add item to list', () {
  final list = ShoppingList();
  final item = Item(name: 'Milk');

  list.addItem(item);

  expect(list.items.length, 1);
  expect(list.items.first.name, 'Milk');
});
```

### Widget Tests

Test UI components:

```dart
testWidgets('displays item name', (WidgetTester tester) async {
  final item = Item(name: 'Bread');

  await tester.pumpWidget(
    MaterialApp(home: ItemTile(item: item)),
  );

  expect(find.text('Bread'), findsOneWidget);
});
```

### Integration Tests

Test user flows:

```dart
testWidgets('create and check off item', (WidgetTester tester) async {
  // Test complete user flow
});
```

## Documentation Guidelines

### Code Documentation

````dart
/// Adds an item to the shopping list.
///
/// Throws [ArgumentError] if [item] is null.
/// Returns the updated list.
///
/// Example:
/// ```dart
/// final list = ShoppingList();
/// list.addItem(Item(name: 'Milk'));
/// ```
void addItem(Item item) {
  ArgumentError.checkNotNull(item, 'item');
  _items.add(item);
  notifyListeners();
}
````

### README/Docs

- Clear and concise
- Include examples
- Add screenshots/GIFs for UI changes
- Keep updated with code changes

## Localization

### Adding Translations

1. Go to [Crowdin Project](https://crowdin.com/project/as-shopsync)
2. Select your language
3. Translate strings
4. Submit for review

### Adding New Strings

Update `lib/l10n/app_en.arb`:

```json
{
  "newStringKey": "English text",
  "@newStringKey": {
    "description": "Description of where this is used"
  }
}
```

## Release Process

1. Update version in `pubspec.yaml`
2. Update `CHANGELOG.md`
3. Create release branch
4. Test thoroughly
5. Create GitHub release
6. Deploy to stores

## Community

### Communication Channels

- **GitHub Issues**: Bug reports and feature requests
- **GitHub Discussions**: Questions and community chat
- **Crowdin**: Localization discussions

### Getting Help

- Check [Documentation](../index.md)
- Search [existing issues](https://github.com/ASDev-Official/ShopSync/issues)
- Ask in [Discussions](https://github.com/ASDev-Official/ShopSync/discussions)
- Read [FAQ](../faq/index.md)

## Recognition

Contributors are recognized:

- In release notes
- In `CONTRIBUTORS.md`
- On the project README
- GitHub contributor badge

## License

By contributing, you agree that your contributions will be licensed under the MIT License.

---

Thank you for contributing to ShopSync! 🎉
