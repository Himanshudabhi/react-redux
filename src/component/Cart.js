import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { removeItem, incrementItem, decrementItem } from "../store/slice/CartSlice";

const Cart = () => {
  const { cartItems } = useSelector((state) => state.cart);

  const dispatch = useDispatch();

  const handleRemove = (itemId) => {
    dispatch(removeItem(itemId));
  };

  const handleIncrement = (itemId) => {
    dispatch(incrementItem(itemId));
  };

  const handleDecrement = (itemId) => {
    dispatch(decrementItem(itemId));
  };

  // useEffect(() => {
  //   const docBody = document.body;

  //   isOpenCart ?
  //     (docBody.classList.add("overflow_hide"))
  //     : (docBody.classList.remove("overflow_hide"));
  // }, [isCartOpen]);

  const cartQuantity = cartItems.length;

  const cartTotal = cartItems
    .map((item) => item.price * item.quantity)
    .reduce((prevValue, currValue) => prevValue + currValue, 0);

  return (
    <>


<div class="modal fade" id="staticBackdrop" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog modal-lg" >
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title"  id="staticBackdropLabel">Cart <small>({cartQuantity})</small></h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close" ></button>
      </div>
      <div class="modal-body text-center" style={{maxHeight: 'calc(100vh - 210px)',overflowY: 'auto'}}>
      {cartQuantity === 0 ? (
        <div>
                  <h2 style={{ textAlign: "center" }}>Your cart is empty</h2>
                </div>
              ) : (
                cartItems.map((item) => {
                  const { id, img, title, price, quantity } = item;
                  const itemTotal = price * quantity;

                  return (
                   
                    <div className="cart_items align-items-center" key={id}>
                      <div className="row align-items-center">
                      <div className="col-4">
                      <figure className="cart_items_img">
                        <img src={img} className="pro_img" alt="product-img" />
                      </figure>
                      </div>
                      <div className="col-4">
                      <div className="cart_items_info">
                        <h4>{title}</h4>
                        <h3 className="price">
                          ₹ {itemTotal.toLocaleString()}
                        </h3>
                      </div>
                      </div>
                      <div className="col-3">
                      <div className="cart_items_quantity">
                        <span onClick={() => handleDecrement(id)} className="btn btn-danger me-3">&#8722;</span>
                        <b>{quantity}</b>
                        <span onClick={() => handleIncrement(id)} className="btn btn-success ms-3">&#43;</span>
                      </div>
                      </div>
                      <div className="col-1">
                      <div>
                         <button
                        title="Remove Item"
                        className="cart_items_delete btn-warning btn"
                        onClick={() => handleRemove(id)}
                      >
                        <span>&times;</span>
                      </button>
                      </div>
                      </div>
                    </div>
                    </div>
                  );
                })
              )}
            </div>
            <div class="modal-footer justify-content-between px-5">
            <h3>
                <small>Total:</small>
                <b>₹ {cartTotal.toLocaleString()}</b>
              </h3>

              <button
                type="button"
                className="checkout_btn btn btn-primary"
                disabled={cartQuantity === 0}
              >
                Checkout
              </button> 
      </div>
      </div>
      </div>
          </div>

    </>
  );
};

export default Cart;