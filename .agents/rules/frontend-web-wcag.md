---
trigger: always_on
---

# Frontend Web WCAG Rules - Vanilla HTML/CSS/JavaScript

## Language & Communication

- **Code**: Variable names, functions, classes, files in **English**
- **Comments**: ALL code comments in **Spanish**
- **Technical discussions**: Spanish allowed (PRs, reviews)
- **Commits**: English (conventional commits)
- **Documentation**: English (README, guides)

## ACCESSIBILITY (WCAG 2.1/2.2 - PRIORITY 1)

### Semantic HTML (CRITICAL)

- ALWAYS use semantic elements: `<nav>`, `<main>`, `<article>`, `<aside>`, `<header>`, `<footer>`, `<section>`
- NEVER use `<div>` when semantic alternatives exist
- ONE `<h1>` per page, never skip heading levels
- Proper heading hierarchy: h1 → h2 → h3 (no skipping)

### ARIA Implementation

- Use ARIA only when native HTML insufficient
- Include `aria-label` for interactive elements without visible text
- Use `aria-live` regions for dynamic updates
- Implement `aria-invalid` and `aria-describedby` for form errors
- Add `aria-hidden="true"` for decorative icons

### Keyboard Navigation (CRITICAL)

- ALL interactive elements keyboard accessible
- Support: Tab, Enter, Space, Arrow keys, Escape
- Visible focus indicators (min 2px outline, 3:1 contrast)
- Implement skip links for main content
- Focus trap in modals/dialogs
- Custom elements need `tabindex="0"` and key handlers

### Color & Contrast (CRITICAL)

- Normal text: 4.5:1 minimum contrast
- Large text (18pt+/14pt+ bold): 3:1 minimum
- UI components: 3:1 minimum contrast
- NEVER rely on color alone for information
- Support `prefers-reduced-motion` for animations

### Forms & Labels (CRITICAL)

- Explicit label association with `for` attribute
- Use `<fieldset>` and `<legend>` for grouped inputs
- Required fields with `required` and `aria-required="true"`
- Error messages with `aria-describedby` and `role="alert"`
- Proper input types and autocomplete attributes

### Images & Alt Text

- Informative images: descriptive alt text
- Decorative images: empty alt (`alt=""`)
- Functional images: describe function
- Complex images: use `aria-describedby` for details
- Icons with text: `aria-hidden="true"` on icon
- Icons without text: `aria-label` on button

### Screen Reader Optimization

- Use `aria-live="polite"` for non-urgent updates
- Use `aria-live="assertive"` for urgent alerts
- Screen reader only content with `.sr-only` class
- Announce dynamic changes properly

### Touch & Mobile

- Minimum touch target: 44x44px (WCAG 2.2)
- Adequate spacing between interactive elements
- NEVER block pinch-to-zoom (no `maximum-scale=1`)

## SECURITY

### XSS Prevention

- NEVER use `innerHTML` with user input
- ALWAYS use `textContent` for user content
- If HTML needed, sanitize with DOMPurify
- NEVER use `eval()` or `new Function()`
- No inline event handlers (`onclick=`)
- Always use `addEventListener`

### Input Validation

- Validate ALL user inputs client AND server
- Sanitize before rendering
- Use proper Content Security Policy (CSP)
- Escape special characters

### Authentication

- Store tokens in httpOnly cookies (server-side)
- NEVER in localStorage or sessionStorage
- Implement token refresh mechanisms
- Validate permissions server-side

### Data Protection

- NEVER log sensitive data (passwords, tokens, PII)
- Mask sensitive inputs
- Clear sensitive data after use
- Use HTTPS only in production

## PERFORMANCE

### Core Web Vitals Targets

- LCP (Largest Contentful Paint): < 2.5s
- FID (First Input Delay): < 100ms
- CLS (Cumulative Layout Shift): < 0.1
- FCP (First Contentful Paint): < 1.8s

### Image Optimization

- Use WebP/AVIF with fallbacks
- Implement `loading="lazy"` for offscreen images
- Use responsive images with `srcset` and `sizes`
- ALWAYS specify width and height to prevent CLS
- Use Intersection Observer for custom lazy loading

### JavaScript Performance

- Debounce expensive operations (search, validation)
- Throttle scroll/resize handlers
- Avoid layout thrashing (batch DOM reads/writes)
- Use DocumentFragment for bulk DOM manipulation
- Event delegation over multiple listeners
- Use `requestAnimationFrame` for animations

### CSS Performance

- Use efficient selectors (avoid universal, deep nesting)
- GPU-accelerated properties: `transform`, `opacity`
- Inline critical CSS
- Use `will-change` sparingly
- Mobile-first responsive design

### Network Optimization

- Preconnect to required origins
- Prefetch next pages
- Preload critical resources
- Implement service workers for offline support
- Enable compression (gzip/brotli)

### Memory Management

- Remove event listeners when not needed
- Clear timers and intervals
- Avoid circular references and closures with large data

## CODE QUALITY

