import logo from "./logo.svg";
import "./App.css";
import Layout from "./components/Layout/Layout";
import { Route, Routes } from "react-router-dom";
import Homepage from "./Pages/Homepage";
import About from "./Pages/About";
import Contact from "./Pages/Contact";
import Policy from "./Pages/Policy";
import PageNotFound from "./Pages/PageNotFound";
import Register from "./Pages/Auth/Register";
import Login from "./Pages/Auth/Login";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Dashboard from "./Pages/user/Dashboard";
import PrivateRoute from "./components/Route/Private";
import Forgotpassword from "./Pages/Auth/Forgot-password";
import AdminDashboard from "./Pages/Admin/AdminDashboard";
import AdminRoute from "./components/Route/AdminRoute";
import Createcategory from "./Pages/Admin/createcategory";
import Createproduct from "./Pages/Admin/createproduct";
import Users from "./Pages/Admin/users";
import Profile from "./Pages/user/Profile";
import Order from "./Pages/user/Order";
import UpdateProduct from "./Pages/Admin/UpdatedProduct";
import Products from "./Pages/Admin/product";
import Search from "./Pages/search";
import ProductDetails from "./Pages/ProductDetails";
import Categories from "./Pages/Categories";
import CategoryProduct from "./Pages/CategoryProduct";
import CartPage from "./Pages/Cartpage";
import Orders from "./Pages/user/Order";

//it is react convention that suppose we make a header component then write it css in header.css
// similarly for other components
function App() {
  return (
    //if we use div to enclose our content then extra element is created in dom tree thats why we use this <> i.e syntactical sugar form
    <>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/about" element={<About />} />
        <Route path="/search" element={<Search />} />
        <Route path="/categories" element={<Categories />} />
        <Route path="/category/:slug" element={<CategoryProduct />} />

        <Route path="/product/:category/:slug" element={<ProductDetails />} />
        <Route path="/cart" element={<CartPage />} />

        <Route path="/forgot-password" element={<Forgotpassword />} />
        <Route path="/dashboard" element={<PrivateRoute />}>
          <Route path="user" element={<Dashboard />}></Route>
          <Route path="user/profile" element={<Profile />}></Route>
          <Route path="user/orders" element={<Orders />}></Route>
        </Route>
        <Route path="/dashboard" element={<AdminRoute />}>
          {/* adminrote me mera private route h  securit wo check hoga fir hmara nested route execute hoga */}

          <Route path="admin" element={<AdminDashboard />}></Route>
          <Route
            path="admin/create-category"
            element={<Createcategory />}
          ></Route>

          <Route
            path="admin/create-product"
            element={<Createproduct />}
          ></Route>
          <Route path="admin/product/:slug" element={<UpdateProduct />} />
          <Route path="admin/products" element={<Products />} />
          <Route path="admin/users" element={<Users />}></Route>
        </Route>

        <Route path="/contact" element={<Contact />} />
        <Route path="/policy" element={<Policy />} />
        <Route path="/*" element={<PageNotFound />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </>
  );
}

export default App;
