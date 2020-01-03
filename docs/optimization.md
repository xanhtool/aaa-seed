
[2]: https://christianlydemann.com/the-complete-guide-to-angular-load-time-optimization/

[link](https://christianlydemann.com/the-complete-guide-to-angular-load-time-optimization/)

------------ OPTIMIZATION -------------------

# Avoiding flash of invisible text (FOIT) [2]
- use 

```
<link rel="preload" href="fonts/zantroke-webfont.woff2" as="font" type="font/woff2" crossorigin>
```
- or [font-display: swap](https://developer.mozilla.org/en-US/docs/Web/CSS/@font-face/font-display)

```
# angular.json
{
  "glob": "**/*",
  "input": "src/assets",
  "output": "assets"
}
```
# Component level lazy loading

# Lazy load under the fold
