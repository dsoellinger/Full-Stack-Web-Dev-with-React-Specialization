# CSS Preprocessors

CSS is limited when it comes to features like defining variables, nesting selectors, expressions and functions. Therefore maintaining CSS can easily become cumbersome. A possible way to overcome this issue is by using CSS preprocessors (e.g. Less, Sass, Stylus). Instead over writing the CSS code directly by hand, the preprocessor handles the compilation into the traditional CSS syntax. 

### Sass vs Less

Both, Sass and Less, are CSS preprocessors. While both preprocessors share some of the same properties, for instance mixins and variables, Sass is based on Ruby and Less is based on JavaScript.

However, the real difference are logical functions. Less gives users the opportunity to only activate mixins when specific situations occur. Sass, on the other hand, offers loops and case distinctions as known from programming languages.

With SASS, users are free to choose between “indented syntax” or SCSS. Each developer can decide for themselves whether they would like to move away from the CSS rules or stay closer to the original. LESS doesn’t offer this choice. Here, users have to stick with the old rules. **Code in LESS is automatically a superset of CSS**.



## Less

### Installing Less

Less can be install using npm.

```shell
npm install less
```



### Defining variables

Variables in Less can be defined by means of the @ operator.

```less
@lt-gray: #ddd;
@background-dark: #512DA8;
@background-light: #9575CD;
@background-pale: #D1C4E9;
```



### Mixins

Mixins are similar to functions in programming languages. Mixins can group CSS instructions in handy, reusable classes and allow to embed all the properties of a class into another class by simply including the class name as one of its properties.

```less
.zero-margin (@pad-up-dn: 0px, @pad-left-right: 0px) {
	margin:0px auto;
	padding: @pad-up-dn @pad-left-right;
}

.round-borders {
  border-radius: 5px;
  -moz-border-radius: 5px;
  -webkit-border-radius: 5px;
}

.footer{
    background-color: @background-pale;
    .zero-margin(20px, 0px);
}

#menu {
  color: gray;
  .round-borders;
}
```



### Nested rules

```less
.carousel {
    background:$background-dark;

    .carousel-item {
        height: $carousel-item-height;
        img {
            position: absolute;
            top: 0;
            left: 0;
            min-height: 300px;
        }
    }
}

```



### CSS compilation

A less file can be converted to CSS with the following command:

```shell
lessc style.less style.css
```



## Sass (Syntactically Awesome StyleSheets)

### Installing Sass

Sass can be install using npm.

```shell
npm install -g sass
```

**Note:** We are going to use the SCSS syntax



### Defining variables 

Variables in SCSS can be defined using the $ operator.

```scss
$lt-gray: #ddd;
$background-dark: #512DA8;
$background-light: #9575CD;
$background-pale: #D1C4E9;
```



### Mixins

Mixins are similar to function in Sass. However, please note that there is also a dedicated `@function` statement available.

```scss
@mixin zero-margin($pad-up-dn, $pad-left-right) {
	margin:0px auto;
	padding: $pad-up-dn $pad-left-right;
}

.jumbotron {
    @include zero-margin(70px,30px);
    background: $background-light ;
    color:floralwhite;
}
```



### Functions

Functions allow you to define complex operations on [SassScript values](https://sass-lang.com/documentation/values) that you can re-use throughout your stylesheet. They make it easy to abstract out common formulas and behaviors in a readable way.

Functions are written in Sass as `@function` followed by a function name and arguments. Since functions work with the value of a style attribute, they are great for calculating values that you may need to re-use elsewhere. 

```scss
@function pow($base, $exponent) {
  $result: 1;
  @for $_ from 1 through $exponent {
    $result: $result * $base;
  }
  @return $result;
}

.sidebar {
  float: left;
  margin-left: pow(4, 3) * 1px;
}
```



### Nested rules

```scss
nav {
  ul {
    margin: 0;
    padding: 0;
    list-style: none;
  }

  li { display: inline-block; }

  a {
    display: block;
    padding: 6px 12px;
    text-decoration: none;
  }
}
```



### CSS compilation

A scss file can be converted to CSS with the following command:

```shell
sass style.scss style.css
```



## Deployment

To simplify the deployment process we want to fully automate the following steps:

**CSS**

- Compiling Sass or Less into CSS
- Running autoprefixing to add vendor (browser) -specific prefixes
- Minification (remove unnecessary characters from CSS files)
- Concatenation of multiple CSS files into a single file

**JavaScript**

- JSHint - Check JavaScript code for errors
- Concatenation
- Uglification: Minification + Mangling (reduce local variables to a single letter)
- Rechecking for errors

**Other tasks**

- Optimize the file size of images
- Watch functionality: Automatically execute the tasks mentioned above once a file gets changed
- Server and Live-Reload
- Run tests
- Build site for deployments



### Useful NPM Scripts



#### Onchange

Onchange allows to specify a pattern to watch file sets. Once one of the files gets changed, Onchange executes the specified command.

##### Installation

```shell
npm install --save-dev onchange
```

##### Usage

After installing Onchange, its script can now be added to the package.json.

The following example shows how to watch for changed `*.scss` files in the `css` folder. Once the file is changed, we trigger the recompilation of the scss file.

```json
"scripts": {
	...
    "scss": "node-sass -o css/ css/",
    "watch:scss": "onchange 'css/*.scss' -- npm run scss"
}
```



#### Parallelshell

A simple npm module to run shell commands in parallel. All processes will share the same stdout/stderr, and if any command exits with a non-zero exit status, the rest are stopped and the exit code carries through.

##### Installation

```shell
npm install --save-dev parallelshell
```

##### Usage

After installing Parallelshell, its script can now be added to the package.json.

The example below shows how to run the lite-server and the scss-watchdog in parallel.

```json
"scripts": {
    "start": "npm run watch:all",
    "test": "echo \"Error: no test specified\" && exit 1",
    "lite": "lite-server",
    "scss": "node-sass -o css/ css/",
    "watch:scss": "onchange 'css/*.scss' -- npm run scss",
    "watch:all": "parallelshell 'npm run watch:scss' 'npm run lite'"
}
```



 

