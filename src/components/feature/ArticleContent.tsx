import { styled } from "styled-components";
import { CardType } from "../../data/cardData";
import CodeComponent from "./CodeComponent";
import ParagraphComponent from "./ParagraphComponent";
import TextComponent from "./TextComponent";
/* hello */
interface ArticleContentProps {
  article: CardType;
}
const TextStyle = styled.div`
  font-size: 21px;
  font-family:  'Open Sans', sans-serif;
  line-height: 1.58;
  letter-spacing: -.003em;
  color: #212529;
  font-weight: 400 ;
  `
export default function ArticleContent({ article }: ArticleContentProps) {
  return (
    <section id="main" className="">
      <div className="mt-16 xl:mx-56 mx-4 md:mx-16 lg:mx-28 max-w-screen-lg text-left" >
        <TextStyle >
          {article.content.map((component: any) => {
            switch (component.component) {
              case "text":
                return <TextComponent key={component.id} text={component.text} />;
              case "code":
                return <CodeComponent key={component.id} code={component.text} />;
              case "paragraph":
                return (
                  <ParagraphComponent key={component.id} text={component.text} isDropCap={component.isDropCap} />
                );
              default:
                return null;
            }
          })}
        </TextStyle>
      </div>
    </section>
  );
}