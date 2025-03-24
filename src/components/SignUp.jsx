import axios from "axios";
import { Container, Row, Col } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXTwitter } from "@fortawesome/free-brands-svg-icons";
import { NavLink, useNavigate } from "react-router-dom";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

function SignUp() {
  const navigate = useNavigate();

  const validationSchema = Yup.object({
    firstname: Yup.string().required("First name is required"),
    lastname: Yup.string().required("Last name is required"),
    email: Yup.string().email("Invalid email").required("Email is required"),
    username: Yup.string().required("Username is required"),
    password: Yup.string()
      .min(6, "Password must be at least 6 characters")
      .required("Password is required"),
  });

  const handleSignUp = async (values, { setSubmitting, resetForm }) => {
    try {
      const formData = new FormData();

      for (const key in values) {
        formData.append(key, values[key]);
      } //Necesario debido a formidable

      await axios({
        url: `${import.meta.env.VITE_API_URL}/users`,
        method: "post",
        headers: { "Content-Type": "multipart-form-data" }, //Necesario debido a formidable
        data: formData,
      });

      resetForm();
      navigate("/");
    } catch (err) {
      console.log(err);
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="full-screen-dark-blue d-flex justify-content-center align-items-center p-5">
      <Container style={{ maxWidth: "1140px" }}>
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

              <Formik
                initialValues={{
                  firstname: "",
                  lastname: "",
                  email: "",
                  username: "",
                  password: "",
                  avatar: null,
                }}
                validationSchema={validationSchema}
                onSubmit={handleSignUp}
              >
                {({ isSubmitting, setFieldValue }) => (
                  <Form>
                    <div className="mb-2">
                      <Field
                        type="text"
                        name="firstname"
                        placeholder="First name"
                        className="form-control"
                      />
                      <ErrorMessage name="firstname" component="div" className="text-danger" />
                    </div>

                    <div className="mb-2">
                      <Field
                        type="text"
                        name="lastname"
                        placeholder="Last name"
                        className="form-control"
                      />
                      <ErrorMessage name="lastname" component="div" className="text-danger" />
                    </div>

                    <div className="mb-2">
                      <Field
                        type="email"
                        name="email"
                        placeholder="Email"
                        className="form-control"
                      />
                      <ErrorMessage name="email" component="div" className="text-danger" />
                    </div>

                    <div className="mb-2">
                      <Field
                        type="text"
                        name="username"
                        placeholder="Username"
                        className="form-control"
                      />
                      <ErrorMessage name="username" component="div" className="text-danger" />
                    </div>

                    <div className="mb-2">
                      <input
                        type="file"
                        name="avatar"
                        className="form-control"
                        onChange={(event) => setFieldValue("avatar", event.currentTarget.files[0])}
                      />
                      <ErrorMessage name="avatar" component="div" className="text-danger" />
                    </div>

                    <div className="mb-4">
                      <Field
                        type="password"
                        name="password"
                        placeholder="Password"
                        className="form-control"
                      />
                      <ErrorMessage name="password" component="div" className="text-danger" />
                    </div>

                    <div className="d-grid mb-2">
                      <button type="submit" className="btn btn-primary" disabled={isSubmitting}>
                        Sign up
                      </button>
                    </div>
                  </Form>
                )}
              </Formik>

              <p className="text-center">
                Already have an account? <NavLink to={"/"}>Sign in</NavLink>
              </p>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default SignUp;
