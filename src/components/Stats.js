import Axios from "axios";
import { useEffect, useState } from "react";
import { Card, CardText, CardTitle } from "reactstrap";

const Stats = ({selectedCountry}) => {

    const [details, setDetails] = useState({});
    selectedCountry = "india";

    var getStatsByCountry = async () => {
        const api = await Axios.get(`https://disease.sh/v3/covid-19/countries/${selectedCountry}?strict=true`);
        const details = api.data;
        setDetails(details);
    }

    useEffect(() => {
        getStatsByCountry();
    }, [])

    return (
        <div style={{ minHeight: "78vh" }}>
            <div className="row cards-section">
                <div className="col-md-3 cards">
                    <Card body inverse style={{ backgroundColor: "rgb(255,134,159)" }}>
                        <CardTitle tag="h5">Confirmed</CardTitle>
                        <CardText>{details.cases}</CardText>
                    </Card>
                </div>
                <div className="col-md-3 cards">
                    <Card body inverse style={{ backgroundColor: "rgb(135 165 255)" }}>
                        <CardTitle tag="h5">Active</CardTitle>
                        <CardText>{details.active}</CardText>
                    </Card>
                </div>
                <div className="col-md-3 cards">
                    <Card body inverse style={{ backgroundColor: "rgb(78 255 118)" }}>
                        <CardTitle tag="h5">Recovered</CardTitle>
                        <CardText>{details.recovered}</CardText>
                    </Card>
                </div>
                <div className="col-md-3 cards">
                    <Card body inverse style={{ backgroundColor: "rgb(175 175 175)" }}>
                        <CardTitle tag="h5">Deceased</CardTitle>
                        <CardText>{details.deaths}</CardText>
                    </Card>
                </div>
            </div>
        </div>
    )
}

export default Stats;