import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { removeItem } from "../store/slice/WishListSlice";

const WishList = () => {
  const {wishListItems } = useSelector((state) => state.wishlist);

  const dispatch = useDispatch();

  const handleRemove = (itemId) => {
    dispatch(removeItem(itemId));
  };

  const wishQuantity = wishListItems.length;

  return (
    <>
<div class="modal fade" id="staticBackdrop1" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog modal-lg" >
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title"  id="staticBackdropLabel">WisList <small>({wishQuantity})</small></h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body text-center" style={{maxHeight: 'calc(100vh - 210px)',overflowY: 'auto'}}>
      {wishQuantity === 0 ? (
        <div>
                  <h2 style={{ textAlign: "center" }}>Your wishlist is empty</h2>
                </div>
              ) : (
                wishListItems.map((item) => {
                  const { id, img, title, price, quantity } = item;
                  const itemTotal = price * quantity;

                  return (
                   <>
                    <div className="cart_items align-items-center" key={id}>
                      <div className="row align-items-center">
                      <div className="col-4">
                      <figure className="cart_items_img">
                        <img src={img} className="pro_img" alt="product-img" />
                      </figure>
                      </div>
                      <div className="col-4 text-center">
                      <div className="cart_items_info">
                        <h4>{title}</h4>
                        <h3 className="price">
                          ₹ {itemTotal.toLocaleString()}
                        </h3>
                      </div>
                      </div>
                     
                      <div className="col-4 text-center">
                      <div>
                      <i class="fa-sharp fa-solid fa-heart heart-custom1" onClick={() => handleRemove(id)}></i>
                      </div>
                      </div>
                    </div>
                    </div>
                    </>
                  );
                })
              )}
            </div>
      </div>
      </div>
          </div>

    </>
  );
};

export default WishList;