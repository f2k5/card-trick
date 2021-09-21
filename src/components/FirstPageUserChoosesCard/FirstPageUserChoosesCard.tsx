import React, { useState } from "react";
import { Redirect } from "react-router-dom";
import CardRow from "../CardRow/CardRow";
import CardImages from "../../assets/cardImages";
import styled from "styled-components";
import { Button, Typography } from "@mui/material";
import CopyRight from "../CopyRight/CopyRight";

const FirstPageUserChoosesCard : React.FC = () => {

    const FullAppContainer = styled.div`
        height: 100vh;
        display: flex;
        justify-content: center;
        align-items: center;
        background-color: #181818;
    `
    const Header = styled.div`
        margin: 0 0 1rem 0;
    `

    const CopyRightAtBottom = styled.div`
        width: 100vw;
        position: absolute;
        display: flex;
        justify-content: center;
        align-items: center;
        bottom: 0;
    `

    const [buttonToTakeUserToSecondPage, updateButtonToTakeUserToSecondPage] = useState<boolean>(false);

    const handleClickTotakeUserToPageTwo = () => {
        updateButtonToTakeUserToSecondPage(true);
    }

    return (
        <FullAppContainer>
            <div>
                <Header>
                    <Typography style={{color:"#e3f2fd"}} variant = "h4">Here are a few cards, think of one and keep it in your mind.</Typography>
                </Header>
                <CardRow cardOne = {CardImages.card1}  cardTwo = {CardImages.card2}  cardThree = {CardImages.card3}  cardFour = {CardImages.card4}  cardFive = {CardImages.card5}  cardSix = {CardImages.card6}  cardSeven = {CardImages.card7}/>
                <CardRow cardOne = {CardImages.card8}  cardTwo = {CardImages.card9}  cardThree = {CardImages.card10} cardFour = {CardImages.card11} cardFive = {CardImages.card12} cardSix = {CardImages.card13} cardSeven = {CardImages.card14}/>
                <CardRow cardOne = {CardImages.card15} cardTwo = {CardImages.card16} cardThree = {CardImages.card17} cardFour = {CardImages.card18} cardFive = {CardImages.card19} cardSix = {CardImages.card20} cardSeven = {CardImages.card21}/>
                <Button variant = "contained" onClick = {handleClickTotakeUserToPageTwo}> Click here when you've thought of a card.</Button>
                {buttonToTakeUserToSecondPage ? 
                <Redirect to = {{
                    pathname: "/choose-row", 
                }} /> : null}
                <CopyRightAtBottom><CopyRight /></CopyRightAtBottom>
            </div>
        </FullAppContainer>
    )
}

export default FirstPageUserChoosesCard;