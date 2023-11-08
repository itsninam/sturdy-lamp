import Card from "./Card";
import { useContext } from "react";
import { ItemsContext } from "../Contexts/ItemsContext";
import UserNotification from "./UserNotification";

const CardList = () => {
  const { state, handleRemoveItem } = useContext(ItemsContext);

  return (
    <ul>
      {state.isLoading && <UserNotification message="Loading" />}
      {!state.isLoading && !state.items.length && (
        <UserNotification message="Add item" />
      )}
      {state.items.map((item) => {
        return (
          <Card
            itemName={item.itemName}
            button="remove"
            src={item.img}
            key={item.id}
            alt={item.img ? item.itemName : "Image unavailable"}
            onRemove={() => handleRemoveItem(item)}
            item={item}
          />
        );
      })}
    </ul>
  );
};

export default CardList;
