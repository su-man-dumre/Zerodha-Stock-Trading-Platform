import React from "react";

function LeftSection({
  imageURL,
  productName,
  productDescription,
  tryDemo,
  learnmore,
  googlePlay,
  appStore,
}) {
  return (
    <>
      <div className="container">
        <div
          className="row align-items-center"
          style={{ minHeight: "80vh" }}
        >
          
          {/* LEFT IMAGE SECTION */}
          <div className="col-12 col-md-6 text-center">
            <img
              src={imageURL}
              alt="Product"
              className="img-fluid"
              style={{ maxWidth: "90%" }}
            />
          </div>

          {/* RIGHT TEXT SECTION */}
          <div className="col-12 col-md-6">
            <div style={{ maxWidth: "450px" }}>
              <h1 className="mb-4">{productName}</h1>

              <p
                style={{
                  fontSize: "1.2rem",
                  lineHeight: "2rem",
                  color: "#424242",
                }}
              >
                {productDescription}
              </p>

              {/* LINKS */}
              <div className="mt-4">
                <a
                  href={tryDemo}
                  style={{
                    textDecoration: "none",
                    fontSize: "1.3rem",
                    marginRight: "50px",
                  }}
                >
                  Try demo →
                </a>

                <a
                  href={learnmore}
                  style={{
                    textDecoration: "none",
                    fontSize: "1.3rem",
                  }}
                >
                  Learn more →
                </a>
              </div>

              {/* APP BUTTONS */}
              <div className="mt-4">
                <a href={googlePlay}>
                  <img
                    src="media/images/images/googlePlayBadge.svg"
                    alt="Google Play"
                    style={{ width: "180px" }}
                  />
                </a>

                <a href={appStore} style={{ marginLeft: "20px" }}>
                  <img
                    src="media/images/images/appstoreBadge.svg"
                    alt="App Store"
                    style={{ width: "180px" }}
                  />
                </a>
              </div>
            </div>
          </div>

        </div>
      </div>
    </>
  );
}

export default LeftSection;