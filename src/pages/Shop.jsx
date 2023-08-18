import { useState } from "react";
import { Link, Outlet } from "react-router-dom";
import { Helmet } from "react-helmet";

const Shop = () => {
  const [activeTab, setActiveTab] = useState("tab1");

  const handleTabClick = (tabId) => {
    setActiveTab(tabId);
  };
  return (
    <section className="section">
      <Helmet>
        <title>My FUBU Store® </title>
      </Helmet>
      <div className="container">
        <div className="columns">
          <div className="column">
            <div className="tabs has-text-weight-light is-uppercase is-size-5 is-size-7-mobile">
              <ul>
                <li
                  className={activeTab === "tab1" ? "is-active" : ""}
                  onClick={() => handleTabClick("tab1")}
                >
                  <Link to="/Shop">all</Link>
                </li>
                <li
                  className={activeTab === "tab2" ? "is-active" : ""}
                  onClick={() => handleTabClick("tab2")}
                >
                  <Link to="/Shop/Tops">tops</Link>
                </li>
                <li
                  className={activeTab === "tab3" ? "is-active" : ""}
                  onClick={() => handleTabClick("tab3")}
                >
                  <Link to="/Shop/Bottoms">bottoms</Link>
                </li>
                <li
                  className={activeTab === "tab4" ? "is-active" : ""}
                  onClick={() => handleTabClick("tab4")}
                >
                  <Link to="/Shop/Accessories">accessories</Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="columns">
          <div className="column">
            <Outlet />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Shop;
