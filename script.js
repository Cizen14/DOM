console.log("here");

const titles=(document.getElementsByTagName("h1"));
const title2=(document.getElementsByTagName("h2"));
title2[0].style.fontSize = "30px";


//create a new element

const link = document.createElement("a");
console.log(link);
link.setAttribute("href", "https://google.com");
link.innerText ="Google";


const commentsection= document.getElementById("comment-section")
console.log(commentsection);
const commenttitle= document.getElementsByClassName("comments-title")
console.log(commenttitle);

console.log(document.querySelector(".paragraph"));


// titles[0].setAttribute('class', 'documentTitle')
commenttitle[0].setAttribute("style", "color : green");

const submitButton = document.querySelector("#comment-section button");
console.log(submitButton);

console.log(commenttitle[0].innerHTML);
console.log(commentsection.innerText);
commentsection.style.backgroundColor = "gray";
commentsection.style.padding = "10px";

commenttitle[0].innerHTML = "<p> This is a new section </p>";



//append child 
commentsection.appendChild(link);


//Event  On Click
submitButton.addEventListener("click",function (){
    
    titles[0].setAttribute('class', 'documentTitle')
    // titles[0].style.color ="green";
   
    
    
})


    setTimeout(() => {
        title2[0].setAttribute('class', 'dom')
    }, 3000);




// add contact details
const addName = document.querySelector('.name')
const addAddress = document.querySelector('.address')
const addButton = document.querySelector('.btn');
const addDetails = document.querySelector('.details');


addButton.addEventListener('click', () =>{
    console.log('the add button is clicked')
    const nameValue =addName.value;
    const nameAddress =addAddress.value;
    
    const spanDetail = document.createElement ('p');
    const removeBtun = document.createElement('button');
    removeBtun.innerHTML='remove';
    spanDetail.innerHTML = `<span> ${nameValue}</span> -  <span> ${nameAddress}</span>  `
    addDetails.appendChild(spanDetail);
    spanDetail.appendChild(removeBtun);
    removeBtun.addEventListener('click', ()=>{
        
        addDetails.removeChild(spanDetail);
        
    })

});




