import { useParams, Params } from "react-router-dom";
import { CardData } from "../data/cardData";
import ArticleHeader from "../components/UI/ArticleHeader";
import ArticleContent from "../components/feature/ArticleContent";

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
    <div className="mx-auto sm:mt-10 container">
      <div className="grid grid-cols-1  gap-10">
        <div className="md:col-span-2">
          <ArticleHeader article={article}/>
          <ArticleContent article={article}  />
        </div>
      </div>
    </div>
  );
}