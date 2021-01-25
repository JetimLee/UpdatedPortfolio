//Fetching  my profile with axios


// const APIURL = 'https://api.github.com/users/'

// getUser('JetimLee')


// async function getUser(username) {
//   try {
//     const {data} = await axios(APIURL + username)

//     console.log(data)
//   } catch (err) {
//     console.log(err)

//   }
// }
//fetching name with fetch method
const nyName = document.getElementById('my_GetHubName')
const gitHub = 'https://api.github.com/users/JetimLee';
const imgTag = document.getElementById('JetimLee');

fetch(gitHub)
  .then(response => response.json())
  .then(data => {
    imgTag.setAttribute('src', data.avatar_url);
    nyName.innerHTML = data.name;
  })

  //add folder for axios so you can export it
  //have footer.js so you can export it