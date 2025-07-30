import React, { useState, useEffect } from "react";
import Layout from "../components/Layout/Layout";
import { useParams, useNavigate, NavLink } from "react-router-dom";
import axios from "axios";
// import "../styles/CategoryProductStyles.css";
import { Prices } from "../components/Prices";
import { Checkbox, Radio } from "antd";
import "../styles/categoryRelatedProduct.css";
// import { useNavigate } from "react-router-dom";

const CategoryProduct = () => {
  const params = useParams();
  const navigate = useNavigate();
  const [products, setProducts] = useState([]);
  const [category, setCategory] = useState([]);
  const [radio, setRadio] = useState([]);

  useEffect(() => {
    if (params?.slug) getPrductsByCat();
  }, [params?.slug]);
  const getPrductsByCat = async () => {
    try {
      const { data } = await axios.get(
        `/api/v1/product/product-category/${params.slug}`
      );
      setProducts(data?.products);
      setCategory(data?.category);
    } catch (error) {
      console.log(error);
    }
  };

  const filterProduct = async () => {
    try {
      const { data } = await axios.post("/api/v1/product/product-filters", {
        category,
        radio,
      });
      console.log(category);
      setProducts(data?.products);
    } catch (error) {
      console.log(error);
    }
  };

  //   useEffect(() => {
  //   if ( !radio.length) getProuct();
  // }, [ radio.length]);

  useEffect(() => {
    if (radio.length) filterProduct();
  }, [radio]);

  return (
    <Layout>
      <div className="big-container" style={{ background: "#7f818040" }}>
        <h6 className="text-center" style={{ fontSize: "40px" }}>
          {products?.length} result Found{" "}
        </h6>
        <div className="row">
          <div className="col-2 ">
            <h4 className="text-center mt-4">Category→ {category?.name}</h4>
            <h4 className="text-center mt-4">Filter By Price</h4>
            <div className="d-flex flex-column">
              <Radio.Group onChange={(e) => setRadio(e.target.value)}>
                {Prices?.map((p) => (
                  <div key={p._id}>
                    <Radio value={p.array}>{p.name}</Radio>
                  </div>
                ))}
              </Radio.Group>
            </div>
            <div className="d-flex flex-column">
              <button
                className="btn btn-danger"
                onClick={() => window.location.reload()}
              >
                RESET FILTERS
              </button>
            </div>
          </div>

          <div className="col-9 ">
            <div className="d-flex flex-wrap">
              {products?.map((p) => (
                <div
                  className="card m-2"
                  style={{ width: "18rem" }}
                  key={p._id}
                  onClick={() => navigate(`/product/${category}/${p.slug}`)}
                >
                  <img
                    src={`/api/v1/product/product-photo/${p._id}`}
                    className="card-img-top"
                    alt={p.name}
                    style={{
                      width: "286px",
                      height: "230px",
                      padding: "5px",
                      borderRadius: "5%",
                    }}
                  />
                  <div className="card-body" style={{ padding: "5px" }}>
                    <h5 className="card-title">{p.name}</h5>
                    <p className="card-text">
                      {p.description.substring(0, 30)}...
                    </p>
                    <p className="card-text"> $ {p.price}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* <div className="container mt-3"> */}
      {/* <h4 className="text-center">Category - {category?.name}</h4> */}
      {/* <h6 className="text-center" style={{fontSize:"40px"}}>{products?.length} result Found </h6>
<div className="row">
<div className="col-2 ">
<h4 className="text-center mt-4">Category→ {category?.name}</h4>
<h4 className="text-center mt-4">Filter By Price</h4>
          <div className="d-flex flex-column">
            <Radio.Group onChange={(e) => setRadio(e.target.value)}>
              {Prices?.map((p) => (
                <div key={p._id}>
                  <Radio value={p.array}>{p.name}</Radio>
                </div>
              ))}
            </Radio.Group>
          </div>
          <div className="d-flex flex-column">
            <button
              className="btn btn-danger"
              onClick={() => window.location.reload()}
            >
              RESET FILTERS
            </button>
          </div>
        </div>

  <div className="col-9 ">
    <div className="d-flex flex-wrap">
      {products?.map((p) => (
        <div
          className="card m-2"
          style={{ width: "18rem" }}
          key={p._id}
          onClick={() => navigate(`/product/${category}/${p.slug}`)}
        >
          <img
            src={`/api/v1/product/product-photo/${p._id}`}
            className="card-img-top"
            alt={p.name}
            style={{width: '286px' ,height:'230px'}}
          />
          <div className="card-body">
            <h5 className="card-title">{p.name}</h5>
            <p className="card-text">
              {p.description.substring(0, 30)}...
            </p>
            <p className="card-text"> $ {p.price}</p>
            
          </div>
        </div>
      ))}
    </div>
    </div>
    </div>
    </div> */}
      {/* <div className="m-2 p-3">
    {products && products.length < total && (
      <button
        className="btn btn-warning"
        onClick={(e) => {
          e.preventDefault();
          setPage(page + 1);
        }}
      >
        {loading ? "Loading ..." : "Loadmore"}
      </button>
    )}
  </div>  */}
      {/* </div>
 </div>
 </div>  */}
    </Layout>
  );
};

export default CategoryProduct;

//  <div className="container mt-3">
// <h4 className="text-center">Category - {category?.name}</h4>
// <h6 className="text-center">{products?.length} result found </h6>
// <div className="row">
// <div className="col-md-3 offset-1">

// </div>
//   <div className="col-md-9 offset-1">
//     <div className="d-flex flex-wrap">
//       {products?.map((p) => (
//         <div
//           className="card m-2"
//           style={{ width: "18rem" }}
//           key={p._id}
//         >
//           <img
//             src={`/api/v1/product/product-photo/${p._id}`}
//             className="card-img-top"
//             alt={p.name}
//             style={{width: '286px' ,height:'230px'}}
//           />
//           <div className="card-body">
//             <h5 className="card-title">{p.name}</h5>
//             <p className="card-text">
//               {p.description.substring(0, 30)}...
//             </p>
//             <p className="card-text"> $ {p.price}</p>
//             <button
//               className="btn btn-primary ms-1"
//               onClick={() => navigate(`/product/${p.slug}`)}
//             >
//               More Details
//             </button>
//             <button className="btn btn-secondary ms-1">
//               ADD TO CART
//             </button>
//           </div>
//         </div>
//       ))}
//     </div>
//      <div className="m-2 p-3">
//     {products && products.length < total && (
//       <button
//         className="btn btn-warning"
//         onClick={(e) => {
//           e.preventDefault();
//           setPage(page + 1);
//         }}
//       >
//         {loading ? "Loading ..." : "Loadmore"}
//       </button>
//     )}
//   </div>
//   </div>
//  </div>
//  </div>
