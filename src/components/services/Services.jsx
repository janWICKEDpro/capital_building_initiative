/** @format */

import { useState } from "react";
import { useSwipeable } from "react-swipeable";
import { Link } from "react-router-dom";

import "./services.scss";


export default function Services() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const data = [
    // {
    //   id: "1",
    //   icon: "./assets/writing.png",
    //   title: "Book Keeping",
    //   desc:
    //     "Double entry of financial transactions using prefered accounting software and preparation of monthly, semi-annual and annual statements."
    // },
    // {
    //   id: "2",
    //   icon: "./assets/writing.png",
    //   title: "Tax Declaration",
    //   desc:
    //     "Preparation and declaration of monthly and annual tax returns",
    // },
    // {
    //   id: "3",
    //   icon: "./assets/writing.png",
    //   title: "CNPS registration/Declaration",
    //   desc:
    //     "Registration of Employees under the NSIF Cameroon and the monthly online declaration of social contribution to be paid",

    // },
    // {
    //   id: "4",
    //   icon: "./assets/writing.png",
    //   title: "Financial planning",
    //   desc:
    //     "Business analytics and aid in decision making based on financial data collected",

    // },
    // {
    //   id: "5",
    //   icon: "./assets/writing.png",
    //   title: "Payroll",
    //   desc:
    //     "Preparation of monthly payslips of all employees  in the business and timely submission",

    // },

    // {
    //   id: "8",
    //   icon: "./assets/writing.png",
    //   title: "Data Analysis",
    //   desc:
    //     "Analysis of financial and research data with coordinated results and proper interpretation",

    // },
    {
      id: "1",
      icon: "./assets/writing.png",
      title: "Accounting Assistance",
      desc: "Our team of experienced professionals provides quality accounting assistance to our clients.",
    },
    {
      id: "2",
      icon: "./assets/writing.png",
      title: "Annual Statistics and Tax Returns (DSF)",
      desc: "This service is specified for our Cameroonian clients in the simplified and actual taxation regimes for compliance with SYSCOHADA.",
    },
    {
      id: "3",
      icon: "./assets/writing.png",
      title: "Business Registration Services",
      desc: "We aim to help all our clients including startups to register under the proper co-operate structure that suits their activities",
    },
    {
      id: "4",
      icon: "./assets/writing.png",
      title: "Data Analysis",
      desc: "We provide both descriptive and inferential statistics services to our clients who own business and our clients who are students for research.",
    },
    {
      id: "5",
      icon: "./assets/writing.png",
      title: "Financial Analysis",
      desc: "We provide our clients with evaluation of business, projects, budgets and other finance related transactions to determine their performance and suitability.",
    },

    {
      id: "8",
      icon: "./assets/writing.png",
      title: "Internal Control",
      desc: "This is a process designated to provide reasonable assurance that information is reliable, accurate and timely. ",
    },
  ];

  const handleClick = (way) => {
    way === "left"
      ? setCurrentSlide(currentSlide > 0 ? currentSlide - 1 : 7)
      : setCurrentSlide(currentSlide < data.length - 1 ? currentSlide + 1 : 0);
  };
  const handlers = useSwipeable({
    onSwipedLeft: (e) =>
      setCurrentSlide(currentSlide < data.length - 1 ? currentSlide + 1 : 0),
    onSwipedRight: (e) =>
      setCurrentSlide(currentSlide > 0 ? currentSlide - 1 : 7),
  });

  return (
    <div className="works_old container" id="service">
      {/* <h1 className="title_old">Services</h1>
      <div
        {...handlers}
        className="slider_old"
        style={{ transform: `translateX(-${currentSlide * 100}vw)` }}
      >
        {data.map((d) => (
          <div key={d.id} className="container_old">
            <div className="item">
 
                <div className="leftContainer">
                  <div className="imgContainer">
                    <img src={d.icon} alt="" />
                  </div>
                  <h2>{d.title}</h2>
                  <br/>
                  <div className="text">
                    {d.desc}
                  </div>
                  <br/>
              </div>
            </div>
          </div>
        ))}
      </div>
      <img
        src="assets/arrow.png"
        className="arrow left"
        alt=""
        onClick={() => handleClick("left")}
      />
      <img
        src="assets/arrow.png"
        className="arrow right"
        alt=""
        onClick={() => handleClick()}
      /> */}

      <section id="what-we-do">
        <div class="container-fluid">
          <h2 class="section-title mb-2 h1">What we do</h2>
          <p class="text-center text-muted h5">
            Large enough to handle all your financial needs, small enough to
            know your name when you call
          </p>
          <div class="row mt-5">
            <div class="col-xs-12 col-sm-6 col-md-4 col-lg-4 col-xl-4">
              <div class="card">
                <div class="card-block block-1">
                  <h5 class="card-title">Accounting Assistance</h5>
                  <p class="card-text">
                    Our team of experienced professionals provides quality
                    accounting assistance to our clients. This will include the
                    following activities;
                  </p>
                  <Link to="/accounting">
                    <a title="Read more" class="read-more">
                      Read more<i class="fa fa-angle-double-right ml-2"></i>
                    </a>
                  </Link>
                </div>
              </div>
            </div>
            <div class="col-xs-12 col-sm-6 col-md-4 col-lg-4 col-xl-4">
              <div class="card">
                <div class="card-block block-2">
                  <h5 class="card-title">
                    Annual Statistics and Tax Returns (DSF)
                  </h5>
                  <p class="card-text">
                    This service is specified for our Cameroonian clients in the
                    simplified and actual taxation regimes for compliance with
                    SYSCOHADA.
                  </p>
                  <a
                    href="javascript:void();"
                    title="Read more"
                    class="read-more"
                  >
                    Read more<i class="fa fa-angle-double-right ml-2"></i>
                  </a>
                </div>
              </div>
            </div>
            <div class="col-xs-12 col-sm-6 col-md-4 col-lg-4 col-xl-4">
              <div class="card">
                <div class="card-block block-3">
                  <h5 class="card-title">
                    NSIF (CNPS) Registration and Declaration
                  </h5>
                  <p class="card-text">
                    National social insurance fund (NSIF) is an obligatory
                    requirement and contribution which is made for businesses in
                    Cameroon
                  </p>
                  <a
                    href="javascript:void();"
                    title="Read more"
                    class="read-more"
                  >
                    Read more<i class="fa fa-angle-double-right ml-2"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div class="row">
            <div class="col-xs-12 col-sm-6 col-md-4 col-lg-4 col-xl-4">
              <div class="card">
                <div class="card-block block-4">
                  <h5 class="card-title">Business Registration Services</h5>
                  <p class="card-text">
                    We aim to help all our clients including startups to
                    register under the proper co-operate structure
                  </p>
                  <a
                    href="javascript:void();"
                    title="Read more"
                    class="read-more"
                  >
                    Read more<i class="fa fa-angle-double-right ml-2"></i>
                  </a>
                </div>
              </div>
            </div>
            <div class="col-xs-12 col-sm-6 col-md-4 col-lg-4 col-xl-4">
              <div class="card">
                <div class="card-block block-5">
                  <h5 class="card-title">Data Analysis</h5>
                  <p class="card-text">
                    We provide both descriptive and inferential statistics
                    services to our clients who own business and our clients who
                    are students for research.
                  </p>
                  <a
                    href="javascript:void();"
                    title="Read more"
                    class="read-more"
                  >
                    Read more<i class="fa fa-angle-double-right ml-2"></i>
                  </a>
                </div>
              </div>
            </div>
            <div class="col-xs-12 col-sm-6 col-md-4 col-lg-4 col-xl-4">
              <div class="card">
                <div class="card-block block-6">
                  <h5 class="card-title">Financial Analysis</h5>
                  <p class="card-text">
                    We provide our clients with evaluation of business,
                    projects, budgets and other finance related transactions to
                    determine their performance.
                  </p>
                  <a
                    href="javascript:void();"
                    title="Read more"
                    class="read-more"
                  >
                    Read more<i class="fa fa-angle-double-right ml-2"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
    </div>
  );
}
