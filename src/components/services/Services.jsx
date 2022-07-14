import { useState } from "react";
import { useSwipeable } from 'react-swipeable';

import "./services.scss";

export default function Services() {

  const [currentSlide, setCurrentSlide] = useState(0);
  const data = [
    {
      id: "1",
      icon: "./assets/writing.png",
      title: "Book Keeping",
      desc:
        "Double entry of financial transactions using prefered accounting software and preparation of monthly, semi-annual and annual statements."
    },
    {
      id: "2",
      icon: "./assets/writing.png",
      title: "Tax Declaration",
      desc:
        "Preparation and declaration of monthly and annual tax returns",
    },
    {
      id: "3",
      icon: "./assets/writing.png",
      title: "CNPS registration/Declaration",
      desc:
        "Registration of Employees under the NSIF Cameroon and the monthly online declaration of social contribution to be paid",
    
    },
    {
      id: "4",
      icon: "./assets/writing.png",
      title: "Financial planning",
      desc:
        "Business analytics and aid in decision making based on financial data collected",
     
    },
    {
      id: "5",
      icon: "./assets/writing.png",
      title: "Payroll",
      desc:
        "Preparation of monthly payslips of all employees  in the business and timely submission",
       
    },
   
    {
      id: "8",
      icon: "./assets/writing.png",
      title: "Data Analysis",
      desc:
        "Analysis of financial and research data with coordinated results and proper interpretation",
    
    },
  ];

  const handleClick = (way) => {
    way === "left"
      ? setCurrentSlide(currentSlide > 0 ? currentSlide - 1 : 7)
      : setCurrentSlide(currentSlide < data.length - 1 ? currentSlide + 1 : 0);
  };
  const handlers = useSwipeable({
    onSwipedLeft: (e)=> setCurrentSlide(currentSlide < data.length - 1 ? currentSlide + 1 : 0),
    onSwipedRight: (e)=> setCurrentSlide(currentSlide > 0 ? currentSlide - 1 : 7),
  
  })
  
  return (
    <div className="works" id="service">
      
      <h1 className="title">Services</h1>
      <div
        {...handlers}
        className="slider"
        style={{ transform: `translateX(-${currentSlide * 100}vw)` }}
      >
        {data.map((d) => (
          <div key={d.id} className="container">
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
      />
    </div>
    
  );
}
