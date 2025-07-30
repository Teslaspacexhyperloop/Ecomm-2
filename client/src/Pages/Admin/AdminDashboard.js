import React from "react";
import Adminmenu from "./Adminmenu";
import Layout from "../../components/Layout/Layout";
import { useAuth } from "../../Context/auth";

const AdminDashboard = () => {
  const [auth] = useAuth();
  return (
    <Layout>
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-3">
            <Adminmenu />
          </div>
          <div className="col-md-9">
            <div className="card" style={{ marginLeft: "50px" }}>
              <h1>{auth?.user?.name}</h1>
              <h1>{auth?.user?.email}</h1>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default AdminDashboard;
