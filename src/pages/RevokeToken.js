import React, { useState, useEffect } from "react";
import { revokeToken } from "../services/homePage";

const RevokeToken = () => {
    const [data, setData] = useState(null);

    useEffect(()=>{
        revokeToken().then((res)=>{
            setData(res.data);
        })
        .catch((err)=>{
            console.log(err);
        })
    },[])

    return (data? <ul>{data.map(item=><li>{item}</li>)}</ul>:<h1>Loading...</h1>);
}

export default RevokeToken;