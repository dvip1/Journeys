import { CardType } from "../../data/cardData";

interface ArticleHeaderProps {
    article: CardType;
}

export default function ArticleHeader({ article }: ArticleHeaderProps) {
    return (
        <div className="flex flex-col md:flex-row md:items-center text-center">
            <img
                src={article.img}
                alt={article.title}
                className="w-full md:w-1/2 h-auto md:h-96 object-cover lg:rounded-lg shadow-lg mb-5 md:mb-0 md:mr-5 "
            />
            <div className="md:w-1/2">
                <h1 className="text-3xl font-bold mt-5">{article.title}</h1>
                <p className="text-gray-600 mt-2">{article.info}</p>
            </div>
        </div>
    );
}