import { useRef, useState } from "react";
import StripImage from "./StripImage";

export default function StripPanel() {
    let placingArray = [
        [{ height: "h-1/4", width: "40%" }, { height: "h-1/4", width: "15%" }, { height: "h-1/4", width: "15%" }],
        [{ height: "h-1/4", width: "30%" }, { height: "h-1/4", width: "40%" }],
        [{ height: "h-1/4", width: "40%" }, { height: "h-1/4", width: "40%" }],
        [{ height: "h-1/4", width: "30%" }, { height: "h-1/4", width: "20%" }, { height: "h-1/4", width: "30%" }],
    ];

    let cnt = 0;



    return <div class="mx-auto mt-4 strip-panel">
        {/* {stripImages} */}
        {placingArray.map((row, index) => {
            return <div key={index} class="w-full mx-auto">
                {row.map((item, idx) => {
                    return <StripImage key={idx} idx={cnt++} height={item.height} width={item.width} />;
                })}
            </div>;
        })}
    </div>;
}