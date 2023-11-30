import React from "react";
import Cart from "./cart";
import { useSelector, useDispatch } from "react-redux";

function Addtocart() {
  const list = useSelector((state) => state.phone.list);

  const handlealart = () => {
    if (total == 0) {
      alert("cart empty");
    } else {
      alert("Order confirmed");
    }
  };

  const total = list.reduce((acc, item) => acc + item.price * item.count, 0);

  return (
    <>
      <div className="top">
        <h1>MOBILES IN YOUR CART</h1>
      </div>
      {list.map((val, i) => (
        <Cart
          key={val.id}
          id={val.id}
          title={val.title}
          img={val.images[1]}
          description={val.description}
          price={val.price}
          count={val.count}
        />
      ))}
      <div className="bottom">
        <div className="end">
        <b>
          <p>SUB TOTAL :₹{total}</p>
          <p>SHIPPING : FREE</p>
          <h3>GRAND TOTAL :₹{total}</h3>
        </b>
          <hr />
          <button className="cbtn" onClick={() => handlealart()}>
            Check Out
          </button>
        </div>
      </div>
    </>
  );
}

export default Addtocart;
