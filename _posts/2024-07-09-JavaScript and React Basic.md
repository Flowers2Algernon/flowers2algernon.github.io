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

### Return values from functions

Many functions, by default, return the value of `undefined`.

An example is the `console.log()` function.

If I run:

```js
console.log('Hello');
```

Here is the output in the console:

```js
Hello
undefined
```

Because the `console.log()` function is build so as to not have the explicity set return value, it gets the default return value of `undefined`.

I'll now code my own implementation of `console.log()`, which doesn't return the value of `undefined`:

```js
function consoleLog(val){
  console.log(val);
  return val;
}
```

Now when I run my custom `consoleLog()` function:

```js
consoleLog('Hello');
```

I get the following output:

```js
Hello
'Hello'
```

### FP and OOP paradigm

"There are actually several styles of coding, also known as paradigm. A common style is called functional programming, or FP for short".

In functional programming, we use a lot of functions and variables:

```js
function getTotal(a,b) {
  return a + b;
}
var num1 = 2;
var num2 = 3;

var total = getTotal(num1, num2);
```

When writing FP code, we keep data and functionality separate and pass data into functions only when we want something computed:

```js
function getDistance(mph, h) {
  return mph * h;
}
var mph = 60;
var h = 2;
var distance = getDistance(mph, h);
```

In functional programming, functions return new values and then use those values somewhere else in the code:

```js
function getDistance(mph, h) {
  return mph * h;
}
var mph = 60;
var h = 2;
var distance = getDistance(mph, h);

console.log(distance); // <=======HERE
```

Another style is **object-oriented programming (OOP)**. In this style, we group data and functionality as properties and methods inside objects.

For example, If I have a `virtualPet` object, I can give it a `sleepy` property and a `nap()` method:

```js
var virtualPet = {
  sleepy: true,
  nap: function(){}
}
```

In OOP, methods update properties stored in the object instead of generating new return values.

OOP helps us model real-life objects. It works best when the grouping of properties and data in an object makes logical sense - the properties and methods "belong together".

To summarize this point, we can say that the Functional Programming paradigm works by keeping the data and functionality separate. It's counterpart, OOP, works by keeping the data and functionality grouped in meaningful objects.

Here are some of the most important concepts in FP:

- First-class functions
- Higher-order functions
- Pure functions and side-effects

#### First-class functions

It is often said that functions in JS are "first-class citizens". What does that means?

It means that a function in JS is just another value that we can:

- pass to other functions
- save in a variable
- return from other functions

In other words, a function in JS is just a value - from this vantage point, almost no different then a string or a number.

For example, in JS, it's perfectly normal to pass a function invocation to another function:

```js
function addTwoNums(a, b){
  console.log(a + b);
}

function randomNum(){
  return Math.floor((Math.random() * 10) + 1);
}
function specificNum() {return 42};

var useRandom = true;

var getNumber;

if(useRandom) {
  getNumber = randomNum
}else{
  getNumber = specificNum
}

addTwoNUms(getNumber(), getNumber());
```

In the above code, based on the `useRandom` being set to `true` or `false`, the `getNumber` variable will be assigned either the `randomNum()` function declaration or the `specificNum() `function declaration.

With all this code set, I can then invoke the `addTwoNums()` function, passing it the invocation of the `getNumber()` variables as its first and second arguments.

**This works because functions in JS are trully first-class citizens, which can be assigned to variable names and passed around just like I would pass around a string, a number, an object, etc**

#### Higher-order functions

A higher-order function is a function that has either one or both of the following characteristics:

- It accepts other functions as arguments
- It returns functions when invoked

It is simply a feature of the lanaguage. The lanaguage itself allows me to pass a function to another function, or to return a function from another function.

Based on the previous code, in which I'm re-defining the `addTwoNums()` function so that it is a higher-order function:

```js
function addTwoNUms(getNumber1, getNumber2) {
  console.log(getNumber1() + getNumber2());
}
```

Once the function receives them as arguments, it will then attempt invoking them and concatenating the values returned from those involvedcations.

For example:

