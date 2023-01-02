import React, { Component } from "react";
import { Our_Bolg } from "../component/Our_Bolg";
import "./Card_compt.css";
class Change_compt extends Component {
  constructor(props) {
    super(props);

    this.state = {
      img: "https://img.freepik.com/premium-psd/orange-fruits-basket-wooden-table_33736-3774.jpg?w=996",
      heading:'ABOUT US'
    };
    
  }

  change_img = () => {
    this.setState({
      img: "https://img.freepik.com/premium-psd/orange-fruits-basket-wooden-table_33736-3774.jpg?w=996",
      heading:'ABOUT US'
    });
  };
  change_img2 = () => {
    this.setState({
      img: "https://cdn.shopify.com/s/files/1/0258/4307/3103/files/WhatsApp_Image_2019-05-09_at_19.15.02_1000x.jpeg?v=1614781730",
      heading:'OUR VISION'
    });
  };
  change_img3 = () => {
    this.setState({
      img: "https://cdn.shopify.com/s/files/1/0258/4307/3103/files/berries-berry-blur-302478_71d4a449-73c5-4265-9f4f-756f9816f891_1000x.jpg?v=1614781732",
      heading:'VISUAL LANGUAGE'
    });
  };
  render() {
    return (
      <>
        <div class="container mt-5">
          <div class="row" id="about-row">
            <div class="col-12 col-md-6">
              <img src={this.state.img} class="img-thumbnail" id='change-img'alt="..." />
            </div>
            <div className="col-md-6">
              <div id="change_text">
                <p>
                  <h1>{this.state.heading}</h1>
                  Fruitbox & Co. was born out of the need to deliver quality. It
                  has previously, and shall always continue to convey nothing
                  but the best that can be offered. There are ample ways that
                  justify the quality maxim; Fruitbox and Co.’s own cold
                  storage, elimination of middlemen in fruit handling and in
                  turn providing a fair price to the farmers, collectively
                  ensure that your fruits are an end result of great hard work
                  exchanged at an equal compensation.
                  <br />
                  Fruitbox & Co. endeavors to effectively contribute towards
                  diminishing non-environment friendly packaging and is
                  currently investigating the best biodegradable alternatives to
                  cling films because it believes the need of the hour is to
                  change and not twiddle thumbs.
                </p>
                
              </div>
            </div>
          </div>
        </div>

        {/* button change. */}

        <div class="container btn-container mt-5 mb-5">
          <div class="row">
            <div class="col text-content">
              <button type="button" onClick={this.change_img}>
                One For ALl.
              </button>
            </div>
            <div className="col text-content">
              <button type="button" onClick={this.change_img2}>
                Quality & Care.
              </button>
            </div>
            <div className="col text-content">
              <button type="button" onClick={this.change_img3}>
                All For One
              </button>
            </div>
          </div>
        </div>

        {/* Our Blog */}
        <Our_Bolg/>
      </>
    );
  }
}

export default Change_compt;
