---
date: 2024-07-09 07:00:38 +0800
categories: [Front]
tags: [javascript, react]     # TAG names should always be lowercase
---

##### Responsive design

Responsive design means that a web page can automatically stretch or shrink depending on the screen is displayed on.

Phone, tablet and computer screens, including the one you're probably using now, are made up of thousands of tiny lights called pixels.

The resolution of your screen refers to the number of pixels it contains most often expressed as the number of horizontal pixels multiplied by the number of vertical pixels.

It is the combination of three techniques, flexible grids, fluid images and media queries.

> Firstly, flexible grids are made up of columns, gutters and margins. The space between the columns is called the gutter and the spaces between the content and the left and right edges of the screen are called margins.
>
> Instead of defining website Element sizes based on pixels, flexible grids are defined in percentage values, allowing them to adjust depending on screen size.

> Next, you have fluid images by setting the CSS max width property of images to 100%. The images will scale down smaller if they contain columns of the image but never grow or become narrower than the size of the image. This enables an image to scale down to fit in a flexibly sized column rather than overflow it but not grow larger and become pixelated if the column becomes wider than the image.

> Finally, there are media queries that are part of CSS. They allow developers to query the display size orientation and aspect ratio to conditionally apply CSS rules.

In responsive design, the specified pixel value is often called the breakpoint. A breakpoint is the point at which a website's content and layout will adapt to provide the best possible user experience.

A breakpoint can function in different ways across three different grids: fixed grid fluid, fluid grids and hybrid grids.

> Firstly, a fixed grid has fixed with columns and flexible margins.
>
> The fixed grid has fixed content that doesn't change in a specific breakpoint range, while the flexible margins occupy the remaining space on the screen.

> Then we have fluid grids with fluid with columns fixed gutters, and side margins. The fluid grid has flexible content that goes edge to edge according to screen size.
>
> In the fluid grid, columns either grow or shrink to adapt to the available space.

> Finally there are hybrid grids that have both fluid width and fixed with components.

## Bootstrap

###### What is bootstrap?

Bootstrap is a collection of pre-written code chunks in CSS and JS that allows you to create websites more quickly than if you had to create every bit of code from scratch.

Modern web development is all about **components**. Small pieces of reusable code that allow you to build websites quickly. Bootstrap comes with multiple components for very fast construction of multiple components or parts of components.

Another important aspect of modern development is **responsive grid** which allows web pages to adapt their layout and content depending on the device in which they are viewed. Bootstrap comes with a pre-made set of CSS rules for building a responsive grid.

Bootstrap saves significant time because all the CSS code that styles its grid and pre-built components is already written. Instead of having to have a high level of expertise in various CSS concepts, you can just use the existing Bootstrap CSS classes to produce nicely-looking websites. This is indispensable when you need to iterate on website layouts quickly.

Bootstrap components provide a pre built set of reusable UI styles and elements for your web applications.

### Virtual DOM

When React builds out its tree of components, it build out its own dome in memory called the virtual DOM.

The virtual DOM is a representedtation of the browser DOM that is kept in memory. React uses this virtual DOM to update the browser DOM, only when it needs to.

###### Reconciliation

React checks to see if the HTML components in the virtual DOM matchs the browser DOM. If a change is required, the browser DOM is updated. If nothing has changed, then no update is performed.

This is called the reconciliation process and can be broken into the following steps:

**Step 1**: The virtual DOM is updated.

**Step 2**: The virtual DOM is compared to the previous version of the virtual DOM and checks which elements have changed.

**Step 3**: The changed elements are updated in the browser DOM.

**Step 4**: The displayed webpage updates to match the browser DOM.

As updating the browser DOM can be a slow operation, this process helps to reduce the number of updates to the browser DOM by only updating when it is necessary.

But even with this process, if a lot of elements are updated by an event, pushing the update to the browser DOM can still be expensive and cause slow performance in the web application.

To solve this, React designed a solution named React FIber Architecture.

###### React Fiber Architecture

The Fiber Architecture allows React to incrementally render the web page. What this means is that instead of immediatedly updating the browser DOM with all virtual DOM changes, React can spread the update over time. But what does "over time" mean?

React can optimize when and where updates occur to the browser DOM to significantly imporve application performance and respondsiveness to user input. Think of it as a priority system. The highest priority changes, the elements visiable to the user, are updated first. While lower priority changes, the elements not currently displayed, are updated later.

