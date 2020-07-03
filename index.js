var peer = require("simple-peer");

var peer = new peer({
    initiator : location.hash == "#init",
    trickle : false
});

peer.on("signal",function(data){
    console.log(data);
    document.getElementById("myId").value= JSON.stringify(data);
})

document.getElementById("connect").addEventListener("click",()=>{
    var otherId = JSON.parse(document.getElementById("otherId").value);
    console.log(otherId);
    peer.signal(otherId);
});

document.getElementById("send").addEventListener("click",()=>{
    var message = document.getElementById("message").value;
    peer.send(message);
})

peer.on("data",function(data){
    document.getElementById("receive").textContent+=data+"\n";
});
