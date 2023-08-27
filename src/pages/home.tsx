import { GlobalStyles } from "../styles/homeStyle";
import { Hero } from "../components/feature/homeFeatures";
import Cards from "../components/feature/cards";

export default function Home() {
    return (
        <section className="">
            <GlobalStyles />
            <Hero />
            <section className="card-container mt-10" >
                <h1 className="xl:text-4xl text-3xl  font-medium">Recent Blogs</h1>
                <Cards />
            </section>
        </section>
    );
}