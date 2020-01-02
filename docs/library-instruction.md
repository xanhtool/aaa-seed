[1](https://angular.io/guide/creating-libraries)
[2](https://github.com/ng-packagr/ng-packagr/blob/master/docs/secondary-entrypoints.md)
[3](https://github.com/ng-packagr/ng-packagr/blob/master/integration/samples/secondary/README.md)

# GUIDE TO CREATE NEW LIBRARY:
  ## To `import { SomeThing } from 'my-lib'` action: update `public_api.ts` to `index.ts`.
    ```
    // ng-package.json
    {
      "$schema": "../../node_modules/ng-packagr/ng-package.schema.json",
      "dest": "../../dist/my-lib",
      "lib": {
        "entryFile": "src/index.ts"
      }
    }

    ```

    ```
    // /src/index.ts
    /*
    * Public API Surface of my-lib
    */

    export * from './lib/my-lib.service';
    export * from './lib/my-lib.component';
    export * from './lib/my-lib.module';
    ```
  ## Create secodary entrypoint:
    ```
    // ng-package.json
    {
      "$schema": "../../node_modules/ng-packagr/ng-package.schema.json",
      "dest": "../../dist/my-lib",
      "lib": {
        "entryFile": "src/index.ts"
      }
    }

    ```

    ```
    // /src/index.ts
    /*
    * Public API Surface of my-lib
    */

    export * from './lib/my-lib.service';
    export * from './lib/my-lib.component';
    export * from './lib/my-lib.module';
    ```
