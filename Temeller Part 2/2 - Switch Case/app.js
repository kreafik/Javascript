

// if (process === "1"){
//     console.log("İşlem 1 Doğru");
// }
// else if (process === "2"){
//     console.log("İşlem 2 Doğru");
// }
// else if (process === "3"){
//     console.log("İşlem 3 Doğru");
// }

// else {
//     console.log("İşlem Kontrolu Sağlayın!"); 
// }


const process = 2;


switch(process) {
    case 1:
        console.log("İşlem 1");
        break;
    case 2:
        console.log("İşlem 2");
         break;
    case 3:
        console.log("İşlem 3");
        break;
    default:
        console.log("Geçersiz İşlem!");
}