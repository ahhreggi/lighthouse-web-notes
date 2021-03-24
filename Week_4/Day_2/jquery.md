# Client-side JavaScript

You can access and change elements on the DOM directly via `document`.

```
document.body.children[0].children[0]...
```

To add an event listener:

```
document.addEventListener("click", event => {
  console.log("Clicked!");
});
```

# jQuery

**jQuery** makes it much easier to use JavaScript by providing methods that you can use in place of multiple lines of code - "write less, do more".

```
<head>
  <script src="scripts/jquery-3.6.0.min.js"></script>
</head>
```

It doesn't replace JavaSCript, rather it supplements it.

```
document.querySelector("header img").src; // to read
document.querySelector("header img").src = "newimg.gif"; // to replace

// jQuery:

$("header img").attr("src"); // to read
$("header img").attr("src", "newimg.gif"); // to replace

$("h1").text("POTATO") // changes all of the h1s
```

To create a new element:

```
const newImage = $("<img>").attr("src", "/images/image.gif");

$(".result").append(newImage); // adds the image to elements with the class "result"

$("section").append(newImage); // adds the image to all section elements
```

Listening to clicks:
```
$(".my-class").on("click", event => console.log("clicked my class"))
```

Wait for the document to be ready before adding things to it:
```
// define functions, etc.

$(document).ready(() => {

  // do stuff
  
});
```
To create a new element:
```
const newArticle = $("<article>");
newArticle.append("This is a new article");
```