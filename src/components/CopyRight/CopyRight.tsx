import React from "react";
import { Typography } from "@mui/material";

const CopyRight = () => {
    var year = new Date().getFullYear();
    return (
        <Typography style={{color:"#e3f2fd"}} variant = "subtitle2">made by Fardin Khan, ©️ {year}</Typography>
    )
}

export default CopyRight;