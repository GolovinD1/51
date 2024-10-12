window.onload = function () {
  document.getElementById("form").addEventListener("submit", function (funct) {
      funct.preventDefault();
      let sel = document.getElementById("select1");
      let f1 = document.getElementById("field1").value;
      let index = sel.selectedIndex;
      let selNum = sel.options[index];
      let cena = selNum.getAttribute("rub");
      if (/^\d+$/.test(f1) && f1 >= 0) {
        document.getElementById("result").innerHTML = "Вам нужно заплатить: "+ f1 * cena + " денег";
      } else {
        document.getElementById("result").innerHTML = "Введите количество товаров (только цифры)";
      }
  });
};
