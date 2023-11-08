import { useContext, useState } from "react";
import { ItemsContext } from "../Contexts/ItemsContext";

const Card = ({ itemName, button, src, alt, onRemove, onEdit, item }) => {
  const [isEdit, setIsEdit] = useState(false);
  const [editValue, setEditValue] = useState(itemName);
  const { handleSubmitEdit } = useContext(ItemsContext);

  return (
    <li>
      <div className="left-container-items">
        <img src={src} alt={alt} />
        {isEdit ? (
          <form
            onSubmit={(event) => {
              handleSubmitEdit(event, item, editValue);
              setIsEdit(false);
            }}
          >
            <input
              value={editValue}
              onChange={(event) => setEditValue(event.target.value)}
            />
          </form>
        ) : (
          <p>{itemName}</p>
        )}
      </div>
      <div className="right-container-items">
        <button onClick={onRemove}>{button}</button>
        <button
          onClick={() => {
            setIsEdit(!isEdit);
          }}
        >
          edit
        </button>
      </div>
    </li>
  );
};

export default Card;
