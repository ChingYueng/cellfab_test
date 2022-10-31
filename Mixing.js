function showVariableInputBox(material) {
  if (material=='water'){
    var checkBox = document.getElementById("checkbox_AddWater");
    var text = document.getElementById("form_water");
  }

  if (material=='SBR'){
    var checkBox = document.getElementById("checkbox_AddSBR");
    var text = document.getElementById("form_SBR");
  }

  if (material=='graphite'){
    var checkBox = document.getElementById("checkbox_AddGraphite");
    var text = document.getElementById("form_Grapite");
  }

  if (material=='CMC'){
    var checkBox = document.getElementById("checkbox_AddCMC");
    var text = document.getElementById("form_CMC");
  }

  if (material=='russ'){
    var checkBox = document.getElementById("checkbox_AddRuss");
    var text = document.getElementById("form_Russ");
  }

  if (material=='SG3'){
    var checkBox = document.getElementById("checkbox_AddSG3");
    var text = document.getElementById("form_SG3");
  }
  
  if (checkBox.checked == true){
    text.style.display = "block";
  } 
  else {
      text.style.display = "none";
  }
}

function openProcessFlow() {
  document.getElementById("popup_ProcessFlow").style.display = "block";
}

function closeProcessFlow() {
  document.getElementById("popup_ProcessFlow").style.display = "none";
}
