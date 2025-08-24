document.getElementById('addMoney').addEventListener('click', (e) => {
    e.preventDefault();
    const bankName = document.getElementById('bankName').value;
    const accountNumber = parseInt(document.getElementById('accountNumber').value);
    const amountToAdd = parseFloat(document.getElementById('amountToAdd').value);
    const pin2 = parseInt(document.getElementById('pin2').value);
    let prevAmount = parseFloat(document.getElementById('balance').innerText);
    let pinNumber = 3344;


    if (bankName === 'Select a bank' || accountNumber === '' || amountToAdd === ' ' || pin2 === '') {
        alert('Please fill all the fields');
        return;
    }
    if (document.getElementById("accountNumber").value.length < 11) {
        alert("Please enter a valid account number");
        return;
    }
    if (pin2 !== pinNumber) {
        alert('Please enter a valid pin');
        return;
    }

    let newAmount = parseFloat(prevAmount + amountToAdd).toFixed(2);
    document.getElementById('balance').innerText = newAmount;

})
