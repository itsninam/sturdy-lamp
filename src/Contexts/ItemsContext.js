import { createContext, useReducer, useState } from "react";

const ItemsContext = createContext();
const apiKey = "SPWoYE3TRrK7rkvIR2uFqa0RuCJ-tfaeJvWqFzdyd-w";

const initialValue = {
  items: [],
  isLoading: false,
};

const reducer = (state, action) => {
  switch (action.type) {
    case "loading":
      return {
        ...state,
        isLoading: action.payload,
      };
    case "add_item": {
      return {
        ...state,
        items: [...state.items, action.payload],
      };
    }
    case "remove_item": {
      return {
        ...state,
        items: state.items.filter((item) => item.id !== action.payload.id),
      };
    }
  }
};

const ItemsProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialValue);

  const handleSubmitItem = (event, item) => {
    event.preventDefault();

    fetchData(item);
  };

  const fetchData = (userInput) => {
    dispatch({ type: "loading", payload: true });

    fetch(
      `https://api.unsplash.com/search/photos/?client_id=${apiKey}&query=${userInput}&per_page="1"`
    )
      .then((response) => response.json())
      .then((data) => {
        const newItem = {
          id: Math.random(),
          itemName: userInput,
          img: data.results[0].urls.thumb,
        };

        dispatch({ type: "add_item", payload: newItem });
        dispatch({ type: "loading", payload: false });
      })
      .catch((error) => console.error(error));
  };

  const handleRemoveItem = (item) => {
    dispatch({ type: "remove_item", payload: item });
  };

  return (
    <ItemsContext.Provider
      value={{ handleSubmitItem, state, handleRemoveItem }}
    >
      {children}
    </ItemsContext.Provider>
  );
};

export { ItemsContext, ItemsProvider };
