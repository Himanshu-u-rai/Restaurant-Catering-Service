# 🍽️ Chai & Spice - Restaurant & Catering Service

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![HTML5](https://img.shields.io/badge/HTML5-E34F26?logo=html5&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/HTML)
[![CSS3](https://img.shields.io/badge/CSS3-1572B6?logo=css3&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/CSS)
[![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?logo=javascript&logoColor=black)](https://developer.mozilla.org/en-US/docs/Web/JavaScript)

A modern, responsive website for Chai & Spice restaurant featuring an immersive design, seamless menu carousel, and mobile-optimized experience. Built with vanilla HTML, CSS, and JavaScript.

## ✨ Features

### 🎨 Modern Design
- **Floating Navigation**: Clean, accessible navigation with mobile hamburger menu
- **Immersive Hero Section**: Video background with elegant overlay content
- **Image-Only Menu Cards**: Beautiful full-image cards with gradient overlays
- **Glass Morphism Effects**: Modern UI elements with backdrop blur
- **Smooth Animations**: Intersection Observer-based scroll animations

### 📱 Mobile Optimization
- **Responsive Design**: Fluid typography and adaptive layouts
- **Touch-Friendly**: Optimized tap targets and gesture support
- **Compact Mode**: Reduced vertical spacing for mobile screens
- **Show More/Less**: Progressive disclosure for menu items
- **Horizontal Scroll**: Touch-enabled filter navigation

### 🎯 Interactive Elements
- **Seamless Carousel**: Auto-scrolling menu with infinite loop
- **Category Filtering**: Dynamic menu filtering by beverage types, snacks, etc.
- **Hover Effects**: Subtle animations and state changes
- **Focus Management**: Keyboard navigation and accessibility

### 🚀 Performance
- **Vanilla JavaScript**: No framework dependencies
- **Optimized Images**: Efficient placeholder system
- **Lazy Loading**: Intersection Observer for performance
- **Reduced Motion**: Respects user accessibility preferences

## 🏗️ Project Structure

```
Restaurant-Catering-Service/
├── index.html          # Main HTML structure
├── styles.css          # Complete CSS styling with responsive design
├── script.js           # JavaScript functionality
└── README.md           # Project documentation
```

## 🛠️ Technology Stack

- **HTML5**: Semantic markup with accessibility features
- **CSS3**: 
  - CSS Grid & Flexbox layouts
  - CSS Custom Properties (variables)
  - Advanced animations and transitions
  - Responsive media queries
  - Modern CSS features (backdrop-filter, clamp, etc.)
- **JavaScript ES6+**:
  - Modular function organization
  - Intersection Observer API
  - Event delegation
  - Smooth scrolling
  - Dynamic DOM manipulation

## 🎯 Key Components

### Navigation System
- Floating navigation bar with brand identity
- Mobile-responsive hamburger menu
- Focus trap for accessibility
- Smooth scroll to sections
- Active link highlighting

### Menu System
- **Carousel Mode**: Auto-scrolling horizontal layout for "All" filter
- **Grid Mode**: Standard responsive grid for specific categories
- **Categories**: Hot Beverages, Cold Beverages, Snacks, Light Eats, Desserts
- **Image-Only Cards**: Full-image display with title and tag overlays
- **Mobile Optimization**: Show More/Less functionality for reduced screen space

### Interactive Features
- Intersection Observer animations
- Smooth reveal effects
- Hover state management
- Mobile menu with overlay
- WhatsApp integration
- Google Maps integration

## 🚀 Getting Started

### Prerequisites
- Modern web browser (Chrome, Firefox, Safari, Edge)
- Local web server (optional, for development)

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/Himanshu-u-rai/Restaurant-Catering-Service.git
   cd Restaurant-Catering-Service
   ```

2. **Open in browser**
   ```bash
   # Option 1: Direct file opening
   open index.html
   
   # Option 2: Local server (recommended)
   python -m http.server 8000
   # Then visit http://localhost:8000
   
   # Option 3: Using Node.js
   npx serve .
   ```

### Development

For development with live reload:

```bash
# Using Python
python -m http.server 8000

# Using Node.js serve
npm install -g serve
serve -s . -l 8000

# Using VS Code Live Server extension (recommended)
# Install "Live Server" extension and right-click index.html
```

## 📱 Browser Support

- ✅ Chrome 88+
- ✅ Firefox 85+
- ✅ Safari 14+
- ✅ Edge 88+
- ✅ Mobile browsers (iOS Safari, Chrome Mobile)

## 🎨 Customization

### Colors & Branding
Update CSS custom properties in `styles.css`:
```css
:root {
  --primary-color: #8b4513;
  --accent-color: #ff6b35;
  --text-dark: #2c1810;
  /* ... */
}
```

### Menu Content
Modify menu items in `index.html`:
```html
<div class="menu-item-modern image-only uiverse" data-category="your-category">
  <div class="item-image">
    <img src="your-image.jpg" alt="Item Name" />
    <div class="item-overlay">
      <h3>Item Name</h3>
      <div class="item-meta">
        <span class="meta-tag">Tag</span>
      </div>
    </div>
  </div>
</div>
```

### Responsive Breakpoints
```css
/* Mobile First Approach */
@media (max-width: 640px) { /* Mobile */ }
@media (max-width: 420px) { /* Small Mobile */ }
@media (min-width: 768px) { /* Tablet */ }
@media (min-width: 1024px) { /* Desktop */ }
```

## 🔧 Configuration

### Carousel Settings
Adjust auto-scroll speed in `script.js`:
```javascript
// In startAutoScroll function
grid.scrollLeft += direction * 1.2; // Adjust speed here
```

### Mobile Collapse
Change item limit in `styles.css`:
```css
body.mobile-collapsed .menu-grid-modern:not(.carousel-active) 
.menu-item-modern:nth-of-type(n+7) { /* Change 7 to desired limit */ }
```

## 🚀 Deployment

### GitHub Pages
1. Push to GitHub repository
2. Go to Settings > Pages
3. Select source branch (main)
4. Your site will be available at `https://username.github.io/repository-name`

### Netlify
1. Connect your GitHub repository
2. Set build command: (none needed for static site)
3. Set publish directory: `/`
4. Deploy automatically on push

### Vercel
```bash
npm i -g vercel
vercel --prod
```

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- [Font Awesome](https://fontawesome.com/) for icons
- [Google Fonts](https://fonts.google.com/) for typography
- [Picsum Photos](https://picsum.photos/) for placeholder images
- [Uiverse.io](https://uiverse.io/) for design inspiration

## 📞 Contact

**Himanshu Rai**
- GitHub: [@Himanshu-u-rai](https://github.com/Himanshu-u-rai)
- Project Link: [https://github.com/Himanshu-u-rai/Restaurant-Catering-Service](https://github.com/Himanshu-u-rai/Restaurant-Catering-Service)

---

⭐ Star this repository if you found it helpful!
