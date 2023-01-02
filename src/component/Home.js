import React from "react";
import './Style.css';
import { Card_containe } from "./Card_containe";
import {About} from './About';
import Change_compt from "../New Component/Change_compt";
import { useNavigate } from "react-router-dom";


export const Home = () => {
    // style
    const heading={
      border:'none'
    }

    // variable Navigator
    const shopeHere=useNavigate();
  return (
    <>
      <div className="container-fluid" id="slider-container ">
        <div className="card bg-dark text-white mt-3 mb-3" style={heading}>
          <img
            src="https://img.freepik.com/premium-photo/halloween-wallpaper-with-evil-pumpkins_23-2149122573.jpg?w=1060"
            className="card-img"
            alt="veg-img" id="veg-img"
          />
          <div className="card-img-overlay m-auto position-absolute top-10%" id='text-slider'>
            <h1 className="card-title">VEGGIES DELIGHT</h1>
            <p classname="card-text ">
              {/* <hr /> */}
              <i><p>Form Fresh veggies for your Home-Cooked Meals.</p></i>
            </p>
            <i><p class="card-text">Last updated 3 mins ago</p></i>
            <button type="button" class="btn  text-dark w-80 bg-white top-10" onClick={()=>shopeHere('servies')}>Shope Here.</button>
            
          </div>
        </div>
      </div>



      {/* cards */}

      <Card_containe/>
      {/* <Fruits1/> */}
      {/* <About/> */}
      <Change_compt/>
    </>
  );
};
