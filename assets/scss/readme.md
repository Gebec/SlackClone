# Guide for style folder architecture

## Inspired by 7-1 pattern
Info:
```
https://sass-guidelin.es/#the-7-1-pattern
```

## Base folder
Should holds boilerplate code.
Reset file, typografic rules, some base styles.

## Layout folder
Should holds code for laying out the site. Defines global wireframe.
Styles for header, footer, navigation, sidebar,...

## Components folder
Code for smaller modules. Should contains most of the code.

## Pages folder
Should contains page-specific styles.

## Utils folder
Should contains all sass tools and helpers.
Global variables, functions, mixins, placeholders,...

## main.scss file
Should contains only @import and comments.
Order, in which folders should be included:
1) Utils
2) Base
3) Layout
4) Components
5) Pages

File extensions and leading underscores omitted.