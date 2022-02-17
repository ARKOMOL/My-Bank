const calculate = document.getElementById('calculate-btn');

//=========function==========

function leftcash(firstbalance , secBalance) {
    const result = firstbalance <secBalance
    return result;
}

calculate.addEventListener('click', function () {

    const foodValue = document.getElementById('food').value;
    const rentValue = document.getElementById('rent').value;
    const clotheValue = document.getElementById('clothes').value;
    const income = document.getElementById('income').value;
    const food = parseFloat(foodValue);
    const myRent = parseFloat(rentValue);
    const clothes = parseFloat(clotheValue);

    //=======Minus number error=======
    if (
        food < 0 ||
        myRent < 0 ||
        clothes < 0 ||
        income < 0) {
        alert('Empty input or minus number is not allowed')
    };
   //=======numbre error=========== 
    if (isNaN(food) || isNaN(myRent) || isNaN(clothes) || isNaN(income) === true) {
        alert('Enter a valid number')
    }
        // total balance left 
    const total = food + myRent + clothes;
    const restBalance = income - total;

    //=======alert message 1=========
   
    if(leftcash(income,total)) {
        alert("Hey,Don't cross your Budget🐸");

    } else {
        const balance = document.getElementById('balance');
        balance.innerText = restBalance;
        document.getElementById('total-expense').innerText = total;
    }
})
//=======savings part=======

const saveBtn = document.getElementById('save')
saveBtn.addEventListener('click', function () {
    const percentages = document.getElementById('percentage').value;
    const income = document.getElementById('income').value;
    const savings = (income * percentages) / 100;
    const leftBalance = balance.innerText;
    const remaingBalance = document.getElementById('reamianing-balance');

    //=======alert message 2=========

    if(leftcash(leftBalance,savings))
    {
        alert("You cross your expenses,and savings is not possible");
    } else {
        document.getElementById('save-amount').innerText = savings;
        remaingBalance.innerText = leftBalance - savings;
    }
})