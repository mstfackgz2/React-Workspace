import React from "react";

function Course({ course }) {
  const { id, title, description, price, link, image } = course;
  return (
    <div className="course">
      <div>
        <img src={image} width={350} height={230} alt="" />
        <h4 className="course-title">{title.toUpperCase()}</h4>
        <p className="course-description">{description}</p>
        <h3>{price}</h3>
        <button className="buy-button">
          <a href={link}>Daha Fazla Bilgi</a>
        </button>
      </div>
    </div>
  );
}

export default Course;
