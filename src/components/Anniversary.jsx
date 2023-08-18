const Anniversary = () => {

  const customStyles = {
    fontFamily: "TestFoundersGrotesk",
  };

  return (
    <section className="section is-medium anniversary">
      <div className="container">
        <p className="bgr-title has-text-white has-text-weight-bold is-uppercase">
          fubu&#39;s
        </p>
        <p className="bgr-feature-title has-text-white has-text-weight-bold is-uppercase">
          30<sup className="is-size-6">th</sup>
        </p>
        <p className="bgr-subtitle has-text-white has-text-weight-bold is-uppercase">
          anniversary
        </p>
        <p
          className="subtitle has-text-white has-text-weight-normal"
          style={customStyles}
        >
          Shop our exclusive anniversary items!
        </p>
      </div>
    </section>
  );
};

export default Anniversary;
