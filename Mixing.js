function showVariableInputBox(material) {
  if (material=='solvent'){
    var checkBox = document.getElementById("checkbox_AddSolvent");
    var text = document.getElementById("form_Solvent");
  }

  if (material=='active_material'){
    var checkBox = document.getElementById("checkbox_AddActiveMaterial");
    var text = document.getElementById("form_ActiveMaterial");
  }

  if (material=='additive'){
    var checkBox = document.getElementById("checkbox_AddAdditive");
    var text = document.getElementById("form_Additive");
  }

  if (material=='binder'){
    var checkBox = document.getElementById("checkbox_AddBinder");
    var text = document.getElementById("form_Binder");
  }

  if (material=='carbon_black'){
    var checkBox = document.getElementById("checkbox_AddCarbonBlack");
    var text = document.getElementById("form_CarbonBlack");
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
