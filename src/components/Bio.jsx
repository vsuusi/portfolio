import { useInView } from "react-intersection-observer";
import "./Bio.css";

const Bio = () => {

    const { ref: bio1, inView: bio1IsVisible} = useInView();
    const { ref: bio2, inView: bio2IsVisible} = useInView();

    return(
        <div className="bio-container">
                <div ref={bio1} className={`bio-1 ${bio1IsVisible ? "animate-bio" : ""}`}>
                    <p>My name is <strong>Santeri Uusitalo</strong>, a third year software engineering student and I am curiously seeking 
                        a trainee position to apply and expand my programming skills. 
                    <br/>Eager to learn through hands-on experiences, I am ambitious about developing my expertise in cutting-edge technologies.</p>
                </div>
                <div ref={bio2} className={`bio-2 ${bio2IsVisible ? "animate-bio" : ""}`}>
                <p>Currently most interesting to me are front end developing, UI's, UX and AI, but almost anything in this field gets me excited to learn more! 
                <br/>You can find my resume below next to LinkedIn and GitHub.</p>
            </div>
        </div>
    );
};

export default Bio;