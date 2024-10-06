
// Redirect the location after 5 sec

function rederectLocation(){
    const pathArray = window.location.pathname.split('/');
    const repositoryName = pathArray[1];
    console.log(repositoryName);
    
    //window.location = `/${repositoryName}/view/home.html`;
}

setTimeout(() => {
    rederectLocation()
}, 5000);
