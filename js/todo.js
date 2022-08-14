const todoForm = document.querySelector("#todo-form");
const todo=document.querySelector("#todo-form input");
const ul=document.querySelector("ul");
const TODOS_KEY="todos";
let todoArray=[];


function deleteTodo(event){
    const li =event.target.parentElement;
    todoArray=todoArray.filter(element => String(element.id) !==li.id);
    event.target.parentElement.remove();
    saveTodo();
}
function handlerTodo(event){
    event.preventDefault();
    const todoObj = {id:Date.now(),text:todo.value};
    todo.value="";
    todoArray.push(todoObj);
    paintTodo(todoObj);
    saveTodo();
}
function paintTodo(todoObj){
        const liLength= document.querySelectorAll("li").length;
        if(liLength<10){
            const li=document.createElement("li");
            const span=document.createElement("span");
            const btn = document.createElement("button");
            li.id=todoObj.id;
            btn.innerText="❌";
            btn.addEventListener("click",deleteTodo);
            span.innerText=todoObj.text;
            li.appendChild(span);
            li.appendChild(btn);
            ul.appendChild(li);
        }

}
function saveTodo(){
    localStorage.setItem(TODOS_KEY,JSON.stringify(todoArray));
}



const savedTodos = localStorage.getItem(TODOS_KEY);
if(savedTodos!==null){
    todoArray=JSON.parse(savedTodos);
    todoArray.forEach(paintTodo);
}

todoForm.addEventListener("submit",handlerTodo);

