import React from 'react';
import { render } from 'react-dom';

import UserForm from './UserForm';

const imaginaryUser = {
  email: '',
  username: '',
  imaginaryThingId: null,
};

const UserApp = () => (
  <div className="App">
    <UserForm user={imaginaryUser} />
  </div>
);

export default UserApp;



// render(<App />, document.getElementById('root'));