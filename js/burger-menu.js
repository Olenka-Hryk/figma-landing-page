function openNav() {
    document.getElementById("burgerMenu").style.width = "100%";
    document.getElementById("burgerMenu-open").style.display = "none";
    document.getElementById("burgerMenu").style.translate = "0";
  }
  
  function closeNav() {
    document.getElementById("burgerMenu").style.translate = "-1000px";
    document.getElementById("burgerMenu-open").style.display = "block";
  }