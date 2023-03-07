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
  console.log(index);
}
showFieldset(currentFieldSet);

function goBack() {
  currentFieldSet--;
  showFieldset(currentFieldSet);
}

function goNext() {
  //   if (form.checkValidity()) {
  currentFieldSet++;
  showFieldset(currentFieldSet);
  //   } else {
  //     window.alert(form.reportValidity());
  //   }
}
console.log(currentFieldSet);

// back.addEventListener("click", goBack);
next.addEventListener("click", goNext);
