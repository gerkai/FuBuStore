import { useDispatch, useSelector } from "react-redux";
import cartSlice from "../redux-toolkit/cartSlice";
import { useState } from "react";
import { PRODUCTS } from "../products/data";

const Men = () => {
  const { cartProductIds } = useSelector((state) => state.cart);
  const { addToCart, removeFromCart } = cartSlice.actions;
  const dispatch = useDispatch();

  const menProducts = PRODUCTS.filter(
    (product) => product.productCategory === "men"
  );
  return (
    <div className="columns is-multiline is-mobile">
      {menProducts.map((product) => {
        return (
          <div
            className="column is-one-quarter-desktop is-half-mobile is-flex"
            key={product.id}
          >
            <div className="card">
              <div className="card-image">
                <img src={product.productImage} alt="" />
              </div>
              <div className="card-content">
                <div className="media">
                  <div className="media-content">
                    <p className="is-size-7 has-text-weight-bold">
                      {product.productName}
                    </p>
                    <p className="is-size-7 has-text-weight-medium">
                      {product.productDescription}
                    </p>
                    <p className="is-size-7 has-text-weight-normal">
                      ${product.productPrice}
                    </p>
                  </div>
                </div>
              </div>
              <div className="card-content">
              <div className="content">
                  {!cartProductIds.includes(product.id) && (
                    <button
                      onClick={() => dispatch(addToCart(product.id))}
                      className="button is-small is-responsive is-primary has-text-weight-semibold"
                    >
                      Add to Cart
                    </button>
                  )}
                  {cartProductIds.includes(product.id) && (
                    <button
                      onClick={() => dispatch(removeFromCart(product.id))}
                      className="button is-small is-responsive is-primary has-text-weight-semibold"
                    >
                      Remove from Cart
                    </button>
                  )}
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

const Women = () => {
  const { cartProductIds } = useSelector((state) => state.cart);
  const { addToCart, removeFromCart } = cartSlice.actions;
  const dispatch = useDispatch();

  const womenProducts = PRODUCTS.filter(
    (product) => product.productCategory === "women"
  );

  return (
    <div className="columns is-multiline is-mobile">
      {womenProducts.map((product) => {
        return (
          <div
            className="column is-one-quarter-desktop is-half-mobile is-flex"
            key={product.id}
          >
            <div className="card">
              <div className="card-image">
                <img src={product.productImage} alt="" />
              </div>
              <div className="card-content">
                <div className="media">
                  <div className="media-content">
                    <p className="is-size-7 has-text-weight-bold">
                      {product.productName}
                    </p>
                    <p className="is-size-7 has-text-weight-medium">
                      {product.productDescription}
                    </p>
                    <p className="is-size-7 has-text-weight-normal">
                      ${product.productPrice}
                    </p>
                  </div>
                </div>
              </div>
              <div className="card-content">
              <div className="content">
                  {!cartProductIds.includes(product.id) && (
                    <button
                      onClick={() => dispatch(addToCart(product.id))}
                      className="button is-small is-responsive is-primary has-text-weight-semibold"
                    >
                      Add to Cart
                    </button>
                  )}
                  {cartProductIds.includes(product.id) && (
                    <button
                      onClick={() => dispatch(removeFromCart(product.id))}
                      className="button is-small is-responsive is-primary has-text-weight-semibold"
                    >
                      Remove from Cart
                    </button>
                  )}
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};
const NewArrivals = () => {
  const [activeTab, setActiveTab] = useState("Men");

  const handleTabClick = (tabName) => {
    setActiveTab(tabName);
  };

  const customStyles = {
    lineHeight: "4.5rem",
  };
  return (
    <section className="section">
      <h1
        className="title has-text-weight-bold is-uppercase is-size-1 has-text-primary"
        style={customStyles}
      >
        new arrivals
      </h1>
      <div className="container">
        <div className="columns">
          <div className="column">
            <div className="tabs has-text-weight-light is-uppercase is-size-5 is-size-7-mobile">
              <ul>
                <li
                  className={activeTab === "Men" ? "is-active" : ""}
                  onClick={() => handleTabClick("Men")}
                >
                  <a>men</a>
                </li>
                <li
                  className={activeTab === "Women" ? "is-active" : ""}
                  onClick={() => handleTabClick("Women")}
                >
                  <a>women</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="columns">
          <div className="column">
            {activeTab === "Men" ? <Men /> : <Women />}
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewArrivals;
