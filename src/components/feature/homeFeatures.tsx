import { GlobalStyles } from "../../styles/homeStyle";
import { PrimaryButton } from "../UI/button";
import { SecondaryButton } from "../UI/button";

export function Hero() {
    return (
        <>
            <GlobalStyles />
                <div className="grid md:grid-cols-2 gap-4 debug-screens my-container mt-10">
                    {/* Item 1 */}
                    <div className="md:col-span-1 md:order-1  order-2 flex justify-center items-center ">
                        <div className="p-4 text-left">
                            <h1 className="xl:text-6xl lg:text-5xl text-4xl font-semibold">
                                Join in on my weird <span className="textGrad">Journeys</span>
                            </h1>
                            <p className="subtitle text-base">
                                Discover my personal Blog - A collection of things that I love</p>
                            <PrimaryButton className="rounded-md"> Subscribe  <i className="fas fa-envelope"></i></PrimaryButton>
                            <SecondaryButton className="rounded-md"> Github  <i className="fab fa-github"></i></SecondaryButton>
                        </div>
                    </div>

                    {/* Item 2 */}
                    <div className="md:col-span-1 md:order-2 order-1">
                        <div className="p-4">
                            <img src="./src/assets/Journeys.svg" alt="" style={{ maxWidth: '100%' }} />
                        </div>
                    </div>
                </div>
        </>
    );
}