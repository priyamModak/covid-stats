import axios from "axios";
import { useEffect, useState } from "react";

const Stats = () => {

    const [selectedCountry, setSelectedCountry] = useState("india");

    const options = {
        method: 'GET',
        url: `https://disease.sh/v3/covid-19/countries/${selectedCountry}?strict=true`,
    };

    var getStatsByCountry = () => {
        axios.request(options).then(function (response) {
            console.log(response.data);
        }).catch(function (error) {
            console.error(error);
        });
    }

    useEffect(()=>{
        getStatsByCountry();
    }, [])

    return (
        <div style={{minHeight: "86vh"}}>
            Statistics part
        </div>
        
    )
}

export default Stats;