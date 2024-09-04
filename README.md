# Server.js

This file contains the server-side JavaScript code for handling various events related to the 'submit' buttons in the application.

## json-server

`json-server` is a simple tool for setting up a JSON-based REST API. It's perfect for mocking up data, developing front-end code without a back-end, or even developing a full-fledged REST API. In this project, we use `json-server` to serve our notes data.

To install `json-server`, run the following command in your terminal:

```bash
npm install -g json-server

## Event Handlers

There are three event handlers, each associated with a different 'submit' button (identified by the IDs 'submit', 'submit1', and 'submit2'). Each event handler performs the following actions:

1. Prevents the default form submission action.
2. Removes all 'li' elements from the document.
3. Sends a fetch request to "http://localhost:3001/notes".
4. Converts the response to JSON.
5. Iterates over the data received from the fetch request, creating a new 'li' element for each item in the data. The content of the 'li' element is set to the 'content' property of the item.
6. Appends the new 'li' element to the 'notes' unordered list in the document.

## Error Handling

If an error occurs during the fetch request or the processing of the data, the error is logged to the console.

## Disabled Buttons

Once the data has been successfully fetched and processed, the 'submit' button associated with the event handler is disabled to prevent further submissions.

## Code

Here is the code snippet from server.js:

```javascript
document.querySelectorAll('input[type="submit"]').forEach((el) => {
  if (el.id === "submit") {
    el.addEventListener("click", (e) => {
      e.preventDefault();
      document.querySelectorAll("li").forEach((el) => {
        el.remove();
      });
      fetch("http://localhost:3001/notes")
        .then((res) => {
          return res.json();
        })
        .then((data) => {
          for (let i = 0; i < data.length; i++) {
            const ul = document.getElementById("notes");
            let li = document.createElement("li");
            li.textContent = data[i].content;
            ul.appendChild(li);
          }
        })
        .catch((err) => {
          console.log(err);
        });
    });
  } 
});