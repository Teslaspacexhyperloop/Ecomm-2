import React from 'react'
import { NavLink } from 'react-router-dom';
import { useAuth } from '../../Context/auth';

const Adminmenu = () => {
  const [auth,setAuth]=useAuth();
  return (
    <>
    <div className='text-center'>
    <div className="list-group">
     <h4>Hello {auth?.user?.name}</h4>

  <NavLink to="/dashboard/admin/create-category" className="list-group-item list-group-item-action">Create category</NavLink>
  <NavLink to="/dashboard/admin/create-product" className="list-group-item list-group-item-action">Create product</NavLink>
  {/* <NavLink to="/dashboard/admin/products" className="list-group-item list-group-item-action">Product</NavLink> */}
  
 
</div>
    </div>


    </>
  )
}

export default Adminmenu