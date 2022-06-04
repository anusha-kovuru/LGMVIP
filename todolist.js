document.querySelector("#add-icon").onclick=function(){
    if(document.querySelector("#newlist input").value.length==0){
    
        alert("Enter a task")
    }
    else{
        document.querySelector("#tasks").innerHTML+=
        `
        <div class="task">
        <span id="taskname">${document.querySelector("#newlist input").value}</span>
        <button class="delete">
        <i class="fa-solid fa-xmark"></i>
        </button>
        </div>
        `;
        var current_tasks=document.querySelectorAll(".delete");
        for(var i=0;i<current_tasks.length;i++){
          current_tasks[i].onclick=function(){
              this.parentNode.remove();
          }  
        }
        var tasks=document.querySelectorAll(".task");
        for(var i=0;i<tasks.length;i++){
            tasks[i].onclick=function(){
                this.classList.toggle("done");
            }
        }
        document.querySelector("#newlist input").value='';
    }
}