const day = document.getElementById("day");
const month = document.getElementById("month");
const year = document.getElementById("year");
const calculatedDays =  document.getElementById("calculated-days");
const calculatedMonths =  document.getElementById("calculated-months");
const calculatedYears =  document.getElementById("calculated-years");
const calculatorButton = document.querySelector('.calculator__button');


day.addEventListener("input", () => {
  if (day.value.length === 2) month.focus();
});

month.addEventListener("input", () => {
  if (month.value.length === 2) year.focus();
});

function calculateAge(day, month, year) {
  const ageDate = new Date(`"${year}-${month}-${day}"`);
  const today = new Date();

  let years = today.getFullYear() - ageDate.getFullYear();
  let months = today.getMonth() - ageDate.getMonth();
  let days = today.getDate() - ageDate.getDate();

  if (days < 0) {
    meses--;
    const lastMonth = new Date(hoy.getFullYear(), hoy.getMonth(), 0);
    days += lastMonth.getDate();
  }

  if (months < 0) {
    years--;
    months += 12;
  }

  calculatedYears.innerHTML = years;
  calculatedMonths.innerText = months;
  calculatedDays.innerText = days;
}

calculatorButton.addEventListener('click', (e) =>{
    e.preventDefault();
    calculateAge(day.value, month.value, year.value);
});
