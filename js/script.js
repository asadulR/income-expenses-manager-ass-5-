
// get income and expenses input value by using function
function getIncomeAndExpensesNumber(id){
    const itemId = document.getElementById(id);
    const itemValue = parseInt(itemId.value);
    // const typeError = document.getElementById('cost-input-error');
        return itemValue;
   
}


// setting total expenses by useing function
function getTotalExpensesAndBalance(){
    //  calling function to get value
    const foodCost = getIncomeAndExpensesNumber('food-cost');
    const rentCost = getIncomeAndExpensesNumber('rent-cost');
    const clothesCost = getIncomeAndExpensesNumber('clothes-cost');
    //  income value and error handele
    const income = getIncomeAndExpensesNumber('income');
    const extraCostError = document.getElementById('extra-cost-input-error');
    const incomeError = document.getElementById('income-error');

    const totalExpense = document.getElementById('total-expenses');
    //  summation of expenses
    const totalExpenses = foodCost + rentCost + clothesCost;
    
    //  adding and updating balance
    const balanceId = document.getElementById('balance');
    const balance = income - totalExpenses;


    //  expenses can not be greatter than income
    if(totalExpenses > income){
        extraCostError.classList.remove('d-none');
    }
            // input must be a positive number
    else if(income < 0){
        incomeError.classList.remove('d-none');
    }
    //  if income is greatter or equal to expenses
    else{
        totalExpense.innerText = totalExpenses;
        balanceId.innerText = balance;
        extraCostError.classList.add('d-none');
        incomeError.classList.add('d-none');
    }
}


function saveMoney(){
    const saveInput = document.getElementById('save-rate');
    const saveRate = parseFloat(saveInput.value);
    const balance = document.getElementById('balance');
    const balanceValue = Number(balance.innerText);
    const saveing = (balanceValue * saveRate) / 100;

    // remaining balance
    const remainingBalance = balanceValue - saveing;

    const savingAmount = document.getElementById('saving-amount');

    //  error handele
    const saveInputError = document.getElementById('save-input-error');
    const extraSaveError = document.getElementById('extra-save-error');
    //  saving input value have to be a positive number
    if(saveRate < 0){
        saveInputError.classList.remove('d-none')
    }

    else if(saveRate <= 100){
        savingAmount.innerText = saveing;
        document.getElementById('remaining-balance').innerText = remainingBalance;
    }
    //  saving amount can't be more than balance amount
    else{
        extraSaveError.classList.remove('d-none')

    }
}



//  clicking the calculation button
document.getElementById('calculate-btn').addEventListener('click', function(){
    getTotalExpensesAndBalance();
    errorMessage();

})

document.getElementById('save-btn').addEventListener('click', function(){
    saveMoney()
})



//  expenses input error handle 1
function errorMessage(){
    const typeError = document.getElementById("cost-input-error");
    const dataTypeError = document.getElementById('cost-datatype-error');
    const foodCost = document.getElementById('food-cost').value;
    const rentCost = document.getElementById('rent-cost').value;
    const clothesCost = document.getElementById('clothes-cost').value;
    if(foodCost < 0 || rentCost < 0 || clothesCost < 0){
        typeError.classList.remove('d-none')
    }
   
}