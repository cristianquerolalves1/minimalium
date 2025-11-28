# Minimalium – Minimalist Modern CSS Framework

**Minimalium** is a lightweight, futuristic CSS framework for building clean, responsive, and modern interfaces. It provides prebuilt components and utility tokens for fast development. Supports **dark mode** and fully customizable via CSS variables.

---
## Installation

### Via CDN

Add this line into your project’s `<head>`:

```html
<link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/cristianquerolalves1/minimalium@latest/dist/style.css">
```

### Local Installation

1. Clone or download the repository:

```bash
git clone https://github.com/cristianquerolalves1/minimalium.git
```

2. Navigate into the project folder:

```bash
cd minimalium
```

3. Build the project using Node:

```bash
node build.js
```

4. Include the generated CSS in your project:

```html
<link rel="stylesheet" href="./dist/style.css">
```

Include Google Fonts (Inter recommended):

```html
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&display=swap" rel="stylesheet">
```

---

## Components

### Button

Minimalium provides a versatile button system with multiple states and styles:

```html
<button class="button button-primary">Primary</button>
<button class="button button-outline">Outline</button>
<button class="button button-secondary">Secondary</button>
<button class="button button-success">Success</button>
<button class="button button-warning">Warning</button>
<button class="button button-danger">Danger</button>
<button class="button button-glass">Glass</button>
<button class="button button-neu">Neumorphism</button>
```

**Description of classes:**

- `.button`: Base button with flex layout, padding, border-radius, and shadow.
- `.button-primary`: Solid primary color button.
- `.button-outline`: Transparent button with border.
- `.button-secondary`: Gray button.
- `.button-success`: Green success button.
- `.button-warning`: Yellow warning button.
- `.button-danger`: Red danger button.
- `.button-glass`: Glassmorphism effect with blur.
- `.button-neu`: Neumorphism style.
- `.button-xs → .button-xl`: Sizes.
- `.button-block`: Full width.
- `.button-group`: Grouped buttons.

---

### Input

Flexible input fields with status states and icons:

```html
<div class="input-card">
  <input class="input input-md input-icon input-icon-left" data-icon="🔍" placeholder="Normal">
  <input class="input input-md input-success" placeholder="Success">
  <input class="input input-md input-warning" placeholder="Warning">
  <input class="input input-md input-error" placeholder="Error">
</div>
```

**Classes:**

- `.input-card`: Wrapper card for inputs.
- `.input`: Base input style.
- `.input-sm → .input-lg`: Sizes.
- `.input-rounded`: Fully rounded.
- `.input-success`, `.input-warning`, `.input-error`: Status styles.
- `.input-icon`, `.input-icon-left`, `.input-icon-right`: Icon support.
- `:disabled`: Disabled state.

---

### Alert

Informative messages with colored variants:

```html
<div class="alert alert-success">Success</div>
<div class="alert alert-warning">Warning</div>
<div class="alert alert-danger">Error</div>
```

**Classes:**

- `.alert`: Base alert container.
- `.alert-primary`, `.alert-success`, `.alert-warning`, `.alert-danger`, `.alert-info`: Variants.
- `.alert-dismissible`: Add close button support.
- `.alert-sm → .alert-lg`: Sizes.
- `.alert > .icon`: Optional icon.

---

### Avatar

Circular profile pictures with status and badges:

```html
<div class="avatar avatar-lg">
  <img src="profile.jpg" alt="Profile">
  <span class="avatar-status avatar-status-online"></span>
</div>
```

**Classes:**

- `.avatar`: Base container.
- `.avatar-xs → .avatar-xl`: Sizes.
- `.avatar-status`: Status indicator.
- `.avatar-status-online`: Online state.
- `.avatar-badge`: Notification badge (1–99).

---

### Calendar

Minimalist calendar component:

```html
<div class="calendar">
  <div class="calendar-header">
    <button></button>
    <h2>November 2025</h2>
    <button></button>
  </div>
  <div class="calendar-weekdays">Sun, Mon, Tue...</div>
  <div class="calendar-days">1, 2, 3...</div>
</div>
```

**Classes:**

- `.calendar`: Main calendar container.
- `.calendar-header`: Header with month navigation.
- `.calendar-weekdays`: Weekday names.
- `.calendar-days`: Day numbers.

---

### Skeleton Loader

Loading placeholders to improve perceived performance:

```html
<div class="skeleton skeleton-avatar"></div>
<div class="skeleton skeleton-sm"></div>
<div class="skeleton skeleton-md"></div>
<div class="skeleton skeleton-lg"></div>
<div class="skeleton skeleton-card"></div>
```

**Classes:**

- `.skeleton`: Base loader animation.
- `.skeleton-sm → .skeleton-lg`: Size variants.
- `.skeleton-avatar`: Circle placeholder for avatars.
- `.skeleton-card`: Rectangle placeholder for cards.

---

### Table

Responsive tables with striped rows and borders:

```html
<table class="table">
  <thead>
    <tr><th>Header 1</th><th>Header 2</th></tr>
  </thead>
  <tbody>
    <tr><td>Item 1</td><td>Item 2</td></tr>
  </tbody>
</table>
```

**Classes:**

- `.table`: Base table.
- `.table-striped`: Zebra stripes.
- `.table-bordered`: Borders on cells.
- Responsive by default.

---

### Tokens

Easily customize the framework using design tokens:

```css
:root {
  --color-primary: #4f46e5;
  --color-success: #10b981;
  --color-warning: #f59e0b;
  --color-danger: #ef4444;
  --color-text-default: #1f2937;
  --color-text-inverse: #ffffff;
  --color-bg-card: #ffffff;
  --glass-light-rgb: 255,255,255;
  --radius-md: 0.5rem;
  --radius-lg: 0.75rem;
  --shadow-sm: 0 4px 15px rgba(0,0,0,0.1);
  --shadow-md: 0 6px 20px rgba(0,0,0,0.15);
}
```

- Colors, shadows, and radii can be updated to customize the theme.
- Supports light and dark mode adjustments.

---

### Dark Mode

Add `.dark` to the `<body>` or a container to switch all components automatically:

```html
<body class="dark">
```

- Glass and shadows adapt for readability.
- Text colors invert for contrast.
- Buttons, inputs, alerts, and cards adjust automatically.

---

## Usage Tips

- Combine components freely to build clean UIs.
- Use size modifiers for responsive design.
- Group buttons or input fields using `.button-group` or `.input-card`.
- Mix tokens for custom themes or brand colors.

---

## Build

Use PostCSS to build the CSS from source:

```bash
npm install
npm run build
```

- `src/components/`: Individual component CSS files.
- `src/tokens/`: Design tokens for theme customization.
- `dist/`: Compiled CSS ready for production.
- `docs/`: Example usage and preview.

---

## License

MIT License – free for personal and commercial use.

---

**Minimalium (v1)** is designed for developers who value **clarity, simplicity, and modern design**.
