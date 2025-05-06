function myFunction1() {
  let input;
  
  do {
    input = prompt("Please enter a number:");
  } while (isNaN(input));

  const number = parseInt(input);
  let output = "";

  if (number % 2 === 1) {
    for (let i = number; i >= 1; i--) {
      for (let j = 0; j < number; j++) {
        output += i + " ";
      }
      output += "<br>";
    }
  } else {
    for (let i = number; i >= 1; i--) {
      for (let j = 0; j < i; j++) {
        output += i + " ";
      }
      output += "<br>";
    }
  }

  document.getElementById("demo1").innerHTML = output;
}



  const contacts = [];
  const maxContacts = 7;

  function updateDisplay() {
    document.getElementById("demo2").innerText = contacts.join(", ");
  }

  function myFunction2() {
    const input = document.getElementById("names");
    const name = input.value.trim();
    
    if (name) {
      if (contacts.length >= maxContacts) {
        contacts.shift(); 
      }
      contacts.push(name); 
      input.value = ""; 
    }

    updateDisplay();
  }

  function myFunction3() {
    if (contacts.length > 0) {
      contacts.pop();
    }
    updateDisplay();
  }

  updateDisplay();