```js
addTwoNums(specificNum, specificNum); // returned number is 84
addTwoNums(specificNum, randomNum); // returned number is 42 + some random number
```

#### Pure functions

Another concept of functional programming are pure functions.

A pure function returns the exact same results as long as it's given the same values.

An example of a pure function is the `addTwoNums()` function from the previous section:

```js
function addTwoNums(a, b){
  console.log(a + b);
}
```

This function will always return the same output, based on the input.

For example, as long as we give it a specific value, say, a `5` and a `6`:

```js
addTwoNums(5,6);//11
```

The output will always be the same.

### The Principles of OOP

The four fundamental OOP principles are inheritance, encapsulation, abstraction and polymorphism. The thing to remember about Objects is that they exist in a hierarchal structure. Meaning that the original base or super class for everything is the object class, all objects derive from this class.

#### OOP Principles: Inheritance

It works like this:

1. There is a base class of a "thing".
2. There is one or more sub-classes of "things" that inherit the properties of the base class (sometimes also referred to as the 'super-class')
3. There might be some other sub-sub-classes of "things" that inherit from those classes in point2.

To setup the inheritance relation between classes in JS, I can use ` extends` keyword, as in `class B extends A`.

For example:

```js
class Animal{/* ...class code here... */ }
class Bird extends Animal{/* ...class code here... */ }
class Eagle extends Bird{/* ...class code here... */ }
```

#### OOP Principles: Encapsulation

In the simplest terms, the encapsulation has to do with making a code implemetation "hidden" from other users, in the sense that they don't have to know how the code works when use the code.

For example:

```js
"abc".toUpperCase();
```

I don't really need to worry or even waste time thinking about how the `toUpperCase()` method works. All I want is to use it, since I know it's available to me.

#### OOP Principles: Abstraction

Abstraction is all about writing code in a way that will make it more generalized.

- An abstraction is about extracting the concept of what you're trying to do, rather than dealing with a specific manifestation of that concept.
- Encapsulation is about you not having access to, or or not being concerned with, how some implementation works internally.

#### OOP Principles: Polymorphism

Means: something that can take on many shapes.

For example:

```js
const bicycle = {
  bell: function(){
    return "Ring, ring! Watch out please."
  }
}
const door = {
  bell: function(){
    return "Ring,ring! Come here, please."
  }
}
```

To make this code truly polymorphic, I add the following code:

```js
function ringTheBell(thing) {
  console.log(thing.bell)
}
```

Now I have declared a `ringTheBell()` function. It accepts a `thing` parameter - which I expect to be an object either the `bicycle` or the `door` object.

Then:

```js
ringTheBell(bicycle);//Ring, ring! Watch out, please!
ringTheBell(door); // "Ring, ring! Come here, please!"
```

### Creating class

All objects that are built from the prototype share the same functionality.

Imagine that you need to code a `Train` class. Once you've coded this class, you'll be able to use the keyword `new` to instantiate objects of the `Train` class.

```js
class Train{}
```

You use the `class` keyword, then specify the name of your class, with the first letter capitalized.

In between the curly braces, the first piece of code that you need to define is the constructor:

```js
class Train{
  constructor(){
    //some code
  }
}
```

The `constructor` will be used to build properties on the future object instance of the `Train` class.

```js
class Train{
  constructor(color, lightsOn){
    this.color = color;
    this.lightsOn = lightsOn;
  }
}
```

Essentially, this is all the code that you need to write to achieve two things:

- This code allows me to **build new instances of the `Train` class**.
- Each object instance of the `Train` class that I build with have its own custom properties of `color` and `lightsOn`.

Now to actually build a new instance of the `Train` class, I need to use the following syntax:

```js 
new Train();
```

Inside the parentheses, you need to pass values such as `red` and `false`, such as the `color` property is set to `red` and the `lightsOn` property is set to `false`.

And to be able to interact with new object build this way, you need to assign it to a variable:

```js
var myFirstTrain = new Train('red', false);
```

You can also add methods to classes, and these methods will then be shared by all future instance objects of my `Train` class.

For example:

