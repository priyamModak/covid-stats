import { useEffect, useState } from 'react';
import { DropdownItem, DropdownMenu, DropdownToggle, Navbar, NavbarBrand, UncontrolledDropdown } from 'reactstrap';
import Axios from "axios";

const Header = () => {

    const [allCountries, setAllCountries] = useState([]);
    
    var getAllCountries = async () => {

        const countryApi = await Axios.get("https://restcountries.eu/rest/v2/all");
        let list = countryApi.data;
        console.log(list);
        for (const eachItem of list) {
            setAllCountries([...allCountries, eachItem]);
        }
        console.log(allCountries);
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
                <UncontrolledDropdown style={{right: "2vw", position: "absolute"}}>
                    <DropdownToggle caret>
                        Country
                    </DropdownToggle>
                    <DropdownMenu>
                        {
                            allCountries.map(item => {
                                <DropdownItem key={item.area}>{item.name}</DropdownItem>
                            })
                        }
                    </DropdownMenu>
                </UncontrolledDropdown>
            </Navbar>
        </div>
    )
}

export default Header;