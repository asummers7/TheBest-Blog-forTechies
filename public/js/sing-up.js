async function newUser (event) {
    event.preventDefault();
    const userEmail = document.querySelector('#signUpAddress').value.trim();
    const userPassword = document.querySelector('#signUpPassword').value.trim();
    const username = document.querySelector('#username').value.trim();

    const newUserData = await fetch(`/api/users`, {
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

    if (response.ok) {
      document.location.replace('/');
    } else {
      alert('Failed to add dish');
    }
  }

document.querySelector('#submitButton').addEventListener('submit', newUser)