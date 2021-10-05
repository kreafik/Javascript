const name = "Cihan Duran";
const department = "IT";
const salary = 4500;

// const a = "İsim: " + name + "\n" + "Departman: " + department + "\n" + "Bütçe: " + salary;
// const a = `İsim: ${name}\nDepartman: ${department}\nBütçe: ${salary}\n`

// const html = "<ul> " +
//             "<li class="bos">" + name + "</li>" +
//             "<li>" + department + "</li>" +
//             "<li>" + salary + "</li>" +
//             "</ul>";

function a (){
    return "Merhaba!";
}
const html = `
        <ul>
            <li>${name}</li>
            <li>${department}</li>
            <li>${salary}</li>
            <li>${10 / 4}</li>
            <li>${a()}</li>
        </ul>

`;



document.body.innerHTML = html;

