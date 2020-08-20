function fetchRepositories(username) {
    return fetch(`https://api.github.com/users/${username}/repos`)
    .then((response) => {
        if (response.ok) {
         return response.json()
        }
        else {
          alert('Something went wrong. Please try again later')
        }
      })
    .catch(error => alert('Something went wrong. Please try again later'));
  }
  
  function generateRepositories(responseJson) {
    let mapResponse = responseJson.map((repo) => $(`
        <li>
            <h3>${repo.name}</h3>
            <a target="_blank" href="${repo.html_url}">Repo URL</a>
          </li>`
          ));
    return mapResponse
  }
  
  function displayRepositories(repoCode) {
    $('ul').html(repoCode);
  }
  
  function handleSubmitForm() {
    $('form').on('submit', event => {
      event.preventDefault()
  
      const inputBox = $('#repo')
  
      const username = inputBox.val()
      
  
      fetchRepositories(username).then(responseJson => generateRepositories(responseJson)).then(repoCode => displayRepositories(repoCode))
    });
  }
  $(handleSubmitForm)