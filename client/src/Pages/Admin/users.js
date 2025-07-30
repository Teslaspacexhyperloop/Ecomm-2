import React from "react";
import Layout from "../../components/Layout/Layout";
import Adminmenu from "./Adminmenu";

const Users = () => {
  return (
    <Layout>
      <div className="row">
        <div className="col-md-3">
          <Adminmenu />
        </div>
        <div className="col-md-9">
          <h1>Create Product</h1>
        </div>
      </div>
    </Layout>
  );
};

export default Users;
