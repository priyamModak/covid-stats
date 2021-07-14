import { useEffect, useState } from 'react';
import { DropdownItem, DropdownMenu, DropdownToggle, Navbar, NavbarBrand, UncontrolledDropdown } from 'reactstrap';
import Axios from "axios";

const Header = () => {

    const [allCountries, setAllCountries] = useState([]);

    var getAllCountries = async () => {

        const countryApi = await Axios.get("https://restcountries.eu/rest/v2/all");
        let list = countryApi.data;
        setAllCountries([...list]);
    }

    useEffect(() => {
        getAllCountries();
    }, [])

    return (
        <div className="theme-bg">
            <Navbar expand="md">
                <NavbarBrand href="/" style={{ marginLeft: "1vw" }}>
                    <h3 className="text-muted">Covid Statistics</h3>
                </NavbarBrand>
                <UncontrolledDropdown style={{ right: "2vw", position: "absolute" }}>
                    <DropdownToggle caret>
                        Country
                    </DropdownToggle>
                    <DropdownMenu>
                        {
                            allCountries.map(item => [
                                <DropdownItem>{item.name}</DropdownItem>
                            ])
                        }
                    </DropdownMenu>
                </UncontrolledDropdown>
            </Navbar>
        </div>
    )
}

export default Header;