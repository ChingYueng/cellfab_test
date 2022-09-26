function openForm() {
    document.getElementById("myForm").style.display = "block";
    var today = new Date();
    var dd = String(today.getDate()).padStart(2, '0');
    var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
    var yyyy = today.getFullYear();

    Batch_ID = "PEM_" + yyyy + mm + dd;
    document.getElementById('Batch').innerHTML = Batch_ID;
  }
  
  function closeForm() {
    document.getElementById("myForm").style.display = "none";
  }

  function create_ID() {
    confirmed = alert("New batch with batch ID " + Batch_ID + " added!");
    if (confirmed) {
        return true;
    }
  }