import styled from "styled-components";
import {Currency} from "../interfaces/Currencies.ts";

const AllCharsDiv=styled.div`
    display: flex;
    flex-flow: row wrap;    
    justify-content: space-evenly;
    background-color: black;
    width: 100%;
`;

const SingleCharDiv=styled.div<{name: string}>`
    display: flex;
    flex-direction: column;   
    justify-content: center;
    max-width: 100%;
    padding: 2%;
    margin: 1%;
    background-color: white;
    color: black; 
    border: 3px white;
    font: italic small-caps bold calc(2px + 1vw) Impact, "Times New Roman";
    text-align: center;
    transition: transform .5s ease-in-out;
    &:hover{transform:scale(2.0)};
`;

export default function Exchange(props : { data:Currency[] } ){
    return (
        <AllCharsDiv >
            {
                props.data.map((char: Currency) =>
                    <SingleCharDiv key={char.id} name ={char.name}>
                        <h1>{char.id}</h1>
                        <p>{char.min_size}</p>
                        <p>{char.name}</p>
                    </SingleCharDiv>
                )
            }
        </AllCharsDiv>
    );
}
