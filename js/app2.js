(function() {
  const tariff = Array.from(document.querySelectorAll(".tariff"));
  const option = Array.from(document.querySelectorAll(".option"));
  const time = document.querySelector("#time");
  const time2 = document.querySelector("#time2");
  const volume = document.querySelector("#volume");
  const volume2 = document.querySelector("#volume2");
  const total = document.querySelector("#total");

  let orderTariff = document.querySelector("#order_tariff");
  let orderTime = document.querySelector("#order_time");
  let orderTime2 = document.querySelector("#order_time2");
  let orderOption = document.querySelector("#order_option");

  const priceInfo = {
    tariff: {
      economy: 500,
      comfort: 800,
      business: 1100,
      premium: 1400,
    },
    option: {
      option1: 1000,
      option2: 1500,
      option3: 1500,
      option4: 2000,
    }
  }

  let currentSet = {
    tariff: "comfort",
    time: 2,
    time2: 2,
    option: [],
    getTariffPrice() {
      return priceInfo.tariff[this.tariff];
    },
    getOptionPrice() {
      let optionPrice = 0;
      if (!(this.option.length == 0)) {
        this.option.forEach(el => {
          optionPrice += priceInfo.option[el];
        });
      }
      return optionPrice;
    }
  }

  tariff.forEach(el => {
    el.addEventListener("input", tariffUpdate);
    el.addEventListener("input", updatePrice);
    el.addEventListener("input", orderUpdate);
  });

  time.addEventListener("input", timeUpdate);
  time.addEventListener("input", updatePrice);
  time.addEventListener("input", orderUpdate);

  time2.addEventListener("input", timeUpdate);
  time2.addEventListener("input", updatePrice);
  time2.addEventListener("input", orderUpdate);

  option.forEach(el => {
    el.addEventListener("change", optionUpdate);
    el.addEventListener("change", updatePrice);
    el.addEventListener("change", orderUpdate);
  });

  function tariffUpdate(e) {
    currentSet.tariff = e.target.id;
  }

  function timeUpdate() {
    currentSet.time = time.value;
    volume.value = time.value;
    currentSet.time2 = time2.value;
    volume2.value = time2.value;
  }


  function optionUpdate(e) {
    e.stopPropagation();  // предовтращаем двойной клик
    if (e.target.checked) {
      currentSet.option.push(e.target.id);
    } else {
      let index = currentSet.option.indexOf(e.target.id);
      currentSet.option.splice(index, 1);
    }
  }

  function updatePrice() {
    total.value = getTotalPrice();
  }

  function getTotalPrice() {
    let tariffPrice = currentSet.getTariffPrice();
    let optionPrice = currentSet.getOptionPrice();
    let totalPrice = tariffPrice * currentSet.time + currentSet.time2 + optionPrice;
    return totalPrice;
  }

  function orderUpdate() {
    orderTariff.value = currentSet.getTariffPrice() + " \u{20BD}/час";
    if (currentSet.time < 5) {
      orderTime.value = currentSet.time + " часа";
    } else {
      orderTime.value = currentSet.time + " часов";
    }

    if (currentSet.time2 < 5) {
      orderTime2.value = currentSet.time2 + " часа";
    } else {
      orderTime2.value = currentSet.time2 + " часов";
    }

    orderOption.value = currentSet.getOptionPrice() + " \u{20BD}";
  }

})();



