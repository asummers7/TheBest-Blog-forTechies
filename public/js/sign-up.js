async function newUser (event) {
    event.preventDefault();
    const email = document.querySelector('#signUpAddress').value.trim();
    const password = document.querySelector('#signUpPassword').value.trim();
    const username = document.querySelector('#username').value.trim();

    const newUserData = await fetch(`/api/users`, {
      method: 'POST',
      body: JSON.stringify({
        email,
        password,
        username,
      }),
      headers: {
        'Content-Type': 'application/json',
      },
    });

   
    document.location.replace('/');
  
}

document.querySelector('#submitButton').addEventListener('click', newUser)