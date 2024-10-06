
// Redirect the location after 5 sec

function rederectLocation(){
    window.location = "/view/home.html";
}

setTimeout(() => {
    rederectLocation()
}, 5000);