###### Component hierarchy

Every React application contains at least one component, the root component or app component. Components are added to the app component to build out a tree structure of components that make up the application.

### Object Literals and the Dot Notation in JS

One of the most common ways of building an object in JavaScript is using the object literal syntax: `{}`.

To be able to access this object literal, it is very common to assign it to a variable, such as:

```javascript
var user = {}; // create an object
```

Now an object literal is assigned to the variable `user`, which means that the object it is bound to can be extended and manipulated in a myriad of ways.

Here is one such previously built object:

```javascript
//creating an object with properties and their values
var assistantManager = {
  rangeTilePerTurn: 3,
  socailSkills: 30,
  streetSmarts: 30,
  health: 40,
  specialAbility: "young and ambitious",
  greeting: "Let's make some money"
}
```

The beauty of this syntax is that it's so easy readable.

It essentially consists of two steps:

- Declaring a new variable and assigning an object literal to it - in other words, this ` var = assisttantManager = {}`
- Assigning the values to each of the objects keys, using the assignment operator, `=`

For example, here's a `table` object:

```javascript
var table = {
  legs: 3,
  color: "brown",
  priceUSD: 100,
}
```

To access the `table` object, I can simply console log the entire object:

```javascript
console.log(table);
```

The returned value is the entire `table` object:

```js
{leg: 3, color: 'brown', priceUSD: 100}
```

An alternative approach of building objects is to first save an empty object literal to a variable, then use the dot notation to declare new properties on the fly, and use the assignment operator to add values to those properties;

For example:

```js]
var house2 = {};
house2.rooms = 4;
house2.color = "pink";
house2.priceUSD = 1234;
```

Additionally, nothing is preventing me from combining the two approaches. For example:

```js
console.log(house);//{rooms: 3, color: "brown", priceUSD: 10000}
house.windows = 10;
console.log(house);//{rooms: 3, color: "brown", priceUSD: 10000, windows: 10}
```

This flexibility additionally means that I can update already existing properties, not just add new ones:

```js
house.windows = 11;
console.log(house);//{rooms: 3, color: "brown", priceUSD: 10000, windows: 11}
```

### Object literals and the brackets notation

There is an alternative syntax to the dot notation known as the brackets notation. To understand how it works, it's best to use an example, so I'll go through the process of coding the `house2` object again, in the same way that I did with the dot notation, but this time I will use brackets notation.

```js
var house2 = {};
house2["rooms"] = 4;
house2['color'] = "pink";
house2["priceUSD"] = 12345;
console.log(house2);//{rooms: 4, color: 'pink', priceUSD: 12345}
```

Note that using the brackets notation, just put each property's key as a `string`, inside either the single or double quotes - just like with regular strings.

I can both access and update properties on objects using either the dot notation, or the brackets notation, or a combination of both, like the following:

```js
var car = {};
car.color = "red";
car["color"] = "green";
car["speed"] = 200;
car.speed = 100;
console.log(car);//{color: "green", speed: 100}
```

Another important piece of information about the brackets notation:

```js
car["number of doors"] = 4;
console.log(car);//{color: 'green', speed: 100, number of doors: 4}
```

With the brackets notation, I can add space characters inside property names, like the above.

Additionally, I can add numbers (as the string data type) as property keys:

```js
car["2022"] = 1901;
console.log(car);// {2022: 1901, color: 'green', speed: 100, number of doors: 4}
```

However, doing this is discouraged, due to obvious reasons of having a property key as a number string not really conveying a lot of useful information.

Finally, there's one really useful thing that bracket notation has, but dot notation doesn't have: it can evaluate expressions:

```js
var arrOfKeys = ['speed','altitute','color'];
var drone = {
  speed: 100;
  altitude: 200,
  color: "red"
}
for(var i = 0;i < arrOfKeys.length;i++){
  console.log(drone[arrOfKeys[i]]);
}
```

The above code will result in the following result:

```js
100
200
red
```

Using the fact that brackets notation can evaluate expressions, I accessed the arrOfKeys[i] property on the drone object. 

This value changed on each loop while the for loop was running.

Specifically, the first time it ran, it was evaluated like this: 

- The value of `i` was `0`
- The value of `arrOfKeys[i]` was `arrOfKeys[0]`, which was `"speed"`
- Thus, `drone[arrOfKeys[i]]` was evaluated to `drone["speed"]` which is equal to `100`.

