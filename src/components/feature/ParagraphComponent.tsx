import { styled } from "styled-components";
const DropCap = styled.span`
  font-size: 4rem;
  font-weight: 600;
  float: left;
  line-height: 1;
  margin-right: 0.1em;
  text-transform: uppercase;
`;
function Paragraph(props: any) {
  return (
    <div className="my-4">
      <p className="">
        {props.isDropCap ? (
          <>
            <DropCap>{props.text.charAt(0)}</DropCap>
            {props.text.slice(1)}
          </>
        ) : (
          props.text
        )}

      </p>
    </div>
  );
}
interface ParagraphComponentProps {
  text: string;
  isDropCap?: boolean;
}

export default function ParagraphComponent({ text, isDropCap = false }: ParagraphComponentProps) {
  return <Paragraph text={text} isDropCap={isDropCap} />;
}