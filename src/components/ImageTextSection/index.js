import React from 'react';

const ImageTextSection = () => {
  const data = [
    {
      imgSrc: "./RAQAMLI DIZAYN/malika.jpg",
      heading: "Create exhibitions within minutes",
      bulletPoints: [
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus eaque asperiores veritatis minus reiciendis ipsam necessitatibus earum ad beatae enim!",
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt blanditiis distinctio corrupti atque. Consectetur maxime cupiditate quas rem?",
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Facilis totam illo quaerat quasi ab debitis dignissimos odio porro?"
      ],
      link: "./en.html"
    },
    {
      imgSrc: "./RAQAMLI DIZAYN/umida.jpg",
      heading: "Bizing #Yosh rassomlar haqida.",
      bulletPoints: [
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Veritatis distinctio quae inventore exercitationem soluta dolore incidunt tenetur.",
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem dolor quo facere et. Voluptatum animi iste fuga quam dignissimos."
      ],
      link: "./en.html"
    }
  ];
  return (
    <section className="image-text-section bcgd-light-grey">
      <div className="image-text-container">
        <div className="image-text image">
          <img loading="lazy" src={data.imgSrc} alt="" />
        </div>
        <div className="image-text text">
          <h2>{data.heading}</h2>
          <ul className="bullet-list">
            {data.bulletPoints.map((bullet, index) => (
              <li key={index} className="bullet-point">
                <i className="li-icon km-icon-scale"></i>
                <span>{bullet}</span>
              </li>
            ))}
          </ul>
          <a className="btn-primary btn-medium" href={data.link}>
            More<i className="li-icon li-icon-trailing km-icon-download"></i>
          </a>
        </div>
      </div>
    </section>
  );
};
};

export default ImageTextSection;
