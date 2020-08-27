/*DOM - Document Object Model - Is a tree like representation of all the content on a page that can be modified. The DOM is created when the page is loaded. The document object is the main "entry point" to the page. We can change or create anything on the page using it. With the object model JavaScript can change all the HTML, CSS on the page. As well as adding more elements, styles etc. 
*/
document.body.style.background = '#ffffff';

/*When your HTML is parsed by a web broswer it is converted to the DOM as was mentioned above. */

/*DOM Nodes - Everything in an HTML document is a node - nodes are objects that have many properties and methods attached to them. These properties and methods are the primary tools we use to to manipulate our webpage with JavaScript.: 
*The entire document is a document node 
*Every HTML element is an element node 
*The text inside HTML elements are text nodes
*Every HTML attribute is an attribute node(deprecated)
*All comments are comment nodes

You can use a combination of CSS style selectors and relationship properties to target the nodes you want. e.g. class, id, element.
*/

/*
SELECTOR METHODS 
*/

//Query Selectors - The querySelector can be used to find not just id's and class's but any selector.

//document.querySelector('.list li a').style.color = 'black'; 

const firstLi = document.querySelector('.list li a'); //We can store a query in a variable.
firstLi.style.color = 'black'; //and change the propeties of the element.
const secondLi = document.querySelector('list li a')
//secondLi.setAttribute('style', 'color: white; background: black');


//getElementBy 

/*JavaScript HTML DOM document - The HTML DOM document object is the owner of all other objects in your web page.
Finding HTML elements - Method
document.getElementsById(id) - Finds an element by element ID
document.getElementsByTagName(tag name) - Finds elements by tag name
document.getElementsByClassName(class name) -Finds elements by class name
*/

//The getElementById Method - The most common way to access an HTML element is to use the id of an element.

//The innerHTML property - The easiest way to get the content of an element is by using the innerHTML property.

document.getElementById('demo').innerHTML = "";//We use getElementById to select the element by its id and we use innerHTML to set the value of the element.


/*Changing HTML elements - propeties
element.innerHTML = new HTML content - Change the inner HTML of an element
element.attribute = new value - Change the attribute value of an HTML element
element.style.property(color, background, font-family etc) = new style - Change the style of an HTML element
*/

document.getElementById('demo').style.textAlign = 'center';
document.getElementById('demo').style.color = '#000';
document.getElementById('page-title').style.fontSize = '45px';

/*Adding Event Handlers - Method
document.getElementById(id).onclick = function(){code} - Adding event handler to an onclick event.
*/
