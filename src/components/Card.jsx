import { Link } from "react-router-dom";
import "../styles/Card.css";


const Card = (props) => {
  return (
    <Link to={props.path} className="category-card">
      <img src={props.image} alt={props.title} />
      <h2 className="category-card-info">{props.title}</h2>
      <div class="overlay-card-color"></div>
    </Link>
  );
};

export default Card;
