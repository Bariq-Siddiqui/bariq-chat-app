var massages = document.getElementById("messages");
var textbox = document.getElementById("textbox");
var button = document.getElementById("button");
button.addEventListener("click",function(){
    var newMessage = document.createElement("li");
    newMessage.innerHTML=textbox.value;
    messages.appendChild(newMessage);
    textbox.value="";
});
const signOut = () =>{
    firebase.auth().signOut()
    .then(()=>{
        window.location="index.html";
    })
    .catch(()=>{

    })
} 