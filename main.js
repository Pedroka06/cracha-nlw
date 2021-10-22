// const LinksSocialMedia = {
//   github: 'pedroka06',
//   youtube: 'PedroBaptista1000',
//   facebook: 'pedroka.baptista',
//   instagram: 'pedroka.oficial06',
//   twitter: 'pedropbaptista'
// }
// // função com for laço de repetição usando variavel para vereficar elemento li filho da ul 
// function changeSocialMediaLinks() {
//   for (let li of socialLinks.children) {
//     const social = li.getAttribute('class');
    
//     li.children[0].href = `https://${social}.com/${LinksSocialMedia[social]}`
//   }
// }

// changeSocialMediaLinks()


// function getGitHubProfileInfos() {
//   const url = `https://api.github.com/users/${LinksSocialMedia.github}`
  
//   fetch(url)
//   .then(response => response.json())
//   .then(data => {
//     userName.texContent = data.name
//     userBio.texContent = data.Bio
//     userLink.href = data.html_url
//     UserImage.src = data.avatar_url
//     userLogin.texContent = data.login
//   })
// }

// getGitHubProfileInfos()

const LinksSocialMedia = {
  github: 'Pedroka06',
  youtube: 'PedroBaptista1000',
  facebook: 'pedroka.baptista',
  instagram: 'pedroka.oficial06',
  twitter: 'pedropbaptista'
}

function changeSocialMediaLinks() {
  for (let li of socialLinks.children) {
    const social = li.getAttribute('class')

    li.children[0].href = `https://${social}.com/${LinksSocialMedia[social]}`
  }
}

changeSocialMediaLinks()

function getGitHubProfileInfos() {
  const url = `https://api.github.com/users/${LinksSocialMedia.github}`

  fetch(url)
    .then(response => response.json())
    .then(data => {
      userName.textContent = data.name
      userBio.textContent = data.bio
      userLink.href = data.html_url
      UserImage.src = data.avatar_url
      userLogin.textContent = data.login
    })
}

getGitHubProfileInfos()
