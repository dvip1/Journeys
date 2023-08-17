import { CardData } from "../../data/cardData";
import { GlobalStyles } from "../../styles/homeStyle";

import { Link } from "react-router-dom";

interface CardProps {
  card: {
    id: number;
    img: string;
    title: string;
    info: string;
  };
}

function Card({ card }: CardProps) {  
  return (
    <div className="bento-grid-item my-4">
      <Link
        to={`/article/${card.id}`}
      >
        <div className="bg-[#faeaf7] hover:bg-[#f0c1e8] transition duration-300 rounded-xl shadow-lg overflow-hidden">
          <img
            src={card.img}
            alt={card.title}
            className="w-full h-40 object-cover shadow-lg rounded-xl"
          />
          <div className="p-4 text-left">
            <h2 className="text-xl font-medium mb-2 ">{card.title}</h2>
            <p className="text-gray-600 info">{card.info}</p>
          </div>
        </div>
      </Link>
    </div>
  );
}

function CardList() {
  return (
    <>
      <GlobalStyles />
      <div className="mt-5 bento-grid">
        {CardData.map((card) => (
          <Card key={card.id} card={card} />
        ))}
      </div>
    </>
  );
}

export default function Articles() {
  return <CardList />;
}