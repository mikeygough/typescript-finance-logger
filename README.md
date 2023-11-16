# typescript-finance-logger

## play project to learn a little more about typescript

### it's best practice to break your code into folders...
For example, /public and /src

#### to compile:

```tsc file_name.ts```

#### to automagically compile

```tsc file_name.ts -w```

#### to initialize a config file

```tsc --init```

After creating the .config file, uncomment rootDir and set it to ./src

And also set the outDir to ./public

```
"rootDir": "./src",
"outDir": "./public",
```

Finally, add a new setting to prevent the compiler from compiling anything outside of the ./src folder.

```
"include": ["src"]
```

__After you've set these in the config you can just run ```tsc``` and the compiler will know which files to compile and where to put the compiled js code__