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
    let forms = document.getElementsByClassName('form')

    for (let form of forms) {
        console.log(form);
        form.classList.add('hidden');
    }

    document.getElementById('add-money-parent').classList.remove('hidden')
    document.getElementById('add-money-parent').classList.add('block')

})
//Cash out section
document.getElementById('cashOut').addEventListener('click', () => {
    let forms = document.getElementsByClassName('form')

    for (let form of forms) {
        console.log(form);
        form.classList.add('hidden');
    }

    document.getElementById('cashoutParent').classList.remove('hidden')
    document.getElementById('cashoutParent').classList.add('block')

})

//transfer money section toggle

document.getElementById('transferMoney').addEventListener('click', () => {
    let forms = document.getElementsByClassName('form')

    for (let form of forms) {
        console.log(form);
        form.classList.add('hidden');
    }

    document.getElementById('transferMoneyParent').classList.remove('hidden')
    document.getElementById('transferMoneyParent').classList.add('block')
})

//cashout Button starts here
document.getElementById("Cashbtn").addEventListener("click", (e) => {
    e.preventDefault();
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

//transfer Button click starts here

document.getElementById('transferBtn').addEventListener('click', (e) => {
    e.preventDefault();
    console.log('clicked');
    const pinNumber = 3344;
    const pin2 = parseInt(document.getElementById('transferPin').value);
    let mainBalance = parseFloat(document.getElementById('balance').innerText);

    // validate account number
    if (document.getElementById("transferAccountNumber").value.length < 11) {
        alert("Please enter a valid account number");
        return;
    }

    // validate pin
    if (pin2 !== pinNumber) {
        alert('Please enter a valid pin');
        return;
    }

    // validate balance
    if (mainBalance < parseFloat(document.getElementById('userTransfer').value)) {
        alert('Insufficient Balance');
        return;
    }

    // update balance
    let newAmount = (mainBalance - parseFloat(document.getElementById('userTransfer').value)).toFixed(2);
    document.getElementById('balance').innerText = newAmount;
});
