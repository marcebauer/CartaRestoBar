function validateForm() {
  var elementosMenu = document.getElementsByClassName("elem-menu");

  for (var i = 0; i < elementosMenu.length; i++) {
    if (elementosMenu[i].value > 0) {
      return true;
    }
  }
  alert("El pedido está vacío.");
  return false;
}
