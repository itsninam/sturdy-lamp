import Card from "./Card";
import { useContext } from "react";
import { ItemsContext } from "../Contexts/ItemsContext";
import Loading from "./Loading";

const CardList = () => {
  const { state, handleRemoveItem } = useContext(ItemsContext);

  if (state.isLoading) {
    return <Loading />;
  }

  if (!state.items.length) {
    return <p>Add an item</p>;
  }

  return (
    <ul>
      {state.items.map((item) => {
        return (
          <Card
            itemName={item.itemName}
            button="remove"
            src={item.img}
            key={item.id}
            alt={item.itemName}
            onClick={() => handleRemoveItem(item)}
          />
        );
      })}
    </ul>
  );
};

export default CardList;
