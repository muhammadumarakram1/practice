'use strict';

// BANKIST APP

// Data
const account1 = {
  owner: 'Jonas Schmedtmann',
  movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
  interestRate: 1.2, // %
  pin: 1111,
};
const account2 = {
  owner: 'Jessica Davis',
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,
};
const account3 = {
  owner: 'Steven Thomas Williams',
  movements: [200, -200, 340, -300, -20, 50, 400, -460],
  interestRate: 0.7,
  pin: 3333,
};
const account4 = {
  owner: 'Sarah Smith',
  movements: [430, 1000, 700, 50, 90],
  interestRate: 1,
  pin: 4444,
};
const account5 = {
  owner: 'Umar Akram',
  movements: [2000, 4500, -4000, 30000, -6500, -1300, 700, 13000],
  interestRate: 1,
  pin: 1122,
};

const accounts = [account1, account2, account3, account4, account5];
let currentAccount;
let sorted = false;

// Elements
const labelWelcome = document.querySelector('.welcome');
const invalidAlert = document.querySelector('.hidden');
const invalidAlertHeading = document.querySelector('.hidden-h1');
const labelDate = document.querySelector('.date');
const labelBalance = document.querySelector('.balance__value');
const labelSumIn = document.querySelector('.summary__value--in');
const labelSumOut = document.querySelector('.summary__value--out');
const labelSumInterest = document.querySelector('.summary__value--interest');
const labelTimer = document.querySelector('.timer');

const containerApp = document.querySelector('.app');
const containerMovements = document.querySelector('.movements');

const btnLogin = document.querySelector('.login__btn');
const btnTransfer = document.querySelector('.form__btn--transfer');
const btnLoan = document.querySelector('.form__btn--loan');
const btnClose = document.querySelector('.form__btn--close');
const btnSort = document.querySelector('.btn--sort');

const inputLoginUsername = document.querySelector('.login__input--user');
const inputLoginPin = document.querySelector('.login__input--pin');
const inputTransferTo = document.querySelector('.form__input--to');
const inputTransferAmount = document.querySelector('.form__input--amount');
const inputLoanAmount = document.querySelector('.form__input--loan-amount');
const inputCloseUsername = document.querySelector('.form__input--user');
const inputClosePin = document.querySelector('.form__input--pin');


// Functions
/////////////////////////////////////
const createUserName = function (accounts) {
  accounts.forEach(function (account) {
    account.username = account.owner.toLowerCase().split(' ').map(name => name[0]).join('');
  })
};
createUserName(accounts);

const displayMovements = function (account, order = false) {
  containerMovements.innerHTML = '';
  const movs = order ? account.movements.slice().sort((a, b) => a - b) : account.movements;
  movs.forEach(function (mov, i) {
    const type = mov > 0 ? 'deposit' : 'withdrawal';
    const html = `
      <div class="movements__row">
      <div class="movements__type movements__type--${type}">${i + 1} ${type}</div>
            <div class="movements__date">3 days ago</div>
            <div class="movements__value">${mov.toFixed(2)}€</div>
            </div>
            `;
    containerMovements.insertAdjacentHTML('afterbegin', html);
  });
};

function calcDisplayBalance(account) {
  account.balance = account.movements.reduce((acc, mov) => acc + mov, 0);
  labelBalance.textContent = `${account.balance.toFixed(2)}€`;

  const deposits = account.movements.filter(mov => mov > 0).reduce((acc, mov) => acc + mov, 0);
  labelSumIn.textContent = `${deposits.toFixed(2)}€`;

  const interest = account.movements.filter(deposit => deposit > 0).map(deposit => deposit * currentAccount.interestRate / 100).filter((int) => int >= 1).reduce((acc, mov) => acc + mov, 0);
  labelSumInterest.textContent = `${interest.toFixed(2)}€`;

  const withdrawal = Math.abs(account.movements.filter(mov => mov < 0).reduce((acc, mov) => acc + mov, 0));
  labelSumOut.textContent = `${withdrawal.toFixed(2)}€`;
};

function updateUI(account) {
  calcDisplayBalance(account);
  displayMovements(account);
};

function removeUI(msg) {
  inputLoginPin.value = inputLoginUsername.value = '';
  inputLoginPin.blur();
  containerApp.style.opacity = 0;
  labelWelcome.textContent = `Bankist`;
  invalidAlertHeading.textContent = `${msg}`;
  invalidAlert.classList.remove('hidden');
};


btnLogin.addEventListener('click', function (e) {
  e.preventDefault();
  currentAccount = accounts.find(acc => acc.username === inputLoginUsername.value);
  if (currentAccount?.pin === Number(inputLoginPin.value)) {
    containerApp.style.opacity = 100;
    labelWelcome.textContent = `${currentAccount.owner.split(' ')[0]} Dashboard`;
    inputLoginPin.value = inputLoginUsername.value = '';
    inputLoginPin.blur();
    invalidAlert.classList.add('hidden');
    updateUI(currentAccount);
  } else {
    removeUI('Invalid Username Or PIN')
  };
});

btnTransfer.addEventListener('click', function (e) {
  e.preventDefault();
  const amount = Number(inputTransferAmount.value);
  const receiverAcc = accounts.find(acc => acc.username === inputTransferTo.value);
  console.log(amount, receiverAcc);
  inputTransferAmount.value = inputTransferTo.value = '';
  inputTransferAmount.blur();
  if (amount > 0 &&
    receiverAcc &&
    currentAccount.balance >= amount &&
    receiverAcc?.username !== currentAccount.username) {
    currentAccount.movements.push(-amount);
    receiverAcc.movements.push(amount);
    updateUI(currentAccount);
  }
});

btnLoan.addEventListener('click', function (e) {
  e.preventDefault();
  const amount = Number(inputLoanAmount.value);
  if (amount > 0 && currentAccount.movements.some(mov => mov >= amount * 0.1)) {
    currentAccount.movements.push(amount);
    updateUI(currentAccount);
  };
  inputLoanAmount.value = '';
});

btnClose.addEventListener('click', function (e) {
  e.preventDefault();
  if (inputCloseUsername.value === currentAccount.username && Number(inputClosePin.value) === currentAccount.pin) {
    const index = accounts.findIndex(acc => acc.username === currentAccount.username);
    accounts.splice(index, 1);
    inputCloseUsername.value = inputClosePin.value = '';
    removeUI('You account has been closed!')
  }
});

btnSort.addEventListener('click', function (e) {
  e.preventDefault();
  sorted = !sorted;
  displayMovements(currentAccount, sorted);
});
/////////////////////////////////////////////////
// LECTURES

const currencies = new Map([
  ['USD', 'United States dollar'],
  ['EUR', 'Euro'],
  ['GBP', 'Pound sterling'],
]);


/////////////////////////////////////////////////

