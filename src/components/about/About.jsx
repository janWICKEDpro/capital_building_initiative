/** @format */

import { useState } from "react";
import { useSwipeable } from "react-swipeable";

import "./about.scss";

export default function About() {
  return (
    <div class="aboutus-section" id="about">
      <div class="container">
        <div class="row">
          <div class="col-md-3 col-sm-6 col-xs-12">
            <div class="aboutus">
              <h2 class="aboutus-title">About Us</h2>
              <p class="aboutus-text">
                Capital Building Initiative (CBI) is an accounting firm, with
                the aim of providing quality financial and business consultancy
                services for startups and small and medium sized businesses
                (SMEs) in Cameroon, Africa and Worldwide.
              </p>
              <p class="aboutus-text">
                Our aim is to aid these businesses attain stability, constant
                and observable growth and sustainability in different market
                situations while being in compliance with their respective legal
                environment.
              </p>
              <a class="aboutus-more" href="#">
                read more
              </a>
            </div>
          </div>
          <div class="col-md-3 col-sm-6 col-xs-12">
            <div class="aboutus-banner">
              <img
                className="img img-fluid"
                src="https://cdn.pixabay.com/photo/2021/10/01/03/52/money-6671284_960_720.png"
                alt=""
              />
            </div>
          </div>
          <div class="col-md-5 col-sm-6 col-xs-12">
            <div class="feature">
              <div class="feature-box">
                <div class="clearfix">
                  <div class="iconset">
                    <span class="glyphicon glyphicon-cog icon"></span>
                  </div>
                  <div class="feature-content">
                    <h4>Work with heart</h4>
                    <p>
                      
                    </p>
                  </div>
                </div>
              </div>
              <div class="feature-box">
                <div class="clearfix">
                  <div class="iconset">
                    <span class="icon"></span>
                  </div>
                  <div class="feature-content">
                    <h4>Reliable services</h4>
                    <p>
                     
                    </p>
                  </div>
                </div>
              </div>
              <div class="feature-box">
                <div class="clearfix">
                  <div class="iconset">
                    <span class="glyphicon glyphicon-cog icon"></span>
                  </div>
                  <div class="feature-content">
                    <h4>Great support</h4>
                    <p>
                    
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
