import React , { useState } from "react";
import { useNavigate } from "react-router-dom";
import './Style.css';


function Cards1(props){
  const[count, setcount]=useState(0);

  const dec=()=>{
    if(count>0){
      setcount(count-1);
    }
    else{
      alert('Can not decress product amount');
    }
  }

  const sum1=()=>{
    setcount(count+1);
  }


  // second-product
  const sec_dec=()=>{
    if(count>0){
      setcount(count-1);
    }
    else{
      alert('Can not decress product amount');
    }
  }
  const sec_sum=()=>{
    setcount(count+1);
  }
  
  // Navigator
  const Add_Card=useNavigate();
  return (
    <> 
      <div className="row" id="cards-heading" >
        <div className="col col-md-12 col-sm-12 mt-5 ">
          <h1>{props.Card_Heading1}</h1>
        </div>
      </div>

      {/* cards section */}
      
      <div className="container ">
        <div className="row row-cols-1 row-cols-md-4 g-4 mt-2">
          <div className="col">
            <div className="card card-style">
              <img
                src={props.img1}
                className="card-img-top"
                alt="..."
              />
              {/* box-shadow: 2px 2px 7px grey; */}
              <div className="card-body">
                {/* <h5 className="card-title">Card title</h5> */}
                <p className="card-text">
                <p>{props.text1}</p>
                  <span>RS. 75</span>  <del>RS.90</del>
                  <div className="row">
                    <div className=" col col-md-4 col-sm-12 " id="normal-box">
                      <div className="inc-dec d-flex text-center " >
                        <button className="sign p-1" onClick={dec}>-</button><button className="count p-1">{count}</button><button className="sign p-1" onClick={sum1}>+</button>
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
          <div className="col">
            <div className="card card-style">
              <img
                src={props.img2}
                className="card-img-top"
                alt="..."
              />
              <div className="card-body " >
                {/* <h5 className="card-title">Card title</h5> */}
                <p className="card-text">
                  <p>{props.text2}</p>
                  <span>RS. 75</span>  <del>RS.90</del>
                  <div className="row">
                    <div className=" col col-md-4 col-sm-12 " id="normal-box">
                      <div className="inc-dec d-flex text-center " >
                        <button className="sign p-1" onClick={sec_dec}>-</button><button className="count p-1">{count}</button><button className="sign p-1" onClick={sec_sum}>+</button>
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
          <div className="col">
            <div className="card card-style">
              <img
                src={props.img3}
                class="card-img-top"
                alt="..."
              />
              <div className="card-body">
                {/* <h5 className="card-title">Card title</h5> */}
                <p className="card-text">
                <p>{props.text3}</p>
                  <span>RS. 75</span>  <del>RS.90</del>
                  <div className="row">
                    <div className=" col col-md-4 col-sm-12 " id="normal-box">
                      <div className="inc-dec d-flex text-center " >
                        <button className="sign p-1">-</button><button className="count p-1">{count}</button><button className="sign p-1">+</button>
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
          <div className="col">
            <div className="card card-style">
              <img
                src={props.img4}
                class="card-img-top"
                alt="..."
              />
              <div className="card-body">
                {/* <h5 className="card-title">Card title</h5> */}
                <p className="card-text">
                <p>{props.text4}</p>
                  <span>RS. 75</span>  <del>RS.90</del>
                  <div className="row">
                    <div className=" col col-md-4 col-sm-12 " id="normal-box">
                      <div className="inc-dec d-flex text-center " >
                        <button className="sign p-1">-</button><button className="count p-1">{count}</button><button className="sign p-1">+</button>
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
}

export default Cards1;
