// const btn = document.querySelector("#btn");
// const cards=document.querySelector(".cards");
// const input=document.querySelector("#input");
//
//
//
// const  creatCards=function () {
//     if (!input.value.trim()) return alert("error");
//
//     const  div=document.createElement("div");
//     const text=document.createElement("h2");
//     text.innerHTML="title";
//     div.append(text);
//     div.setAttribute("class", "card");
//     cards.append(div);
//     input.value="";
// };
// btn.addEventListener("click",function(e) {
//     console.log("click")
// });
//
// btn.addEventListener("click", creatCards);
//

//
// todo

// const btn = document.querySelector("#btn");
// const cards=document.querySelector("#create_btn");
// const input=document.querySelector("#todo_list");
// const createTodo = function () {
//     if (!input.value.trimEnd()) return alert("error");
//     const div = document.createElement("div");
//     const div = document.createElement("h3");
//
//     div.setAttribute("class", "black_text");
//
//     text.innerText= input.value;
//     div.append(text);
//     todos.append(div);
//      input.value="";
// };
//
//
// btn.addEventListener("click",createTodo);
//  input.setAttribute()




const input=document.querySelector("#input");
const btn=document.querySelector("#create_btn");
const todos=document.querySelector("#todo_list");

const createTodo=function () {
    if (!input.value.trim()) return alert("Write something");

    const div=document.createElement("div");
    const text=document.createElement("h3");
    const btns=document.createElement("div");
    const deletebtn=document.createElement("button");
    const editbtn=document.createElement("button");

    div.setAttribute("class","block_text");
    btns.setAttribute("class","buttons_div");
    deletebtn.setAttribute("class","delete_button");
    editbtn.setAttribute("class","edit_button");

    text.innerText=input.value;
    deletebtn.innerText="delete";
    editbtn.innerText="edit";

    btns.append(editbtn,deletebtn);
    div.append(text,btns);
    todos.append(div);
    deletebtn.addEventListener("click",function (){
        div.remove();
    });
    editbtn.addEventListener("click", function (){

        const newText= prompt("Edit :"+ text.innerText).trim();
        if (!newText) return alert("error");
        if (newText) text.innerText=newText;
    });
    input.value="";
};


btn.addEventListener("click", createTodo);

input.addEventListener("keydown",function (e) {
    if (e.key === "Enter") createTodo();
    console.log(e);
});
