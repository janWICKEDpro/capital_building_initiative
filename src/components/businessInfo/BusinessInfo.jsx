
import './businessInfo.scss';

export default function BusinessInfo() {
  const data = [
   
    {
      id: 1,
      link: "https://twitter.com/ReelBabaca",
      name: "AGYINGI BABACA",
      title: "Co-founder",
      img:"assets/m1.jpeg",
      icon:"assets/twitter.png",
      desc:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat magnam dolorem recusandae perspiciatis ducimus vel hic temporibus. ",
      featured: true,
    },
    {
      id: 2,
      link: "",
      name: "Somebody something",
      title: "Co-founder",
      img:"assets/m2.jpeg",
      icon: "assets/twitter.png",
      desc:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat magnam dolorem",
        featured: true,
    },
  ];
  return (
    <div className="businessinfo" id="businessinfo">
      <h1>Managers</h1>
      <div className="container">
        {data.map((d) => (
          <div key={d.id} className={d.featured ? "card featured" : "card"}>
            <div className="top">
              <img src="assets/right-arrow.png" className="left" alt="" />
              <img
                className="user"
                src={d.img}
                alt=""
              />
              <a href={d.link}><img className="right" src={d.icon} alt="" /></a>
            </div>
            <div className="center">
              {d.desc}
            </div>
            <div className="bottom">
              <h3>{d.name}</h3>
              <h4>{d.title}</h4>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}