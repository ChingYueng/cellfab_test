function openTab(evt, TabName) {
  var i, tabcontent, tablinks;
  tabcontent = document.getElementsByClassName("div_TabContent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }
  tablinks = document.getElementsByClassName("button_TabLinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }
  document.getElementById(TabName).style.display = "block";
  evt.currentTarget.className += " active";
}

function materialVariables() {
  var material = document.getElementById("Materials");
  var text = document.getElementById("newmaterial_form");
  if (material.value == "New Material"){
    text.style.display = "block";
  } else {
      text.style.display = "none";
  }
}