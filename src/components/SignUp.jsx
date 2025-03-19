import axios from "axios";
import { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXTwitter } from "@fortawesome/free-brands-svg-icons";

function SignUp() {
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [avatar, setAvatar] = useState("");
  const [password, setPassword] = useState("");

  const handleSignUp = async (e) => {
    e.preventDefault();
    const formValues = new FormData(e.target); //Necesario debido a formidable
    const response = await axios({
      url: "https://ha-proyecto-base-api-mongoose.vercel.app/users",
      method: "post",
      headers: { "Content-Type": "multipart-form-data" }, //Necesario debido a formidable
      data: formValues,
    });
    console.log(response);
  };

  return (
    <div className="full-screen-dark-blue d-flex justify-content-center align-items-center">
      <Container>
        <Row>
          <Col md={6} className="rounded-start secondary-dark-blue d-none d-md-flex">
            <div className="p-5 d-flex align-items-start flex-column">
              <FontAwesomeIcon className="mb-auto" icon={faXTwitter} size="4x" color="white" />
              <h2 className="text-white">Hi! Welcome to X Clone</h2>
            </div>
          </Col>
          <Col md={6} className="rounded-end bg-light">
            <div className="p-5">
              <h1>Sign up</h1>
              <p>Create an account and start using X</p>
              <form action="" className="mb-4" onSubmit={handleSignUp}>
                <div className="mb-2">
                  <label htmlFor="firstname" className="form-label" />
                  <input
                    placeholder="First name"
                    type="text"
                    name="firstname"
                    id="firstname"
                    className="form-control"
                    value={firstname}
                    onChange={(e) => setFirstname(e.target.value)}
                  />
                </div>
                <div className="mb-2">
                  <label htmlFor="lastname" className="form-label" />
                  <input
                    placeholder="Last name"
                    type="text"
                    name="lastname"
                    id="lastname"
                    className="form-control"
                    value={lastname}
                    onChange={(e) => setLastname(e.target.value)}
                  />
                </div>
                <div className="mb-2">
                  <label htmlFor="email" className="form-label" />
                  <input
                    placeholder="Email"
                    type="text"
                    name="email"
                    id="email"
                    className="form-control"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
                <div className="mb-2">
                  <label htmlFor="username" className="form-label" />
                  <input
                    placeholder="Username"
                    type="text"
                    name="username"
                    id="username"
                    className="form-control"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                  />
                </div>
                <div className="mb-2">
                  <label htmlFor="avatar" className="form-label"></label>
                  <input
                    type="file"
                    name="avatar"
                    id="avatar"
                    className="form-control"
                    onChange={(e) => setAvatar(e.target.files[0])}
                  />
                </div>
                <div className="mb-4">
                  <label htmlFor="password" className="form-label" />
                  <input
                    placeholder="Password"
                    type="text"
                    name="password"
                    id="password"
                    className="form-control"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </div>
                <div className="d-grid mb-2">
                  <button className="btn btn-primary">Sign up</button>
                </div>
              </form>
              <p className="text-center">Already have an account? Sign in</p>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default SignUp;
