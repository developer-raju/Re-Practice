// Handle deposit button
document.getElementById('deposit-button').addEventListener('click', function(){
    // step:1 console.log('clicked');
    const depositInput = document.getElementById('deposit-input');
    const depositAmountText = depositInput.value; /* value store */
    const depositAmount = parseFloat(depositAmountText);
    // console.log(depositAmount);

    // step:2 get current deposit
    const depositTotal = document.getElementById('deposit-total');
    const depositTotalText = depositTotal.innerText;
    const previousDepositTotal = parseFloat(depositTotalText);
    depositTotal.innerText = previousDepositTotal + depositAmount;
    // console.log(depositTotalText);

    // Step:3 Clear Input Field
    depositInput.value = '';
})


// Handle withdraw button
document.getElementById('withdraw-button').addEventListener('click', function(){
    // console.log('Withdraw process');
    const withdrawInput = document.getElementById('withdraw-input');
    const withdrawAmount = withdrawInput.value;
    // console.log(withdrawAmount);

    // step:2 get current withdraw
    const withdrawTotal = document.getElementById('withdraw-total');
    const withdrawTotalText = withdrawTotal.innerText;
    withdrawTotal.innerText = withdrawAmount;
    // console.log(withdrawTotalText);

    // Step:3 Clear Input Field 
    withdrawInput.value = '';


    // Upadate Balance After Withdraw 
    const balanceTotal = document.getElementById('balance-total');
    const balanceTotalText = balanceTotal.innerText;
    const previousBalanceTotal = parseFloat(balanceTotalText);

    balanceTotal.innerText = previousBalanceTotal - withdrawAmount;
})







