function $(id){
    return document.getElementById(id);
}
function delay(time) {
    return new Promise(resolve => setTimeout(resolve, time));
}
function not(bool){
    return !bool;
}
