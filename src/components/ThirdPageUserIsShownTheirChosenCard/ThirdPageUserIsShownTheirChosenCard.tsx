import React, { useState } from "react";
import CardImages from "../../assets/cardImages";
import CopyRight from "../CopyRight/CopyRight";
import { useLocation, Redirect } from "react-router-dom";
import styled from "styled-components";
import { Button, Typography } from "@mui/material";

interface UserCard {
    userGuessedCard: string
}

const ThirdPageUserIsShownTheirChosenCard: React.FC<UserCard> = 
    ({userGuessedCard}) => {

        const FullAppContainer = styled.div`
            height: 100vh;
            display: flex;
            justify-content: center;
            align-items: center;
            background-color: #181818;
        `

        const CardImage = styled.img`
            width: 50%;
            margin: 3rem 0 3rem 0;
        `
        const CardImageButtonAndCopyRightContainer = styled.div`
            display: flex;
            flex-direction: column;
            align-items: center;
        `

        const CopyRightAtBottom = styled.div`
            width: 100vw;
            position: absolute;
            display: flex;
            justify-content: center;
            align-items: center;
            bottom: 0;
        `

        const location = useLocation<{cardChosen : "value"}>();
        const cardChosenByUserInSecondPage = location.state.cardChosen;
        const [takeHomeButton, updateTakeHomeButton] = useState<boolean>(false);
        const [time, updateTime] = useState<number>(0);

        setTimeout(() => {
            updateTime(1);
        }, 2000);

        const takeUserBackToPlaying = () => {
            updateTakeHomeButton(true);
        }

        if (cardChosenByUserInSecondPage.includes("/one-")) {
            userGuessedCard = CardImages.card1; //10 spades
        } else if (cardChosenByUserInSecondPage.includes("/two-")) {
            userGuessedCard = CardImages.card2; //6 diamonds
        } else if (cardChosenByUserInSecondPage.includes("/three-")) {
            userGuessedCard = CardImages.card3; //4 clubs
        } else if (cardChosenByUserInSecondPage.includes("/four-")) {
            userGuessedCard = CardImages.card4; //3 spades
        } else if (cardChosenByUserInSecondPage.includes("/five-")) {
            userGuessedCard = CardImages.card5; //2 hearts
        } else if (cardChosenByUserInSecondPage.includes("/six-")) {
            userGuessedCard = CardImages.card6; //King spades
        } else if (cardChosenByUserInSecondPage.includes("/seven-")) {
            userGuessedCard = CardImages.card7; //5 spades
        } else if (cardChosenByUserInSecondPage.includes("/eight-")) {
            userGuessedCard = CardImages.card8; //6 clubs
        } else if (cardChosenByUserInSecondPage.includes("/nine-")) {
            userGuessedCard = CardImages.card9; //5 hearts
        } else if (cardChosenByUserInSecondPage.includes("/ten-")) {
            userGuessedCard = CardImages.card10; //10 hearts
        } else if (cardChosenByUserInSecondPage.includes("/eleven-")) {
            userGuessedCard = CardImages.card11; //Ace of hearts
        } else if (cardChosenByUserInSecondPage.includes("/twelve-")) {
            userGuessedCard = CardImages.card12; //Ace of spades
        } else if (cardChosenByUserInSecondPage.includes("/thirteen-")) {
            userGuessedCard = CardImages.card13; //4 hearts
        } else if (cardChosenByUserInSecondPage.includes("/fourteen-")) {
            userGuessedCard = CardImages.card14; //7 diamonds
        } else if (cardChosenByUserInSecondPage.includes("/fifteen-")) {
            userGuessedCard = CardImages.card15; //7 spades
        } else if (cardChosenByUserInSecondPage.includes("/sixteen-")) {
            userGuessedCard = CardImages.card16; //Jack of spades
        } else if (cardChosenByUserInSecondPage.includes("/seventeen-")) {
            userGuessedCard = CardImages.card17; //Jack of hearts
        } else if (cardChosenByUserInSecondPage.includes("/eighteen-")) {
            userGuessedCard = CardImages.card18; //Queen of hearts
        } else if (cardChosenByUserInSecondPage.includes("/nineteen-")) {
            userGuessedCard = CardImages.card19; //nine of spades
        } else if (cardChosenByUserInSecondPage.includes("/twenty-")) {
            userGuessedCard = CardImages.card20; //5 diamondas
        } else if (cardChosenByUserInSecondPage.includes("/twentyOne-")) {
            userGuessedCard = CardImages.card21; //2 clubs
        }

        return (
            <FullAppContainer>
                <div>                
                    {time === 1 ?
                        <Typography style={{color:"#e3f2fd"}} variant = "h5">There you go!</Typography> :
                        <Typography style={{color:"#e3f2fd"}} variant = "h5">And the card you were thinking of is the.. wait for it..</Typography> 
                    }

                    <CardImageButtonAndCopyRightContainer>
                        {time === 1 ?
                            <>
                                <CardImage src = {userGuessedCard} alt = "Sorry the card is unavailable"/> 
                                <Button variant = "contained" onClick = {takeUserBackToPlaying}>Play again!</Button> 
                            </>
                                : 
                            <>
                                <CardImage src = {CardImages.backOfCard} alt = "Sorry the card is unavailable"/> 
                                <Button style = {{visibility: "hidden"}} variant = "contained" onClick = {takeUserBackToPlaying}>Play again!</Button>
                            </>
                        }

                        {takeHomeButton ? 
                        <Redirect to = {{
                            pathname: "/", 
                        }} /> : null}
                        <CopyRightAtBottom><CopyRight /></CopyRightAtBottom>
                    </CardImageButtonAndCopyRightContainer>
                </div>
            </FullAppContainer>
        );
}

export default ThirdPageUserIsShownTheirChosenCard;