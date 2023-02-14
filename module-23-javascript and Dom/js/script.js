console.log(4 + 5);
console.log(document.getElementsByTagName("p"));

/* const student = { name: 'munna', age: 22 };
console.log(student); */

/* const tagName = document.getElementsByTagName("h1");
for (const h1 of tagName) {
     console.log(h1.innerText);
} */

const articleFirst = document.getElementById("headArticleFirst");
console.log(articleFirst);

// const mainPart = document.getElementsByClassName("main-part");
// mainPart.style.textAlign = "center";
// console.log(mainPart);

const mainFirst = document.getElementById("main-first-article");
mainFirst.style.textAlign = "center";
mainFirst.style.backgroundColor = "yellow"
mainFirst.style.color = "white";
mainFirst.style.borderRadius = "20px";
mainFirst.style.margin = "20px";
mainFirst.style.padding = "20px";
console.log(mainFirst);

const mainSecond = document.getElementById("main-second-article");
mainSecond.style.textAlign = "center";
mainSecond.style.backgroundColor = "blue";
mainSecond.style.color = "white";
mainSecond.style.borderRadius = "12px";
console.log(mainSecond);


// create html Element and add 
// create first Element
const h3 = document.createElement("h3");
h3.innerText = "zonaet munna blog";
// where to add 
const article = document.getElementById("headArticleFirst");
article.append(h3);

