import { useState } from "react";
import "./services.scss";

export default function Services() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const data = [
    {
      id: "1",
      icon: "./assets/mobile.png",
      title: "Book Keeping",
      desc:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. "
    },
    {
      id: "2",
      icon: "./assets/globe.png",
      title: "Tax Declaration",
      desc:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    },
    {
      id: "3",
      icon: "./assets/writing.png",
      title: "CNPS registration/Declaration",
      desc:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    
    },
    {
      id: "4",
      icon: "./assets/writing.png",
      title: "Financial planning",
      desc:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
     
    },
    {
      id: "5",
      icon: "./assets/writing.png",
      title: "Payroll",
      desc:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
       
    },
    {
      id: "6",
      icon: "./assets/writing.png",
      title: "Annual statistiscs tax returns",
      desc:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    
    },
    {
      id: "7",
      icon: "./assets/writing.png",
      title: "Control Accounts",
      desc:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    
    },
    {
      id: "8",
      icon: "./assets/writing.png",
      title: "Data Analysis",
      desc:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    
    },
  ];

  const handleClick = (way) => {
    way === "left"
      ? setCurrentSlide(currentSlide > 0 ? currentSlide - 1 : 2)
      : setCurrentSlide(currentSlide < data.length - 1 ? currentSlide + 1 : 0);
  };
  
  return (
    <div className="works" id="service">
      <h1 className="title">Services</h1>
      <div
        className="slider"
        style={{ transform: `translateX(-${currentSlide * 100}vw)` }}
      >
        {data.map((d) => (
          <div key={d.id} className="container">
            <div className="item">
              <div className="left">
                <div className="leftContainer">
                  <div className="imgContainer">
                    <img src={d.icon} alt="" />
                  </div>
                  <h2>{d.title}</h2>
                  <br/>
                  <p>{d.desc}</p>
                  <br/>
                </div>
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
