import { useParams, Params } from "react-router-dom";
import { CardData } from "../data/cardData";

interface ArticleParams extends Params {
  articleId: string;
}

export default function Articles() {
    const { articleId = "" } = useParams<ArticleParams>();
  const article = CardData.find((card) => card.id === parseInt(articleId));

  if (!article) {
    return <div>Article not found</div>;
  }

  return (
    <div className="container mx-auto mt-10">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
        <div className="md:col-span-2">
          <img
            src={article.img}
            alt={article.title}
            className="w-full h-96 object-cover rounded-lg shadow-lg"
          />
          <h1 className="text-3xl font-bold mt-5">{article.title}</h1>
          <p className="text-gray-600 mt-2">{article.info}</p>
          <div className="mt-5 prose">
            {/* Add your article content here */}
          </div>
        </div>
        <div className="md:col-span-1">
          <h2 className="text-xl font-bold mb-5">Related Articles</h2>
          <div className="grid grid-cols-1 gap-5">
            {/* Add related articles here */}
          </div>
        </div>
      </div>
    </div>
  );
}