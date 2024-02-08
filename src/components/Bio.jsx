import "./Bio.css";

const Bio = () => {
    return(
        <div className="bio-container">
            <div className="bio-1">
                <p>My name is <strong>Santeri Uusitalo</strong>, a third year software engineering student and I am curiously seeking 
                    a trainee position to apply and expand my programming skills. 
                <br/>Eager to learn through hands-on experiences,
                <br/>I am ambitious about developing my expertise in cutting-edge technologies.</p>
            </div>
            <div className="bio-2">
                <p>Currently most interesting to me are front end developing, UI's, UX and AI, but I am open to other career paths too! 
                <br/>You can find my resume below next to LinkedIn and GitHub.</p>
            </div>
        </div>
    );
};

export default Bio;