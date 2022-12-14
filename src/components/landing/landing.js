import "./_landing.scss";
import { Link } from "react-router-dom";
import cupcake from "../../assets/images/cupcake.png";
import brigadeiro from "../../assets/images/brigadeiro.png";
import donut from "../../assets/images/donut-3d.png";
const Landing = () => {
  return (
    <section className="landing">
      <div className="btn-container">
        <Link
         to="/first" role="button" tabIndex={"-1"} className="linkbtn">
          <button className="firstBtn comic">
            Level 1
            <img width="50px" className="btnIcon" src={cupcake} alt="cupcake icon" />
          </button>
        </Link>
        <Link role="button"
        tabIndex={"-1"}
         className="linkbtn" to="/second">
          <button className="secondBtn comic">
            Level 2
            <img  width="50px"className="btnIcon" src={brigadeiro} alt="brigadeiro icon" />
          </button>
        </Link>

        <Link role="button"
        tabIndex={"-1"}
         to="/third" className="linkbtn">
          <button className="thirdBtn comic">
            {" "}
            Level 3
            <img  width="50px" className="btnIcon" src={donut} alt="donut icon" />
          </button>
        </Link>
      </div>
    </section>
  );
};

export default Landing;
