
//1. add button event handler
document.getElementById("submit-comment").addEventListener('click', function () {

     //2. get user comment
     const commentBox = document.getElementById("new-comment");
     // const userComment = commentBox.value;
     // console.log(userComment);

     // 3 create comment space for set user comment
     const newComment = document.createElement("p");
     newComment.innerText = commentBox.value;

     // 4 add comment 
     const commentContainer = document.getElementById("comment-container");
     commentContainer.appendChild(newComment);

     // clean the comment box
     commentBox.value = '';

})