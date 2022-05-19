import { useEffect, useState } from "react";
import './services.scss';
import {
  featuredPortfolio,
  webPortfolio,
  mobilePortfolio,
  designPortfolio,
  contentPortfolio,
} from './data.js'
import ServiceList from "../serviceList/ServiceList";
export default function Services() {
  const [selected, setSelected] = useState("featured");
  const [data, setData] = useState([]);
  const list = [
    {
      id: "featured",
      title: "Featured",
    },
    {
      id: "web",
      title: "Web App",
    },
    {
      id: "mobile",
      title: "Mobile App",
    },
    {
      id: "design",
      title: "Design",
    },
    {
      id: "content",
      title: "Content",
    },
  ];

  useEffect(() => {
    switch (selected) {
      case "featured":
        setData(featuredPortfolio);
        break;
      case "web":
        setData(webPortfolio);
        break;
      case "mobile":
        setData(mobilePortfolio);
        break;
      case "design":
        setData(designPortfolio);
        break;
      case "content":
        setData(contentPortfolio);
        break;
      default:
        setData(featuredPortfolio);
    }
  }, [selected]);
  return (
    <div className='services' id='service'>
      <h1>Services</h1>
      <ul>
        {list.map((item)=>(
          <ServiceList title ={item.title}
          active = {selected === item.id}
          setSelected = {setSelected}
           id ={item.id}
          />
        ))}
      </ul>
      <div className="container">
         {data.title}
      </div>

    </div>
  )
}
