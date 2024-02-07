import { Link } from 'react-router-dom';
import "./ErrorExiter.css"

const ErrorExiter = () => {
    return(
        <div className="error-container">
            <h2 className="error-text">Seems like you are lost.</h2>
            <button className="error-button">
                <Link to={`/`}>
                    Return Home
                </Link>
            </button>
        </div>
    );  
};

export default ErrorExiter;