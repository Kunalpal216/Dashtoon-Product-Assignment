import { useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toggleImageEditModalState } from "../redux/comicPanelSlice";
import './StripImage.css';

export default function StripImage({ idx }) {
    console.log(height, width)
    let dispatch = useDispatch();

    let imageDivClasses = `w-[20%] rounded overflow-hidden shadow-lg inline-block m-0 border border-black-900 overflow-hidden`;

    console.log(idx);

    const comicPanelState = useSelector((state) => state.comicPanel);

    function toggleModal() {
        console.log(idx);
        dispatch(toggleImageEditModalState(idx));
    }

    return <div class={imageDivClasses} onClick={toggleModal}>
        <div class="relative">
            <img src={comicPanelState.stripImages[idx].imageURL} alt="Image" class="w-full h-full object-cover" />
            {
                comicPanelState.stripImages[idx].text.length !== 0 ? <div class="absolute bottom-0 w-full text-center font-comic text-base sm:text-lg md:text-xl lg:text-2xl text-white bg-black bg-opacity-50 p-4">
                    <p>{comicPanelState.stripImages[idx].text}</p>
                </div> : null
            }
        </div>
    </div>;
}