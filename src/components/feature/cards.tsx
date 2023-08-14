import { GlobalStyles } from "../../styles/homeStyle";
import { CardData } from "../../data/cardData";

export default function Cards() {
    return (
        <>
            <GlobalStyles />
            <div className="mx-auto mt-5 bento-grid">
                {CardData.map((card, index) => {
                    return (
                        <div className="bento-grid-item my-4 " key={index}>
                            <a href="#" >
                                <div className="bg-[#faeaf7] shadow-md rounded-lg overflow-hidden hover:bg-[#f0c1e8] transition duration-300">
                                    <img
                                        src={card.img}
                                        alt={card.title}
                                        className="w-full h-40 object-cover rounded-xl shadow-lg"
                                    />
                                    <div className="p-4">
                                        <h2 className="text-xl font-medium mb-2">{card.title}</h2>
                                        <p className="text-gray-600 info">{card.info}</p>
                                        <div className="mt-4"></div>
                                    </div>
                                </div>
                            </a>
                        </div>
                    );
                })}
            </div>
        </>
    );
}