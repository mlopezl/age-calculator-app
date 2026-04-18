const day = document.getElementById("day");
const month = document.getElementById("month");
const year = document.getElementById("year");
const calculatedDays = document.getElementById("calculated-days");
const calculatedMonths = document.getElementById("calculated-months");
const calculatedYears = document.getElementById("calculated-years");
const calculatorButton = document.querySelector(".calculator__button");
const validDay = document.getElementById("valid-day");
const validMonth = document.getElementById("valid-month");
const validYear = document.getElementById("valid-year");
const requiredDay = document.getElementById("required-day");
const requiredMonth = document.getElementById("required-month");
const requiredYear = document.getElementById("required-year");

day.addEventListener("input", () => {
  if (day.value.length === 2) month.focus();
});

month.addEventListener("input", () => {
  if (month.value.length === 2) year.focus();
});

function calculateAge(day, month, year) {
  const ageDate = new Date(year, month - 1, day);
  const today = new Date();

  const todayClean = new Date(
    today.getFullYear(),
    today.getMonth(),
    today.getDate(),
  );
  const ageClean = new Date(
    ageDate.getFullYear(),
    ageDate.getMonth(),
    ageDate.getDate(),
  );

  let years = todayClean.getFullYear() - ageClean.getFullYear();
  let months = todayClean.getMonth() - ageClean.getMonth();
  let days = todayClean.getDate() - ageClean.getDate();

  if (days < 0) {
    months--;
    const lastMonth = new Date(
      todayClean.getFullYear(),
      todayClean.getMonth(),
      0,
    );
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

function validateDate(day, month, year) {
  let isValid = true;

  if (Number.isNaN(day) || day === 0) {
    requiredDay.classList.remove("hidden");
    isValid = false;
  } else {
    requiredDay.classList.add("hidden");
  }

  if (Number.isNaN(month) || month === 0) {
    requiredMonth.classList.remove("hidden");
    isValid = false;
  } else {
    requiredMonth.classList.add("hidden");
  }

  if (Number.isNaN(year) || year === 0) {
    requiredYear.classList.remove("hidden");
    isValid = false;
  } else {
    requiredYear.classList.add("hidden");
  }

  const today = new Date();
  const currentYear = today.getFullYear();

  if (year < 1 || year > currentYear) {
    validYear.classList.remove("hidden");
    isValid = false;
  } else {
    validYear.classList.add("hidden");
  }

  if (month < 1 || month > 12) {
    validMonth.classList.remove("hidden");
    isValid = false;
  } else {
    validMonth.classList.add("hidden");
  }

  if (month >= 1 && month <= 12 && year >= 1 && year <= currentYear) {
    const daysPerMonth = [
      31,
      esBisiesto(year) ? 29 : 28,
      31,
      30,
      31,
      30,
      31,
      31,
      30,
      31,
      30,
      31,
    ];

    if (day < 1 || day > daysPerMonth[month - 1]) {
      validDay.classList.remove("hidden");
      isValid = false;
    } else {
      validDay.classList.add("hidden");
    }
  } else {
    validDay.classList.add("hidden");
  }

  if (!isValid) {
    calculatedYears.innerText = "--";
    calculatedMonths.innerText = "--";
    calculatedDays.innerText = "--";
    return;
  }

  calculateAge(day, month, year);
}

function esBisiesto(year) {
  return (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0;
}

calculatorButton.addEventListener("click", (e) => {
  e.preventDefault();
  const dayInt = parseInt(day.value, 10);
  const monthInt = parseInt(month.value, 10);
  const yearInt = parseInt(year.value, 10);
  validateDate(dayInt, monthInt, yearInt);
});
