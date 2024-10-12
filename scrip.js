window.onload = function () {
  document.getElementById("form").addEventListener("submit", function (funct) {
      funct.preventDefault();
      let f1 = document.getElementById("field1").value;
      let sel = document.getElementById("select1");
      let index = sel.selectedIndex;
      let selNum = sel.options[index];
      let cena = selNum.getAttribute("value");
      if (/^\d+$/.test(f1) && f1 >= 0) {
        document.getElementById("result").innerHTML = "Вам нужно заплатить: "
            + f1 * cena + " денег";
      } else {
        document.getElementById("result").innerHTML = "Введите "
            + "кол-во товаров (только цифры)";
      }
  });
};
