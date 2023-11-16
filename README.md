# typescript-finance-logger

## play project to learn a little more about typescript

### it's best practice to break your code into folders...

For example, /public and /src

#### to compile:

```
tsc file_name.ts
```

#### to automagically compile add the '-w' flag:

```
tsc file_name.ts -w
```

#### to initialize a config file:

```
tsc --init
```

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

**After you've set these in the config you can just run `tsc` and the compiler will know which files to compile and where to put the compiled js code**

#### To split your code into separate modules, you need to be sure
your TypeScript compiles into modern JavaScript (>=ES6).

In your config,

```
"module": "es2015",
"target": "es6",
```

Also, update the `<script>` reference in your html file to specify that the script is a module

```
<script type="module" src="app.js"></script>
```

Then make a new folder, /classes and a file for each used class.

Be sure to ```export``` the module you want to use:

```
export class Invoice {
  constructor(
    readonly client: string,
    private details: string,
    public amount: number,
  ){}

  format() {
    return `${this.client} owes £${this.amount} for ${this.details}`;
  }
}
```

And ```import``` that module in the file where you want to use it:

```
import { Invoice } from "./classes/invoice.js";
```

Note here that the file extension is .js. This is because our TypeScript should be compiled into that /public directory as .js!

** There are Two Major Drawbacks to Using Modules... **

1. Only modern browsers support this module system... older browsers may throw errors.

2. It doesn't bundle code into a single file. The browser has to make separate requests for those files.

To get around this you could use a bundler such a WebPack.