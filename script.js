const input = document.querySelector("#add");
const  btn = document.querySelector("#btn");
const list = document.querySelector("#list");

// dodavanje novih proizvoda gumb Dodaj
btn.onclick = function(){

    let txt = input.value;
    let li;
    if (txt === '') {
        alert('morate nešto napisati!');
    } else {
        li = document.createElement('li');
        li.innerHTML = txt;
        list.insertBefore(li, list.childNodes[0]);
        input.value = '';
    }

};

// brisanje svih unešenih proizvoda gumb Obriši
function deleteAll(){
    var todo =  document.getElementById("list");
    var lis = todo.getElementsByTagName("li");
    console.log(lis);
    while(lis.length > 0){
        todo.removeChild(lis[0]);
    }
};

