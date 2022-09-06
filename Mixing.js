//Matrix to save all data, to be sent to influxdb later
var influx_matrix = []

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

  function openSubTab(sub_evt, SubTabName) {
    var i, subtabcontent, subtablinks;
    subtabcontent = document.getElementsByClassName("div_SubTabContent");
    for (i = 0; i < subtabcontent.length; i++) {
      subtabcontent[i].style.display = "none";
    }
    subtablinks = document.getElementsByClassName("button_SubTabLinks");
    for (i = 0; i < subtablinks.length; i++) {
      subtablinks[i].className = subtablinks[i].className.replace(" active", "");
    }
    document.getElementById(SubTabName).style.display = "block";
    sub_evt.currentTarget.className += " active";
  }
  
function addVariable(Materials, Weight, Temperature, Time, Speed, Viscosity, checkbox_AddWater, Volume /*  ,**NAME_OF_VARIABLE_NO_SPACE**  */) { 
  var table = document.getElementById("Table");  // initialise table
  var row = table.insertRow(); 
  var countRows = counter;

  // add cell to the table
  var cell1 = row.insertCell(0);
  var cell2 = row.insertCell(1);
  var cell3 = row.insertCell(2);
  var cell4 = row.insertCell(3);
  var cell5 = row.insertCell(4);
  var cell6 = row.insertCell(5);
  var cell7 = row.insertCell(6);
  var cell8 = row.insertCell(7);
  var cell9 = row.insertCell(8);

  /* ----------------------------
         ADD CELL TEMPLATE
  -------------------------------
  var cell**n+1** = row.insertCell(**n**);
  */

  // remove button
  var remove_button = document.createElement('input'); 
  remove_button.setAttribute('type', 'button');
  remove_button.setAttribute('value', 'Remove');
  remove_button.setAttribute('onclick', 'removeRow(this)');
  
  // initialize table cells
  cell1.innerHTML = Materials; 
  cell2.innerHTML = Weight; 
  cell3.innerHTML = Temperature;
  cell4.innerHTML = Time;
  cell5.innerHTML = Speed;
  cell6.innerHTML = Viscosity;
  cell7.innerHTML = checkbox_AddWater;
  cell8.innerHTML = Volume;
  /* ----------------------------
         INITIALIZE CELL TEMPLATE
  -------------------------------
  cell**n**.innerHTML = **NAME_OF_VARIABLE_NO_SPACE** ;
  */
 
  cell9.innerHTML = "<br><button type='button' onclick='removeRow(this)' >Remove </button><br>";

  countRows++; 
  document.getElementById("counter").value = countRows; 

  alert("Mixing step added");

  influx_matrix.push([Materials, Weight, Temperature, Time, Speed, Viscosity, checkbox_AddWater, Volume])

  // reset input field
  document.getElementById('Materials').value = null;
  document.getElementById('Weight').value = null;
  document.getElementById('Temperature').value = null;
  document.getElementById('Time').value = null;
  document.getElementById('Speed').value = null;
  document.getElementById('Viscosity').value = null;
  document.getElementById('checkbox_AddWater').checked = false;
  document.getElementById('Volume').value = null;

  /* ----------------------------
         RESET INPUT FIELD TEMPLATE
  -------------------------------
  document.getElementById('**NAME_OF_VARIABLE_NO_SPACE**').value = null;
  */

  // go to table tab after adding the variables
  document.getElementById('Table_tab').click();
}

function doneProcess() {
  window.location.href = 'file:///C:/Users/Ching%20Yueng/Desktop/PEM/FrontEnd_HTML/CoatingDrying.html';  // navigate page to coating & drying
}

function materialVariables() {
  var material = document.getElementById("Materials");
  var text = document.getElementById("weight_form");
  if (material.value == "None"){
    text.style.display = "none";
  } 
  else {
      text.style.display = "block";
  }
}
  
function showVolumeInput() {
  var checkBox = document.getElementById("checkbox_AddWater");
  var text = document.getElementById("volume_form");
  if (checkBox.checked == true){
    text.style.display = "block";
  } 
  else {
      text.style.display = "none";
  }
}

function removeRow(oButton) {
  var MixingTable = document.getElementById('Table');
  MixingTable.deleteRow(oButton.parentNode.parentNode.rowIndex);
}

function openProcessFlow() {
  document.getElementById("popup_ProcessFlow").style.display = "block";
}

function closeProcessFlow() {
  document.getElementById("popup_ProcessFlow").style.display = "none";
}
