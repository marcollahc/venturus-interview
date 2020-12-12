function Header() {
    return (
        <header>
            <div className="header__app">
                <div className="header__app--logo"></div>
                <p className="header__app--name">Squad Management Tool</p>
            </div>
            <div className="header__user">
                <p className="header__user--name">John Doe</p>
                <div className="header__user--avatar">JD</div>
            </div>
        </header>
    );
}

export default Header;
