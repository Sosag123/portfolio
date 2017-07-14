function sumbitcontactform(){
    var x= document.forms["contactform"]["name"].value;
    if(x==""){
        alert("name must be filled out");
        return false;
    } else {
        alert('thank you for submitting the form');
    }
}


    

        

