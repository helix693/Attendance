// Check if the user is already signed in
const lastSignIn = localStorage.getItem('lastSignIn');
if (lastSignIn && new Date(lastSignIn).getDate() === new Date().getDate()) {
  // User has already signed in today, do nothing
} else {
  // User has not signed in today
  // Save sign-in status and current date to localStorage
  localStorage.setItem('lastSignIn', new Date().toISOString());
}
