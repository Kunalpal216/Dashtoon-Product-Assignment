import { useRef, useState } from "react";
import StripImage from "./StripImage";

export default function StripPanel() {
    let placingArray = [
        [{ height: "h-1/4", width: "w-1/2" }, { height: "h-1/4", width: "w-1/4" }, { height: "h-1/4", width: "w-1/4" }],
        [{ height: "h-1/4", width: "w-2/6" }, { height: "h-1/4", width: "w-2/3" }],
        [{ height: "h-1/4", width: "w-1/2" }, { height: "h-1/4", width: "w-1/2" }],
        [{ height: "h-1/4", width: "w-2/6" }, { height: "h-1/4", width: "w-2/6" }, { height: "h-1/4", width: "w-2/6" }],
    ];

    let cnt=0;

    // const stripImages = Array.from({ length: 10 }, (_, i) => (
    //     <StripImage key={i} idx={i} />
    // ));
    return <div class="w-4/6 m-auto mt-4 strip-panel">
        {/* {stripImages} */}
        {placingArray.map((row, index) => {
            return <div key={index} class="inline-block w-full">
                {row.map((item, idx) => {
                    return <StripImage key={idx} idx={cnt++} height={item.height} width={item.width} />;
                })}
            </div>;
        })}
    </div>;
}