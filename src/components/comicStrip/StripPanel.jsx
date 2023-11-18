import { useRef, useState } from "react";
import StripImage from "./StripImage";

export default function StripPanel() {
    console.log("agdf");
    const myArray = new Array(10);
    const listE = (myArray).map((e,i) => {
        console.log("here")
        return <li key={i}><StripImage idx={i} />fsaferfsd</li>
    });
    return <div>
        {
            listE
        }
    </div>;
}