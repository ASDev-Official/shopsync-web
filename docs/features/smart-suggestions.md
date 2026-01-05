# Smart Suggestions

ShopSync uses machine learning to provide intelligent suggestions as you type, making item entry faster and more accurate.

## Overview

Smart Suggestions leverage TensorFlow Lite to predict:

- Item names
- Appropriate icons
- Categories
- Common quantities

## How It Works

### On-Device ML

ShopSync uses an on-device ML model:

- **Privacy-focused** - No data sent to servers
- **Fast** - Predictions in real-time
- **Offline-capable** - Works without internet

### Model Architecture

The suggestion system uses:

- **TensorFlow Lite** - Optimized for mobile
- **NLP Model** - Natural language processing
- **Icon Classifier** - Visual recognition
- **Category Predictor** - Context-aware categorization

### Training Data

Model trained on:

- Common grocery items
- Shopping list patterns
- Item-category relationships
- Icon-name associations

## Item Name Suggestions

### Auto-complete

As you type, see suggestions:

1. Start typing (e.g., "milk")
2. See suggestions: "Milk", "Milkshake", "Milk chocolate"
3. Tap to select or keep typing

### Context-Aware

Suggestions consider:

- Your purchase history
- Current list category
- Time of year (seasonal items)
- Common pairings

### Learning From You

The model improves with use:

- Frequently used items appear first
- Custom item names remembered
- Store-specific preferences learned

## Icon Suggestions

### Automatic Icon Assignment

ShopSync suggests appropriate icons:

- **Food items** - Relevant food icons from library
- **Household** - Cleaning, personal care icons
- **Custom** - Best guess for unusual items

### Icon Library

Over 500 icons across categories:

- 🥬 Produce (fruits, vegetables)
- 🥛 Dairy products
- 🥩 Meat & seafood
- 🍞 Bakery items
- 🥫 Pantry staples
- 🧼 Household items
- And more...

### Custom Icons

Don't like the suggestion?

- Tap the icon to browse all options
- Search for specific icons
- Categories organized for easy finding

## Category Prediction

### Smart Categorization

Items automatically categorized:

- "Apples" → Produce
- "Cheddar cheese" → Dairy
- "Ground beef" → Meat
- "Paper towels" → Household

### Confidence Scores

High-confidence predictions auto-assigned. Low confidence suggestions shown for confirmation.

### Override Options

Don't agree with the category?

- Tap to change
- Choose from category list
- Your choice remembered for future

## Quantity Suggestions

### Common Quantities

Suggested based on item type:

- **Milk** - "1 gallon", "Half gallon", "Quart"
- **Eggs** - "1 dozen", "18 count"
- **Apples** - "5 lbs", "1 bag"

### Smart Defaults

Previous quantities for the same item:

- If you usually buy "2 lbs" of apples
- That becomes the default suggestion

## Enabling/Disabling

### Toggle Smart Suggestions

In **Settings** → **Lists & Items**:

- **Smart Suggestions** - Main toggle
- **Auto-Categorize** - Category predictions
- **Icon Suggestions** - Automatic icon assignment
- **Quantity Presets** - Quantity suggestions

## Performance

### Resource Usage

Minimal impact on device:

- **Model size** - ~5 MB
- **RAM usage** - ~20 MB during predictions
- **Battery** - Negligible impact
- **CPU** - Runs on background thread

### Prediction Speed

- **Typing latency** - <50ms
- **Icon lookup** - <100ms
- **Category prediction** - <100ms

## Privacy & Data

### On-Device Processing

All predictions happen locally:

- ✅ No data sent to servers
- ✅ Your items stay private
- ✅ Works offline
- ✅ GDPR compliant

### Data Collection

ShopSync does NOT:

- ❌ Upload your shopping lists
- ❌ Track individual items
- ❌ Sell your data
- ❌ Use your data for ads

### Model Updates

Models updated periodically:

- Downloaded with app updates
- Optional manual model download
- Backwards compatible

## Future Enhancements

Upcoming ML features:

### Price Predictions

Estimate costs based on typical prices.

### Shopping Patterns

Learn your shopping habits:

- "You usually buy milk on Sundays"
- "Time to restock toilet paper"

### Recipe Integration

Add recipe ingredients automatically.

### Store Layout Learning

Optimize list order for your favorite store.

## Troubleshooting

### Suggestions Not Appearing

1. **Check if enabled** - Settings → Smart Suggestions
2. **Update model** - Settings → Advanced → Update ML Model
3. **Clear cache** - May need to relearn patterns
4. **Reinstall app** - Last resort

### Poor Suggestions

1. **Use items more** - Model improves with usage
2. **Manually categorize** - Teaches the model
3. **Provide feedback** - Report suggestion issues

### High Battery Usage

If smart suggestions use too much battery:

1. Check background refresh is disabled
2. Update to latest app version
3. Disable if not needed

## Technical Details

### Model Specifications

- **Framework** - TensorFlow Lite
- **Input** - Text string (item name)
- **Output** - Top 5 predictions with confidence scores
- **Latency** - <100ms on modern devices
- **Model size** - 4.8 MB

### Implementation

Key components:

- `SmartSuggestionsService` - Manages ML model
- `FoodIconDetector` - Icon prediction
- `ItemCategoriesService` - Category assignment

See [Services Documentation](../developer-guide/services.md) for technical details.

## Best Practices

!!! tip "Getting Best Results" - **Use consistently** - Model learns your habits - **Accept good suggestions** - Reinforces model - **Correct bad ones** - Improves accuracy - **Use standard names** - "Milk" vs. "Moo juice"

## Next Steps

- [Working with Items](../user-guide/working-with-items.md)
- [Categories](../user-guide/categories.md)
- [Services Guide](../developer-guide/services.md)
