import axios from "axios";
import { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXTwitter } from "@fortawesome/free-brands-svg-icons";

function Login() {
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();
    const response = await axios({
      url: "https://ha-proyecto-base-api-mongoose.vercel.app/tokens",
      method: "post",
      data: { email, password },
    });
    console.log(response.data);
  };

  return (
    <div className="full-screen-dark-blue d-flex justify-content-center align-items-center">
      <Container>
        <Row>
          <Col md={6} className="rounded-start secondary-dark-blue d-none d-md-flex">
            <div className="p-5 d-flex align-items-start flex-column">
              <FontAwesomeIcon className="mb-auto" icon={faXTwitter} size="4x" color="white" />
              <h2 className="text-white">Hey! Nice to see you again</h2>
            </div>
          </Col>
          <Col md={6} className="rounded-end bg-light">
            <div className="p-5">
              <h1>Login</h1>
              <p>Ready to start using X?</p>
              <form action="" className="mb-4" onSubmit={handleLogin}>
                <div className="mb-2">
                  <label htmlFor="email" className="form-label" />
                  <input
                    placeholder="Username or email"
                    type="text"
                    name="email"
                    id="email"
                    className="form-control"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
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
                  <button className="btn btn-primary">Login</button>
                </div>
              </form>
              <p className="text-center">Don't have an account? Sign up</p>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Login;
