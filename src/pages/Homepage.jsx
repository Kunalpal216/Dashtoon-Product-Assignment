import Typewriter from "typewriter-effect";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function HomePage() {

    function onClick() {
        window.location = "/comic-strip";
    }

    return (
        <>
            <div class="min-h-screen">
                <div class="row-span-1 h-[10%]">
                    <Navbar />
                </div>
                <div class="md:flex">
                    <div class="md:w-1/2 p-4 my-auto">
                        <div class="mt-40 inline-block">
                            <p className="text-gray-300 mx-2 text-5xl font-bubblegum tracking-wide font-extrabold md:text-left lg:text-8xl md:text-12xl">
                                Create Your Own Comics Online !!
                            </p>
                        </div>
                        <div class="text-xl md:text-left mx-2 font-bubblegum text-gray-300 font-normal leading-relaxed fs521 lg:w-2/3 lg:text-4xl md:text-2xl">
                            <Typewriter
                                options={{
                                    strings: [
                                        "Unleash your creativity !!",
                                        "Paint your imagination !!",
                                        "Make in seconds !!"
                                    ],
                                    autoStart: true,
                                    loop: true,
                                    deleteSpeed: 50,
                                }}
                            />
                        </div>
                    </div>
                    <img src="/home.svg" class="w-1/2 md:mx-4 mx-auto" />
                </div>
                <div>
                    <div class="mx-5 mt-24 mb-8 text-3xl font-bubblegum text-white">
                        Click below to start making your own comic strip !!
                    </div>
                    <div class="px-8 pt-6 pb-4 max-w-screen-md mx-auto">
                        <button onClick={onClick} class="rounded px-16 md:px-32 py-2 sm:text-lg md:text-xl lg:text-2xl font-comic font-bold border-b-4 border-l-2 shadow-lg bg-stone-900 border-black-900 text-yellow-500 border border-blue-500 border-[1px]">Let's Start</button>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
}