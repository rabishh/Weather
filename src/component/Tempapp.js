import React,{useEffect, useState} from "react";
import "./css/Style.css";
const Tempapp=()=>{
    const [city ,setCity]=useState(null);
    const [search ,setSearch]=useState("pune");
    useEffect(()=>{
        const fetchApi=async()=>{
            const url =`https://api.openweathermap.org/data/2.5/weather?q=${search}&units=metric&appid=d26991ba1b705c2c6a94686006dc053e`
            const response=await fetch(url);
            const resJson= await response.json();
             console.log(resJson)
             setCity(resJson.main);
        }
        fetchApi();
    },[search])
    return(
        <>
            <div className="box">
                <div className="input">
                    <input type="search" className="inputFeild" onChange={(event)=>{
                        setSearch(event.target.value)
                    }}/>
                    {!city?(<p>no data found</p>):(
                        <div>
                        <div className="info">
                    <h2 className="location">
                    <i className="fas fa-street-view"></i>{search}
                    </h2>
                    <h1 className="temp">
                        {city.temp}
                    </h1>
                    <h3 className="tempmin_max">Min:{city.temp_min} Cel | Max: {city.temp_max} Cel</h3>
                    
            </div>
                    <div className="Wave-one"></div>
                    <div className="Wave-two"></div>
                    <div className="Wave-three"></div>
                </div>
                    )}
                    </div>
                    
            </div>
            
        </>
    )
}
export default Tempapp;