/* -------------------------- Validate form inputs -------------------------- */
function validateEmail() {
  const email = document.getElementById('email').value
  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

  if (!emailRegex.test(email)) {
      alert('Invalid Email Address');
      return false; // Prevent form submission
  }
  return true; // Allow form submission
}

function validateFirstName() {
  const fName = document.getElementById('fName').value
  const nameRegex = /^[A-Za-z\s-']+$/;

  if (!nameRegex.test(fName)) {
      alert('Invalid First Name');
      return false; // Prevent form submission
  }
  return true; // Allow form submission
}

function validateLastName() {
  const lName = document.getElementById('lName').value
  const nameRegex = /^[A-Za-z\s-']+$/;

  if (!nameRegex.test(lName)) {
      alert('Invalid Last Name');
      return false; // Prevent form submission
  }
  return true; // Allow form submission
}

function validatePhoneNumber() {
  const phoneNumber = document.getElementById('phone').value
  const phoneRegex = /^\(?\d{3}\)?[-.\s]?\d{3}[-.\s]?\d{4}$/;

  if (!phoneRegex.test(phoneNumber)) {
      alert('Invalid Phone Number');
      return false; // Prevent form submission
  }
  return true; // Allow form submission
}


