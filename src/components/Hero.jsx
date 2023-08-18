import { Link } from "react-router-dom";
import { curated } from "../assets";

const Hero = () => {
  return (
    <section className="hero is-fullheight main-hero">
      <div className="hero-body">
        <div className="container showcase-content">
          <figure className="">
            <img src={curated} alt="" width="320" height="180" />
          </figure>
          <p>curated by black fashion fair</p>
          <Link
            to="/Shop"
            className="button is-danger is-large is-responsive btn has-text-weight-bold"
          >
            SHOP NOW
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Hero;
