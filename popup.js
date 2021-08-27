$(function(){

$('#btn').click(function removeNode(){
    
    const myDiv = document.getElementById("header");
    const parent1 = myDiv.parentNode;
    parent1.removeChild(myDiv);

    const myh1 = document.getElementById("id2");
    const parent2 = myh1.parentNode;
    parent2.removeChild(myh1);

    const mybtn = document.getElementById("btn");
    const parent3 = mybtn.parentNode;
    parent3.removeChild(mybtn);



});

});