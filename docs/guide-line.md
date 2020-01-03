[1]: https://medium.com/dev-jam/5-tips-best-practices-to-organize-your-angular-project-e900db08702e

[Link](https://medium.com/dev-jam/5-tips-best-practices-to-organize-your-angular-project-e900db08702e)

# About Shared Module
- Lazyload Module => import LazySharedModule
- Home Module => import SharedModule 

Because every Lazyload Module import the same Shared Module => it have multi function => big. 
Home Module using "big" Shared Module => slow. 
So, Home Module use it share module alone.

# Simplify your import
instead of this
```
import { ButtonAComponent } from './button-a/button-a.component';
import { ButtonBComponent } from './button-b/button-b.component';
```

do this

```
import { ButtonAComponent, ButtonBComponent } from '/path/to/shared/components';
```

and this
```
// shared/shared.module.ts
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import * as fromComponents from './components';
@NgModule({
  declarations: [...fromComponents.components];
  imports: [CommonModule, FormsModule],
  exports: [FormsModule, ...fromComponents.components]
})
export class SharedModule {}
```

by this

```
// src/app/shared/components/index.ts
import { ButtonAComponent } from './button-a/button-a.component';
import { ButtonBComponent } from './button-b/button-b.component';
export const components: any[] = [ButtonAComponent, ButtonBComponent];
export * from './button-a/button-a.component';
export * from './button-b/button-b.component';
```

# Use Alias Import for common file
- check `tsconfig.json`
- instead of this
```
import { FooPipe } from '../../../../../shared/pipes/foo/foo.pipe';
```
- to this 
```
import { FooPipe } from '@shared/pipes/foo/foo.pipe';
```

- by this
```
{
...
  "compilerOptions": {
    ...
    "baseUrl": "src",
    "paths": {
      "@env": ["environments/environment"],
      "@shared/*": ["app/shared/*"],
      "@core/*": ["app/core/*"]
    }
  }
}
```
# Use SCSS Variables 
Create a file `src/styles/variables.scss`
- with this
```
// src/styles/variables.scss
$accent: #0093ff;
%uppercase {
  text-transform: uppercase;
  letter-spacing: 0.3em;
}
```
- we can use other place like this
```
// shared/components/button-a/button-a.component.scss
@import '../../../../styles/variables.scss';
button {
  background: $accent;
}
```
- and more over with alias import
```
// angular.json
"stylePreprocessorOptions": {
  "includePaths": ["src/styles"]
},

// shared/components/button-a/button-a.component.scss
@import 'variables.scss';
button {
  background: $accent;
}
```

# Hiep 1: Share State Should Import From library


# Hiep 2: App can change Theme

