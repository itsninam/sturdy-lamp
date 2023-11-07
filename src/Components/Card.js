const Card = ({ itemName, button, src, alt, onClick }) => {
  return (
    <li>
      <div className="left-container-items">
        <img src={src} alt={alt} />
        <p>{itemName}</p>
      </div>
      <div className="right-container-items">
        <button onClick={onClick}>{button}</button>
      </div>
    </li>
  );
};

export default Card;
