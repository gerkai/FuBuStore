import { useDispatch, useSelector } from "react-redux";
import cartSlice from "../redux-toolkit/cartSlice";
import { PRODUCTS } from "../products/data";
import { BiMinus, BiPlus, BiTrash, BiCart } from "react-icons/bi";
import { Link } from "react-router-dom";

const Cart = () => {
  const { cartProductIds } = useSelector((state) => state.cart);
  const cartProductData = PRODUCTS.filter((product) =>
    cartProductIds.includes(product.id)
  );
  const { removeFromCart } = cartSlice.actions;
  const dispatch = useDispatch();

  return (
    <section className="section is-clipped">
     {cartProductData.length > 0 && ( <div className="container">
        <div className="has-background-white p-8 p-20-desktop">
          <h2 className="title mb-8 mb-20-tablet">Cart</h2>

          <div className="columns is-multiline">
            <div className="column is-12 is-8-widescreen mb-8 mb-0-widescreen">
              <div
                className="columns is-hidden-touch is-multiline"
                style={{ borderBottom: "1px solid grey" }}
              >
                <div className="column is-6">
                  <h4
                    className="has-text-grey has-text-weight-bold mb-6"
                    style={{ fontSize: "16px" }}
                  >
                    Description
                  </h4>
                </div>
                <div className="column is-2">
                  <h4
                    className="has-text-grey has-text-weight-bold mb-6"
                    style={{ fontSize: "16px" }}
                  >
                    Price
                  </h4>
                </div>
                <div className="column is-2">
                  <h4
                    className="has-text-grey has-text-weight-bold mb-6"
                    style={{ fontSize: "16px" }}
                  >
                    Quantity
                  </h4>
                </div>
                <div className="column is-2">
                  <h4
                    className="has-text-grey has-text-weight-bold mb-6"
                    style={{ fontSize: "16px" }}
                  >
                    Subtotal
                  </h4>
                </div>
              </div>
              <div className="mb-12 py-6">
                {cartProductData.map((product) => {
                  return (
                    <div
                      className="columns mb-6 mb-3-tablet is-vcentered is-multiline"
                      key={product.id}
                    >
                      <div className="column is-6-desktop is-7-tablet mb-6 mb-0-tablet">
                        <div className="columns is-vcentered is-multiline">
                          <div className="column is-4 mb-3">
                            <div
                              className="is-flex has-background-light is-justify-content-center is-align-items-center"
                              style={{ width: "96px", height: "128px" }}
                            >
                              <img
                                className="image is-fullwidth"
                                style={{ objectFit: "contain" }}
                                src={product.productImage}
                                alt=""
                              />
                            </div>
                          </div>
                          <div className="column is-8">
                            <h3 className="subtitle mb-2 has-text-weight-bold">
                              {product.productName}
                            </h3>
                            <p className="mb-0 mt-5 has-text-grey">
                              {product.productDescription}
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="column is-2 is-hidden-touch">
                        <p className="mb-0 has-text-weight-bold">
                          ${product.productPrice}
                        </p>
                      </div>
                      <div className="column is-2-desktop is-3-tablet">
                        <div
                          className="px-4 is-inline-flex is-align-items-center has-text-weight-bold"
                          style={{
                            border: "1px solid #DBDDE1",
                            borderRadius: "8px",
                          }}
                        >
                          <button className="button is-ghost has-text-grey p-0">
                            <span className="icon">
                              <BiMinus />
                            </span>
                          </button>
                          <p
                            className="px-2 py-4 has-text-centered"
                            style={{
                              width: "48px",
                              border: "none",
                              boxShadow: "none",
                            }}
                          >
                            1
                          </p>
                          <button className="button is-ghost has-text-grey p-0">
                            <span className="icon">
                              <BiPlus />
                            </span>
                          </button>
                        </div>
                      </div>
                      <div className="column is-narrow">
                        <p className="has-text-weight-bold">$29.89</p>
                      </div>
                      <div className="column is-narrow">
                        <button className="button is-ghost has-text-grey p-0">
                          <span className="icon is-small">
                            <a
                              className=""
                              onClick={() =>
                                dispatch(removeFromCart(product.id))
                              }
                            >
                              <BiTrash />
                            </a>
                          </span>
                        </button>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
            <div className="column is-12 is-4-widescreen">
              <div className="has-background-info p-6 p-16-desktop">
                <h3 className="title is-size-3 has-text-white mb-6">
                  Cart totals
                </h3>
                <div
                  className="mb-8 pb-5 is-flex is-justify-content-space-between is-align-items-center"
                  style={{
                    borderBottom: "1px solid rgba(255, 255, 255, 0.3)",
                  }}
                >
                  <span className="has-text-light has-text-weight-bold">
                    Total
                  </span>
                  <span className="has-text-white has-text-weight-bold">
                    $89.67
                  </span>
                </div>
                <a
                  className="button is-large is-responsive btn is-primary is-fullwidth"
                  href="#"
                >
                  Checkout
                </a>
              </div>
            </div>
          </div>
        </div>

        
      </div>)}
      {cartProductData.length < 1 && (<div className="has-text-centered">
          <BiCart size={200} fontWeight={900} />

          <p className="title has-text-weight-semibold">
            Your Cart is empty
          </p>
          <p className="subtitle">Proceed to store and start shopping</p>
          <Link
            to="/Shop"
            className="button is-danger is-large is-responsive btn has-text-weight-bold"
          >
            Shop Now
          </Link>
        </div>)}
    </section>
  );
};

export default Cart;
