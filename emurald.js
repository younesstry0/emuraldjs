function $(id){
    return document.getElementById(id);
    console.log("hello");
}
function delay(time) {
    return new Promise(resolve => setTimeout(resolve, time));
}
function not(bool){
    return !bool;
}
