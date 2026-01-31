import React, { useState } from 'react';
import './Login.css';

function Login({ onLogin, onBack }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onLogin(email); 
  };

  return (
    <div className="login">
      <div className="login__overlay">
        <header className="login__nav">
          <img
            className="login__logo"
            src="https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg"
            alt="Netflix"
            onClick={onBack}
          />
        </header>

        <div className="login__box">
          <h1>Zaloguj się</h1>

          <form onSubmit={handleSubmit}>
            <input
              type="email"
              placeholder="E-mail lub numer telefonu"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />

            <input
              type="password"
              placeholder="Hasło"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />

            <button className="login__submit">Zaloguj się</button>

            <div className="login__divider">LUB</div>

            <button type="button" className="login__code">
              Użyj kodu logowania
            </button>

            <a href="#!" className="login__forgot">
              Nie pamiętasz hasła?
            </a>

            <label className="login__remember">
              <input type="checkbox" /> Zapamiętaj mnie
            </label>

            <p className="login__new">
              Nie masz jeszcze konta? <span>Zarejestruj się teraz.</span>
            </p>

            <p className="login__captcha">
              Ta strona korzysta z zabezpieczenia Google reCAPTCHA...
            </p>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;
