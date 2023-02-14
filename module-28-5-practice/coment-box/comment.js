// add event handler in comment button
document.getElementById("button-add").addEventListener('click', function () {
     const commentField = document.getElementById("comment-filed");
     commentFieldValue = commentField.value;

     const p = document.createElement("p");
     p.innerText = commentFieldValue;

     const commentContainer = document.getElementById("comment-container");
     commentContainer.appendChild(p);

     // clear comment field
     commentField.value = '';
})