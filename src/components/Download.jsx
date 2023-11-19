import html2canvas from "html2canvas";
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
        link.setAttribute('download', 'strip-comic.png');
        link.click();
        URL.revokeObjectURL(dataURL);
    }
    return <>
        <div class="px-8 pt-6 pb-4 max-w-screen-md mx-auto">
        <button onClick={downloadComicStrip} class="rounded px-32 py-2 text-3xl font-comic font-bold border-b-4 border-l-2 shadow-lg bg-stone-900 border-black-900 text-yellow-500 border border-blue-500 border-[1px]">Download</button>
        </div>
    </>;
}