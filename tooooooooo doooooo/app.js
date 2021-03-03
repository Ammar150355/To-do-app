
var list =document.getElementById("list")


function addtodo(){
    var todo =document.getElementById("todo")
    var li = document.createElement("li")
    var litext =document.createTextNode(todo.value)
    li.appendChild(litext)
    var dltbtn =document.createElement("button")
    var dlttext =document.createTextNode("Delete")
    dltbtn.setAttribute("class","dltbtn")
    dltbtn.setAttribute("onclick","deletbutton(this)")
    dltbtn.appendChild(dlttext)
    var editbtn =document.createElement("button")
    var edittext =document.createTextNode("Edit")
    editbtn.appendChild(edittext)
    editbtn.setAttribute("class","dltbtn" )
    editbtn.setAttribute("onclick","edititem(this)")
    li.appendChild(dltbtn)
    li.appendChild(editbtn)
    list.appendChild(li)
    todo.value=""


   
}
 
function deletbutton(e){
    e.parentNode.remove()
}
function deleteall(){
    list.innerHTML=""
}
function edititem(e){
 var val =   e.parentNode.firstChild.nodeValue;
 var editvalue=prompt("Enter your edit value",val)
 e.parentNode.firstChild.nodeValue=editvalue
}
