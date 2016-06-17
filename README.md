#react-carousel

A ReactJS Carousel component written in TypeScript. 

##Available Properties
1. `items`
The items to show on the carousel. Each item is an object that must include the following two properties: `key` and `label`. 
2. `selIndex`
The item of the currently selected item. 
3. `prevButton`
A `React.ReactElement` to be used as the previous button.
4. `nextButton`
A `React.ReactElement` to be used as the next button. 
5. `onItemClick`
A function to be called when a carousel item is clicked. 
6. `minItemWidth`
The minimum width of the carousel items. 
7. `width` 
The width of the carousel component excluding the next/button width. 
8. `buttonWidth`
An optional parameter used to set the width of the next/prev buttons. Defaults to 42.
9. `gutter`
An optional parameter used to set the gutter between carousel items, defaults to 0. Note: this parameter will not actually set the gutter between items, please use CSS to do so. 
It is mainly to account for the gutter when calculating widths of the carousel items.   

##Styling
1. Component CSS selector `.react-carousel`
2. Carousel item CSS selector `.rc-item` 
3. Carousel buttons CSS selector `.rc-btn`, prev -> `.rc-btn.prev`, next -> `.rc-btn.next`
4. Carousel viewport CSS selector `.rc-viewport`
5. Carousel viewport wrapper CSS selector `.rc-viewport-wrapper`

##Usage

HTML file
```html
<!DOCTYPE html>
<html>
    <head>...</head>
    <body>
        ....
        <div id="ComponentContainer"></div>
        ....
    </body>
</html>
```

1. TypeScript/JavaScript (ES6) 

```typescript
//main.ts | main.js
import * as ReactDOM from 'react-dom'; 
import * as React from 'react';
import {ReactCarousel} from 'react-carousel'; 
let items = [0,1,2,3,4].map((e)=>{
    return {
        label:e+'',
        key:e+''
    };
}); 
let comp = ReactDOM.render((<ReactCarousel 
    items={items} 
    selIndex={0} 
    prevButton={(<span>Prev</span>)}
    nextButton={(<span>Next</span>)}
    onItemClick={(idx:number,key:string)=>{console.log(idx);console.log(key);}}
    minItemWidth={80}
    gutter={4}
    buttonWidth={42}
    width={400} />),document.getElementById('ComponentContainer'));
```

2. JavaScript  (ES6) with CommonJS modules

```javascript
//main.js
var React = require('react');
var ReactDOM = require('react-dom');
var ReactCarousel = require('react-carousel');  
var items = [0,1,2,3,4].map((e)=>{
    return {
        label:e+'',
        key:e+''
    };
}); 
var comp = ReactDOM.render((<ReactCarousel 
    items={items} 
    selIndex={0} 
    prevButton={(<span>Prev</span>)}
    nextButton={(<span>Next</span>)}
    onItemClick={(idx:number,key:string)=>{console.log(idx);console.log(key);}}
    minItemWidth={80}
    gutter={4}
    buttonWidth={42}
    width={400} />),document.getElementById('ComponentContainer'));
```