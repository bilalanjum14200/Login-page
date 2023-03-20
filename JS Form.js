let body1 = document.querySelector("body");
body1.style.display = "flex";
body1.style.alignItems = "center";
body1.style.justifyContent = "center";
body1.style.backgroundImage = "url('form-background.jpg')";
body1.style.backgroundSize = "cover";

let container = document.querySelector("#container");
container.style.width = "400px";
container.style.height = "500px";
container.style.backgroundColor = "#00000039";
container.style.textAlign = "center";
container.style.paddingTop = "30px";

let heading = document.querySelector("#heading");
heading.style.fontFamily = "Roboto, sans-serif";
heading.style.color = "#fff";
heading.style.marginBottom = "40px";

let fname = document.querySelector("#fname");
fname.style.width = "300px";
fname.style.border = "none";
fname.style.borderBottom = "1px solid white"
fname.style.outline = "none";
fname.style.marginBottom = "30px";
fname.style.height = "25px";
fname.style.paddingLeft = "5px";
fname.style.fontSize = "15px";
fname.style.backgroundColor = "transparent";
fname.style.caretColor = "white";
fname.style.color = "white";

let lname = document.querySelector("#lname");
lname.style.width = "300px";
lname.style.border = "none";
lname.style.borderBottom = "1px solid white"
lname.style.outline = "none";
lname.style.marginBottom = "30px";
lname.style.height = "25px";
lname.style.paddingLeft = "5px";
lname.style.fontSize = "15px";
lname.style.backgroundColor = "transparent";
lname.style.caretColor = "white";
lname.style.color = "white";

let email = document.querySelector("#email");
email.style.width = "300px";
email.style.border = "none";
email.style.borderBottom = "1px solid white"
email.style.outline = "none";
email.style.marginBottom = "30px";
email.style.height = "25px";
email.style.paddingLeft = "5px";
email.style.fontSize = "15px";
email.style.backgroundColor = "transparent";
email.style.caretColor = "white";
email.style.color = "white";

let pswrd = document.querySelector("#pswrd");
pswrd.style.width = "300px";
pswrd.style.border = "none";
pswrd.style.borderBottom = "1px solid white"
pswrd.style.outline = "none";
pswrd.style.marginBottom = "30px";
pswrd.style.height = "25px";
pswrd.style.paddingLeft = "5px";
pswrd.style.fontSize = "15px";
pswrd.style.backgroundColor = "transparent";
pswrd.style.caretColor = "white";
pswrd.style.color = "white";

let cnfrm = document.querySelector("#cnfrm");
cnfrm.style.width = "300px";
cnfrm.style.border = "none";
cnfrm.style.borderBottom = "1px solid white"
cnfrm.style.outline = "none";
cnfrm.style.marginBottom = "40px";
cnfrm.style.height = "25px";
cnfrm.style.paddingLeft = "5px";
cnfrm.style.fontSize = "15px";
cnfrm.style.backgroundColor = "transparent";
cnfrm.style.caretColor = "white";
cnfrm.style.color = "white";

let btn = document.querySelector("#btn");
btn.style.backgroundColor = "white";
btn.style.color = "black";
btn.style.border = "white"
btn.style.fontSize = "15px";
btn.style.fontWeight = "bolder";
btn.style.borderRadius = "10px";
btn.style.padding = "8px 126px";

let msg = document.querySelector("#msg");
msg.style.display = "none";

let msg2 = document.querySelector("#msg2");
msg2.style.display = "none";

function submitHandler(e) {
    e.preventDefault();

if(fname.value != "" && lname.value != "" && email.value != "" && pswrd.value != "" && cnfrm.value != ""){
    if(pswrd.value.length >= 8 && pswrd.value == cnfrm.value){
        console.log(fname.value, lname.value, email.value, pswrd.value, cnfrm.value);
        msg2.style.display = "none";
        msg.style.display = "none";

    }
    if(pswrd.value.length < 8){
        msg2.style.display = "block";
        msg2.style.color = "yellow";
        msg2.style.fontWeight = "bolder";
        msg2.style.marginTop = "-30px";
        msg2.style.marginBottom = "30px";
    }
    if(pswrd.value != cnfrm.value){
        msg.style.display = "block";
        msg.style.color = "yellow";
        msg.style.fontWeight = "bolder";
        msg.style.marginTop = "-30px";
        msg.style.marginBottom = "30px";
    }
    else{

    }
        
}
}