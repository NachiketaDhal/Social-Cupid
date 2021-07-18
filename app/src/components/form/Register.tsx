import React from 'react';
import { useState } from 'react';

import { IRegisterForm } from '../../interface';
import './_form.scss';

const Register = () => {
  const [inputValues, setInputValues] = useState<IRegisterForm>({
    username: '',
    password: '',
    cPassword: '',
    image: '',
  });

  const { username, password, cPassword, image } = inputValues;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, files } = e.target;
    if (!files) {
      setInputValues({ ...inputValues, [name]: value });
    } else {
      setInputValues({ ...inputValues, [name]: files[0] });
    }
  };

  const handleClick = (e: React.FormEvent) => {
    e.preventDefault();
    console.log(inputValues);
    const data = new FormData();
    data.append('username', username);
    data.append('password', password);
    data.append('cPassword', cPassword);
  };

  return (
    <div className="register">
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
      <input
        className="formfield__input"
        type="password"
        placeholder="Confirm Password"
        name="cPassword"
        value={cPassword}
        onChange={handleChange}
        required={true}
      />
      <label htmlFor="file" className="register__filelabel">
        Choose profile image
      </label>
      <input
        type="file"
        id="file"
        name="image"
        style={{ display: 'none' }}
        // value={image}
        onChange={handleChange}
        required={true}
      />
      <button className="formfield__button" onClick={handleClick}>
        Register
      </button>
    </div>
  );
};

export default Register;
