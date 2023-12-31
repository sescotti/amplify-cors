import React, { useState } from 'react';

import { Amplify } from "aws-amplify";
import { signIn } from 'aws-amplify/auth';

const cognitoDomain = '';
const userPoolId = '';
const userPoolClientId = '';

Amplify.configure({ Auth: {
  Cognito: {
    userPoolId: `us-east-1_${userPoolId}`,
    userPoolClientId: userPoolClientId,
    userPoolEndpoint: `https://${cognitoDomain}.auth.us-east-1.amazoncognito.com`,
  } }
});

function App() {

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log('submit');

    await signIn({ username, password });

  }

  const updateUsername = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUsername(e.target.value);
  }

  const updatePassword = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  }

  return (
    <div className="App">
      <form onSubmit={onSubmit}>
        <input type="text" name="username" onChange={updateUsername}/>
        <input type="password" name="password" onChange={updatePassword} />
        <button type="submit">Log in</button>
      </form>
    </div>
  );
}

export default App;
