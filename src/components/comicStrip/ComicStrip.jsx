import { useRef, useState } from "react";
import Navbar from "../Navbar";
import StripPanel from "./StripPanel";
import { useDispatch, useSelector } from "react-redux";
import Modal from 'react-modal';
import StripImage from "./StripImage";
import { onSubmitClick, toggleImageEditModalState } from "../../redux/comicPanelSlice";
import { renderToString } from 'react-dom/server';
import html2canvas from "html2canvas";
import ComicDownload from "./Download";
import ComicShareButton from "./ShareStrip";

Modal.setAppElement('#root');

export default function ComicStrip() {
    let [base64Source, setBase64Source] = useState(null);
    const comicPanelState = useSelector((state) => state.comicPanel);
    let dispatch = useDispatch();
    let promptRef = useRef(null), textRef = useRef(null);

    const customStyles = {
        content: {
            top: '50%',
            left: '50%',
            right: 'auto',
            bottom: 'auto',
            marginRight: '-50%',
            transform: 'translate(-50%, -50%)',
        },
    }

    function closeModal() {
        dispatch(toggleImageEditModalState(comicPanelState.currIdx));
    }

    async function onSubmit() {
        console.log(promptRef.current.value);
        console.log(textRef.current.value);

        const response = await fetch(
            "https://api-inference.huggingface.co/models/ogkalu/Comic-Diffusion",
            {
                headers: { Authorization: "Bearer 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" },
                method: "POST",
                body: JSON.stringify({ "inputs": promptRef.current.value }),
            }
        );
        const result = await response.blob();

        // const response = await fetch(
        //     "https://xdwvg9no7pefghrn.us-east-1.aws.endpoints.huggingface.cloud",
        //     {
        //         headers: {
        //             Accept: "image/png",
        //             Authorization: "Bearer VknySbLLTUjbxXAXCjyfaFIPwUTCeRXbFSOjwRiCxsxFyhbnGjSFalPKrpvvDAaPVzWEevPljilLVDBiTzfIbWFdxOkYJxnOPoHhkkVGzAknaOulWggusSFewzpqsNWM",
        //             "Content-Type": "application/json",
        //         },
        //         method: "POST",
        //         body: JSON.stringify({ "inputs": promptRef.current.value }),
        //     }
        // );
        // const result = await response.blob();

        let url = URL.createObjectURL(result);
        // let url='/imagePlaceholder.png';
        dispatch(onSubmitClick({ prompt: promptRef.current.value, text: textRef.current.value, url: url }));
        closeModal();
    }

    return <div>
        <Navbar />
        <Modal
            isOpen={comicPanelState.imageEditModalState}
            onRequestClose={closeModal}
            style={customStyles}>
            <div class="w-full">
                <div class="px-8 pt-6 pb-4 ">
                    <button onClick={closeModal} class="bg-blue-500 hover:bg-blue-700 py-2 px-4 text-white font-bold rounded focus:outline-none focus:shadow-outline"><svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"> <path d="M6 18L18 6M18 18L6 6" />
                    </svg></button>
                </div>
                <form class="bg-white rounded px-8 pt-4 pb-8 mb-4">
                    <div class="mb-4">
                        <label class="block text-gray-700 text-sm font-bold mb-2" for="username">
                            Prompt
                        </label>
                        <input ref={promptRef} class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="prompt" type="text" placeholder="Cowboy riding a bike" />
                    </div>
                    <div class="mb-4">
                        <label class="block text-gray-700 text-sm font-bold mb-2" for="username">
                            Strip Text
                        </label>
                        <input ref={textRef} maxlength="20" class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="strip-text" type="text" placeholder="Hui Hui" />
                    </div>
                    <div class="flex items-center justify-between">
                        <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button" onClick={onSubmit}>
                            Confirm
                        </button>
                    </div>
                </form>
            </div>
        </Modal>
        <div id="strip-panel">
            <StripPanel />
        </div>
        <ComicShareButton/>
        <ComicDownload/>
    </div>;
}