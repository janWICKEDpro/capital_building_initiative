/** @format */

import { useState } from "react";
import { useSwipeable } from "react-swipeable";

import "./testimonials.scss";

export default function Testimonials() {
  return (
    <div class="container mt-5 mb-5">
      <h1 className="text-center">Testimonials</h1>
      <div class="row g-2">
        <div class="col-md-4">
          <div class="card p-3 text-center px-4">
            <div class="user-image">
              <img
                src="https://i.imgur.com/PKHvlRS.jpg"
                class="rounded-circle"
                width="80"
              />
            </div>

            <div class="user-content">
              <h5 class="mb-0">Bruce Hardy</h5>
              <span>Software Developer</span>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
              </p>
            </div>

            <div class="ratings">
              <i class="fa fa-star"></i>
              <i class="fa fa-star"></i>
              <i class="fa fa-star"></i>
              <i class="fa fa-star"></i>
            </div>
          </div>
        </div>

        <div class="col-md-4">
          <div class="card p-3 text-center px-4">
            <div class="user-image">
              <img
                src="https://i.imgur.com/w2CKRB9.jpg"
                class="rounded-circle"
                width="80"
              />
            </div>

            <div class="user-content">
              <h5 class="mb-0">Mark Smith</h5>
              <span>Web Developer</span>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
              </p>
            </div>

            <div class="ratings">
              <i class="fa fa-star"></i>
              <i class="fa fa-star"></i>
              <i class="fa fa-star"></i>
              <i class="fa fa-star"></i>
              <i class="fa fa-star"></i>
            </div>
          </div>
        </div>

        <div class="col-md-4">
          <div class="card p-3 text-center px-4">
            <div class="user-image">
              <img
                src="https://i.imgur.com/ACeArwY.jpg"
                class="rounded-circle"
                width="80"
              />
            </div>

            <div class="user-content">
              <h5 class="mb-0">Veera Duncan</h5>
              <span>Software Architect</span>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
              </p>
            </div>

            <div class="ratings">
              <i class="fa fa-star"></i>
              <i class="fa fa-star"></i>
              <i class="fa fa-star"></i>
              <i class="fa fa-star"></i>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
