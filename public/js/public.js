async function newUser (event) {
    event.preventDefault();
    const userEmail = document.querySelector('#emailAddress').value;
    const userPassword = document.querySelector('#password').value;
    const username = document.querySelector('#username').value;
    // The following is a ternary operator. It checks to see if has_nuts is checked. If it is, it will return true, otherwise, it will return false.
    // Send fetch request to add a new dish
    const newUserData = await fetch(`/user/login`, {
      method: 'POST',
      body: JSON.stringify({
        userEmail,
        userPassword,
        username,
      }),
      headers: {
        'Content-Type': 'application/json',
      },
    });
    //if the dish is added, the 'all' template will be rerendered
    if (response.ok) {
      document.location.replace('/');
    } else {
      alert('Failed to add dish');
    }
  }

document.querySelector('#submitButton').addEventListener('submit', newUser)