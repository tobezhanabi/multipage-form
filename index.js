let next = document.getElementById("next");
let back = document.getElementById("back");
let submit = document.getElementById("submit");
let form = document.getElementById("myform");

let currentFieldSet = 0;

// back.style.display = "none";
// submit.style.display = "none";
let bills = document.querySelectorAll(".bills");

bills.forEach((bill) => {
  const input = bill.querySelector('input[type="radio"]');

  input.addEventListener("click", () => {
    bills.forEach((bill) => {
      bill.classList.remove("selected");
    });

    bill.classList.add("selected");
  });
});

function showFieldset(index) {
  const fieldsets = form.getElementsByTagName("fieldset");
  for (i = 0; i < fieldsets.length; i++) {
    if (i === index) {
      fieldsets[i].style.display = "block";
    } else {
      fieldsets[i].style.display = "none";
    }
  }
  if (index === 0) {
    back.style.display = "none";
  } else {
    back.style.display = "inline-block";
  }

  if (index === fieldsets.length - 1) {
    next.style.display = "none";
    submit.style.display = "inline-block";
  } else {
    next.style.display = "inline-block";
    submit.style.display = "none";
  }
  console.log(index);
}
showFieldset(currentFieldSet);

function goBack() {
  currentFieldSet--;
  showFieldset(currentFieldSet);
  console.log(currentFieldSet);
}

function goNext() {
  //   if (form.checkValidity()) {
  currentFieldSet++;
  showFieldset(currentFieldSet);
  //   } else {
  //     window.alert(form.reportValidity());
  //   }
}

back.addEventListener("click", goBack);
next.addEventListener("click", goNext);

const toggleSwitch = document.querySelector(".switch input");
const monthlyPlan = document.getElementById("monthly-plan");
const yearlyPlan = document.getElementById("yearly-plan");

toggleSwitch.addEventListener("change", function () {
  if (this.checked) {
    monthlyPlan.style.display = "none";
    yearlyPlan.style.display = "block";
  } else {
    monthlyPlan.style.display = "block";
    yearlyPlan.style.display = "none";
  }
});

// let step1 = document.getElementById("step1");
// function stepOne() {
//   showFieldset(0);
// }

// step1.addEventListener("click", stepOne);
