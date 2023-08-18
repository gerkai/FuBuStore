// import { useSelector } from "react-redux";
//import { PRODUCTS } from "../products/data";
import { BiChevronsLeft, BiChevronsRight } from "react-icons/bi";

const Cart = () => {
  // const { cartProductIds } = useSelector((state) => state.cart);
  // const cartProductData = PRODUCTS.filter((product) =>
  //   cartProductIds.includes(product.id)
  // );

  return (
    <section className="section is-clipped">
      <div className="container">
        <div className="has-background-white p-8 p-20-desktop">
          <h2 className="title mb-8 mb-20-tablet">Cart</h2>
          <div className="columns is-multiline is-vcentered">
            <div className="column is-12 is-8-widescreen mb-8 mb-0-widescreen">
              <div
                className="is-hidden-touch columns is-multiline"
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
                <div className="column is-2 has-text-centered">
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
                <div className="mb-6 mb-3-tablet columns is-vcentered is-multiline">
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
                            src="yofte-assets/images/waterbottle.png"
                            alt=""
                          />
                        </div>
                      </div>
                      <div className="column is-8">
                        <h3 className="subtitle mb-2 has-text-weight-bold">
                          BRILE water filter carafe
                        </h3>
                        <p className="mb-0 mt-5 has-text-grey">
                          Maecenas 0.7 commodo sit
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="column is-2 is-hidden-touch">
                    <p className="subtitle has-text-info mb-0 has-text-weight-bold">
                      $29.89
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
                        <BiChevronsLeft width="12" height="12" />
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
                        <BiChevronsRight width="12" height="12" />
                      </button>
                    </div>
                  </div>
                  <div className="column is-2">
                    <p className="subtitle has-text-info has-text-weight-bold">
                      $29.89
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="column is-12 is-4-widescreen">
              <div className="has-background-info p-6 p-16-desktop">
                <h3 className="title is-size-3 has-text-white mb-6">
                  Cart totals
                </h3>
                <div
                  className="mb-8 pb-5 is-flex is-justify-content-space-between is-align-items-center"
                  style={{ borderBottom: "1px solid rgba(255, 255, 255, 0.3)" }}
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
                  Go to Checkout
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Cart;
