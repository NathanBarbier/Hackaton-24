import React from "react";
import MedalByCoutries from "../components/MedalByCoutries";
import MedalByCoutriesByYear from "../components/MedalByCoutriesByYear";
import HostPerformance from "../components/HostPerformance";
import MedalByDisciplineByCountry from "../components/MedalByDisciplineByCountry";
import AverageAgeByDiscipline from "../components/AverageAgeByDiscipline";
import GenderPerformanceByCountry from "../components/GenderPerformanceByCountry";
import Top10Athletes from "../components/Top10Athletes";

const Data = () => {
    return (
        <>
            <div>
                <MedalByCoutries />
            </div>
            <div>
                <MedalByCoutriesByYear />
            </div>
            <div>
                <HostPerformance />
            </div>
            <div>
                <MedalByDisciplineByCountry />
            </div>
            <div>
                <AverageAgeByDiscipline />
            </div>
            <div>
                <GenderPerformanceByCountry />
            </div>
            <div>
                <Top10Athletes />
            </div>
        </>
        
    );
}

export default Data;
