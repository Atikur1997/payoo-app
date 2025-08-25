const cashOutParent = document.getElementById('cashoutParent');

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

// toggling features

document.getElementById('addMoneyBtn').addEventListener('click', () => {
    cashOutParent.classList.add('hidden');
    document.getElementById('add-money-parent').classList.remove('hidden');
    document.getElementById('add-money-parent').classList.add('block');
})
//Cash out section
document.getElementById('cashOut').addEventListener('click', () => {
    cashOutParent.classList.remove('hidden');
    cashOutParent.classList.add('block');
    document.getElementById('add-money-parent').classList.add('hidden');

})

document.getElementById("Cashbtn").addEventListener("click", () => {

    const pinNumber = 3344;
    const pin2 = parseInt(document.getElementById('pinCashOut').value);
    let mainBalance = parseFloat(document.getElementById('balance').innerText)


    if (document.getElementById("accountNumber1").value.length < 11) {
        alert("Please enter a valid account number");
        return;
    }
    if (pin2 !== pinNumber) {
        alert('Please enter a valid pin');
        return;
    }
    if (parseFloat(document.getElementById('balance').innerText) < parseFloat(document.getElementById('amountToWithdraw').value)) {
        alert('Insufficient Balance');
        return;
    }

    let newAmount = parseFloat(mainBalance - parseFloat(document.getElementById('amountToWithdraw').value)).toFixed(2);
    document.getElementById('balance').innerText = newAmount;
})

