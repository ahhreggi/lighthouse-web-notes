# Responsive Design

What is responsive design?

- A multitude of different screen sizes exist across phones, tablets, desktops, game consoles, TVs, and even wearables
- Responsive design means that you rweb app can adapt to any screen size and provide a good user-experience
- With responsive web design the server always sends rhe same HTML Code to all devices, and CSS is used to alter the rendering of the page on the device

Why is responsive design important?

- Mobile accounts for 50.8% of traffic worldwide.

## Responsive Design Tools

- Relative units
- Media queries
- Responsive images
- Font scale
- Flexible grid-based layout

### View port

- The meta viewport tag gives the browser instructions on how to control the page's dimensions and scaling
- When the meta viewport element is absent, mobile browsers will display web pages with default desktop settings.

### Units - Absolute units

- cm (centimeters)
- mm (millimeters)
- in (inches)
- pt (points)
- px (pixels)

### Units - Relative units

- em (relative to size of the parent)
- rem (relative to size of the root element
- vw (relative to 1% of the viewport width)
- vh (relative to 1% of the viewport's height)
- % (relative to percentage of the parent size (width, height, font-size))

We should be favoring relative units (e.g., em).

## Media Queries

Media queries allow you to use different CSS style rules according to various screen sizes

See: <https://css-tricks.com/snippets/css/media-queries-for-standard-devices>

## Responsive Images

Images should change sizes according to screen resolution.

- image tags
- background images

You can load different images (sizes) based on the size needed. This helps with performance as it makes sense not to use large images for smaller screen sizes.

In the example below, only one of the images will load.

```
<picture>
  <source srcset="image_200.png" media="(max-width: 200px)">
  <source srcset="image_400.png" media="(max-width: 400px)">
  <source srcset="image_800.png" media="(max-width: 800px)">
  <source srcset="image_1000.png" media="(max-width: 1000px)">
  <source srcset="image_1200.png" media="(max-width: 1200px)">
  <img src="image_original.png">
</picture>
```

## Web Fonts - Type Scale

See: type-scale.com

## Grid Systems

Frameworks like [Bootstrap](https://getbootstrap.com/) can take care of media queries for you by providing preset breakpoints.

The Bootstrap grid system is using Flexbox.

```
<div class="row">
  <div class="col col-sm-12 col-md-6 col-lg-4 col-xl-3">
    Hello
  </div>
</div>
```

The above adjusts the size of the inner div based on screensize. On smaller screens, it takes up the entire width of the row, but as the screen gets bigger, it takes up less.

## SASS

SASS is a CSS extension that allows you to use special features to help organize your files:

- Variables
- Nesting
- Partials
- Mixins
- Extend/inheritance

Multiple files (`.scss`) are compiled together so that your website only needs to load one.

See: <https://sass-lang.com/>

```
// _global.scss (a partial)

$primary-color: red;
$bg-color: blue;
```

```
// _nav.scss (a partial)

nav {
  color: $base-font;

  ul {
    background-color: $bg-color
  }
}
```

```
// index.scss

@import "global";
@import "nav";

header {
  color: $base-font;
}
```

There are different ways to add SASS to your project. One way is to use a middleware:

```
npm install node-sass-middleware
```

See: <https://www.npmjs.com/package/node-sass-middleware>
