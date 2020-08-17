/*DOM - Document Object Model - The DOM is a structured representation of an HTML document. The DOM is used to connect webpages to scripts like JavaScript. JavaScript and the DOM are two different things.
When a webpage loads the browser creates a Document Object Model of the page. The HTML DOM is constructed as a tree of objects.
With the Object Model JavaScript can change, add new, remove and react to HTML elements and CSS styles.
HTML DOM methods are actions you can perform (on HTML elements).
HTML DOM propeties are values (of HTML elements) that you can set or change.
In the DOM all HTML elements are defined as objects.
*/

//The getElementById Method - The most common way to access an HTML element is to use the id of an element.

//The innerHTML property - The easiest way to get the content of an element is by using the innerHTML property.

document.getElementById('demo').innerHTML = "Hello World!";//We use getElementById to select the element by its id and we use innerHTML to set the value of the element.

/*JavaScript HTML DOM document - The HTML DOM document object is the owner of all other objects in your web page.
Finding HTML elements - Method
document.getElementById(id) - Finds an element by element ID
document.getElementByTagName(tag name) - Finds elements by tag name
document.getElementByClassName(class name) -Finds elements by class name
*/

/*Changing HTML elements - propeties
element.innerHTML = new HTML content - Change the inner HTML of an element
element.attribute = new value - Change the attribute value of an HTML element
element.style.property(color, background, font-family etc) = new style - Change the style of an HTML element
*/

document.getElementById('demo').style.color = 'black';
document.getElementById('page-title').style.fontSize = '45px';
document.getElementByTagName('background').style = 'background: black';

/*Adding Event Handlers - Method
document.getElementById(id).onclick = function(){code} - Adding event handler to an onclick event.
*/
