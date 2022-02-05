import { SyntheticEvent, useState } from "react";
import { useHistory } from "react-router-dom";
import { Routes } from "~/constants";
import login from "~/services/login";
import ErrorBlock from "../ErrorBlock";

import "./login-style.scss";

const Login = () => {
  const { push } = useHistory();

  const [username, setUsername] = useState("");
  const [usernameTouched, setUsernameTouched] = useState(false);

  const enteredUsernameIsValid =
    username.trim() !== "" && username.trim().length > 3;
  const enteredUsernameIsIvalid = !enteredUsernameIsValid && usernameTouched;

  const [password, setPassword] = useState("");
  const [paswordTouched, setPassworsTouched] = useState(false);

  const enteredPasswordIsValid = password.trim() !== "";
  const enteredPasswordIsIvalid = !enteredPasswordIsValid && paswordTouched;

  const [errorMessage, setErrorMessage] = useState<string>();

  // let formIsValid = false;

  // if (enteredUsernameIsIvalid) {
  //   formIsValid = true;
  // }

  const usernameInputBlurHandler = (e) => {
    setUsernameTouched(true);
  };

  const passworsInputBlurHandler = () => {
    setPassworsTouched(true);
  };

  const handleSubmit = async (event: SyntheticEvent<HTMLFormElement>) => {
    event.preventDefault();
    setErrorMessage(null);

    setUsernameTouched(true);
    setPassworsTouched(true);

    // if (!enteredUsernameIsIvalid || !enteredPasswordIsIvalid) {
    //   return;
    // }

    if (!enteredPasswordIsValid || !enteredUsernameIsValid) {
      return;
    }

    try {
      await login(username, password);
      push(Routes.Users);
    } catch (error) {
      setErrorMessage(error.message);
    }
    setUsername("");
    setUsernameTouched(false);

    setPassword("");
    setPassworsTouched(false);
  };

  return (
    <div className="login-page">
      <form className="login-form" onSubmit={handleSubmit}>
        <h1 className="text-center">Mygom.tech</h1>
        <input
          value={username}
          onChange={(event) => setUsername(event.target.value)}
          onBlur={usernameInputBlurHandler}
          placeholder="Username"
          type="text"
          className="input mt-52px"
        />

        {enteredUsernameIsIvalid && (
          <p className="error">
            Username can't be empty and not shorter than 3 letters.
          </p>
        )}

        <input
          value={password}
          onChange={(event) => setPassword(event.target.value)}
          onBlur={passworsInputBlurHandler}
          placeholder="Password"
          type="password"
          className="input mt-24px"
        />
        {enteredPasswordIsIvalid && (
          <p className="error">Password input should not be empty!</p>
        )}
        <ErrorBlock error={errorMessage} />
        <button type="submit" className="button mt-24px">
          Login
        </button>
      </form>
    </div>
  );
};

export default Login;
