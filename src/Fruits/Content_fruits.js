import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Bread } from "./Bread";
import "./ContentFruit.css";

export const Content_fruits = () => {
  const [Amount, setAmount] = useState(0);

  const sub = () => {
    if (Amount > 0) {
      setAmount(Amount - 1);
    } else {
      alert("You can not dec amount");
    }
  };
  const add = () => {
    setAmount(Amount + 1);
  };

  // content fruits 
  const Add_Card=useNavigate();
  return (
    <>
      <hr />
      <div className="heading mt-3 mb-3">
        <h2>VEGETABLES</h2>
      </div>
      <hr />
      <div className="container">
        <div class="row row-cols-1 row-cols-md-5 g-4">
          <div class="col">
            <div class="card h-100 veg_Bread">
              <img
                src="https://cdn.shopify.com/s/files/1/0258/4307/3103/products/raw-potato-500x500_400x.jpg?v=1598512780"
                class="card-img-top"
                alt="..."
              />
              <div class="card-body">
                <h5 class="card-title">POTATO PAHARI (PER KG)</h5>
                <p class="card-text">
                  <span>RS. 75</span> <del>RS.90</del>
                  <div className="row">
                    <div className=" col col-md-4 col-sm-12 " id="normal-box">
                      <div className="add_sub d-flex text-center">
                        <button className="sign1 p-1" onClick={sub}>
                          -
                        </button>
                        <button className="Amount p-1 sign1">{Amount}</button>
                        <button className="sign1 p-1" onClick={add}>
                          +
                        </button>
                      </div>
                      {/* <div className="inc-dec d-flex text-center " >
                        <button className="sign p-1" onClick={sec_dec}>-</button><button className="count p-1">{count}</button><button className="sign p-1" onClick={sec_sum}>+</button>
                      </div>  */}
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
                src="https://cdn.shopify.com/s/files/1/0258/4307/3103/products/Tomato_400x.jpg?v=1643139330"
                class="card-img-top"
                alt="..."
              />
              <div class="card-body">
                <h5 class="card-title">
                  TOMATO <br /> (PER KG)
                </h5>
                <p class="card-text">
                  <span>RS. 75</span> <del>RS.90</del>
                  <div className="row">
                    <div className=" col col-md-4 col-sm-12 " id="normal-box">
                      <div className="add_sub d-flex text-center">
                        <button className="sign1 p-1" onClick={sub}>
                          -
                        </button>
                        <button className="Amount p-1 sign1">{Amount}</button>
                        <button className="sign1 p-1" onClick={add}>
                          +
                        </button>
                      </div>
                      {/* <div className="inc-dec d-flex text-center " >
                        <button className="sign p-1" onClick={sec_dec}>-</button><button className="count p-1">{count}</button><button className="sign p-1" onClick={sec_sum}>+</button>
                      </div>  */}
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
                src="https://cdn.shopify.com/s/files/1/0258/4307/3103/products/Onion_400x.jpg?v=1588920297"
                class="card-img-top"
                alt="..."
              />
              <div class="card-body">
                <h5 class="card-title">
                  ONION <br /> (PER KG)
                </h5>
                <p class="card-text">
                  <span>RS. 75</span> <del>RS.90</del>
                  <div className="row">
                    <div className=" col col-md-4 col-sm-12 " id="normal-box">
                      <div className="add_sub d-flex text-center">
                        <button className="sign1 p-1" onClick={sub}>
                          -
                        </button>
                        <button className="Amount p-1 sign1">{Amount}</button>
                        <button className="sign1 p-1" onClick={add}>
                          +
                        </button>
                      </div>
                      {/* <div className="inc-dec d-flex text-center " >
                        <button className="sign p-1" onClick={sec_dec}>-</button><button className="count p-1">{count}</button><button className="sign p-1" onClick={sec_sum}>+</button>
                      </div>  */}
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
                src="https://cdn.shopify.com/s/files/1/0258/4307/3103/products/0018825_fresh-methi-leaves-india_600_400x.jpg?v=1643139728"
                class="card-img-top"
                alt="..."
              />
              <div class="card-body">
                <h5 class="card-title">FENUGREEK (PER GRAMS)</h5>
                <p class="card-text">
                  <span>RS. 75</span> <del>RS.90</del>
                  <div className="row">
                    <div className=" col col-md-4 col-sm-12 " id="normal-box">
                      <div className="add_sub d-flex text-center">
                        <button className="sign1 p-1" onClick={sub}>
                          -
                        </button>
                        <button className="Amount p-1 sign1">{Amount}</button>
                        <button className="sign1 p-1" onClick={add}>
                          +
                        </button>
                      </div>
                      {/* <div className="inc-dec d-flex text-center " >
                        <button className="sign p-1" onClick={sec_dec}>-</button><button className="count p-1">{count}</button><button className="sign p-1" onClick={sec_sum}>+</button>
                      </div>  */}
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
                src="https://cdn.shopify.com/s/files/1/0258/4307/3103/products/2_400x.png?v=1606817682"
                class="card-img-top"
                alt="..."
              />
              <div class="card-body">
                <h5 class="card-title">BATHUA LEAVES (PER 500 GRAMS)</h5>
                <p class="card-text">
                  <span>RS. 75</span> <del>RS.90</del>
                  <div className="row">
                    <div className=" col col-md-4 col-sm-12 " id="normal-box">
                      <div className="add_sub d-flex text-center">
                        <button className="sign1 p-1" onClick={sub}>
                          -
                        </button>
                        <button className="Amount p-1 sign1">{Amount}</button>
                        <button className="sign1 p-1" onClick={add}>
                          +
                        </button>
                      </div>
                      {/* <div className="inc-dec d-flex text-center " >
                        <button className="sign p-1" onClick={sec_dec}>-</button><button className="count p-1">{count}</button><button className="sign p-1" onClick={sec_sum}>+</button>
                      </div>  */}
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

      {/* ------------------------------------------------------------------------ */}
      <br />
      {/*  */}
      <div className="container">
        <div class="row row-cols-1 row-cols-md-5 g-4">
          <div class="col">
            <div class="card h-100 veg_Bread">
              <img
                src="https://cdn.shopify.com/s/files/1/0258/4307/3103/products/broc_400x.png?v=1579753621"
                class="card-img-top"
                alt="..."
              />
              <div class="card-body">
                <h5 class="card-title">BROCCOLI (PER 500-600 GRAMS)</h5>
                <p class="card-text">
                  <span>RS. 75</span> <del>RS.90</del>
                  <div className="row">
                    <div className=" col col-md-4 col-sm-12 " id="normal-box">
                      <div className="add_sub d-flex text-center">
                        <button className="sign1 p-1" onClick={sub}>
                          -
                        </button>
                        <button className="Amount p-1 sign1">{Amount}</button>
                        <button className="sign1 p-1" onClick={add}>
                          +
                        </button>
                      </div>
                      {/* <div className="inc-dec d-flex text-center " >
                        <button className="sign p-1" onClick={sec_dec}>-</button><button className="count p-1">{count}</button><button className="sign p-1" onClick={sec_sum}>+</button>
                      </div>  */}
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
                src="https://cdn.shopify.com/s/files/1/0258/4307/3103/products/Carrot-Red1_400x.jpg?v=1607510404"
                class="card-img-top"
                alt="..."
              />
              <div class="card-body">
                <h5 class="card-title">RED CARROT (PER 500 GRAMS)</h5>
                <p class="card-text">
                  <span>RS. 75</span> <del>RS.90</del>
                  <div className="row">
                    <div className=" col col-md-4 col-sm-12 " id="normal-box">
                      <div className="add_sub d-flex text-center">
                        <button className="sign1 p-1" onClick={sub}>
                          -
                        </button>
                        <button className="Amount p-1 sign1">{Amount}</button>
                        <button className="sign1 p-1" onClick={add}>
                          +
                        </button>
                      </div>
                      {/* <div className="inc-dec d-flex text-center " >
                        <button className="sign p-1" onClick={sec_dec}>-</button><button className="count p-1">{count}</button><button className="sign p-1" onClick={sec_sum}>+</button>
                      </div>  */}
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
                src="https://cdn.shopify.com/s/files/1/0258/4307/3103/products/Mushroom_400x.jpg?v=1581937167"
                class="card-img-top"
                alt="..."
              />
              <div class="card-body">
                <h5 class="card-title">MUSHROOM (PER 200 GRAMS)</h5>
                <p class="card-text">
                  <span>RS. 75</span> <del>RS.90</del>
                  <div className="row">
                    <div className=" col col-md-4 col-sm-12 " id="normal-box">
                      <div className="add_sub d-flex text-center">
                        <button className="sign1 p-1" onClick={sub}>
                          -
                        </button>
                        <button className="Amount p-1 sign1">{Amount}</button>
                        <button className="sign1 p-1" onClick={add}>
                          +
                        </button>
                      </div>
                      {/* <div className="inc-dec d-flex text-center " >
                        <button className="sign p-1" onClick={sec_dec}>-</button><button className="count p-1">{count}</button><button className="sign p-1" onClick={sec_sum}>+</button>
                      </div>  */}
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
                src="https://cdn.shopify.com/s/files/1/0258/4307/3103/products/3_a013bcd9-5760-4dd6-a2ea-63c9ba9fd66b_400x.png?v=1643139599"
                class="card-img-top"
                alt="..."
              />
              <div class="card-body">
                <h5 class="card-title">FRENCH BEANS (PER 250 GRAMS)</h5>
                <p class="card-text">
                  <span>RS. 75</span> <del>RS.90</del>
                  <div className="row">
                    <div className=" col col-md-4 col-sm-12 " id="normal-box">
                      <div className="add_sub d-flex text-center">
                        <button className="sign1 p-1" onClick={sub}>
                          -
                        </button>
                        <button className="Amount p-1 sign1">{Amount}</button>
                        <button className="sign1 p-1" onClick={add}>
                          +
                        </button>
                      </div>
                      {/* <div className="inc-dec d-flex text-center " >
                        <button className="sign p-1" onClick={sec_dec}>-</button><button className="count p-1">{count}</button><button className="sign p-1" onClick={sec_sum}>+</button>
                      </div>  */}
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
                src="https://cdn.shopify.com/s/files/1/0258/4307/3103/products/114407108_400x.jpg?v=1590151581"
                class="card-img-top"
                alt="..."
              />
              <div class="card-body">
                <h5 class="card-title">GOOSEBERRY (PER 250 GRAMS)</h5>
                <p class="card-text">
                  <span>RS. 75</span> <del>RS.90</del>
                  <div className="row">
                    <div className=" col col-md-4 col-sm-12 " id="normal-box">
                      <div className="add_sub d-flex text-center">
                        <button className="sign1 p-1" onClick={sub}>
                          -
                        </button>
                        <button className="Amount p-1 sign1">{Amount}</button>
                        <button className="sign1 p-1" onClick={add}>
                          +
                        </button>
                      </div>
                      {/* <div className="inc-dec d-flex text-center " >
                        <button className="sign p-1" onClick={sec_dec}>-</button><button className="count p-1">{count}</button><button className="sign p-1" onClick={sec_sum}>+</button>
                      </div>  */}
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

      {/* Breads */}
      <Bread />
    </>
  );
};
