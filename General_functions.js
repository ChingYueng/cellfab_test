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
  
  function doneProcess(process) {
    if (process == "Mixing"){
        window.location.href = 'CoatingDrying.html';  // navigate page to coating & drying
        document.getElementById("button_StartMixingProcess").disabled = false; // Process has ended, the user can start new mixing process if needed
        document.getElementById("button_StartMixingProcess").innerHTML="Start Mixing Process"; // Change button display text
    }

    if (process =="CoatingDrying"){
        window.location.href = 'Calendaring.html';  // navigate page to calendaring
        document.getElementById("button_StartCoatingDryingProcess").disabled = false; // Process has ended, the user can start new coating drying process if needed
        document.getElementById("button_StartCoatingDryingProcess").innerHTML="Start Mixing Process"; // Change button display text
    }
    
    document.getElementById("button_Write").disabled = true; // Disable the "Write to InfluxDB" button in the Variables tab unless the mixing process button is pressed (mixing started)
    document.getElementById("button_Write_hint").hidden = false; // Show the hint (tells the user to start the mixing process before adding variables) in the variable tab
  }
  
  function downlaodCSV(process){
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
    downloadCSVFile(csv_data,process);
  }
  
  function downloadCSVFile(csv_data,process) {
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
    temp_link.download = (process + "Process_" + today);
    var url = window.URL.createObjectURL(CSVFile);
    temp_link.href = url;
  
    // This link should not be displayed
    temp_link.style.display = "none";
    document.body.appendChild(temp_link);
  
    // Automatically click the link to trigger download
    temp_link.click();
    document.body.removeChild(temp_link);
  }

  function removeRow(oButton) {
    var MixingTable = document.getElementById('Table');
    MixingTable.deleteRow(oButton.parentNode.parentNode.rowIndex);
  }  