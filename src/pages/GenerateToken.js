import React, { useState, useEffect } from "react";
import { generateTokenData } from "../services/homePage";

const GenerateToken = () => {
    const [data, setData] = useState(null);

    useEffect(()=>{
        generateTokenData().then((res)=>{
            setData(res.data);
        })
        .catch((err)=>{
            console.log(err);
        })
    },[])

    return (data? <ul>{data.map(item=><li>{item}</li>)}</ul>:<h1>Loading...</h1>);
}

export default GenerateToken;