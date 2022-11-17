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
      name: "BONGADU CEDRIC",
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
      <h1>Managers</h1>
      <div className="container_old">
        {data.map((d) => (
          <div key={d.id} className={d.featured ? "card_old featured" : "card_old"}>
            <div className="top_old">
              <img src="assets/right-arrow.png" className="left_old" alt="" />
              <img
                className="user_old"
                src={d.img}
                alt=""
              />
              <a href={d.link}><img className="right_old" src={d.icon} alt="" /></a>
            </div>
            <div className="center_old">
              {d.desc}
            </div>
            <div className="bottom_old">
              <h3>{d.name}</h3>
              <h4>{d.title}</h4>
            </div>
          </div>
        ))}
      </div>
  
    </div>
  );
}