
let username;
document.getElementById("mysubmit").onclick= function() {
    username = document.getElementById("userInput").value;
    document.getElementById("name").innerHTML = "Hello, " + username + "!";
}