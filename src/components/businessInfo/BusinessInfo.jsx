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
        "Holds an MBA Accounting and Finance, Is a top tier Analyst and Data Analyst with extensive knowledge in Financing and Business.",
      featured: true,
    },
    {
      id: 2,
      link: "https://twitter.com/CedricN_G",
      name: "Bongadu Cedric",
      title: "Co-founder",
      img:"assets/m2.jpeg",
      icon: "assets/twitter.png",
      desc:
        "Holds an MBA Accounting and Finance, Is certified in Accounting Software, a Fiscal adviser and financial controller at SUDEVIN.",
        featured: true,
    },
  ];
  return (
    <div className="businessinfo" id="businessinfo">
      <h2>Managers</h2>
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