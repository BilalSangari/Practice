import style from "../components/Netflix.module.css";
import styled from "styled-components";
export const SeriesCard = ({ curElem }) => {
  const { img_url, name, rating, description, genre, cast, watch_url } =
    curElem;
  const btn_style = {
    padding: "1.2rem 2.3rem",
    border: "none",
    backgroundColor: `${rating >= 8.5 ? "#7dcea0" : "#f7dc6f"}`,
    color: "var(--btn-color)",
    fontWeight: "bold",
    cursor: "pointer",
  };

  const Rating = styled.h3`
    font-size: 1.6rem;
    color: #7dcea0;
    text-transform: capitalize;
  `;

  const ratingClass =
    rating >= 8.5 ? `${style["super-hit"]}` : `${style["average"]}`;

  return (
    <li className={style.card}>
      <div>
        <img src={img_url} alt="" width="40%" height="40%" />
      </div>
      {/* <div className={style["class-content"]}> */}
      <div className="flex flex-col gap-6 py-[3.2rem] px-[1.2rem]">
        <h2>Name: {name}</h2>
        <Rating>
          Rating:
          <span className={`${style.rating} ${ratingClass}`}>{rating}</span>
        </Rating>
        <p className="text-3xl font-bold underline">Summary: {description}</p>
        <p>Genre: {genre}</p>
        <p>Cast: {cast}</p>
        <a href={watch_url} target="_blank">
          <button style={btn_style}>Watch Now</button>
        </a>
      </div>
    </li>
  );
};
