import { uploadPhoto, createUser } from './utils.js'

export default function handleProfileSignup() {
  Promise.all([uploadPhoto(), createUser()])
    .then(results => {
      const [photo, user] = results
      console.log(photo, user)
      }, 
    error => console.log('Signup system offline')
    );
    
}
