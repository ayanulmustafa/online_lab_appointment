import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { message} from 'antd';



function Navbar() {
  const navigate = useNavigate();

  const handleLogout = () => {
  localStorage.clear();
  message.success("Logout Successfully");
   navigate("/login");
};

function ProtectedbRoute({ children }) {
  if (localStorage.getItem("token")) {
    return children;
  } else {
    return 
  }
}

function PublicbRoute({ children }) {
  if (localStorage.getItem("token")) {
    return 
  } else {
    return children;
  }
}

  return (
    <>
    <nav className="navbar bg-dark navbar-expand-lg sticky-top" style={{zIndex:9}} >
  <div className="container-fluid">
    <Link className="navbar-brand" style={{color:'white'}} to="/">HealthCare Online</Link>

    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0 mx-0">
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" style={{color:'white'}} to="/">Home</Link>
        </li>
        
        <li className="nav-item">
          <Link className="nav-link active" style={{color:'white'}} to="/about">About us</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link active" style={{color:'white'}} to="/mytest">My Test</Link>
        </li>

      </ul>
      <form className="d-flex">
    
      <PublicbRoute><Link to="/login"><button className="btn btn-outline-light mx-1" type="submit">Login</button></Link></PublicbRoute>
      <PublicbRoute><Link to="/signup" ><button className="btn btn-outline-light mx-1" type="submit">Signup</button></Link></PublicbRoute>
      
      <ProtectedbRoute><Link to="/"><button className="btn btn-outline-light" type="submit" onClick={handleLogout}>Logout</button></Link></ProtectedbRoute>
      
      </form>
    
    </div>
  </div>  
</nav>

    </>
  );
}

export default Navbar


//<ProtectedbRoute><Link to=""><button className="btn btn-warning mx-2" type="submit" >Book Now</button></Link></ProtectedbRoute>