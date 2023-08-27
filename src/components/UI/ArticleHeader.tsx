import { CardType } from "../../data/cardData";

interface ArticleHeaderProps {
    article: CardType;
}

export default function ArticleHeader({ article }: ArticleHeaderProps) {
    return (
        <section id="header" className="container">
            <div className="flex md:flex-row md:items-center text-center flex-col-reverse">
                <img
                    src={article.img}
                    alt={article.title}
                    className="w-full md:w-1/2 h-auto md:h-96 object-cover sm:rounded-lg shadow-lg mb-5 md:mb-0 md:mr-5"
                />
                <div className="md:w-1/2 lg:p-16 flex flex-col items-center justify-center px-8 py-5" style={{ fontFamily: 'Lora, sans-serif' }}>
                    <p className="text-base text-[#7f1a6c] my-2"> {article.tag}</p>
                    <h1 className="text-4xl font-mt-5 font-normal">{article.title}</h1>
                    <p className="text-gray-600 text-xl mt-3 mb-3 italic">{article.info}</p>
                    <p className="text-[#3f0d36]  text-base my-1">By Dvip Patel</p>
                    <p className="text-gray-600  text-base my-1"> {article.date}</p>

                </div>
            </div>
        </section>
    );
}   