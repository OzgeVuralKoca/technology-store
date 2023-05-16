/* eslint-disable no-case-declarations */
import { createContext, useReducer } from "react"
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const CartContext = createContext()

// Toaster Error
const notifyError = () => toast.error('Ürün stoğu yetersiz!', {
position: "top-center",
autoClose: 3000,
hideProgressBar: false,
closeOnClick: true,
pauseOnHover: true,
draggable: true,
progress: undefined,
theme: "dark",
});

// Toaster Success
const notifySuccess = () => toast.success('Ürün sepete eklendi.', {
position: "top-center",
autoClose: 3000,
hideProgressBar: false,
closeOnClick: true,
pauseOnHover: true,
draggable: true,
progress: undefined,
theme: "dark",
});

const itemsData = JSON.parse(localStorage.getItem('items')) || [];

const getDefaultTotalAmount = () => {
  return itemsData.reduce((total, item) => total + item.price * item.amount, 0);
}

const defaultCartState = {
  items: itemsData,
  totalAmount: getDefaultTotalAmount()
}

const cartReducer = (state, action) => {

  switch (action.type) {
    case "ADD":
      const existingCartItemIndex = state.items.findIndex(
        (item) => item.id === action.item.id
      );
      let updatedItems = [...state.items];

      if (existingCartItemIndex !== -1) {
        if (state.items[existingCartItemIndex].amount < state.items[existingCartItemIndex].stock) {
          updatedItems[existingCartItemIndex] = {
            ...state.items[existingCartItemIndex],
            amount: state.items[existingCartItemIndex].amount + action.item.amount
          }
          notifySuccess()
        } else {
          notifyError()
        }
      } else {
        updatedItems = [...state.items, action.item];
      }

      const newTotalAmount = state.totalAmount + action.item.price * action.item.amount
      localStorage.setItem('items', JSON.stringify(updatedItems))
      localStorage.setItem('totalAmount', JSON.stringify(newTotalAmount))
      return {
        items: updatedItems,
        totalAmount: newTotalAmount
      };
    case "REMOVE":
      const filteredItems = state.items.filter((item) => item.id !== action.id);
      const itemToRemove = state.items.find((item) => item.id === action.id);
      const newRemovedTotalAmount = state.totalAmount - itemToRemove.price * itemToRemove.amount

      localStorage.setItem('items', JSON.stringify(filteredItems))
      localStorage.setItem('totalAmount', JSON.stringify(newRemovedTotalAmount))
      return {
        items: filteredItems,
        totalAmount: newRemovedTotalAmount
      };

    case "CLEAR":
      localStorage.removeItem('items', 'totalAmount')
      return defaultCartState;

    default:
      return state
  }
}

const CartProvider = ({ children }) => {
  const [cartState, dispatchCartAction] = useReducer(
    cartReducer,
    defaultCartState
  )

  const cartProviderValue = {
    items: cartState.items,
    totalAmount: cartState.totalAmount,
    addItem: (item) => {
      dispatchCartAction({ type: "ADD", item })
    },
    removeItem: (id) => {
      dispatchCartAction({ type: "REMOVE", id });
    },
    clearItem: () => {
      dispatchCartAction({ type: "CLEAR" })
    }
  }

  return <CartContext.Provider value={cartProviderValue}>{children}</CartContext.Provider>
}

export default CartProvider