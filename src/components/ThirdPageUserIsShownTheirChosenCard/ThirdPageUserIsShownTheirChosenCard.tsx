import React, { useState } from "react";
import CardImages from "../../assets/cardImages";
import CopyRight from "../CopyRight/CopyRight";
import { useLocation, Redirect } from "react-router-dom";
import styled from "styled-components";
import { Button, Typography } from "@mui/material";

interface UserCard {
    userGuessedCard: string
}

const RevealUserTheirCard: React.FC<UserCard> = 
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

        const takeUserBackToPlaying = () => {
            updateTakeHomeButton(true);
        }

        if (cardChosenByUserInSecondPage.includes("/one-")) {
            userGuessedCard = CardImages.card1; //10 spades
            console.log(`Third page: ${userGuessedCard}`)
        } else if (cardChosenByUserInSecondPage.includes("/two-")) {
            userGuessedCard = CardImages.card2; //6 diamonds
            console.log(`Third page: ${userGuessedCard}`)
        } else if (cardChosenByUserInSecondPage.includes("/three-")) {
            userGuessedCard = CardImages.card3; //4 clubs
            console.log(`Third page: ${userGuessedCard}`)
        } else if (cardChosenByUserInSecondPage.includes("/four-")) {
            userGuessedCard = CardImages.card4; //3 spades
            console.log(`Third page: ${userGuessedCard}`)
        } else if (cardChosenByUserInSecondPage.includes("/five-")) {
            userGuessedCard = CardImages.card5; //2 hearts
            console.log(`Third page: ${userGuessedCard}`)
        } else if (cardChosenByUserInSecondPage.includes("/six-")) {
            userGuessedCard = CardImages.card6; //King spades
            console.log(`Third page: ${userGuessedCard}`)
        } else if (cardChosenByUserInSecondPage.includes("/seven-")) {
            userGuessedCard = CardImages.card7; //5 spades
            console.log(`Third page: ${userGuessedCard}`)
        } else if (cardChosenByUserInSecondPage.includes("/eight-")) {
            userGuessedCard = CardImages.card8; //6 clubs
            console.log(`Third page: ${userGuessedCard}`)
        } else if (cardChosenByUserInSecondPage.includes("/nine-")) {
            userGuessedCard = CardImages.card9; //5 hearts
            console.log(`Third page: ${userGuessedCard}`)
        } else if (cardChosenByUserInSecondPage.includes("/ten-")) {
            userGuessedCard = CardImages.card10; //10 hearts
            console.log(`Third page: ${userGuessedCard}`)
        } else if (cardChosenByUserInSecondPage.includes("/eleven-")) {
            userGuessedCard = CardImages.card11; //Ace of hearts
            console.log(`Third page: ${userGuessedCard}`)
        } else if (cardChosenByUserInSecondPage.includes("/twelve-")) {
            userGuessedCard = CardImages.card12; //Ace of spades
            console.log(`Third page: ${userGuessedCard}`)
        } else if (cardChosenByUserInSecondPage.includes("/thirteen-")) {
            userGuessedCard = CardImages.card13; //4 hearts
            console.log(`Third page: ${userGuessedCard}`)
        } else if (cardChosenByUserInSecondPage.includes("/fourteen-")) {
            userGuessedCard = CardImages.card14; //7 diamonds
            console.log(`Third page: ${userGuessedCard}`)
        } else if (cardChosenByUserInSecondPage.includes("/fifteen-")) {
            userGuessedCard = CardImages.card15; //7 spades
            console.log(`Third page: ${userGuessedCard}`)
        } else if (cardChosenByUserInSecondPage.includes("/sixteen-")) {
            userGuessedCard = CardImages.card16; //Jack of spades
            console.log(`Third page: ${userGuessedCard}`)
        } else if (cardChosenByUserInSecondPage.includes("/seventeen-")) {
            userGuessedCard = CardImages.card17; //Jack of hearts
            console.log(`Third page: ${userGuessedCard}`)
        } else if (cardChosenByUserInSecondPage.includes("/eighteen-")) {
            userGuessedCard = CardImages.card18; //Queen of hearts
            console.log(`Third page: ${userGuessedCard}`)
        } else if (cardChosenByUserInSecondPage.includes("/nineteen-")) {
            userGuessedCard = CardImages.card19; //nine of spades
            console.log(`Third page: ${userGuessedCard}`)
        } else if (cardChosenByUserInSecondPage.includes("/twenty-")) {
            userGuessedCard = CardImages.card20; //5 diamondas
            console.log(`Third page: ${userGuessedCard}`)
        } else if (cardChosenByUserInSecondPage.includes("/twentyOne-")) {
            userGuessedCard = CardImages.card21; //2 clubs
            console.log(`Third page: ${userGuessedCard}`)
        }

        return (
            <FullAppContainer>
                <div>                
                    <Typography style={{color:"#e3f2fd"}} variant = "h4">And your chosen card is the..</Typography>
                    <CardImageButtonAndCopyRightContainer>
                        <CardImage src = {userGuessedCard} alt = "Sorry the card is unavailable"/>
                        <Button variant = "contained" onClick = {takeUserBackToPlaying}>Play again!</Button>
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

export default RevealUserTheirCard;