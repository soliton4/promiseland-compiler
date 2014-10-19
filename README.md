promiseland-compiler
========================

watches a directory for changes and compiles the .js files for each changed .pland file
  
## usage:  
  
```
  node node_modules/promiseland-compiler/compiler.js --watch --dir <directory>
```  
  
--dir is optional. it defaults to process.cwd()

if you installed the compiler globaly you can simply use it like this:

```
  promiselandCompiler --watch
```  
