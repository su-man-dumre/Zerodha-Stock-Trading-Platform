import react from "react";
function Hero() {
  return (
    <>
      <section className="container-fluid" id="supportHero">
        <div className="p-3 " id="supportWrapper">
          <h4>Support Portal</h4>
          <a href="">Track Tickets</a>
        </div>
        <div className="row p-3 m-5">
          <div className="col-6 p-3">
            <h2 className="fs-3">
              Search for an answer or browse help topics to create a ticket
            </h2>
            <input placeholder="Eg: how do i activate F&O, why is my order getting rejected."></input><br/>
            <a href="" >Track account Opening</a>
            <a href="">Track segment activation</a><br/>
            <a href="">Intraday marginskite user manual</a>
          </div>
          <div className="col-6 p-3">
            <h2>Featured</h2>
            <ol>
              <li>
 <a href="" >Current Takeovers and Delisting-January-2027</a>
  </li>
  <li> <a href="">Latest Intraday leverages -MIS & CO</a>
             </li>
            </ol>
            
          </div>
        </div>
      </section>
    </>
  );
}
export default Hero;
