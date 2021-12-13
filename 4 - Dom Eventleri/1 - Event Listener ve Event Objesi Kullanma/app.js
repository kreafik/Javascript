const filterInput = document.getElementById("filter");
const todoForm = document.getElementById("todo-form");




todoForm.addEventListener("submit", submitForm);

function submitForm(e){
    console.log("submitForm");





    e.preventDefault(); // örnek olarak default özellikleri engeller yenilenmesini iptal eder

}


// filterInput.onfocus = function(){
//     console.log("Naber");
// }


// filterInput.addEventListener("focus", function(e){

//     // filterInput.setAttribute("placeholder", "yeni bişey deniyorum");
//     console.log(e);

//     console.log(e.type);
//     console.log(e.target);
//     console.log(e.target.placeholder); 


//     // console.log("Naber");


// });


