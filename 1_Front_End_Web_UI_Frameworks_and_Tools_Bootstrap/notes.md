### Three Tier Architecture for Web development

- **Presentation Layer**
	Deals with everything that is UI related
	e.g. using JavaScript frameworks/libraries like Angular or React
	
- **Business Logic Layer**
	Contains the actual business logic (data validation, dynamic content processing)
	Server-side rendering (!)
	e.g. NodeJS and NodeJS modules
	
- **Data Access (Persistence) Layer**
	Interacts with the database (e.g. via an API)
	e.g. MongoDB
	
	

### What is Node.js?

JavaScript was originally designed as a scripting language for the browser. Node.js (a JavaScript runtime) although allows the execution of JavaScript code on the "desktop" (server side). To accomplish this, the Chrome V8 JavaScript engine has been ported from the browser to the desktop. 

Node.js is build around an event-driven, non-blocking I/O model which makes it easy to run asynchronous JavaScript on the desktop. 



### Node.js and NPM basics

Every package consists of ...

- **JS files**
- **package.json**
  - Serves as documentation for what packages your project depends on
  - Allows to specify the version of a package
  - Makes builds reproducible

**Create a new package.json:**    

- *npm init*

**Install a node package:** 

- *npm install \<package-name\>*

  **Note:**  
  *npm install* takes 3 exclusive, optional flags which save or update the package version in your main package.json:
   -S, --save: Package will appear in your dependencies.
   -D, --save-dev: Package will appear in your devDependencies.
   -O, --save-optional: Package will appear in your optionalDependencies.

