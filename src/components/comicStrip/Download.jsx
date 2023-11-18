import { toast } from "react-toastify";


export default function ComicDownload() {
    async function downloadComicStrip() {
        let imageElement = document.getElementById("strip-panel");
        console.log(imageElement);
        const canvas = await html2canvas(imageElement);
        const dataURL = canvas.toDataURL("image/png", 1.0);
        console.log(dataURL);
        const link = document.createElement('a');
        link.href = dataURL;
        link.setAttribute('download', fileName);
        link.click();
        URL.revokeObjectURL(dataURL);
    }
    return <>
        <div class="px-8 pt-6 pb-4 max-w-screen-md mx-auto">
        <button onClick={downloadComicStrip} class="bg-blue-500 hover:bg-blue-700 py-2 px-4 text-white font-bold rounded focus:outline-none focus:shadow-outline w-full">Download</button>
        </div>
    </>;
}