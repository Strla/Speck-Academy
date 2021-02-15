const input = document.querySelector("#add");
const  btn = document.querySelector("#btn");
const list = document.querySelector("#list");
var el = document.getElementsByTagName('li');

// funkcija koja omogućuje dodavanje novih proizvoda kada kliknemo gumb Dodaj
btn.onclick = function(){

    var txt = input.value;
    if(txt ==''){
        alert('morate nešto napisati!');
    }else{
        li = document.createElement('li');
        li.innerHTML = txt;
        list.insertBefore(li,list.childNodes[0]);
        input.value = '';
    }

};

