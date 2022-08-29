import "./NavBar.scss";

const NavBar = () => {
    return (
        <div className="app__navbar">
            <div className="app__title">
                <h2>
                    <span>Luxury</span> <br />
                    hotels
                </h2>
            </div>
            <div className="nav__links">
                <a className="nav__links_button" href="">
                    Rooms
                </a>
                <a className="nav__links_button" href="">
                    Payment
                </a>
            </div>
        </div>
    );
};

export default NavBar;
