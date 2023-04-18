function submitForm() {
    // Get the values of the name and age inputs
    const name = document.getElementById("name").value;
  
    // Calculate the length of the name
    const nameLength = name.length;
  
    // Display the length of the name in an alert box

    alert("Your name is " + nameLength + " characters long.");
  
    // Clear the form inputs
    document.getElementById("name").value = "";
    document.getElementById("age").value = "";
  }
