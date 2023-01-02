// import React from "react";

// import { Link } from "react-router-dom";

// export const Footer = () => {
//   return (
//     <>
//       <div class="card text-center">
//         <div class="card-body">
//           <div className="row">
//             <div class="col">
//               <ul>
//                 <li>
//                   <Link to="/about">
//                     <h5>About</h5>
//                   </Link>
//                 </li>
//                 <p id="footer-para">
//                 Excellence in quality and service is the hallmark of all operations performed at Fruit. Firmly standing by its business values, Fruit is active in manufacture and sale of textile
//                 </p>
//               </ul>

//             </div>
//             <div class="col">
//                 <ul>
//                   <li>
//                     <Link to='/about'><h5>About</h5></Link>
//                   </li>
//                   <li>Fees</li>
//                   <li>Quality</li>
//                   <li>Contact</li>
//                   <li>Servises</li>
//                 </ul>
//               </div>
//               <div class="col">
//                 <ul>
//                   <li>
//                     <Link to='/about'><h5>About</h5></Link>
//                   </li>
//                   <li>Fees</li>
//                   <li>Quality</li>
//                   <li>Contact</li>
//                   <li>Servises</li>
//                 </ul>
//               </div>
//               {/* <div class="col">
//                 <ul>
//                   <li>
//                     <Link to='/about'><h5>About</h5></Link>
//                   </li>
//                   <li>Fees</li>
//                   <li>Quality</li>
//                   <li>Contact</li>
//                   <li>Servises</li>
//                 </ul>
//               </div> */}
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

import React from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Style.css";

export const Footer = () => {
  const footer_style = {
    color: "white",
  };

  // Footer Navigator
  const Footer_containe=useNavigate();

  const About_footer=useNavigate();

  const Contact_us=useNavigate();
  return (
    <>
      <footer className="">
        <div class="container">
          <div class="row mb-5">
            <div class="col-md-4 footer-column">
              <ul class="nav flex-column footer-list" >
                <li class="nav-item">
                  <span class="footer-title">Product</span>
                </li>
                <li class="nav-item">
                  <a class="nav-link" onClick={()=>Footer_containe('servies')}>
                   Services 
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" onClick={()=>Footer_containe('servies')}>
                    Bread
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" onClick={()=>Footer_containe('servies')}>
                    Vegitable
                  </a>
                </li>
              </ul>
            </div>
            <div class="col-md-4 footer-column">
              <ul class="nav flex-column footer-list">
                <li class="nav-item">
                  <span class="footer-title">Company</span>
                </li>
                <li class="nav-item">
                  <Link class="nav-link" onClick={()=>About_footer('about')}>
                    About us
                  </Link>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#">
                    Job postings
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#">
                    News and articles
                  </a>
                </li>
              </ul>
            </div>
            <div class="col-md-4 footer-column">
              <ul class="nav flex-column footer-list">
                <li class="nav-item">
                  <span class="footer-title">Contact & Support</span>
                </li>
                <li class="nav-item">
                  <a href="">
                    <i class="bi bi-telephone"></i>+91 9552121510
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#">
                    <i class="bi bi-wechat"></i> Live chat
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" onClick={()=>Contact_us('contact')}>
                    <i class="bi bi-envelope"></i> Contact us
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#">
                    <i class="bi bi-star-fill"></i> Give feedback
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div class="text-center" id="Dots" style={footer_style}>
            <i class="bi bi-three-dots"></i>
          </div>

          <div class="row text-center">
            <div class="col-md-4 box">
              <span class="copyright quick-links" id="copywrite">
                Copyright &copy; Your Website{" "}
                <script>document.write(new Date().getFullYear())</script>
              </span>
            </div>
            <div class="col-md-4 box">
              <ul class="list-inline social-buttons">
                <li class="list-inline-item social-icon">
                  <a href="https://twitter.com/login">
                    <i class="bi bi-twitter"></i>
                  </a>
                </li>
                <li class="list-inline-item social-icon">
                  <a href="https://www.facebook.com/login/">
                    <i class="bi bi-facebook"></i>
                  </a>
                </li>
                <li class="list-inline-item social-icon">
                  <a href="#">
                    <i class="bi bi-linkedin"></i>
                  </a>
                </li>
              </ul>
            </div>
            <div class="col-md-4 box">
              <ul class="list-inline quick-links">
                <li class="list-inline-item">
                  <a href="#">Privacy Policy</a>
                </li>
                <li class="list-inline-item">
                  <a href="#">Terms of Use</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};
