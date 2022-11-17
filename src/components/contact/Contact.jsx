/** @format */

import "./contact.scss";

export default function Contact() {
  return (
    <div>
      <section class="contact" id="contact">
        <div class="container">
          <div class="heading text-center wow fadeInUp">
            <h2>
              <span>Keep In</span>
              Touch
            </h2>
            <p>
              Please send us a message
              <br />
              How can we be of help
            </p>
          </div>
          <div class="main wow fadeInUp">
            <div class="row">
              <div class="col-lg-8 left">
                <h3>Send Message</h3>

                <form>
                  <div class="row">
                    <div class="col-sm-6">
                      <input
                        type="text"
                        class="form-control"
                        placeholder="Name"
                      />
                    </div>
                    <div class="col-sm-6">
                      <input
                        type="email"
                        class="form-control"
                        placeholder="Email"
                      />
                    </div>
                  </div>
                  <div class="row">
                    <div class="col-sm-6">
                      <input
                        type="tel"
                        class="form-control"
                        placeholder="Phone"
                      />
                    </div>
                  </div>
                  <div class="row">
                    <div class="col-sm-12">
                      <select
                        class="form-select form-control"
                        aria-label="Default select example"
                      >
                        <option selected>Service Interested in</option>
                        <option value="1">Accounting Assistance</option>
                        <option value="2">
                          Annual Statistics and Tax Returns (DSF)
                        </option>
                        <option value="3">NSIF</option>
                        <option value="3">
                          Buisness Registration Services
                        </option>
                      </select>
                    </div>
                  </div>
                  <div class="form-group">
                    <textarea
                      class="form-control"
                      rows="5"
                      id="comment"
                      placeholder="Message"
                    ></textarea>
                  </div>
                  <button class="btn btn-block" type="submit">
                    Send Now!
                  </button>
                </form>
              </div>

              <div class="col-lg-4">
                <div class="right">
                  <h4>Contact Information</h4>
                  <div class="info d-flex align-items-center">
                    <i class="fa fa-map-marker" aria-hidden="true"></i>
                    <span>
                      Buea <br />
                      Cameroon
                    </span>
                  </div>
                  <div class="info d-flex align-items-center">
                    <i class="fa fa-chrome" aria-hidden="true"></i>
                    <span>+237 70000000000</span>
                  </div>
                  <div class="info d-flex align-items-center">
                    <i class="fa fa-phone" aria-hidden="true"></i>
                    <span>babaca@babaca.com</span>
                  </div>
                  <div class="social">
                    <a href="#0">
                      <i class="fa fa-dribbble" aria-hidden="true"></i>
                    </a>
                    <a href="#0">
                      <i class="fa fa-twitter" aria-hidden="true"></i>
                    </a>
                    {/* <a href="#0">
                      <i class="fa fa-github" aria-hidden="true"></i>
                    </a> */}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