### HTML Best Practices

- Valid HTML (W3C validator)
- Lowercase for elements and attributes
- Quote all attribute values
- No duplicate IDs
- Semantic structure always

### JavaScript Best Practices

- Use `const` and `let`, NEVER `var`
- ES6+ features: arrow functions, destructuring, spread, template literals
- Async/await over callbacks
- Pure functions (no mutations)
- Array methods: filter, map, reduce, find
- Modular code with ES6 modules
- Comprehensive error handling with try/catch

### CSS Best Practices

- CSS custom properties for theming
- BEM naming convention
- Mobile-first responsive design
- Breakpoints: 320px, 768px, 1024px, 1440px
- Modern features: Grid, Flexbox, clamp(), aspect-ratio

## API INTEGRATION

### Fetch API

- Always use try/catch with async/await
- Check response.ok before parsing
- Implement proper error handling
- Use AbortController for timeouts
- Retry logic with exponential backoff

### Loading States

- Show loading indicators
- Implement skeleton screens
- Handle offline scenarios
- Cancel pending requests on unmount

### Caching

- Implement simple cache with Map
- Set appropriate TTL (time to live)
- Invalidate cache on mutations

## BROWSER COMPATIBILITY

### Target Browsers

- Chrome/Edge, Firefox, Safari (last 2 versions)
- iOS Safari, Android Chrome (last 2 versions)

### Feature Detection

- Use `if ('IntersectionObserver' in window)`
- CSS `@supports` for modern features
- Provide fallbacks for older browsers

### Progressive Enhancement

- Core functionality works without JavaScript
- Enhance with JS when available
- Forms submit without JS (then enhance with AJAX)

## INTERNATIONALIZATION

### i18n Implementation

- Extract ALL user-facing text to translation objects
- Use Intl API for dates, numbers, currencies
- Store language preference in localStorage
- Set `lang` attribute dynamically on `<html>`
- Support RTL languages when needed

## MONITORING

### Performance Tracking

- Use Performance API for metrics
- Track Core Web Vitals
- Monitor with PerformanceObserver
- Custom marks and measures

### Error Tracking

- Global error handler with `window.addEventListener('error')`
- Unhandled promise rejection handler
- Log errors with context (no sensitive data)

### Analytics

- Privacy-first approach
- Track page views and custom events
- Use `navigator.sendBeacon` for reliable tracking

## DOCUMENTATION

### Code Comments (Spanish)

- JSDoc for functions with params and returns
- Explain WHY, not WHAT
- TODO, FIXME, HACK, NOTE annotations
- Document complex algorithms and business logic

### README (Spanish)

- Project description and features
- Installation instructions
- Browser support
- File structure
- Accessibility compliance statement
- Performance metrics

## NEVER DO

1. Skip semantic HTML
2. Ignore keyboard accessibility
3. Use inadequate color contrast
4. Store secrets in localStorage
5. Use innerHTML with unsanitized input
6. Block pinch-to-zoom
7. Skip loading/error states
8. Use `<div>` without proper semantics
9. Rely on color alone
10. Hardcode user-facing text
11. Use `eval()` or inline handlers
12. Forget cleanup (listeners, timers)
13. Mutate state directly
14. Use `var` instead of const/let
15. Deploy without accessibility testing

## ALWAYS DO

1. Test keyboard-only navigation
2. Test with screen readers (NVDA, JAWS, VoiceOver)
3. Run Lighthouse accessibility audit (95+)
4. Validate HTML with W3C
5. Test browser zoom (200%, 400%)
6. Test on real mobile devices
7. Verify color contrast ratios
8. Test `prefers-reduced-motion`
9. Implement proper error handling
10. Show loading states
11. Sanitize user input
12. Use HTTPS in production
13. Externalize strings for i18n
14. Write Spanish comments
15. Use English for code/commits
16. Document complex logic
17. Clean up side effects
18. Optimize images
19. Use semantic HTML
20. Monitor performance

## CORE PRINCIPLES

- **Accessibility First**: WCAG 2.1/2.2 Level AA minimum
- **Performance Matters**: Core Web Vitals in green
- **Security Always**: Sanitize, validate, never trust input
- **Progressive Enhancement**: Works without JS, better with JS
- **Semantic HTML**: Use proper elements, not divs
- **Mobile First**: Design for mobile, enhance for desktop
- **Clean Code**: English code, Spanish comments
- **No Frameworks**: Pure HTML/CSS/JavaScript
- **Standards Compliant**: Valid HTML, modern CSS, ES6+

## KEY REFERENCES

- WCAG 2.1: https://www.w3.org/WAI/WCAG21/quickref/
- WCAG 2.2: https://www.w3.org/WAI/WCAG22/quickref/
- ARIA Practices: https://www.w3.org/WAI/ARIA/apg/
- Web Vitals: https://web.dev/vitals/
- MDN Web Docs: https://developer.mozilla.org/

**Note**: These rules are mandatory. Violations block deployment. Focus on accessible, performant, secure vanilla web development.
