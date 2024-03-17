//FE1AB131CDE1FA6AED46DDEBC319947B4483CC29603660D4E1C66E07E4D7D78DB19649BFC192D7038DE87CE441B8BEEB
//BC93B4CAF047DE9A95958F72B661AF6B4C5F
function SubmitForm() {
    try{
                    Email.send({ 
                    Host : "smtp.elasticemail.com", 
                    Username : "andisanimudau101@gmail.com", 
                    Password : "BC93B4CAF047DE9A95958F72B661AF6B4C5F", 
                    To : 'ocnetworks9200@gmail.com', 
                    From : document.getElementById("email").value, 
                    Subject : "New Query from Client", 
                    Body : "Name: " + document.getElementById("email").value 
                            + "<br>" +
                            "E-mail: " + document.getElementById("phone").value
                            + "<br>" +
                            "Message: " + document.getElementById("message").value //`enter code here`
                            
                })
    .then(res=>{
        console.log(res);
        alert("Form sent");
    });
    } catch(err) {
                    console.log(err)
    }
}

function SubmitFormIndex() {

    try{

                    Email.send({ 
                    Host : "smtp.elasticemail.com", 
                    Username : "andisanimudau101@gmail.com", 
                    Password : "BC93B4CAF047DE9A95958F72B661AF6B4C5F", 
                    To : 'ocnetworks9200@gmail.com', 
                    From : document.getElementById("email").value, 
                    Subject : "New Query from Client", 
                    Body : "Name: " + document.getElementById("email").value 
                            + "<br>" +
                            "E-mail: " + document.getElementById("phone").value
                            + "<br>" +
                            "Message: " + document.getElementById("message").value //`enter code here`
                            
                })
    .then(res=>{
        console.log(res);
        alert("Form sent");
    });
    } catch(err) {
                    console.log(err)
    }
}