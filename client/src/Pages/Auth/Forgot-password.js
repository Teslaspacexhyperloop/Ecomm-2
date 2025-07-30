import React from "react";
import Layout from "../../components/Layout/Layout";
import { useState } from "react";

import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate, useLocation } from "react-router-dom";
import axios from "axios";

const Forgotpassword = () => {
  const [email, setEmail] = useState("");
  const [newpassword, setNewPassword] = useState("");
  const [answer, setAnswer] = useState("");

  const navigate = useNavigate();
  const location = useLocation();

  const handleSubmit = async (e) => {
    e.preventDefault(); //it stop refreshing of browser after form submit

    try {
      const res = await axios.post("/api/v1/auth/forgot-password", {
        email,
        newpassword,
        answer,
      });
      if (res.data.success) {
        toast.success(res.data && res.data.message);
        navigate("/login");
        toast.success(res.data.message);
      } else {
        toast.success(res.data.message);
      }
    } catch (error) {
      console.log(error);
      toast.error("Something went wrong");
    }
  };

  return (
    <Layout>
      <div className="register text-center ">
        <h2>Forot password</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <input
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              type="email"
              className="form-control"
              id="exampleInputemail"
              placeholder="email"
            />
          </div>
          <div className="mb-3">
            <input
              value={newpassword}
              onChange={(e) => setNewPassword(e.target.value)}
              type="password"
              className="form-control"
              id="exampleInputPasswordr"
              placeholder="Enter New Password"
            />
          </div>

          <div className="mb-3">
            <input
              value={answer}
              onChange={(e) => setAnswer(e.target.value)}
              type="password"
              className="form-control"
              id="exampleInputPasswordr"
              placeholder="what is name of your 1st school"
            />
          </div>

          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </form>
      </div>
    </Layout>
  );
};

export default Forgotpassword;
