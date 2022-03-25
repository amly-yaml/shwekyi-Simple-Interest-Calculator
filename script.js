"use strict";
function compute() {
  const showResult = document.getElementById("result");
  const principle = document.getElementById("principal").value;
  const interest_rate = document.getElementById("rate").value;
  const years = document.getElementById("years").value;
  const year = new Date().getFullYear() + parseInt(years);
  let interest;

  if (principle <= 0 || principle == "") {
    alert("Enter a positive number");
    document.getElementById("principal").focus();
    return;
  } else {
    interest = (principle * interest_rate * years) / 100;
    showResult.classList.remove("hidden");
    document.getElementById("deposit").innerHTML = principle + ",";
    document.getElementById("interest-rate").innerText =
      interest_rate + "% " + ".";
    document.getElementById("amount").innerHTML = interest + ",";
    document.getElementById("year").innerHTML = year + ".";
  }
}

function rangeValue() {
  const slider = document.getElementById("rate");
  const sliderValue = document.getElementById("rate_display");
  sliderValue.innerHTML = slider.value + "%";

  slider.oninput = function () {
    sliderValue.innerHTML = this.value + "%";
  };
}
