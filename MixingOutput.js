function showViscosity() {
    var checkBox = document.getElementById("checkbox_Viscosity");
    var text = document.getElementById("viscosity_chart");
    if (checkBox.checked == true){
      text.style.display = "block";
    } else {
        text.style.display = "none";
    }
  }

  function showLog() {
    var checkBox = document.getElementById("checkbox_Log");
    var text = document.getElementById("log_area");
    if (checkBox.checked == true){
      text.style.display = "block";
    } else {
        text.style.display = "none";
    }
  }

  function showTemperature() {
    var checkBox = document.getElementById("checkbox_Temperature");
    var text = document.getElementById("temperature_chart");
    if (checkBox.checked == true){
      text.style.display = "block";
    } else {
        text.style.display = "none";
    }
  }

      
  
