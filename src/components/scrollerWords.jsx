import "../styles/scrollerWords.css";


const ScrollerWords = (props) => {
  return (
    <div className="scrollingCard">
      <div className="scrollingLoader">
        <div className="scrollingWords">
          <span className="scrollingWord">Design</span>
          <span className="scrollingWord">Engineering</span>
          <span className="scrollingWord">Management</span>
          <span className="scrollingWord">Quality</span>
          <span className="scrollingWord">Sustainability</span>
        </div>
      </div>
    </div>

  );
};

export default ScrollerWords;
