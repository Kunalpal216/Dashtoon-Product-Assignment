import Navbar from "../components/Navbar";
import './Homepage.css';

export default function HomePage() {
    return (
        <>
            <Navbar />
            <section class="text-gray-600 body-font">
                <h2 className="pt-40 mb-1 text-2xl font-semibold tracking-tighter text-center text-gray-200 lg:text-7xl md:text-6xl">
                    Welcome to Nasty World !!
                </h2>
                <br></br>
                <p className="mx-auto text-xl text-center text-gray-300 font-normal leading-relaxed fs521 lg:w-2/3">
                    Unleash your creativity and bring your comic strip ideas to life.
                </p>
                <button class="bg-blue-700 text-white font-bold py-2 px-32 m-4 rounded focus:outline-none focus:shadow-outline">
                    Start making !!
                </button>
            </section>
        </>
    );
}