// Butonları seçmek

const add = document.querySelector("#add");
const del = document.querySelector("#delete");
const clear = document.querySelector("#clear");

// Input Seçimleri

const addkey = document.querySelector("#addkey");
const addvalue = document.querySelector("#addvalue");
const deletekey = document.querySelector("#deletekey");


add.addEventListener("click", addItem);
del.addEventListener("click", deleteItem);
clear.addEventListener("click", clearItems);

function addItem(e) {
    sessionStorage.setItem(addkey.value, addvalue.value); // session storageye add key ve add value dan gelen valueleri ekler
}


function deleteItem(e) {
    sessionStorage.removeItem(deletekey.value); // Session storage de deletekey den gelen value'yi siler
}


function clearItems(e) {
    sessionStorage.clear();
}