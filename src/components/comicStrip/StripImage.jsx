import { useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toggleImageEditModalState } from "../../redux/comicPanelSlice";
import './StripImage.css';

export default function StripImage({ idx, height, width }) {
    console.log(height,width)
    let dispatch = useDispatch();

    let imageDivClasses = `inline-block border border-black-900 overflow-hidden ${width} ${height}`;

    console.log(idx);

    const comicPanelState = useSelector((state) => state.comicPanel);

    function toggleModal() {
        console.log(idx);
        dispatch(toggleImageEditModalState(idx));
    }

    return <div class={imageDivClasses} onClick={toggleModal}>
        <img class="h-40 m-auto" src={comicPanelState.stripImages[idx].imageURL} />
        <div class="relative bg-white shadow">
            <div className="font-comic text-2xl">{comicPanelState.stripImages[idx].text}</div>
        </div>
    </div>;
}