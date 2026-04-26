import { Link } from "react-router-dom";
import styles from "../styles/Card.module.css";


const Card = (props) => {
  return (
    <Link to={props.path} className={styles['category-card']}>
      <img src={props.image} alt={props.title} />
      <h2 className={styles['category-card-info']}>{props.title}</h2>
    </Link>
  );
};

export default Card;
