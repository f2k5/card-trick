import React from "react";
import styled from "styled-components";

const CardRowContainer = styled.div`
    display: flex;
    justify-content: space-evenly;
    margin: 0.75rem 0 0.75rem 0;
`
const CardImage = styled.img`
    width: 6.75%;
`

interface Row {
    cardOne: string,
    cardTwo: string,
    cardThree: string,
    cardFour: string,
    cardFive: string,
    cardSix: string,
    cardSeven: string,
}

const CardRow: React.FC<Row> = ({cardOne, cardTwo, cardThree, cardFour, cardFive, cardSix, cardSeven}) => {
    return (
        <CardRowContainer>
            <CardImage src = {cardOne} alt = "Unable to load card"/>
            <CardImage src = {cardTwo} alt = "Unable to load card"/>
            <CardImage src = {cardThree} alt = "Unable to load card"/>
            <CardImage src = {cardFour} alt = "Unable to load card"/>
            <CardImage src = {cardFive} alt = "Unable to load card"/>
            <CardImage src = {cardSix} alt = "Unable to load card"/>
            <CardImage src = {cardSeven} alt = "Unable to load card"/>
        </CardRowContainer>
    );
}

export default CardRow;