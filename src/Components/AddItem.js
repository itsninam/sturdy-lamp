import { useState, useContext } from "react";
import { ItemsContext } from "../Contexts/ItemsContext";

const AddItem = () => {
  const [userInput, setUserInput] = useState("");
  const { handleSubmitItem } = useContext(ItemsContext);

  return (
    <form
      onSubmit={(event) => {
        handleSubmitItem(event, userInput);
        setUserInput("");
      }}
    >
      <label>Add item</label>
      <input
        type="text"
        value={userInput}
        onChange={(event) => setUserInput(event.target.value)}
      />
    </form>
  );
};

export default AddItem;
