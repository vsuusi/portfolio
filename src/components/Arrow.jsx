import arrow from "../resources/other/arrow2.svg";
import "./Arrow.css";

const Arrow = ({ nextComponent, flip }) => {

    const handleScroll = () => {
        const component = document.getElementById(`${nextComponent}`);
        component?.scrollIntoView({
            behavior: "smooth",
            block: "center"
        });
    };

    return(
        <div className={`welcome-arrow ${flip ? 'flip' : ''}`}>
            <img className="arrow" src={arrow} alt="Arrow" onClick={handleScroll} />
        </div>
    );
};

export default Arrow;