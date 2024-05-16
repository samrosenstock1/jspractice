function changeAddress(){
    console.log("Made it")
    var home = document.querySelector("#home")
    var business = document.querySelector("#bill")
    var is_checked = document.querySelector("#sameAddress").checked

    if (is_checked == true){
        home.value = business.value
    }
    else {
        home.value = ""
    }
}