import { uploadPhoto, createUser } from './utils.js'

function handleProfileSignup() {
  return Promise.all([uploadPhoto(), createUser()])
    .then(results => {
      const [photo, user] = results
      console.log(`${photo.body} ${user.firstName} ${user.lastName}`)
      }, 
    error => console.log('Signup system offline')
    );    
}

export default handleProfileSignup;
