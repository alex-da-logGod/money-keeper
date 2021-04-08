let start = document.getElementById('start')


let budgetValue = document.querySelector('.budget-value'),
 dayBudgetValue = document.querySelector('.daybudget-value'),
 levelValue = document.querySelector('.level-value'),
 expensesValue = document.getElementsByClassName("expenses-value")[0],
 optionalExpensesValue = document.querySelector('.optionalexpenses-value'),
 incomeValue = document.querySelector('.income-value'),
 monthSavingsValue = document.querySelector('.monthsavings-value'),
 yearSavingsValue = document.querySelector('.yearsavings-value'),


 expensesItem = document.getElementsByClassName("expenses-item"),
 expensesBtn = document.getElementsByTagName("button")[0],
 optionalExpensesBtn = document.getElementsByTagName("button")[1],
 countBudgetBtn = document.getElementsByTagName("button")[2],
 optionalExpensesItem = document.querySelectorAll(".optionalexpenses-item"),
 incomeItem = document.querySelector(".choose-income"),
 checkSavings = document.querySelector("#savings"),
 sumValue = document.querySelector("#sum"),
 percentValue = document.querySelector("#percent"),
 yearValue = document.querySelector(".year-value"),
 monthValue = document.querySelector(".month-value"),
 dayValue = document.querySelector(".day-value");


let money, time

start.addEventListener('click', function() {
    time = "2021-04-08"
    money = +prompt('Ваш бюджет на месяц?')

    while( isNaN(money) || money === '' || money == null ) {
        money = +prompt('Ваш бюджет на месяц?')
    }

    appData.budget = money
    appData.timeData = time

    budgetValue.textContent = money.toFixed()
    yearValue.value = new Date(Date.parse(time)).getFullYear()
    monthValue.value = new Date(Date.parse(time)).getMonth() + 1
    dayValue.value = new Date(Date.parse(time)).getDate()

})

expensesBtn.addEventListener('click', function() {
    let sum = 0
    for (let i = 0; i < expensesItem.length; i++) {
        let a = expensesItem[i].value
        let b = expensesItem[++i].value

    if (typeof a === 'string' && 
        typeof a !== null &&
        typeof b !== null &&
        a != "" &&
        b != "" &&
        a.length < 50
        ) {
            appData.expenses[a] = b
            sum += +b
        } else {
            i = i - 1
        }
        
    }
    expensesValue.textContent = sum
})

optionalExpensesBtn.addEventListener("click", function () {
    for (let i = 0; i < optionalExpensesItem.length; i++) {
      let opt = optionalExpensesItem[i].value;
      appData.optionalExpenses[i] = opt;
      optionalExpencesValue.textContent += appData.optionalExpenses[i] + " ";
    }
  });
  
  countBudgetBtn.addEventListener("click", function () {
    if (appData.budget != undefined) {
      appData.moneyPerDay = (appData.budget / 30).toFixed();
      dayBudgetValue.textContent = appData.moneyPerDay;
  
      if (appData.moneyPerDay < 100) {
        levelValue.textContent = "минимальный уровеь достатка";
      } else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000) {
        levelValue.textContent = "средний уровень достатка";
      } else if (appData.moneyPerDay > 2000) {
        levelValue.textContent = "высокий уровень достатка";
      } else {
        levelValue.textContent = "произошла ошибка";
      }
    } else {
      dayBudgetValue.textContent = "Произошла ошибка";
    }
  });
  
  incomeItem.addEventListener("input", function () {
    let items = incomeItem.value;
    appData.income = items.split(", ");
    incomeValue.textContent = appData.income;
  });
  
  checkSavings.addEventListener("click", function () {
    if (appData.savings) {
      appData.savings = false;
    } else {
      appData.savings = true;
    }
  });
  
  sumValue.addEventListener("input", function () {
    if (appData.savings) {
      let sum = +sumValue.value,
        percent = +percentValue.value;
  
      appData.monthIncome = (sum / 100 / 12) * percent;
      appData.yearIncome = (sum / 100) * percent;
  
      monthSavingsValue.textContent = appData.monthIncome.toFixed(1);
      yearSavingsValue.textContent = appData.yearIncome.toFixed(1);
    }
  });
  
  percentValue.addEventListener("input", function () {
    if (appData.savings) {
      let sum = +sumValue.value,
        percent = +percentValue.value;
  
      appData.monthIncome = (sum / 100 / 12) * percent;
      appData.yearIncome = (sum / 100) * percent;
  
      monthSavingsValue.textContent = appData.monthIncome.toFixed(1);
      yearSavingsValue.textContent = appData.yearIncome.toFixed(1);
    }
  });




const appData = {
    budget: money,
    timedata: time,
    expenses: {},
    optionalExpenses: {},
    income: [],
    savings: false,
}