import html2canvas from "html2canvas";
import { toast } from "react-toastify";


export default function ComicShareButton() {
    async function getCanvasShareableURL() {
        let imageElement = document.getElementById("strip-panel");
        console.log(imageElement);
        const canvas = await html2canvas(imageElement);
        const dataURL = canvas.toDataURL("image/png", 1.0);
        console.log(dataURL);
        let base64Source = dataURL.substring(22);
        toast.info('Just a sec :)', {
            position: "top-center",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: false,
            pauseOnHover: true,
            draggable: false,
            progress: undefined,
            theme: "colored",
        });
        const formData = new FormData();
        formData.append('image', base64Source);
        await fetch(
            "https://api.imgbb.com/1/upload?key=eadbc9aab19929c876996b5f182e4873",
            {
                method: "POST",
                body: formData
            }
        ).then((resp) => resp.json()).then((r) => {
            console.log(r.data);
            window.open(r.data.display_url, '_blank');
            // window.location=r.data.display_url;
        });
    }
    return <>
        <div class="px-8 pt-6 pb-4 max-w-screen-md mx-auto">
        <button onClick={getCanvasShareableURL} class="rounded px-16 md:px-32 py-2 mt-4 sm:text-lg md:text-xl lg:text-2xl font-comic font-bold border-b-4 border-l-2 shadow-lg bg-stone-900 border-black-900 text-yellow-500 border border-blue-500 border-[1px]">Share it</button>
        </div>
    </>;
}