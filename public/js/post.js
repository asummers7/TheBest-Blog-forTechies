async function newPost (event) {
    event.preventDefault();
    const title = document.querySelector('#commentTitle').value.trim();
    const text = document.querySelector('#textarea').value.trim();

    const newPostData = await fetch(`/api/posts`, {
      method: 'POST',
      body: JSON.stringify({
        title,
        text
      }),
      headers: {
        'Content-Type': 'application/json',
      },
    });

   
    document.location.replace('/');
  
}

document.querySelector('#postSubmit').addEventListener('click', newPost)