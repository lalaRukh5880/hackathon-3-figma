'use client';

import React, { createContext, useReducer, ReactNode, Dispatch } from "react";

// Define Cart Item Type
interface CartItem {
  id: number;
  name: string;
  price: number;
  quantity: number;
  imageUrl: string;
}

// Define State and Action Types
interface CartState {
  cartItems: CartItem[];
}

type CartAction =
  | { type: "ADD_TO_CART"; payload: CartItem }
  | { type: "REMOVE_FROM_CART"; payload: number }
  | { type: "INCREMENT_QUANTITY"; payload: number }
  | { type: "CLEAR_CART" }; // New action to clear the cart

// Initial State
const initialState: CartState = {
  cartItems: [],
};

// Reducer Function
const cartReducer = (state: CartState, action: CartAction): CartState => {
  switch (action.type) {
    case "ADD_TO_CART":
      const existingIndex = state.cartItems.findIndex(
        (item) => item.id === action.payload.id
      );
      if (existingIndex >= 0) {
        const updatedItems = [...state.cartItems];
        updatedItems[existingIndex].quantity += action.payload.quantity;
        return { ...state, cartItems: updatedItems };
      }
      return { ...state, cartItems: [...state.cartItems, action.payload] };

    case "REMOVE_FROM_CART":
      return {
        ...state,
        cartItems: state.cartItems.filter((item) => item.id !== action.payload),
      };

    case "INCREMENT_QUANTITY":
      return {
        ...state,
        cartItems: state.cartItems.map((item) =>
          item.id === action.payload
            ? { ...item, quantity: item.quantity + 1 }
            : item
        ),
      };

      case "INCREMENT_QUANTITY":
      return {
        ...state,
        cartItems: state.cartItems.map((item) =>
          item.id === action.payload
            ? { ...item, quantity: item.quantity + 1 }
            : item
        ),
      };

      case "CLEAR_CART": // Handle clearing the cart
      return {
        ...state,
        cartItems: [],
      };

    default:
      return state;
  }
};

// Context Type
interface CartContextType {
  cartItems: CartItem[];
  dispatch: Dispatch<CartAction>;
}

// Create Context
export const CartContext = createContext<CartContextType>({
  cartItems: initialState.cartItems,
  dispatch: () => undefined,
});

// Provider Component
export const CartProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [state, dispatch] = useReducer(cartReducer, initialState);

  return (
    <CartContext.Provider value={{ cartItems: state.cartItems, dispatch }}>
      {children}
    </CartContext.Provider>
  );
};
