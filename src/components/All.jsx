import { useDispatch, useSelector } from "react-redux";
import cartSlice from "../redux-toolkit/cartSlice";
import { PRODUCTS } from "../products/data";
import { motion } from "framer-motion";

const All = () => {
  const { cartProductIds } = useSelector((state) => state.cart);
  const { addToCart, removeFromCart } = cartSlice.actions;
  const dispatch = useDispatch();

  

  const allProducts = PRODUCTS.filter(
    (product) =>
      product.productCategory === "tops" ||
      product.productCategory === "bottoms" ||
      product.productCategory === "accessories"
  );

  const customStyle = {
    fontSize: "10px",
  };

  return (
    <div className="columns is-multiline">
      {allProducts.map((product) => {
        return (
          <motion.div
            className="column is-one-quarter is-flex"
            key={product.id}
            whileHover={{
              scale: 1.1,
              transition: { duration: 0.5 },
            }}
          >
            <div className="card">
              <div className="card-image">
                <img src={product.productImage} alt="" />
              </div>
              <div className="card-content">
                <div className="media">
                  <div className="media-content">
                    <div className="columns is-mobile">
                      <div className="column">
                        <p className="is-size-7 has-text-weight-semibold">
                          {product.productName}
                        </p>
                      </div>
                      <div className="column">
                        <p className="is-size-7 has-text-weight-semibold is-pulled-right">
                          ${product.productPrice}
                        </p>
                      </div>
                    </div>
                    <p className="has-text-weight-normal" style={customStyle}>
                      {product.productDescription}
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
          </motion.div>
        );
      })}
    </div>
  );
};

export default All;
