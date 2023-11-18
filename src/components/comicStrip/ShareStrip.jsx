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
        <button onClick={getCanvasShareableURL} class="bg-blue-500 hover:bg-blue-700 py-2 px-4 text-white font-bold rounded focus:outline-none focus:shadow-outline w-full">Share this Strip</button>
        </div>
    </>;
}