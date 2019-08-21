# CSS Preprocessors

CSS is limited when it comes to features like defining variables, nesting selectors, expressions and functions. Therefore maintaining CSS can easily become cumbersome. A possible way to overcome this issue is by using CSS preprocessors (e.g. Less, Sass, Stylus). Instead over writing the CSS code directly by hand, the preprocessor handles the compilation into the traditional CSS syntax. 



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

