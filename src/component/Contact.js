import React from "react";
import "./Style.css";

export const Contact = () => {
  return (
    <>
      <div className="bg-container">
      <div className="container">
        <div className="row">
          <div className="col-12 " id="contact-heading">
            <h3>Contact Us.</h3>
          </div>
        </div>
        <div className="row mt-5 mb-5">
          {/* map section */}
          <div className="col-12 col-md-6 col-sm-12">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7568.7449299552!2d73.76746492386098!3d18.46678044976128!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2958d2e3fea0b%3A0xbe21afb6c0760a8!2sUttam%20Nagar%2C%20Maharashtra%20411023!5e0!3m2!1sen!2sin!4v1670405839122!5m2!1sen!2sin"
              width="600"
              height="450"
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="h-90%"
            ></iframe>
          </div>
          {/* contact list  */}
          <div className="col-12 col-md-6 col-sm-12 contact-list">
            <div class="formbold-main-wrapper">
              <div class="formbold-form-wrapper">
                <form action="https://formbold.com/s/FORM_ID" method="POST">
                  <div class="formbold-mb-5">
                    <label for="name" class="formbold-form-label">
                      Full Name
                    </label>
                    <input
                      type="text"
                      name="name"
                      id="name"
                      placeholder="Full Name"
                      class="formbold-form-input"
                    />
                  </div>

                  <div class="formbold-mb-5">
                    <label for="email" class="formbold-form-label">
                      {" "}
                      Email Address{" "}
                    </label>
                    <input
                      type="email"
                      name="email"
                      id="email"
                      placeholder="Enter your email"
                      class="formbold-form-input"
                    />
                  </div>

                  <div class="formbold-mb-5">
                    <label for="subject" class="formbold-form-label">
                      {" "}
                      Mobile NO{" "}
                    </label>
                    <input
                      type="Number"
                      name="subject"
                      id="subject"
                      placeholder="Enter your Mobile No."
                      class="formbold-form-input"
                    />
                  </div>

                  <div class="formbold-mb-5">
                    <label for="message" class="formbold-form-label">
                      {" "}
                      Message{" "}
                    </label>
                    <textarea
                      rows="6"
                      name="message"
                      id="message"
                      placeholder="Type your message"
                      class="formbold-form-input"
                    ></textarea>
                  </div>

                  <div>
                    <button class="formbold-btn">Submit</button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
      </div>
    </>
  );
};
{
  /* <div className="container">
        <div className="row">
          
          <div className="col-12 col-md-12 col-sm-12">
            <div class="formbold-main-wrapper">
              <div class="formbold-form-wrapper">
                <form action="https://formbold.com/s/FORM_ID" method="POST">
                  <div class="formbold-mb-5">
                    <label for="name" class="formbold-form-label">
                      {" "}
                      Full Name{" "}
                    </label>
                    <input
                      type="text"
                      name="name"
                      id="name"
                      placeholder="Full Name"
                      class="formbold-form-input"
                    />
                  </div>

                  <div class="formbold-mb-5">
                    <label for="email" class="formbold-form-label">
                      {" "}
                      Email Address{" "}
                    </label>
                    <input
                      type="email"
                      name="email"
                      id="email"
                      placeholder="Enter your email"
                      class="formbold-form-input"
                    />
                  </div>

                  <div class="formbold-mb-5">
                    <label for="subject" class="formbold-form-label">
                      {" "}
                      Subject{" "}
                    </label>
                    <input
                      type="text"
                      name="subject"
                      id="subject"
                      placeholder="Enter your subject"
                      class="formbold-form-input"
                    />
                  </div>

                  <div class="formbold-mb-5">
                    <label for="message" class="formbold-form-label">
                      {" "}
                      Message{" "}
                    </label>
                    <textarea
                      rows="6"
                      name="message"
                      id="message"
                      placeholder="Type your message"
                      class="formbold-form-input"
                    ></textarea>
                  </div>

                  <div>
                    <button class="formbold-btn">Submit</button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
</div> */
}
