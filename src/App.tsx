import Exchange from "./components/Currency.tsx";
import styled from "styled-components";
import {useEffect, useState} from "react";
import {Currency} from "./interfaces/Currencies.ts";

const ParentDiv=styled.div`
    width: 100%;
    margin: auto;
    border: 5px black solid;
`;

export default function App(){

    // useState Hook to store Data.
    const [data, setData] = useState<Currency[]>([]);

    // useEffect Hook for error handling and re-rendering.
    useEffect(() => {
        async function fetchData(): Promise<void> {
            const rawData = await fetch("https://api.coinbase.com/v2/currencies");
            const {data} : {data:Currency[]} = await rawData.json();
            setData(data);
        }
        fetchData()
            .then(() => console.log("Data fetched successfully"))
            .catch((e: Error) => console.log("There was the error: " + e));
    }, [data.length]);

    return(
        <ParentDiv>
            <Exchange data={data}/>
        </ParentDiv>
    )
}
