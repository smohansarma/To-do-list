
var taskinput=document.getElementById("taskinput")
var addbtn=document.getElementById("addbtn")
var tasklist=document.getElementById("tasklist")

addbtn.addEventListener("click",function(){
    let task=taskinput.value.trim()
    if(task === ""){
        alert("please enter a task!");
        return;
    }
    let list=document.createElement("li")
    list.textContent=task;
  
    taskinput.value=""
    
    let deletebtn=document.createElement("button")
    deletebtn.textContent="❌"
    deletebtn.classList.add("deletetask")
    
    deletebtn.addEventListener("click",function(event){
        event.stopPropagation();
        list.remove()
    })
   
      list.addEventListener("click", function () {
    list.classList.toggle("completed"); 
  });
    list.append(deletebtn);
    tasklist.append(list)

   });
    taskinput.addEventListener("keypress", function (event) {
  if (event.key === "Enter") {
    addbtn.click(); 
  }
});


    
