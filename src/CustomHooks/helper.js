import { useDispatch, useSelector } from "react-redux";
import {
  removeItemBasket,
  updateStateProductQuantity,
} from "../features/basketSlice";
import { useState } from "react";

export const useHelper = () => {
  const dispatch = useDispatch();
  const { basket } = useSelector((state) => state.basketSlice);
  const { totalPrice } = useSelector((state) => state.basketSlice);

  const [basketQuantity, setBasketQuantity] = useState(
    basket.map((product) => product.quantity)
  );

  const incrementQuntity = (index) => {
    const newQuantities = [...basketQuantity];
    newQuantities[index] += 1;
    setBasketQuantity(newQuantities);
    const id = basket[index].id;
    const payload = {
      id,
      quantity: newQuantities[index],
    };
    dispatch(updateStateProductQuantity(payload));
  };

  const decrementQuantity = (index) => {
    const newQuantities = [...basketQuantity];
    if (newQuantities[index] > 0) {
      newQuantities[index] -= 1;
      setBasketQuantity(newQuantities);
      const id = basket[index].id;
      const payload = {
        id,
        quantity: newQuantities[index],
      };
      dispatch(updateStateProductQuantity(payload));
    }
  };

  const deleteItemBasketItem = (index) => {
    const id = basket[index].id;
    dispatch(removeItemBasket(id));
  };

  return {
    basket,
    totalPrice,
    basketQuantity,
    incrementQuntity,
    decrementQuantity,
    deleteItemBasketItem,
  };
};
