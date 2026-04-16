import { Link } from "react-router-dom";
import "../styles/Cards.css";
import servicesIcon from '../assets/images/services.png';
import aboutIcon from '../assets/images/aboutUS.jpg';
import contactIcon from '../assets/images/contact.png';
const cards = [
  {
    title: "Services",
    image: servicesIcon,
    path: "/services"
  },
  {
    title: "About Us",
    image: aboutIcon,
    path: "/about"
  },
  {
    title: "Contact",
    image: contactIcon,
    path: "/contact"
  }
];

const Cards = () => {
  return (
    <div className="cards">
      {cards.map((card, index) => (
        <Link to={card.path} className="card" key={index}>
          <img src={card.image} alt={card.title} />
          <div className="card-info">
            <h2>{card.title}</h2>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default Cards;
