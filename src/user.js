import React, { useState } from 'react';
import axios from 'axios';


const User = () => {
  const [newUser, setNewUser] = useState(
      {
          name: '',
          birthdate: '',
          photo: '',
          url: '',
      }
  );

  const handleSubmit = (e) => {
      e.preventDefault();
      const formData = new FormData();
      formData.append('photo', newUser.photo);
      formData.append('birthdate', newUser.birthdate);
      formData.append('name', newUser.name);
      formData.append('url', newUser.url);
      console.table(newUser.url)
      axios.get('http://localhost:3050/read-sales-report',{ params: {url: newUser.url}})
            .then(res => {
              console.log(res);
            })
            .catch(err => {
              console.log(err);
            });
  }

  const handleChange = (e) => {
    setNewUser({...newUser, [e.target.name]: e.target.value});
  }

  const handlePhoto = (e) => {
    setNewUser({...newUser, photo: e.target.files[0]});
  }

  return (
      <form onSubmit={handleSubmit} encType='multipart/form-data'>
          {/* <input 
              type="file" 
              accept=".png, .jpg, .jpeg"
              name="photo"
              onChange={handlePhoto}
          /> */}

          <input 
              type="text"
              placeholder="sales read photo url"
              name="url"
              value={newUser.url}
              onChange={handleChange}
          />

          <input 
              type="submit"
          />
      </form>
  );
}

export default User;