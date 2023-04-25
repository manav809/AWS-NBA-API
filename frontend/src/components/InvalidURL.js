import { Link } from 'react-router-dom';

export default function InvalidURL() {
    return (
        <div>
            <h1>Error 404</h1>
            <p>
                <Link to="/"> Go to home page</Link>
            </p>
        </div>
    );
}