```js
class Train {
  constructor(color, lightsOn){
    this.color = color;
    this.lightsOn = lightsOn;
  }
  toggleLights() {
    this.lightsOn = !this.lightsOn;
  }
  lightsStatus() {
    console.log('Lights on?', this.lightsOn);
  }
  getSelf() {
    console.log(this);
  }
  getPrototype() {
    var proto = Object.getPrototypeOf(this);
    console.log(proto);
  }
}
```

Now you can build a brand new train using this updated `Train` class.

```js
var train2 = new Train('red', false);
```

And now, you can run each of its methods:

```js
train4.toggleLights(); // undefined
train4.lightsStatus(); // Lights on? true
train4.getSelf(); // Train {color: 'red', lightsOn: true}
train4.getPrototype(); // {constructor: f, toggleLights: f, ligthsStatus: f, getSelf: f, getPrototype: f}
```

Thus, in conclusion, the class syntax in JS allows us to clearly seperate individual object's data - which exists on the object instance itself - from the shared object's functionality (methods), which exist on the prototype and are shared by all object instances.

It is possible to implement polymorphism using classes in JavaScript, by inheriting from the base class and then overriding the inherited behavior. To understand how this works, it is best to use an example.

```js
class HighSpeedTrain extends Train{}
```

Now you can describe how the `HighSpeedTrain` works, we can start from constructor function:

```js
class HighSpeedTrain extends Train{
  constructor(passengers, highSpeedOn, color, lightsOn){
    super(color, lightsOn);
    this.passengers = passengers;
    this.highSpeedOn = highSpeedOn;
  }
}
```

In JS, `super` is used to specify what property gets inherited from the super-class.

In this case, I choose to inherit both the properties from the Train super-class in the HighSpeedTrain sub-class.

These properties are `color and lightsOn`.

 Notice that in addition to the inherited properties, you also `automatically inherit` all the methods that exist on the `Train` prototype, namely, the `toggleLights()`, `lightsStatus()`, `getSelf()`, and `getPrototype()` methods.

```js
class HighSpeedTrain extends Train {
    constructor(passengers, highSpeedOn, color, lightsOn) {
        super(color, lightsOn);
        this.passengers = passengers;
        this.highSpeedOn = highSpeedOn;
    }
    toggleHighSpeed() {
        this.highSpeedOn = !this.highSpeedOn;
        console.log('High speed status:', this.highSpeedOn);
    }
    toggleLights() {
        super.toggleLigths();
        super.lightsStatus();
        console.log('Lights are 100% operational.');
    }
}
```

Now you're ready to build some train objects.

```js
var train2 = new Train('bule', false);
var highSpeed1 = new HighSpeedTrain(200, false, 'green', false);
```

Get the following results:

```js
highSpeed1.toggleLights(); // Lights on? true, Lights are 100% operational.
```

### Default Parameter

For example, consider a function declaration without default parameters set:

```js
function noDefaultParameter(number) {
  console.log('Result:', number*number);
}
```

Obviously, the noDefaultParams function should return whatever number it receives, *squared*.

However, what if I call it like this:

```js
noDefaultParams(); // Result: NaN
```

Js, due to its dynamic nature, doesn't throw an error. but it does return a non-sensical output.

Consider now, use the default parameter, as the following code:

```js
function withDefaultParams(number = 10){
  console.log('Result:', number * number);
}
```

Default params allow me to build a function that will run with default arguments values even if I don't pass it any arguments, while still being flexible enough to allow me to pass custom argument values and deal with them accordingly.

Consider the following code:

```js
class NodefaultParams {
  constructor(num1, num2, num3, string1, bool1){
        this.num1 = num1;
        this.num2 = num2;
        this.num3 = num3;
        this.string1 = string1;
        this.bool1 = bool1;
  }
  calculate() {
    if(this.bool1) {
      console.log(this.string, this.num1 + this.num2 + this.num3);
      return;
    }
    return "The value of bool1 is incorrect"
  }
}
```

Obviously, the bool1 should be set to true on invocation to make this work, but I'll set it to false on purpose, to highlight the point I'm making.

