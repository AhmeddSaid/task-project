import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { faUser, faEnvelope } from "@fortawesome/free-regular-svg-icons";
import { faLock } from "@fortawesome/free-solid-svg-icons";
import {
  SignupPage,
  Container,
  Image,
  Content,
  Head,
  Headline,
  Subhead,
  FormSection,
  Form,
  TypeForm,
  Icon,
  Input,
  SubmitHolder,
  SubmitContainer,
  Submit,
  Error,
} from "./style";

const Signup = () => {
  // state
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [password_confirmation, setpassword_confirmation] = useState("");
  const [usernameError, setUsernameError] = useState(false);
  const [emailError, setEmailError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);
  const [password_confirmationError, setpassword_confirmationError] = useState(false);
  const [formValid, setFormValid] = useState(false);

  // combined user data
  const USER_DATA = {
    username: username,
    email: email,
    password: password,
    password_confirmation: password_confirmation,
  };

  // form validation
  const validUsername = (username) => {
    const validation = /^(?=.{5,15}$)(?![0-9])[a-zA-Z0-9]+(?<![0-9])$/;
    return validation.test(username);
  };
  const validEmail = (email) => {
    const validation =
      // eslint-disable-next-line no-useless-escape
      /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return validation.test(email);
  };
  const validPassword = (password) => {
    const validation = /(?=.{8,})/;
    return validation.test(password);
  };

  // handle data
  const handleUsername = (e) => {
    setUsername(e.target.value);
  };

  const handleEmail = (e) => {
    setEmail(e.target.value);
  };

  const handlePassword = (e) => {
    setPassword(e.target.value);
  };

  const handlepassword_confirmation = (e) => {
    setpassword_confirmation(e.target.value);
  };

  // check validation on blur
  const handleUsernameBlur = (e) => {
    if (validUsername(e.target.value) === true) {
      setUsername(e.target.value);
      setUsernameError(false);
    } else {
      setUsernameError(true);
    }
  };

  const handleEmailBlur = (e) => {
    if (validEmail(e.target.value) === true) {
      setEmail(e.target.value);
      setEmailError(false);
    } else {
      setEmailError(true);
    }
  };

  const handlePasswordBlur = (e) => {
    if (validPassword(e.target.value) === true) {
      setPassword(e.target.value);
      setPasswordError(false);
    } else {
      setPasswordError(true);
    }
  };

  const handlepassword_confirmationBlur = (e) => {
    if (password === password_confirmation) {
      setpassword_confirmationError(false);
    } else {
      setpassword_confirmationError(true);
    }
  };

  // handle form submit

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (usernameError || emailError || passwordError || password_confirmationError) {
      setFormValid(false);
    } else {
      setFormValid(true);
    }

    if (formValid) {
      localStorage.setItem("username", username);
      localStorage.setItem("email", email);
      localStorage.setItem("password", password);
      localStorage.setItem("password_confirmation", password_confirmation);

      fetch("https://goldblv.com/api/hiring/tasks/register", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(USER_DATA),
      })
        .then((res) => res.json())
        .then((data) => console.log(data))
        .catch((err) => console.log(err));

      navigate("/Task-Project/success");
    }
  };

  return (
    <SignupPage>
      <Container>
        <Image
          src="assets/Image-Placeholder2.png"
          alt=""
        />
        <Content>
          <Head>
            <Headline>Create Account</Headline>
            <Subhead>
              Go ahead and sign up, let everyone <br /> know how awesome you are!
            </Subhead>
          </Head>
          <FormSection
            action=""
            onSubmit={handleSubmit}
          >
            <Form>
              <TypeForm>
                <Icon icon={faUser} />
                <Input
                  required
                  type="text"
                  placeholder="Username"
                  name="username"
                  onChange={handleUsername}
                  onBlur={handleUsernameBlur}
                />
              </TypeForm>
              {usernameError ? (
                <Error>Username must consist of 5 to 15 characters, only letters and numbers are allowed</Error>
              ) : (
                ""
              )}
              <TypeForm>
                <Icon icon={faEnvelope} />
                <Input
                  required
                  type="email"
                  placeholder="Email"
                  name="email"
                  onChange={handleEmail}
                  onBlur={handleEmailBlur}
                />
              </TypeForm>
              {emailError ? <Error>Email must be in a valid format</Error> : ""}
              <TypeForm>
                <Icon icon={faLock} />
                <Input
                  required
                  type="text"
                  placeholder="Password"
                  name="password"
                  onChange={handlePassword}
                  onBlur={handlePasswordBlur}
                />
              </TypeForm>
              {passwordError ? <Error>Password must be at least 8 characters</Error> : ""}
              <TypeForm>
                <Icon icon={faLock} />
                <Input
                  required
                  type="text"
                  placeholder="Confirm Password"
                  name="password_confirmationation"
                  onChange={handlepassword_confirmation}
                  onBlur={handlepassword_confirmationBlur}
                />
              </TypeForm>
              {password_confirmationError ? <Error>Password doesn't match</Error> : ""}
            </Form>
            <SubmitHolder>
              <SubmitContainer>
                <Submit
                  type="submit"
                  value="Create Account"
                />
              </SubmitContainer>
            </SubmitHolder>
          </FormSection>
        </Content>
      </Container>
    </SignupPage>
  );
};

export default Signup;
