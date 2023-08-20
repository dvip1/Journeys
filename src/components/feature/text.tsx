function Paragraph(props: any) {
  return (
    <div>

      <p className="text-lg">
        <span className="drop-cap text-4xl font-bold">{props.text.charAt(0)} </span>
        {props.text.slice(1)}
      </p>
    </div>
  );
}

export default Paragraph;