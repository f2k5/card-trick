import React, { useState } from "react";
import { Redirect } from "react-router-dom";
import CardRow from "../CardRow/CardRow";
import CardImages from "../../assets/cardImages";
import CopyRight from "../CopyRight/CopyRight";
import styled from "styled-components";
import { Button, Typography } from "@mui/material";

let cards: string[] = [CardImages.card1, CardImages.card2, CardImages.card3, CardImages.card4, CardImages.card5, CardImages.card6, CardImages.card7, 
                      CardImages.card8, CardImages.card9, CardImages.card10, CardImages.card11, CardImages.card12, CardImages.card13, CardImages.card14, 
                      CardImages.card15, CardImages.card16, CardImages.card17, CardImages.card18, CardImages.card19, CardImages.card20, CardImages.card21];
let row1: string[] = [];
let row2: string[] = [];
let row3: string[] = [];

for (let i = 0; i < cards.length; i++) {
    if (i <= 6) {
        row1.push(cards[i]);
    } else if (i <= 13) {
        row2.push(cards[i]);
    } else {
        row3.push(cards[i]);
    }
}

const SecondPageUserChoosesRows: React.FC = () => {

  //First card row:
  const [c1, updateC1]   = useState<string>(row1[0]);
  const [c2, updateC2]   = useState<string>(row1[1]);
  const [c3, updateC3]   = useState<string>(row1[2]);
  const [c4, updateC4]   = useState<string>(row1[3]);
  const [c5, updateC5]   = useState<string>(row1[4]);
  const [c6, updateC6]   = useState<string>(row1[5]);
  const [c7, updateC7]   = useState<string>(row1[6]);

  //Second card row:
  const [c8, updateC8]   = useState<string>(row2[0]);
  const [c9, updateC9]   = useState<string>(row2[1]);
  const [c10, updateC10] = useState<string>(row2[2]);
  const [c11, updateC11] = useState<string>(row2[3]);
  const [c12, updateC12] = useState<string>(row2[4]);
  const [c13, updateC13] = useState<string>(row2[5]);
  const [c14, updateC14] = useState<string>(row2[6]);

  //Third card row:
  const [c15, updateC15] = useState<string>(row3[0]);
  const [c16, updateC16] = useState<string>(row3[1]);
  const [c17, updateC17] = useState<string>(row3[2]);
  const [c18, updateC18] = useState<string>(row3[3]);
  const [c19, updateC19] = useState<string>(row3[4]);
  const [c20, updateC20] = useState<string>(row3[5]);
  const [c21, updateC21] = useState<string>(row3[6]);

  const [buttonClickCount, updateButtonClickCount] = useState<number>(0);

  const handleButtonClickForRowOne = () => {
    updateButtonClickCount(buttonClickCount+1);
    cards.splice(0, cards.length);
    cards = [...row2, ...row1, ...row3];
    row1.splice(0, row1.length);
    row2.splice(0, row2.length);
    row3.splice(0, row3.length);

    for (let i = 0; i < cards.length; i++) {
        if (row1.length === row2.length && row1.length === row3.length) {
            row1.push(cards[i]);
        } else if (row2.length === row3.length) {
            row2.push(cards[i]);
        } else {
            row3.push(cards[i]);
        }
    }

    //Update cards of row 1:
    for (let i = 0; i <= 6; i++) {
        if (i === 0) {
          updateC1(row1[0]);
        } else if (i === 1) {
          updateC2(row1[1]);
        } else if (i === 2) {
          updateC3(row1[2]);
        } else if (i === 3) {
          updateC4(row1[3]);
        } else if (i === 4) {
          updateC5(row1[4]);
        } else if (i === 5) {
          updateC6(row1[5]);
        } else if (i === 6) {
          updateC7(row1[6]);
        }
    }

    //Update cards of row 2:
    for (let i = 7; i <= 13; i++) {
        if (i === 7) {
          updateC8(row2[0]);
        } else if (i === 8) {
          updateC9(row2[1]);
        } else if (i === 9) {
          updateC10(row2[2]);
        } else if (i === 10) {
          updateC11(row2[3]);
        } else if (i === 11) {
          updateC12(row2[4]);
        } else if (i === 12) {
          updateC13(row2[5]);
        } else if (i === 13) {
          updateC14(row2[6]);
        }
    }

    //update cards on row 3:
    for (let i = 14; i <= 20; i++) {
        if (i === 14) {
          updateC15(row3[0]);
        } else if (i === 15) {
          updateC16(row3[1]);
        } else if (i === 16) {
          updateC17(row3[2]);
        } else if (i === 17) {
          updateC18(row3[3]);
        } else if (i === 18) {
          updateC19(row3[4]);
        } else if (i === 19) {
          updateC20(row3[5]);
        } else if (i === 20) {
          updateC21(row3[6]);
        }
    }
}

const handleButtonClickForRowTwo = () => {
    updateButtonClickCount(buttonClickCount+1);
    cards.splice(0, cards.length);
    cards = [...row1, ...row2, ...row3];
    row1.splice(0, row1.length);
    row2.splice(0, row2.length);
    row3.splice(0, row3.length);

    for (let i = 0; i < cards.length; i++) {
        if (row1.length === row2.length && row1.length === row3.length) {
            row1.push(cards[i]);
        } else if (row2.length === row3.length) {
            row2.push(cards[i]);
        } else {
            row3.push(cards[i]);
        }
    }

    //Update cards of row 1:
    for (let i = 0; i <= 6; i++) {
        if (i === 0) {
          updateC1(row1[0]);
        } else if (i === 1) {
          updateC2(row1[1]);
        } else if (i === 2) {
          updateC3(row1[2]);
        } else if (i === 3) {
          updateC4(row1[3]);
        } else if (i === 4) {
          updateC5(row1[4]);
        } else if (i === 5) {
          updateC6(row1[5]);
        } else if (i === 6) {
          updateC7(row1[6]);
        }
    }

    //Update cards of row 2:
    for (let i = 7; i <= 13; i++) {
        if (i === 7) {
          updateC8(row2[0]);
        } else if (i === 8) {
          updateC9(row2[1]);
        } else if (i === 9) {
          updateC10(row2[2]);
        } else if (i === 10) {
          updateC11(row2[3]);
        } else if (i === 11) {
          updateC12(row2[4]);
        } else if (i === 12) {
          updateC13(row2[5]);
        } else if (i === 13) {
          updateC14(row2[6]);
        }
    }

    //update cards on row 3:
    for (let i = 14; i <= 20; i++) {
        if (i === 14) {
          updateC15(row3[0]);
        } else if (i === 15) {
          updateC16(row3[1]);
        } else if (i === 16) {
          updateC17(row3[2]);
        } else if (i === 17) {
          updateC18(row3[3]);
        } else if (i === 18) {
          updateC19(row3[4]);
        } else if (i === 19) {
          updateC20(row3[5]);
        } else if (i === 20) {
          updateC21(row3[6]);
        }
    }
}

const handleButtonClickForRowThree = () => {
    updateButtonClickCount(buttonClickCount+1);
    cards.splice(0, cards.length);
    cards = [...row1, ...row3, ...row2];
    row1.splice(0, row1.length);
    row2.splice(0, row2.length);
    row3.splice(0, row3.length);

    for (let i = 0; i < cards.length; i++) {
        if (row1.length === row2.length && row1.length === row3.length) {
            row1.push(cards[i]);
        } else if (row2.length === row3.length) {
            row2.push(cards[i]);
        } else {
            row3.push(cards[i]);
        }
    }

    //Update cards of row 1:
    for (let i = 0; i <= 6; i++) {
        if (i === 0) {
          updateC1(row1[0]);
        } else if (i === 1) {
          updateC2(row1[1]);
        } else if (i === 2) {
          updateC3(row1[2]);
        } else if (i === 3) {
          updateC4(row1[3]);
        } else if (i === 4) {
          updateC5(row1[4]);
        } else if (i === 5) {
          updateC6(row1[5]);
        } else if (i === 6) {
          updateC7(row1[6]);
        }
    }

    //Update cards of row 2:
    for (let i = 7; i <= 13; i++) {
        if (i === 7) {
          updateC8(row2[0]);
        } else if (i === 8) {
          updateC9(row2[1]);
        } else if (i === 9) {
          updateC10(row2[2]);
        } else if (i === 10) {
          updateC11(row2[3]);
        } else if (i === 11) {
          updateC12(row2[4]);
        } else if (i === 12) {
          updateC13(row2[5]);
        } else if (i === 13) {
          updateC14(row2[6]);
        }
    }

    //update cards on row 3:
    for (let i = 14; i <= 20; i++) {
        if (i === 14) {
          updateC15(row3[0]);
        } else if (i === 15) {
          updateC16(row3[1]);
        } else if (i === 16) {
          updateC17(row3[2]);
        } else if (i === 17) {
          updateC18(row3[3]);
        } else if (i === 18) {
          updateC19(row3[4]);
        } else if (i === 19) {
          updateC20(row3[5]);
        } else if (i === 20) {
          updateC21(row3[6]);
        }
    }
}

    const FullAppContainer = styled.div`
        height: 100vh;
        display: flex;
        justify-content: center;
        align-items: center;
        background-color: #181818;
    ` 
    const CopyRightAtBottom = styled.div`
        width: 100vw;
        position: absolute;
        display: flex;
        justify-content: center;
        align-items: center;
        bottom: 0;
    `

    return (
        <FullAppContainer>
            <div>
                {buttonClickCount === 0 ? <Typography style={{color:"#e3f2fd"}} variant = "h5">Now choose the row where your card is.</Typography> : null}

                {buttonClickCount === 1 ? <Typography style={{color:"#e3f2fd"}} variant = "h5">Do it again!</Typography> : null}

                {buttonClickCount === 2 ? <Typography style={{color:"#e3f2fd"}} variant = "h5">Choose the row again and see the magic!</Typography> : null}

                <CardRow cardOne = {c1}  cardTwo = {c2}  cardThree = {c3}  cardFour = {c4}  cardFive = {c5}  cardSix = {c6}  cardSeven = {c7}/>
                <Button variant = "contained" onClick = {handleButtonClickForRowOne}> Click here if your card is in the row above.</Button>

                <CardRow cardOne = {c8}  cardTwo = {c9}  cardThree = {c10} cardFour = {c11} cardFive = {c12} cardSix = {c13} cardSeven = {c14}/>
                <Button variant = "contained" onClick = {handleButtonClickForRowTwo}> Click here if your card is in the row above.</Button>

                <CardRow cardOne = {c15} cardTwo = {c16} cardThree = {c17} cardFour = {c18} cardFive = {c19} cardSix = {c20} cardSeven = {c21}/>
                <Button variant = "contained" onClick = {handleButtonClickForRowThree}> Click here if your card is in the row above.</Button>
                
                <CopyRightAtBottom><CopyRight /></CopyRightAtBottom>
                {buttonClickCount === 3 ? 
                <Redirect to = {{
                    pathname: "/result", 
                    state: {cardChosen: row2[3]}
                }} /> 
                :
                null}
            </div>
        </FullAppContainer>
    );
}

export default SecondPageUserChoosesRows;