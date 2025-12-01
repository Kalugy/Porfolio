# Rain Component

A reusable rain animation component that can be easily added to any section of your portfolio.

## Usage

Simply import and add the `<Rain />` component to any section with `relative` positioning:

```jsx
import Rain from '../components/Rain/Rain';

function MyComponent() {
  return (
    <section className="relative overflow-hidden">
      <Rain />
      {/* Your content here */}
    </section>
  );
}
```

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `intensity` | number | 50 | Number of rain drops (higher = more rain) |
| `speed` | string | 'normal' | Animation speed: 'slow', 'normal', or 'fast' |
| `opacity` | number | 0.6 | Opacity of rain drops (0-1) |

## Examples

### Light Rain
```jsx
<Rain intensity={30} speed="slow" opacity={0.4} />
```

### Normal Rain (Default)
```jsx
<Rain intensity={50} speed="normal" opacity={0.6} />
```

### Heavy Rain
```jsx
<Rain intensity={80} speed="fast" opacity={0.8} />
```

## Notes

- The component automatically adapts to dark mode
- Make sure the parent container has `relative` positioning
- The component uses `pointer-events-none` so it won't interfere with interactions
- Works with any background color or gradient