```js
var fail = new NoDefaultParams(1,2,3,false);
fail.calculate(); // 'The value of bool1 is incorrect'
```

This example might highlight the reason sometimes weird error messages appear when some software is used - perhaps the developers just didn't have enough time to build it better.

However, now that you know about default parameters, this example can be improved as follows:

```js
class WithDefaultParams {
  constructor(num1 = 1, num2 = 2, num3 = 3, string1 = "Result: ", bool1 = true){
        this.num1 = num1;
        this.num2 = num2;
        this.num3 = num3;
        this.string1 = string1;
        this.bool1 = bool1;
  }
  calculate() {
        if(this.bool1) {
            console.log(this.string1, this.num1 + this.num2 + this.num3);
            return;
        }
        return "The value of bool1 is incorrect"
    }
}
var better = new WithDefaultParams();
better.calculate(); // Result: 6
```

This approach really shines when building inheritance using classes, as it makes it possible to provide only the custom properties in the sub-class, while still accepting all the default parameters from the super-class constructor.

### For of loops and objects

To begin, it's important to know that a for loop connot work on an object directly. Since **an object is not utterable**.

For example:

```js
const car = {
  speed: 100;
  color: "blue";
}
for(prop of car){
  console.log(prop);
}
```

Running the above code will throw the following error:

```js
Uncaught TypeError: car is not iterable
```

Contray to objects, arrays are utterable. For example:

```js
const colors = ['red', 'orange', 'yellow']
for (var color of colors){
  console.log(color);
}
```

This time, the output is as follows:

```
red
orange
yellow
```

Luckily, you can use the fact that a for of loop can be run on arrays *to loop over objects*.

But how?

There are three built-in methods: `Object.keys()`, `Object.values()`, `Object.entries()`.

#### Built-in methods:

##### The `Object.keys()` method

The `Object.keys()` method receives an object as its parameter. Remember, this is **the object you want to loop over**.

For now, just focus on the returned array of properties when you call the `Object.keys()` method.

Here is an example:

```js
const car2 = {
  speed: 200;
  color: "red";
}
console.log(Object.keys(car2)); //['speed', 'color']
```

So, when I run `Object.keys()` and pass it my `car2` object, **the returned value is an array of strings**, where each string is a property key of the properties contained in my `car2` object.

##### The `Object.values()` method

Another useful method is `Object.values()`:

```js 
const car3 {
  speed: 300;
  color: "yellow";
}
console.log(Object.values(car3)); //[300, 'yellow']
```

##### The `Object.entries()` method

Which returns an array listing both the keys and the values.

```js
const car4 = {
  speed: 400;
  color: 'magenta';
}
console.log(Object.entries(car4));
```

The output is:

```js
[ ['speed', 400], ['color', 'magenta'] ]
```

You get an array of arrays, where each array item has two members, the first being a property's key, and the second being a property's value.

### Template literals 

##### what are template literals?

Template literals are an alternative way of working with strings, Up until ES6, the only way to build strings in JavaScript was to delimit them in either single quotes or double quotes:

```js
'Hello, World!'
"Hello, World!"
```

Alongside the previous ways to build strings, ES6 introduced the use of backtick characters as delimiters:  

```js
`Hello, World!`
```

The above code snippet is an example of a template string, which is also knwon as a template literal.

With template literals, an expression can be embedded in a *placeholder*. A placeholder is represented by ${}, with anything within the curly brackets treated as JavaScript and anything outside the brackets treated as a string.

##### Differences between a template and regular string

There are several ways in which a template string is different from a regular string.

- First, it allows for variable interpolation:

```js
let greet = "Hello";
let place = "World";
console.log('${greet} ${place} !') //display both variables using template literals
```

The above console log will output:

```js
Hello World!
```

Using template literals allows developers to embed variables directly in between backticks, without the need to use the `+` operator and the single or double quotes.

In other words, in ES5, the above example would have to be written as follows:  

```js
var greet = "Hello";
var place = "World";
console.log(greet + " " + place + "!");//display both variables without using template literals
```

