import React from "react";

function RightSection({
  imageURL,
  productName,
  productDescription,
  
  learnmore,

}) {
  return (
    <>
      <div className="container">
        <div
          className="row align-items-center"
          style={{ minHeight: "80vh" }}
        >
          
          {/* TEXT SECTION */}
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
                  href={learnmore}
                  style={{
                    textDecoration: "none",
                    fontSize: "1.3rem",
                  }}
                >
                  Learn more →
                </a>
              </div>

            
            </div>
          </div>

          {/* IMAGE SECTION */}
          <div className="col-12 col-md-6 text-center">
            <img
              src={imageURL}
              alt="Product"
              className="img-fluid"
              style={{ maxWidth: "90%" }}
            />
          </div>

        </div>
      </div>
    </>
  );
}

export default RightSection;