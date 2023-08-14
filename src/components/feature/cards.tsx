import { GlobalStyles } from "../../styles/homeStyle";
import { CardData } from "../../data/cardData";

export default function Cards() {
  const handleCardClick = (url: string) => {
    window.location.href = url;
  };

  return (
    <>
      <GlobalStyles />
      <div className="mt-5 bento-grid">
        {CardData.map((card, index) => (
          <div className="bento-grid-item my-4" key={index}>
            <button
              className="bg-[#faeaf7] hover:bg-[#f0c1e8] transition duration-300 rounded-xl shadow-lg overflow-hidden"
              onClick={() => handleCardClick(card.url)}
            >
              <img
                src={card.img}
                alt={card.title}
                className="w-full h-40 object-cover shadow-lg rounded-xl"
              />
              <div className="p-4 text-left">
                <h2 className="text-xl font-medium mb-2 ">{card.title}</h2>
                <p className="text-gray-600 info">{card.info}</p>
              </div>
            </button>
          </div>
        ))}
      </div>
    </>
  );
}