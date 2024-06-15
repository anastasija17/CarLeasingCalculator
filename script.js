let downpayment = 10;
let interestRate = 10;
let carValue = 0;
let leasePeriod = 12;


let totalLeasingCostEl = document.querySelector("#totalLeasingCost");
let downpaymentEl = document.querySelector("#downPayment");
let monthlyInstalmentsEl = document.querySelector("#monthlyInstallment");
let interestRateEl = document.querySelector("#interestRate");

let carTypeSelect = document.querySelector("#carType");


carTypeSelect.addEventListener("change", setInterestRate);

let carValueInput = document.querySelector("#value");
let carValueRange = document.querySelector("#valueRange");


setInterestRate();
setCarValueInput();
setCarValueRange();

carValueInput.addEventListener("input", setCarValueInput);
carValueRange.addEventListener("input", setCarValueRange);

let leasePeriodInput = document.querySelector("#leasePeriod");

setLeasePeriod();

leasePeriodInput.addEventListener("input", setLeasePeriod);

let downpaymentInput = document.querySelector("#payment");
let downpaymentRange = document.querySelector("#paymentRange");


downpaymentInput.addEventListener("input", setDownpaymentInput);
downpaymentRange.addEventListener("input", setDownpaymentRange);
setDownpaymentRange();

function calculateValues() {
    interestRateEl.innerHTML = carTypeSelect.value + "%";
    let downpaymentFull = (downpayment * 0.01 * carValue);
    downpaymentEl.innerHTML = "€" + (downpaymentFull.toFixed(2));
    let total = ((carValue - downpaymentFull) * (interestRate * 0.01 + 1));
    totalLeasingCostEl.innerHTML = "€" + (total + downpaymentFull).toFixed(2);
    monthlyInstalmentsEl.innerHTML = "€" + (total / leasePeriod).toFixed(2);
}

function setDownpaymentInput() {
    downpayment = Number.parseFloat(downpaymentInput.value);
    downpaymentRange.value = downpayment;
    calculateValues();
}

function setDownpaymentRange() {
    downpayment = Number.parseFloat(downpaymentRange.value);
    downpaymentInput.value = downpayment;
    calculateValues();
}

function setLeasePeriod() {
    leasePeriod = Number.parseInt(leasePeriodInput.value);
    calculateValues();
}

function setCarValueInput() {
    carValue = Number.parseFloat(carValueInput.value);
    carValueRange.value = carValue;
    calculateValues();
}

function setCarValueRange() {
    carValue = Number.parseFloat(carValueRange.value);
    carValueInput.value = carValue;
    calculateValues();
}

function setInterestRate() {
    interestRate = Number.parseFloat(carTypeSelect.value);
    calculateValues();
}