This allowed me to loop over each of the values stored inside the `drone` object based on each of its properties' keys. 

### Arrays are Objects

In JavaScript, Arrays are objects. That means that arrays also have some built-in properties and methods.

One of the most commonly used built-in methods on arrays are the `push()` and the `pop()` methods.

To add new items to an array, I can use the `push()` method:

```js
var fruits = [];
fruits.push("apple");//['apple']
fruits.push('pear');//['apple', 'pear']
```

To remove the last item from an array,  I can use the `pop()` method:

```js
fruits.pop();
console.log(fruits);//['apple']
```

For example:

```js
function arrauBuilder(one, two, three){
  var arr = [];
  arr.push(one);
  arr.push(two);
  arr.push(three);
  return arr;
}
```

Additionally, I can save this function call to a variable.

```js
var simpleArr = arrBuilder('apple', 'pear', 'plum');
```

And now I can console log the values stored in `simpleArr`:

```js
console.log(simpleArr);// ['apple','pear','plum']
```



### Object Method

An object in Js consists of key-value parts, known as properties.

We can add new key-value pairs to exsiting objects using the dot notation and the assignment operator:

```js
var car = {};
car.color = "red"; // update the value of a property of the car object
```

These are known as properties, and can take many data types, including functions.

```js
var car = {};

car.color = "red";

//add a method to the car object so that it can be called as car.turnKey()
car.turnKey = function() {
  console.log('engine running');
}
```

If the function is a property of an object, it is then referred to as a method.

This is a function that can be accessed only through the JS object that it is a member of. For example, the log method, which belongs to the console object, can only be accessed through the console object.

`console.log('Hello world');`

Let's further explore this, here is the original object:

```js
var car = {};
car.mileage = 98765;
car.color = "red";
console.log(car);
```

Next, I want to add a method to my `car` object. This method, when called, will output some text to the console.

What's unique is that the value I'm assigning to it is a function:

```js
var car = {};
car.mileage = 98765;
car.color = "red";
console.log(car);
car.turnTheKey = function() {
  console.log("The engine is running");
}
console.log(car);
```

Remember that all the key-value pairs in an object are referred to simply as properties. However, if I want to differentiate between the properties that can be executed, then I refer to such properties as methods.

So, now I want to add another method to the `car` object.

```js
//example of adding properties and methods to an object
var car = {};
car.mileage = 98765;
car.color = "red";
console.log(car);
car.turnTheKey = function() {
  console.log("The engine is running");
}
car.lightsOn = function() {
  console.log("The lights are on.");
}
console.log(car);
car.turnTheKey();
car.lightsOn();
```

### Errors in JavaScript

Here are some of the most common errors in JS:

- ReferenceError
- SyntaxError
- TypeError
- RangeError

There are some other errors in JS:

- AggregateError
- Error
- InternalError
- URIError

#### ReferenceError

A ReferenceError gets thrown when, for example, one tries to use variables that haven't been declared anywhere.

An example can be, attempting to console log a variable that doesn't exist:

```js
console.log(username);
```

If the variable named `username` hasn't been declared, the above line of code will result in the following output:

```js
Uncaught ReferenceError: username is not defined
```

#### SyntaxError

Any kind of invalid JavaScript code will cause a SyntaxError:

```js
var a "there's no assignment operator here";
```

The above line of code will throw the following error:

```js
Uncaught SyntaxError: Unexpected string
```

#### TypeError

A TypeErrir is thrown when, for example, trying to run a method on a non-supported data type.

A simple example is attempting to run the `pop()` method on a string:

```js
"hello".pop() // UncaughtError: "hello".pop is not a function
```

#### RangeError

A RangeError is thrown when we're giving a value to a function, but that value is out of the allowed range of acceptable input values.

Here's a simple example of converting an everyday Base 10 number (a number of the common decimal system) to a Base 2 number(binary number).

```js
(10).toString(2);//'1010'
```

However, if I try to use a non-existing number system, such as an imaginary Base 100, since this number system effectively doesn't exist in JS, I will get the RangeError, Since a non-existing Base 100 system is out of range of the number systems that are available to the `toString()` method:

```js
(10).toString(100); // Uncaught RangeError: toString() radix argument must between 2 and 36
```

