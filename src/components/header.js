import { useEffect, useState } from 'react';
import { Dropdown, DropdownItem, DropdownMenu, DropdownToggle, Navbar, NavbarBrand, UncontrolledDropdown } from 'reactstrap';
import Axios from "axios";

const Header = () => {

    const [countries, setCountries] = useState([]);

    var getAllCountries = async () => {

        const countryApi = await Axios.get("https://restcountries.eu/rest/v2/all");
        const list = countryApi.data;
        console.log(list);
        setCountries(...countries, ...list);
        console.log(countries);
    }

    useEffect(() => {
        getAllCountries();
    }, [])

    return (
        <div className="theme-bg">
            <Navbar expand="md">
                <NavbarBrand href="/">
                    <h3 className="text-muted">Covid Statistics</h3>
                </NavbarBrand>
                <UncontrolledDropdown>
                    <DropdownToggle caret>
                        Country
                    </DropdownToggle>
                    {/* <DropdownMenu>
                        {
                            countries.map(item => {
                                <DropdownItem key={item.area}>{item.name}</DropdownItem>
                            })
                        }
                    </DropdownMenu> */}
                </UncontrolledDropdown>
            </Navbar>
        </div>
    )
}

export default Header;