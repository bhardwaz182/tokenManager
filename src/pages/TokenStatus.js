import React, { useState, useEffect } from "react";
import { tokenStatus } from "../services/homePage";

const TokenStatus = () => {
    const [data, setData] = useState(null);

    useEffect(()=>{
        tokenStatus().then((res)=>{
            setData(res.data);
        })
        .catch((err)=>{
            console.log(err);
        })
    },[])

    return (data? <ul>{data.map(item=><li>{item}</li>)}</ul>:<h1>Loading...</h1>);
}

export default TokenStatus;