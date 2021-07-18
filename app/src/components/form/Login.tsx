import React from 'react';
import { useState } from 'react';

import { ILoginForm } from '../../interface';
import './_form.scss';

const Login = () => {
  const [inputValues, setInputValues] = useState<ILoginForm>({
    username: '',
    password: '',
  });

  const { username, password } = inputValues;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setInputValues({ ...inputValues, [name]: value });
  };

  return (
    <div className="login">
      <input
        className="formfield__input"
        type="text"
        placeholder="Username"
        name="username"
        value={username}
        onChange={handleChange}
        required={true}
      />
      <input
        className="formfield__input"
        type="password"
        placeholder="Password"
        name="password"
        value={password}
        onChange={handleChange}
        required={true}
      />
      <button className="formfield__button">Login</button>
    </div>
  );
};

export default Login;
