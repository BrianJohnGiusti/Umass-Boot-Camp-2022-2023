 /*
1. Select the section with an id of container without using querySelector.
2. Select the section with an id of container using querySelector.
3. Select all of the list items with a class of “second”.
4. Select a list item with a class of third, but only the list item inside of the ol tag.
5. Give the section with an id of container the text “Hello!”.
6. Add the class main to the div with a class of footer.
7. Remove the class main on the div with a class of footer.
8. Create a new li element.
9. Give the li the text “four”.
10. Append the li to the ul element.
11. Loop over all of the lis inside the ol tag and give them a background color of “green”.
12. Remove the div with a class of footer
*/ 

//1
const withoutQuerySecletor = document.getElementsByTagName("container");
console.log("Here is number 1 " + withoutQuerySecletor);

//2 
const withQuerySecletor = document.querySelector("#container");
console.log("Here is number 2 " + withQuerySecletor);

//3 
const allSecond = document.querySelectorAll(".second");
console.log("Here is number 3 " + allSecond);

//4
const onlyThird = document.querySelector("ol");
console.log("Here is number 4 " + onlyThird.children[3]);

const onlyThirdFromSolutions = document.querySelector("ol .third");
console.log("Here is number 4.2 " + onlyThird);

//5

//if you let this run then container will remove the content according to the answer key
//let sectionHello = document.querySelector("#container");
//sectionHello.innerText = "Hello!"

//a fix could be
let sectionContainer = document.querySelector("#container");

let newP = document.createElement("p");

newP.innerText = "Hello!";

sectionContainer.append(newP);

//6
let footerClass = document.querySelector(".footer");
footerClass.classList.add("main");
console.log("6 is complete")
//7
//const footerClass = document.querySelector(".footer")
footerClass.classList.remove("main")
console.log("7 is complete")
//8
let newLi = document.createElement("li");
console.log("8 is complete")

//9
newLi.innerText = "four"
console.log("9 is complete")

//10
let ul = document.querySelector("ul");
console.log(ul)
//append from docs not append child like answer key
ul.append(newLi);

//11
let ol = document.querySelector("ol");

allChildren = ol.children;

for(child of allChildren){
    child.style.backgroundColor = "green"
}

//from answer key
/*let liInsideOl = document.querySelectorAll("ol li");

for(let i = 0; i < liInsideOl.length; i++){
   liInsideOl[i].style.backgroundColor = "green";
}
*/
//12
const footer = document.querySelector(".footer");
footer.remove();


//main errors in my code 
//CSS tags such as . and # need to go into query selector
