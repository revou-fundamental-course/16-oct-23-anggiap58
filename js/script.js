function replaceName() {
    let username = prompt("halo, siapakah nama anda?", "");
    document.getElementById("username").innerHTML = username
}

replaceName();

function validateForm(){
    console.log("check");
    const name = document.forms["message-form"]["nama"].value;
    const birthDate = document.forms["message-form"]["birthdate"].value;
    const gender = document.forms["message-form"]["jenkel"].value;
    const messages = document.forms["message-form"]["messages"].value;
    
    if(name == "" || birthDate == ""|| gender==""||messages==""){
    alert("Tidak boleh ada yang kosong");
    return false;
    }
    
    setSenderUI(name, birthDate, gender, messages);
    return false;
    
    
    }
    function setSenderUI(name, birthDate, gender, messages){
        document.getElementById("sender-fullname").innerHTML = name;
        document.getElementById("sender-birthdate").innerHTML= birthDate;
        document.getElementById("sender-gender").innerHTML = gender;
        document.getElementById("sender-messages").innerHTML=messages;
    }

    var slideIndex = 1;
    showDivs(slideIndex);

    function plusDivs(n){
        showDivs(slideIndex +=n);
        }
    function showDivs(n){
        var i;
        var imglist = document.getElementsByClassName("img-slideshow");
        if (n > imglist.length){slideIndex = 1}
        if (n < 1){slideIndex=imglist.length};
        for(i=0;i < imglist.length; i++){
            imglist[i].style.display="none";
        }
        imglist[slideIndex-1].style.display = "block";
    }
    setInterval(()=>{
        plusDivs(1);
    },3000);