// slecet element  for event handler
document.getElementById("submit-commet").addEventListener('click', function () {
     //2. get input comment
     const commentBox = document.getElementById("comment-box");
     let getComment = commentBox.value;

     //3. create new element for receive comment
     const newElement = document.createElement("p");
     newElement.innerText = getComment;

     //4. add comment any parent element
     const parentElement = document.getElementById("comment-container");
     parentElement.appendChild(newElement);

     // 5. after write comment than clear comment box/ textarea display
     commentBox.value = '';


});