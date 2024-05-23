function checkIDNumber() {
    const idNumber = document.getElementById("idNumber").value;

    // Check if the ID number is 13 characters long and contains only numbers
    if (idNumber.length !== 13 || isNaN(idNumber)) {
      document.getElementById("result").innerHTML = "Invalid ID number. Please enter a 13-digit number.";
      return;
    }

    // Extract the date of birth from the ID number
    const year = parseInt(idNumber.substring(0, 2));
    const month = parseInt(idNumber.substring(2, 4));
    const day = parseInt(idNumber.substring(4, 6));

    // Determine the gender
    const gender = parseInt(idNumber.substring(6, 10)) >= 5000 ? "Male" : "Female";

    // Display the results
    document.getElementById("result").innerHTML = `
      Date of Birth: ${day}/${month}/${1900+ year}
      Gender: ${gender}
    `;
  }
