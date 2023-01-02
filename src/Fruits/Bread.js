import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./ContentFruit.css";

export const Bread = () => {
  const [count1,setCount1]=useState(0);
  // Bread page Navigator.
  const Add_Card=useNavigate();

    const sub_1=()=>{
        if(count1>0){
            setCount1(count1-1)
        }
        else{
            alert('Sorry ,Product must be grether than one .');

        }
    }
    const add_1=()=>{
        setCount1(count1+1);
    }
  return (
    <>
    <hr />
      <div className="heading mt-3 mb-3">
        <h2>BREADS</h2>
      </div>
      <hr />
      <div className="container mt-3 mb-3">
        <div class="row row-cols-1 row-cols-md-5 g-4">
          <div class="col">
            <div class="card h-100 veg_Bread">
              <img
                src="https://cdn.shopify.com/s/files/1/0258/4307/3103/products/Photo15-07-21_113616AM_400x.jpg?v=1626338879"
                class="card-img-top"
                alt="..."
              />
              <div class="card-body">
                <h5 class="card-title">WHEATY'S - WHOLE WHEAT NEAPOLITAN PIZZA BASE</h5>
                <p class="card-text">
                  <span>RS. 75</span> <del>RS.90</del>
                  <div className="row">
                    <div className=" col col-md-4 col-sm-12 " id="normal-box">
                      <div className="add_sub d-flex text-center">
                        <button className="sign1 p-1" onClick={sub_1}>-</button>
                        <button className="sign1 p-1">{count1}</button>
                        <button className="sign1 p-1" onClick={add_1}>+</button>
                      </div>
                    </div>
                    <div className="col col-md-8 col-sm-12" id="normal-box">
                      <button className="Add-card p-1 w-100" onClick={()=>Add_Card('contact')}>Add Card</button>
                    </div>
                  </div>
                </p>
              </div>
            </div>
          </div>
          <div class="col">
            <div class="card h-100 veg_Bread">
              <img
                src="https://cdn.shopify.com/s/files/1/0258/4307/3103/products/ww_700x_a245a54b-2f15-481d-982a-67abb594809f_400x.png?v=1606028143"
                class="card-img-top"
                alt="..."
              />
              <div class="card-body">
                <h5 class="card-title">
                SUCHALI'S - 100% WHOLE WHEAT SOURDOUGH
                </h5>
                <p class="card-text">
                <span>RS. 75</span> <del>RS.90</del>
                  <div className="row">
                    <div className=" col col-md-4 col-sm-12 " id="normal-box">
                      <div className="add_sub d-flex text-center">
                        <button className="sign1 p-1" onClick={sub_1}>-</button>
                        <button className="sign1 p-1">{count1}</button>
                        <button className="sign1 p-1" onClick={add_1}>+</button>
                      </div>
                    </div>
                    <div className="col col-md-8 col-sm-12" id="normal-box">
                      <button className="Add-card p-1 w-100" onClick={()=>Add_Card('contact')}>Add Card</button>
                    </div>
                  </div>
                </p>
              </div>
            </div>
          </div>
          <div class="col">
            <div class="card h-100 veg_Bread">
              <img
                src="https://cdn.shopify.com/s/files/1/0258/4307/3103/products/multigraincroissant_400x.png?v=1620810331"
                class="card-img-top"
                alt="..."
              />
              <div class="card-body">
                <h5 class="card-title">
                WHEATY'S - WHOLE WHEAT CROISSANT (PER 2 PIECES)
                </h5>
                <p class="card-text">
                <span>RS. 75</span> <del>RS.90</del>
                  <div className="row">
                    <div className=" col col-md-4 col-sm-12 " id="normal-box">
                      <div className="add_sub d-flex text-center">
                        <button className="sign1 p-1" onClick={sub_1}>-</button>
                        <button className="sign1 p-1">{count1}</button>
                        <button className="sign1 p-1" onClick={add_1}>+</button>
                      </div>
                    </div>
                    <div className="col col-md-8 col-sm-12" id="normal-box">
                      <button className="Add-card p-1 w-100" onClick={()=>Add_Card('contact')}>Add Card</button>
                    </div>
                  </div>
                </p>
              </div>
            </div>
          </div>

          <div class="col">
            <div class="card h-100 veg_Bread">
              <img
                src="https://cdn.shopify.com/s/files/1/0258/4307/3103/products/multigrain_700x_52c0ba45-445d-4624-8cfe-dafd1b3c2de6_400x.png?v=1606028056"
                class="card-img-top"
                alt="..."
              />
              <div class="card-body">
                <h5 class="card-title">SUCHALI'S - MULTIGRAIN SOURDOUGH</h5>
                <p class="card-text">
                <span>RS. 75</span> <del>RS.90</del>
                  <div className="row">
                    <div className=" col col-md-4 col-sm-12 " id="normal-box">
                      <div className="add_sub d-flex text-center">
                        <button className="sign1 p-1" onClick={sub_1}>-</button>
                        <button className="sign1 p-1">{count1}</button>
                        <button className="sign1 p-1" onClick={add_1}>+</button>
                      </div>
                    </div>
                    <div className="col col-md-8 col-sm-12" id="normal-box">
                      <button className="Add-card p-1 w-100" onClick={()=>Add_Card('contact')}>Add Card</button>
                    </div>
                  </div>
                </p>
              </div>
            </div>
          </div>

          <div class="col">
            <div class="card h-100 veg_Bread">
              <img
                src="https://cdn.shopify.com/s/files/1/0258/4307/3103/products/jalapenoandcheese_700x_18d9502b-cfbb-446d-ab92-052cfccb8934_400x.jpg?v=1606027831"
                class="card-img-top"
                alt="..."
              />
              <div class="card-body">
                <h5 class="card-title">SUCHALI'S - JALAPENO AND CHEDDAR CHEESE </h5>
                <p class="card-text">
                <span>RS. 75</span> <del>RS.90</del>
                  <div className="row">
                    <div className=" col col-md-4 col-sm-12 " id="normal-box">
                      <div className="add_sub d-flex text-center">
                        <button className="sign1 p-1" onClick={sub_1}>-</button>
                        <button className="sign1 p-1">{count1}</button>
                        <button className="sign1 p-1" onClick={add_1}>+</button>
                      </div>
                    </div>
                    <div className="col col-md-8 col-sm-12" id="normal-box">
                      <button className="Add-card p-1 w-100" onClick={()=>Add_Card('contact')}>Add Card</button>
                    </div>
                  </div>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>


      {/* bred section 2nd */}
      <div className="container mt-3 mb-3">
        <div class="row row-cols-1 row-cols-md-5 g-4">
          <div class="col">
            <div class="card h-100 veg_Bread">
              <img
                src="https://cdn.shopify.com/s/files/1/0258/4307/3103/products/jalapenoandcheese_700x_18d9502b-cfbb-446d-ab92-052cfccb8934_400x.jpg?v=1606027831"
                class="card-img-top"
                alt="..."
              />
              <div class="card-body ">
                <h5 class="card-title">SUCHALI'S - JALAPENO AND CHEDDAR CHEESE </h5>
                <p class="card-text">
                  <span>RS. 75</span> <del>RS.90</del>
                  <div className="row">
                    <div className=" col col-md-4 col-sm-12 " id="normal-box">
                      <div className="add_sub d-flex text-center">
                        <button className="sign1 p-1" onClick={sub_1}>-</button>
                        <button className="sign1 p-1">{count1}</button>
                        <button className="sign1 p-1" onClick={add_1}>+</button>
                      </div>
                    </div>
                    <div className="col col-md-8 col-sm-12" id="normal-box">
                      <button className="Add-card p-1 w-100" onClick={()=>Add_Card('contact')}>Add Card</button>
                    </div>
                  </div>
                </p>
              </div>
            </div>
          </div>
          <div class="col">
            <div class="card h-100 veg_Bread">
              <img
                src="https://cdn.shopify.com/s/files/1/0258/4307/3103/products/Softglutenfreesourdough_400x.png?v=1620810473"
                class="card-img-top"
                alt="..."
              />
              <div class="card-body">
                <h5 class="card-title">
                WHEATY'S - GLUTEN FREE SOFT SOURDOUGH
                </h5>
                <p class="card-text">
                <span>RS. 75</span> <del>RS.90</del>
                  <div className="row">
                    <div className=" col col-md-4 col-sm-12 " id="normal-box">
                      <div className="add_sub d-flex text-center">
                        <button className="sign1 p-1" onClick={sub_1}>-</button>
                        <button className="sign1 p-1">{count1}</button>
                        <button className="sign1 p-1" onClick={add_1}>+</button>
                      </div>
                    </div>
                    <div className="col col-md-8 col-sm-12" id="normal-box">
                      <button className="Add-card p-1 w-100" onClick={()=>Add_Card('contact')}>Add Card</button>
                    </div>
                  </div>
                </p>
              </div>
            </div>
          </div>
          <div class="col">
            <div class="card h-100 veg_Bread">
              <img
                src="https://cdn.shopify.com/s/files/1/0258/4307/3103/products/Country_700x_6873a8d8-b2a1-4624-8f51-004e5cb2fe28_400x.jpg?v=1606028240"
                class="card-img-top"
                alt="..."
              />
              <div class="card-body">
                <h5 class="card-title">
                SUCHALI'S - COUNTRY SOURDOUGH
                </h5>
                <p class="card-text">
                <span>RS. 75</span> <del>RS.90</del>
                  <div className="row">
                    <div className=" col col-md-4 col-sm-12 " id="normal-box">
                      <div className="add_sub d-flex text-center">
                        <button className="sign1 p-1" onClick={sub_1}>-</button>
                        <button className="sign1 p-1">{count1}</button>
                        <button className="sign1 p-1" onClick={add_1}>+</button>
                      </div>
                    </div>
                    <div className="col col-md-8 col-sm-12" id="normal-box">
                      <button className="Add-card p-1 w-100" onClick={()=>Add_Card('contact')}>Add Card</button>
                    </div>
                  </div>
                </p>
              </div>
            </div>
          </div>

          <div class="col">
            <div class="card h-100 veg_Bread">
              <img
                src="https://cdn.shopify.com/s/files/1/0258/4307/3103/products/foccacia_400x.png?v=1620810123"
                class="card-img-top"
                alt="..."
              />
              <div class="card-body">
                <h5 class="card-title">WHEATY'S - ROSEMARY, GARLIC & TOMATO</h5>
                <p class="card-text">
                <span>RS. 75</span> <del>RS.90</del>
                  <div className="row">
                    <div className=" col col-md-4 col-sm-12 " id="normal-box">
                      <div className="add_sub d-flex text-center">
                        <button className="sign1 p-1" onClick={sub_1}>-</button>
                        <button className="sign1 p-1">{count1}</button>
                        <button className="sign1 p-1" onClick={add_1}>+</button>
                      </div>
                    </div>
                    <div className="col col-md-8 col-sm-12" id="normal-box">
                      <button className="Add-card p-1 w-100" onClick={()=>Add_Card('contact')}>Add Card</button>
                    </div>
                  </div>
                </p>
              </div>
            </div>
          </div>

          <div class="col">
            <div class="card h-100 veg_Bread">
              <img
                src="https://cdn.shopify.com/s/files/1/0258/4307/3103/products/wholewheatthinpizzabase_400x.png?v=1620810596"
                class="card-img-top"
                alt="..."
              />
              <div class="card-body">
                <h5 class="card-title">WHEATY'S - WHOLE WHEAT THIN PIZZA BASE, 100%</h5>
                <p class="card-text">
                <span>RS. 75</span> <del>RS.90</del>
                  <div className="row">
                    <div className=" col col-md-4 col-sm-12 " id="normal-box">
                      <div className="add_sub d-flex text-center">
                        <button className="sign1 p-1" onClick={sub_1}>-</button>
                        <button className="sign1 p-1">{count1}</button>
                        <button className="sign1 p-1" onClick={add_1}>+</button>
                      </div>
                    </div>
                    <div className="col col-md-8 col-sm-12" id="normal-box">
                      <button className="Add-card p-1 w-100" onClick={()=>Add_Card('contact')}>Add Card</button>
                    </div>
                  </div>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
