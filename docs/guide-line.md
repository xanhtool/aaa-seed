# About Shared Module
- Lazyload Module => import LazySharedModule
- Home Module => import SharedModule 

Because every Lazyload Module import the same Shared Module => it have multi function => big. 
Home Module using "big" Shared Module => slow. 
So, Home Module use it share module alone.
