import "./AppHeader.scss";

const AppHeader = () => {
    return (
        <div className="AppHeader">
            <header className="app__header__inner">
                <div className="header__content_container">
                    <div className="app__info">
                        <h1 className="app__title__normal">
                            Welcome to <br /> <span className="app__title__bold">luxury</span>{" "}
                            <br /> <span className="app__title__bold_small">hotels</span>
                        </h1>
                        <p className="app__header-text">
                            Book your stay and enjoy Luxury <br /> redefined at the most affordable
                            rates.
                        </p>
                    </div>
                    <div className="scroll">
                        <p>Scroll</p>
                        <div className="circle">
                            <p></p>
                        </div>
                    </div>
                </div>
            </header>
        </div>
    );
};

export default AppHeader;
