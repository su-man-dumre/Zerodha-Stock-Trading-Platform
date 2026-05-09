import React from "react";
function Hero() {
  return (
    <div className="container">
      <div className="row p-5 mt-5 mb-5">
        <h1 className="fs-2 text-center">
          We pioneered the discount broaking model in india.
          <br /> Now, we are breaking ground with our technology.
        </h1>
      </div>
      <div className="row p-5 mt-5 border-top text-muted fs-6" style={{lineHeight:"1.8"}}>
        <div className="col-6 p-5">
          <p>
            We kick-started operations on the 15th of august, 2010
            <br />
            with the goal of breaking all barriers that traders and <br />
            investors face in india in terms of cost, support, and <br />{" "}
            technology. We named the company Zerodha, a <br />
            combination of Zero and "Rodha", the Sanskrit word for <br />{" "}
            barrier.
          </p>
          <p>
            Today, Our disruptive pricing models and in-house <br />
            technology have made us the biggest stock broker in
            <br />
            india.
          </p>
          <p>
            Over 1+ Core clients place millions of orders every day
            <br />
            though our powerful ecosystem of investment
            <br />
            platforms, contributting over 15% of all indian retail
            <br />
            trading volumes.
          </p>
        </div>
        <div className="col-6 p-5">
          <p>
            In addition, we run a number of popular open online <br />
            educational and community initiatives to empower retail
            <br />
            traders and investors.
          </p>
          <p>
            <a href="" style={{textDecoration:"none"}}>Rainmatter</a>, our fintech fund and incubator, has
            invested
            <br />
            in several fintech startups with the goal of growing the
            <br />
            Indian capital markets.
          </p>
          <p>
            And yet, we are always up to something new everyday <br />
            Catch up on teh latest updates on our blog or see what
            <br />
            the media is saying about us.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Hero;
