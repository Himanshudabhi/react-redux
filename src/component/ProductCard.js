/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import { useDispatch } from "react-redux";
import { addItem } from "../store/slice/CartSlice";
import { useState } from "react";
import { additem } from "../store/slice/WishListSlice";
import { useSelector } from "react-redux";

const ProductCard = (props) => {
  const { img, rating, title, price } = props;
  const [isadded, setisadded] = useState();

  const { wishListItems } = useSelector((state) => state.wishlist);

  const dispatch = useDispatch();

  const addToCart = () => {
    const item = { ...props };
    dispatch(addItem(item));
    setisadded(true);

    setTimeout(() => {
      setisadded(false);
    }, 3000);
  };

  const addToWishLIst = () => {
    const items = { ...props };
    dispatch(additem(items));
  };

  return (
    <>
      <div className="container mt-5 pt-5">
        <div className="card cart_product_item text-center pt-4 pb-2">
          <span onClick={addToWishLIst} className="ms-auto me-4">
            {" "}
            {wishListItems.some((i) => i.id === props.id) ? (
              <i class="fa-sharp fa-solid fa-heart heart-custom"></i>
            ) : (
              <i class="fa-regular fa-heart heart-custom"></i>
            )}
          </span>
          <div className="card-head align-items-center d-flex">
            <img src={img} className="cart_product_img" />
          </div>
          <div className="card-body">
            <h5 className="card-title">{title}</h5>
            <strong className="rating">{rating}</strong>
            <h3 className="price">₹ {price.toLocaleString()}</h3>
            <button className="btn btn-info card-btn" onClick={addToCart}>
              {isadded ? "Added" : "Add To Cart"}
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductCard;
