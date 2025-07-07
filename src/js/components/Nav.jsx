export const Nav = () => {
    return (
        <div className="row navbar navbar-expand-lg bg-dark">
            <div className="container-fluid">
                <a className="navbar-brand" href="#">Start Bootstrap</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <a className="nav-link active text-light" aria-current="page" href="#">Home</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link text-secondary-emphasis" href="#">About</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link text-secondary-emphasis" href="#">Service</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link text-secondary-emphasis" href="#">Contact</a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
};