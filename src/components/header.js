import { useState } from 'react';
import { Navbar, NavbarBrand } from 'reactstrap';

const Header = () => {

    return (
        <div className="theme-bg">
            <Navbar expand="md">
                <NavbarBrand href="/">
                    <h3 className="text-muted">Covid Statistics</h3>
                </NavbarBrand>
            </Navbar>
        </div>
    )
}

export default Header;