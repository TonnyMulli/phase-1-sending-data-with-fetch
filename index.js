function submitData(name, email) {
    const userData = {
      name: name,
      email: email
    };
  
    return fetch('http://localhost:3000/users', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify(userData)
    })
      .then(function(response) {
        if (!response.ok) {
          throw new Error('Network response was not ok.');
        }
        return response.json();
      })
      .then(function(data) {
        appendIdToDOM(data.id);
      })
      .catch(function(error) {
        appendErrorMessageToDOM(error.message);
      });
  }
  
  function appendIdToDOM(id) {
    const idElement = document.createElement('p');
    idElement.textContent = `New User ID: ${id}`;
    document.body.appendChild(idElement);
  }
  
  function appendErrorMessageToDOM(message) {
    const errorElement = document.createElement('p');
    errorElement.textContent = `Error: ${message}`;
    document.body.appendChild(errorElement);
  }
  // Add your code here
