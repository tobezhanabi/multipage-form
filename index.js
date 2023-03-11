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

let yearlyBills = document.querySelectorAll(".yearly-bills");

yearlyBills.forEach((bill) => {
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

const toggle = document.getElementById("toggle");
let toggleChecked;
toggle.addEventListener("change", function () {
  const yearlyPrices = document.querySelectorAll(".yearly");
  const monthlyPrices = document.querySelectorAll(".monthly");
  toggleChecked = toggle.checked;
  if (toggleChecked) {
    yearlyPrices.forEach(function (element) {
      element.style.display = "flex";
    });
    monthlyPrices.forEach(function (element) {
      element.style.display = "none";
    });
  } else {
    yearlyPrices.forEach(function (element) {
      element.style.display = "none";
    });
    monthlyPrices.forEach(function (element) {
      element.style.display = "flex";
    });
  }
  pricePlan(toggleChecked);
});

function pricePlan(toggleChecked) {
  console.log(toggleChecked);
  const yearlycheck = document.querySelectorAll(".year");
  const monthlycheck = document.querySelectorAll(".month");
  if (toggleChecked) {
    yearlycheck.forEach((element) => {
      element.style.display = "block";
    });
    monthlycheck.forEach((element) => {
      element.style.display = "none";
    });
  } else {
    yearlycheck.forEach((element) => {
      element.style.display = "none";
    });
    monthlycheck.forEach((element) => {
      element.style.display = "block";
    });
  }
}

// define the value

const plans = [
  {
    name: "Arcade",
    price: {
      monthly: 9,
      yearly: 90,
    },
    image: "./asset/images/icon-arcade.svg",
    id: "arcade",
  },
  {
    name: "Advanced",
    price: {
      monthly: 12,
      yearly: 120,
    },
    image: "./asset/images/icon-advanced.svg",
    id: "advanced",
  },
  {
    name: "Pro",
    price: {
      monthly: 9,
      yearly: 90,
    },
    image: "./asset/images/icon-pro.svg",
    id: "pro",
  },
];

const addOns = {
  "month-online": {
    title: "Online service",
    price: 1,
    mo: "/mo",
  },
  "month-larger": {
    title: "Larger storage",
    price: 2,
    mo: "/mo",
  },
  "month-customise": {
    title: "Customizable Profile",
    price: 2,
    mo: "/mo",
  },
  "year-online": {
    title: "Online service",
    price: 10,
  },
  "year-larger": {
    title: "Larger storage",
    price: 20,
  },
  "year-customise": {
    title: "Customizable Profile",
    price: 20,
  },
};

const monthlyCheckboxes = document.querySelectorAll(
  ".month input[type ='checkbox']"
);
const yearlyCheckboxes = document.querySelectorAll(
  ".year input[type ='checkbox']"
);
let totalPrice = 0;

let checkAddons = [];

monthlyCheckboxes.forEach((checkbox) => {
  checkbox.addEventListener("change", () => {
    const addOn = addOns[checkbox.id];
    if (checkbox.checked) {
      totalPrice += addOn.price;
      checkAddons.push(addOn.title);
      // checkAddons.push(addOn.mo);
      console.log(
        `Selected add-on: ${addOn.title} - $${addOn.price} ${addOn.mo}`
      );
    } else {
      totalPrice -= addOn.price;

      checkAddons = checkAddons.filter((title) => title !== addOn.title);
    }
    console.log("checkAddons:", checkAddons);
    updateCheckout();
    console.log("while are you hard");
    console.log(`${totalPrice}`);
  });
});

yearlyCheckboxes.forEach((checkbox) => {
  console.log(checkbox);
  checkbox.addEventListener("change", () => {
    const addOn = addOns[checkbox.id];
    if (checkbox.checked) {
      totalPrice += addOn.price;
      checkAddons.push(addOn.title);
      // checkAddons.push(addOn.title);
      console.log(checkAddons);
    } else {
      totalPrice -= addOn.price;

      checkAddons = checkAddons.filter((title) => title !== addOn.title);
    }
    updateCheckout();
    console.log("checkAddons:", checkAddons);
    console.log(`${totalPrice}`);
    console.log(`${checkAddons.join(",")}`);
  });
});

function updateCheckout() {
  const checkout = document.getElementById("checkout");
  let addsonText = "";

  const selectedPlan = document.querySelector(
    'input[name="plan"]:checked'
  ).value;

  let totalPrice = 0;
  addsonText += `<div class="selected-plans"><p> ${selectedPlan}</p></div>`;
  for (let i = 0; i < checkAddons.length; i++) {
    const addonId = checkAddons[i];
    const addon =
      addOns[Object.keys(addOns).find((key) => addOns[key].title === addonId)];
    totalPrice += addon.price;

    addsonText += `<div class="addson-text"><p> ${addon.title}:</p><p class="addon-price"> +$${addon.price}</p></div>`;
  }

  totalPrice += getPlanPrice(selectedPlan);
  console.log(totalPrice);
  checkout.innerHTML = `
    <div class="addons">
      
      ${addsonText}
    </div>

    <div class="total"><p>Total</p> <p class="totalcost">$${totalPrice}</p></div>
    `;
}
function getPlanPrice(plan) {
  if (plan === "Arcade(month)") {
    return 9;
  } else if (plan === "Advanced(month)") {
    return 12;
  } else if (plan === "Pro(month)") {
    return 15;
  } else if (plan === "Arcade(year)") {
    return 90;
  } else if (plan === "Advanced(year)") {
    return 120;
  } else if (plan === "Pro(year)") {
    return 150;
  } else {
    return 0;
  }
}

// {<p>Total price: $${totalPrice}</p>}
