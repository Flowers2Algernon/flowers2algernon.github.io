---
date: 2024-07-07 07:00:38 +0800
categories: [Front End]
tags: [html, css]     # TAG names should always be lowercase
---

##### DOM

When your web browser receives an HTML page, it constructs a DOM to represent it.

DOM stands for Document Object Model and it is simply a tree, structure or model of the objects in your HTML file.

![070801](https://raw.githubusercontent.com/Flowers2Algernon/flowers2algernon.github.io/main/assets/images/070801.png)

# CSS Basics

## Selecting and styling

CSS tells the web browser how to display HTML elements on screen.

For an HTML web page to use a CSS file, you need to link the CSS file to the head element of the HTML file. You use the link tag to link to a style sheet, which must be assigned to attributes rel and h ref.

The rel attribute is assigned to the style sheet, and the href attribute is assigned to the name of the style sheet file.

If you want to style only a single h1 element, you can add an ID attribute to the tag you want to style. In the CSS file, you create a rule for that ID.

###### CSS precedents and specificity

![070802](https://raw.githubusercontent.com/Flowers2Algernon/flowers2algernon.github.io/main/assets/images/070802.png)

The browser will use the most precise selector for an HTML element.

##### Element Selectors

The element selector allows developers to select HTML elements based on their element type.

For example, if you use `p` as the selector, the rule will apply to all `p` elements on the webpage.

```html
<p>Once upon a time...</p>
<p>In a hidden land...</p>
```

```css
p { 
  color: blue; 
}
```

##### ID Selectors

The ID selector uses the id attribute of an HTML element. Since the id is unique within a webpage, it allows the developer to select a specific element for styling. ID selectors are prefixed with a `#` character.

```html
<span id="latest">New!</span>
```

```css
#latest { 
  background-color: purple; 
}
```

##### Class Selectors

Elements can also be selected based on the class attribute applied to them. The CSS rule has been applied to all elements with the specified class name.

The class selector is prefixed with a `.` character.

In the following example, the CSS rule applies to both elements as they have the `navigation` CSS class applied to them.

```html
<a class="navigation">Go Back</a>
<a class="navigation">Go Forward</a>
```

```css
.navagation{
  margin: 2px;
}
```

##### Element with Class Selector

A more specific method for selecting HTML elements is by first selecting the HTML element, then selecting the CSS class or ID.

The example below selects all `p` elements that have the CSS class `introduction` applied on them.

```html
<p class="introduction">
 content  
</p>
```

```CSS
p.introduction{
  margin: 2px;
}
```

##### Descendant Selectors

Descendant selectors are useful if you need to select HTML elements that are contained within another selector.

For example:

```html
<div id="blog">
  <h1>Lasted News</h1>
  <div>
    <h1>Today's Weather</h1>
    <p>
      The Weather will be sunny
    </p>
  </div>
  <p>Subscribe for more news</p>
</div>
<div>
  <h1>Archives</h1>
</div>
```

```css
#blog h1{
  color: blue;
}
```

The CSS rule will select all `h1` elements that are contained within the element with the ID `blog`. The CSS rule will not apply to the `h1` element containing the text `Archives`.

The structure of a descendant selector is a CSS selector, followed by a single character, followed by another CSS selector.

Multiple descendants can also be selected. For example, to select all `h1` elements that are descendants of `div` elements which are descendants of the `blog` element, the selector is specified as follows.

```css
#blog div h1{
  color: blue;
}
```

##### Chile Selectors

Child selectors are more specific than descendant selectors. They only select elements that are immediate descendants (children) of a selector (the parent).

For example, you have the following HTML structure:

```html
<div id="blog">
  <h1>Latest News</h1>
  <div>
    <h1>Today's Weather</h1>
    <p>The weather will be sunny</p>
  </div>
  <p>Subscribe for more news</p>
</div>
```

If you want to style the `h1` element containing the text `Latest News`, you can use the following child selector:

```css
#blog > h1{
  color: blue;
}
```

This will select the element with the ID `blog` (the parent), and then it will select all `h1` elements that are contained directly in that element (the children). The structure of the child selector is a CSS selector followed by the child combinator symbol `>` followed by another CSS selector.

**Note** that this will not go beyond a single depth level. Therefore, the CSS rule will **not** be applied to the h1 element containing the text `Today's Weather`.

##### :hover Pseudo-Class

The simplest example of this is changing the colour of a hyperlink when it is hovered over. To do this, you add the `:hover` pseudo-class to the end of the selector. In the following example, adding hover to the element will change the colour of the hyperlink to orange when it is hovered over.

```css
a:hover{
  color: blue;
}
```

This pseudo-class is very useful for creating visual effects based on user interaction.
