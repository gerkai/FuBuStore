import { useDispatch, useSelector } from "react-redux";
import cartSlice from "../redux-toolkit/cartSlice";
import { PRODUCTS } from "../products/data";
import { motion } from "framer-motion";

const Bottoms = () => {
  const { cartProductIds } = useSelector((state) => state.cart);
  const { addToCart, removeFromCart } = cartSlice.actions;
  const dispatch = useDispatch();

  const bottomsProducts = PRODUCTS.filter(
    (product) => product.productCategory === "bottoms"
  );
  return (
    <div className="columns is-multiline">
      {bottomsProducts.map((product) => {
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
          </motion.div>
        );
      })}
    </div>
  );
};

export default Bottoms;
