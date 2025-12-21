function login() {
    let input = prompt("Enter Password:");
    if (input == "177>176lol") {
        return;
    } else {
        alert("Incorrect Password!!!!!!!!!!! >:(");
        login();
    }
}

// Check if the user is already signed in
const lastSignIn = localStorage.getItem('lastSignIn');
if (lastSignIn && new Date(lastSignIn).getDate() === new Date().getDate()) {
  // User has already signed in today, do nothing
} else {
  // User has not signed in today, show prompt
  login();
  // Save sign-in status and current date to localStorage
  localStorage.setItem('lastSignIn', new Date().toISOString());
}
