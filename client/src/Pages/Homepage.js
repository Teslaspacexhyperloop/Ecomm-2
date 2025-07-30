// import React from 'react'

// import { useAuth } from '../Context/auth';
import { Prices } from "../components/Prices";

import React, { useState, useEffect } from "react";
import Layout from "../components/Layout/Layout";
import { NavLink, useNavigate } from "react-router-dom";
import axios from "axios";
import { Checkbox, Radio } from "antd";
import { useCart } from "../Context/cart";
import toast from "react-hot-toast";
import "../styles/Homepage.css";
import CarouselComponent from "./Carousel";
import { CardGridComponent1 } from "./Card";
import {
  ProductCarouselComponent1,
  ProductCarouselComponent2,
} from "./ProductCarousel";
import { Card, Button, Container, Row, Col } from "react-bootstrap";
import { motion } from "framer-motion";

const HomePage = () => {
  const navigate = useNavigate();
  const [cart, setCart] = useCart();
  // const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  // const [checked, setChecked] = useState([]);
  const [radio, setRadio] = useState([]);
  // const [total, setTotal] = useState(0);
  // const [page, setPage] = useState(1);
  // const [loading, setLoading] = useState(false);

  //   const cardVariants = {
  //     hidden: { opacity: 0, y: -50 },
  //     visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  //     hover: { scale: 1.1 },
  // };

  // get all cat
  const getAllCategory = async () => {
    try {
      const { data } = await axios.get("/api/v1/category/get-category");
      if (data?.success) {
        setCategories(data?.category);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getAllCategory();
    // getTotal();
  }, []);
  //   //get products
  //   const getAllProducts = async () => {
  //     try {
  //       setLoading(true);
  //       const { data } = await axios.get(`/api/v1/product/product-list/${page}`);
  //       setLoading(false);
  //       setProducts(data.products);
  //     } catch (error) {
  //       setLoading(false);
  //       console.log(error);
  //     }
  //   };

  //   //getTOtal COunt
  //   const getTotal = async () => {
  //     try {
  //       const { data } = await axios.get("/api/v1/product/product-count");
  //       setTotal(data?.total);
  //     } catch (error) {
  //       console.log(error);
  //     }
  //   };

  //   useEffect(() => {
  //     if (page === 1) return;
  //     loadMore();
  //   }, [page]);
  //   //load more
  //   const loadMore = async () => {
  //     try {
  //       setLoading(true);
  //       const { data } = await axios.get(`/api/v1/product/product-list/${page}`);
  //       setLoading(false);
  //       setProducts([...products, ...data?.products]);
  //     } catch (error) {
  //       console.log(error);
  //       setLoading(false);
  //     }
  //   };

  //   // filter by cat
  //   const handleFilter = (value, id) => {
  //     let all = [...checked];
  //     if (value) {
  //       all.push(id);
  //     } else {
  //       all = all.filter((c) => c !== id);

  //       // const filteredArray = all.filter(item => item.id === desiredId);
  // //       all is the array you want to filter.
  // // item represents each object in the array.
  // // item.id === desiredId is the condition you want to filter on. Replace desiredId with the specific id you're looking for.
  //     }
  //     setChecked(all);
  //   };
  //   useEffect(() => {
  //     if (!checked.length || !radio.length) getAllProducts();
  //   }, [checked.length, radio.length]);

  //   useEffect(() => {
  //     if (checked.length || radio.length) filterProduct();
  //   }, [checked, radio]);

  // get filterd product
  // const filterProduct = async () => {
  //   try {
  //     const { data } = await axios.post("/api/v1/product/product-filters", {
  //       checked,
  //       radio,
  //     });
  //     setProducts(data?.products);
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };
  return (
    <Layout title={"ALl Products - Best offers "}>
      <div className="background" style={{ background: "#219C90" }}>
        <CarouselComponent />
        {/* <CardGridComponent1 card={categories}/> */}
        <Container>
          <Row>
            <h1 className="text-center" style={{ marginBottom: "30px" }}>
              Shop By Category
            </h1>
            {categories?.map((p) => (
              <Col key={p._id} sm={12} md={6} lg={3} className="mb-4">
                <div
                  onClick={() => navigate(`/category/${p.slug}`)}
                  className="card"
                >
                  <NavLink to="">
                    <Card className="content" style={{ color: "#FFF455" }}>
                      <Card.Img
                        style={{
                          width: "286px",
                          height: "230px",
                          borderRadius: "5%",
                          marginTop: "25px",
                        }}
                        variant="top"
                        src={`/api/v1/category/category-photo/${p._id}`}
                        alt={`Image for ${p.name}`}
                      />
                      <Card.Body>
                        <Card.Title
                          style={{ color: "black", textDecoration: "none" }}
                        >
                          {p.name}
                        </Card.Title>
                      </Card.Body>
                    </Card>
                  </NavLink>
                </div>
              </Col>
            ))}
          </Row>
        </Container>
        <ProductCarouselComponent1 />

        <div style={{ paddingBottom: "30px" }}>
          <ProductCarouselComponent2 />
        </div>
      </div>
    </Layout>
  );
};

export default HomePage;

//  <div className="container-fluid row mt-3">
//         <div className="col-md-2">
//           <h4 className="text-center">Filter By Category</h4>
//           <div className="d-flex flex-column">
//             {categories?.map((c) => (
//               <Checkbox
//                 key={c._id}
//                 onChange={(e) => handleFilter(e.target.checked, c._id)}
//               >
//                 {c.name}
//               </Checkbox>
//             ))}
//           </div>
{
  /* price filter */
}
//   <h4 className="text-center mt-4">Filter By Price</h4>
//   <div className="d-flex flex-column">
//     <Radio.Group onChange={(e) => setRadio(e.target.value)}>
//       {Prices?.map((p) => (
//         <div key={p._id}>
//           <Radio value={p.array}>{p.name}</Radio>
//         </div>
//       ))}
//     </Radio.Group>
//   </div>
//   <div className="d-flex flex-column">
//     <button
//       className="btn btn-danger"
//       onClick={() => window.location.reload()}
//     >
//       RESET FILTERS
//     </button>
//   </div>
// </div>
//   <div className="col-md-9 offset-1">
//     <h1 className="text-center">All Products</h1>
//     <div className="d-flex flex-wrap">
//       {products?.map((p) => (
//         <div className="card m-2" style={{ width: "18rem" }} key={p._id}>
//           <img
//             src={`/api/v1/product/product-photo/${p._id}`}
//             className="card-img-top"
//             alt={p.name}
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
//             <button
//               className="btn btn-secondary ms-1"
//               onClick={() => {
//                 setCart([...cart, p]);
//                 localStorage.setItem(
//                   "cart",
//                   JSON.stringify([...cart, p])
//                 );
//                 toast.success("Item Added to cart");
//               }}
//             >
//               ADD TO CART
//             </button>
//           </div>
//         </div>
//       ))}
//     </div>
//     <div className="m-2 p-3">
//       {products && products.length < total && (
//         <button
//           className="btn btn-warning"
//           onClick={(e) => {
//             e.preventDefault();
//             setPage(page + 1);
//           }}
//         >
//           {loading ? "Loading ..." : "Loadmore"}
//         </button>
//       )}
//     </div>
//   </div>
// </div>
