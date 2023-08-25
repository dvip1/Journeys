interface TextComponentProps {
    text: string;
  }
  
  export default function TextComponent({ text }: TextComponentProps) {
    return <p>{text}</p>;
  }