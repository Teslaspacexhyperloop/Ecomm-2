import React from "react";
import { useState } from "react";
import Layout from "../../components/Layout/Layout";
import toast, { Toaster } from "react-hot-toast";
// import 'react-toastify/dist/ReactToastify.css';
import { useNavigate, useLocation } from "react-router-dom";
import axios from "axios";
import { useAuth } from "../../Context/auth";
import "../../styles/AuthStyles.css";
import { NavLink } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [auth, setAuth] = useAuth();

  const navigate = useNavigate();
  const location = useLocation();

  const handleSubmit = async (e) => {
    e.preventDefault(); //it stop refreshing of browser after form submit
    console.log("request to login");

    try {
      const res = await axios.post("/api/v1/auth/login", { email, password });
      console.log(res);
      // In the given code, res.data.success is used because it refers to the structure of the response object received from the server when making NavLink request using Axios. When the server sends NavLink response, the data received is usually contained within the data property of the response object (res). This data includes various properties sent by the server, such as success, user, token, etc.
      //for using axios we have set proxt in package.json file isliye hm aise use kr paa rhe h  nhi to axios ko use karne ka syntax badlega
      if (res.data.success) {
        // res.data contains the actual data sent by the server. This usually includes whatever the server sends back, such as success status, user details, tokens, error messages, etc.
        toast.success("Login success");
        setAuth({
          ...auth,
          user: res.data.user,
          token: res.data.token,
        });
        localStorage.setItem("auth", JSON.stringify(res.data)); //localstorage diesnot support json object so convert them into the string
        //auth name ke variable me saara user ka data localstorage me save kr diye
        navigate(location.state || "/"); //suppose koi user dashboard access krna chahta h to wo login nhi h to pehle to wo login kiya lekin login krte hi dashboard page k pas chala gya
      }
    } catch (error) {
      console.log(error);
      toast.error("Error in login");
    }
  };

  return (
    <Layout title="Online Shopping India">
      <div className="container ">
        <div className="screen">
          <div className="screen__content">
            <form className="login" onSubmit={handleSubmit}>
              <div className="login__field">
                <i className="login__icon fas fa-user" />
                <input
                  placeholder="User name / Email"
                  type="email"
                  className="form-control form-control-lg"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>
              <div className="login__field">
                <i className="login__icon fas fa-lock" />
                <input
                  placeholder="Password"
                  type="password"
                  className="form-control form-control-lg"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
              </div>
              <button className="button login__submit" type="submit">
                <span className="button__text">Log In Now</span>
                <i className="button__icon fas fa-chevron-right" />
              </button>
            </form>
          </div>
          <div className="screen__background">
            <span className="screen__background__shape screen__background__shape4" />
            <span className="screen__background__shape screen__background__shape3" />
            <span className="screen__background__shape screen__background__shape2" />
            <span className="screen__background__shape screen__background__shape1" />
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Login;

{
  /* <section className="vh-100" style={{ backgroundColor: "#9A616D" }}>
        <div className="container py-5 h-100">
          <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col col-xl-10">
              <div
                className="card"
                style={{ borderRadius: "1rem", marginBottom: "30px" }}
              >
                <div className="row g-0">
                  <div className="col-md-6 col-lg-5 d-none d-md-block">
                    <img
                      src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/img1.webp"
                      alt="login form"
                      className="img-fluid"
                      style={{ borderRadius: "1rem 0 0 1rem" }}
                    />
                  </div>
                  <div className="col-md-6 col-lg-7 d-flex align-items-center">
                    <div className="card-body p-4 p-lg-5 text-black">
                      <form onSubmit={handleSubmit}>
                        <div className="d-flex align-items-center mb-3 pb-1">
                          <i
                            className="fas fa-cubes fa-2x me-3"
                            style={{ color: "#ff6219" }}
                          ></i>
                          <span className="h1 fw-bold mb-0">AmazeKart</span>
                        </div>
                        <h5
                          className="fw-normal mb-3 pb-3"
                          style={{ letterSpacing: "1px" }}
                        >
                          Sign into your account
                        </h5>
                        <div className="form-outline mb-4">
                          <input
                            type="email"
                            id="form2Example17"
                            className="form-control form-control-lg"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                          />
                          <label
                            className="form-label"
                            htmlFor="form2Example17"
                          >
                            Email address
                          </label>
                        </div>
                        <div className="form-outline mb-4">
                          <input
                            type="password"
                            id="form2Example27"
                            className="form-control form-control-lg"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                          />
                          <label
                            className="form-label"
                            htmlFor="form2Example27"
                          >
                            Password
                          </label>
                        </div>
                        <div className="pt-1 mb-4">
                          <button
                            className="btn btn-dark btn-lg btn-block"
                            type="submit"
                          >
                            Login
                          </button>
                        </div>
                        <NavLink
                          to="/forgot-password"
                          className="small text-muted"
                          href="#!"
                        >
                          Forgot password?
                        </NavLink>
                        <br />

                        <NavLink to="/policy" className="small text-muted">
                          Privacy policy
                        </NavLink>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section> */
}
