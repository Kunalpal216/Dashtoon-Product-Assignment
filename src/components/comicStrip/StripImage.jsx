import { useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toggleImageEditModalState } from "../../redux/comicPanelSlice";
import './StripImage.css';

export default function StripImage({ idx }) {

    let dispatch = useDispatch();

    const comicPanelState = useSelector((state) => state.comicPanel);

    function toggleModal() {
        console.log(idx);
        dispatch(toggleImageEditModalState());
    }

    // let speechBubblePos = {};

    // switch (comicPanelState.stripImages[comicPanelState.currIdx].textPos) {
    //     case "top-left":
    //         speechBubblePos = { left: '0px', top: '0px' }
    //         break;
    //     case "top-right":
    //         speechBubblePos = { right: '0px', top: '0px' }
    //         break;
    //     case "bottom-left":
    //         speechBubblePos = { left: '0px', bottom: '0px' }
    //         break;
    //     case "bottom-right":
    //         speechBubblePos = { left: '0px', top: '0px' }
    //         break;
    //     default:
    //         break;
    // }


    return <div class="border-double border-4 border-black inline-block p-8 m-2">
        <div class="max-w-sm rounded overflow-hidden shadow-lg m-0">
            <SpeechBubble message="Hello from React!" />
            <img class="w-full" src={comicPanelState.stripImages[comicPanelState.currIdx].imageURL} alt="Sunset in the mountains" />
            <div class="px-6 pt-4 pb-2">
                <button class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2" onClick={toggleModal}>
                    Configure
                </button>
            </div>
        </div>
    </div>;
}

const SpeechBubble = ({ message }) => {
    return (
        <div className="speech-bubble">
            <div className="speech-bubble-content">{message}</div>
        </div>
    );
};