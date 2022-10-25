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

function doneProcess() {
  window.location.href = 'CoatingDrying.html';  // navigate page to coating & drying
}

function downlaodCSV(){
  // Variable to store the final csv data
  var csv_data = [];

  // Get each row data
  var rows = document.getElementsByTagName('tr');
  for (var i = 0; i < rows.length; i++) {

    // Get each column data
    var cols = rows[i].querySelectorAll('td,th');

    // Stores each csv row data
    var csvrow = [];
    for (var j = 0; j < cols.length; j++) {

        // Get the text data of each cell of a row and push it to csvrow
        csvrow.push(cols[j].innerHTML);
    }

    // Combine each column value with comma
    csv_data.push(csvrow.join(","));
  }

  // Combine each row data with new line character
  csv_data = csv_data.join('\n');

  // Call this function to download csv file 
  downloadCSVFile(csv_data);
}

function downloadCSVFile(csv_data) {

  // Create CSV file object and feed our csv_data into it
  CSVFile = new Blob([csv_data], {
      type: "text/csv"
  });

  // Create to temporary link to initiate download process
  var temp_link = document.createElement('a');

  // Create variables to generate today's date for filename
  var today = new Date();
  var dd = String(today.getDate()).padStart(2, '0');
  var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
  var yyyy = today.getFullYear();

  today = yyyy + '-' + mm + '-' + dd;

  // Download csv file
  temp_link.download = ("MixingProcess_" + today);
  var url = window.URL.createObjectURL(CSVFile);
  temp_link.href = url;

  // This link should not be displayed
  temp_link.style.display = "none";
  document.body.appendChild(temp_link);

  // Automatically click the link to trigger download
  temp_link.click();
  document.body.removeChild(temp_link);
}

  
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
