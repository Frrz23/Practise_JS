let title=document.getElementById("bored");
let description=document.getElementById("selfish");
let form=document.querySelector("form");
let container=document.querySelector(".container");


// console.log(title);
// console.log(description);
// console.log(form);
// console.log(container);


const tasks=localStorage.getItem("task")?JSON.parse(localStorage.getItem("task")) : [];
showAllTask();
function showAllTask() {
    tasks.forEach((value,index)=>{
        let div =document.createElement("div");
        div.setAttribute("class","task");


        let innerDiv = document.createElement("div");
        div.append(innerDiv)

        let p=document.createElement("p");
        p.innerText=value.title
        innerDiv.append(p);



        let span=document.createElement("span");
        span.innerText=value.description
        innerDiv.append(span);

        let btn =document.createElement("button");
        btn.setAttribute("class","deletebtn");
        btn.innerText="-";

        btn.addEventListener("click", () => {
            removetasks();
            tasks.splice(index, 1);
            localStorage.setItem("task",JSON.stringify(tasks));
        });

        div.append(btn);
        container.append(div);
    });
}

function removetasks(){
    tasks.forEach((value)=>{
        let div = document.querySelector(".task");
        div.remove();
    });
}

form.addEventListener("submit", (e) => {
    e.preventDefault();
    tasks.push({
        title: title.value,
        description: description.value,
    });

    localStorage.setItem("task",JSON.stringify(tasks));
    showAllTask();
    console.log(tasks);
});
