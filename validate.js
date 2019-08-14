//validation of elements
const validate = () => {
    const userId = document.getElementById("userId");
    const password = document.getElementById("password");
    const name = document.getElementById("user-name");
    const address = document.getElementById("address");
    const country = document.getElementById("country");
    const zip = document.getElementById("zip");
    const email = document.getElementById("email");
    const sex = document.getElementById("sex");
    const language = document.getElementById("language");
    const textarea = document.getElementById("textarea");

    // checking userId validation
    if(userId.value.length < 5 || userId.value.length >= 13)
{
    alert("Required and must be of length 5 to 12.");


}
else{
    userId.style.border = '2px solid green';
}

// checking password validation
if(password.value.length < 5 || password.value.length >= 13)
{  
    alert("Required and must be of length 7 to 12.");
    
}
else{
    password.style.border = '2px solid green';
}

//checking name validation
const letters = /^[A-Za-z]+$/;
if(name.value.match(letters))
{
    name.style.border = "2px solid green";
    
   

}
else
{
    alert("Required and alphabates only.");


}

//checking address validation
const add = /^[0-9a-zA-Z]+$/;
if(address.value.match(add))
{
    address.style.border = "2px solid green"; 

}
else
{
alert('optional');
 
}

//checking function countryselect
if(country.value=="")
{
    alert("Required must select a country");
    country.style.border="2px solid red";
    
}
else
{

}

//checking zip validation
const zp = /^[0-9]{5,12}$/;
if(zip.value.match(zp))
{
zip.style.border="2px solid green";

}
 else  
{
    alert("Required. Must be numeric only.");
    zip.style.border="2px solid red";
}

//checking email validation
const ema = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
if(email.value.match(ema))

{
    email.style.border="2px solid green";
}
else{
    alert("Required. Must be valid email.");
    email.style.border="2px solid red";
}

//checking sex
if(sex.value=="")
{
    alert("Request");
    sex.style.border="2px solid red";
}

//checking language validation
if(Language.value=="")
{
    alert("Required");
    language.style.border="2px solid red";
}

// checking textarea validation
if(textarea.value=="")
{
    alert("Optional.")
    textarea.style.border="2px solid red.";
}
}