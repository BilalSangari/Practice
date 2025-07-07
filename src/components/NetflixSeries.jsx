import SeriesData from "../api/NetflixSeries.json";
import { SeriesCard } from "./SeriesCard";
const NetflixSeries = () => {
  return (
    <ul className="grid grid-three--cols">
      {SeriesData.map((curElem) => (
        <SeriesCard key={curElem.id} curElem={curElem} />
      ))}
    </ul>
  );
};

export default NetflixSeries;
