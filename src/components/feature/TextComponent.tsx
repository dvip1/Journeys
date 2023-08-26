interface TextComponentProps {
    text: string;
  }

function Text(props: any) {
  return (
    <div className="my-4">
      <p className="">
          {props.text}
      </p>
    </div>
  );
}
  
  export default function TextComponent({ text }: TextComponentProps) {
    return <Text text={text} />;
  }