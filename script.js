
const button = document.querySelector(".btn");
button.addEventListener("click", function (e) {
    e.preventDefault();
    let mobileNumber = 1797768858;
    let pin = 3344;

    let userMobileNumber = parseInt(document.getElementById("mobile-number").value);
    let userPin = parseInt(document.getElementById("pin-number").value);
    if (userMobileNumber === mobileNumber && userPin === pin && mobileNumber.length === userMobileNumber.length && pin.length === userPin.length) {
        window.location.href = "./home.html";
    } else {
        alert("Invalid Credentials!!!!!!!!")
    }
});