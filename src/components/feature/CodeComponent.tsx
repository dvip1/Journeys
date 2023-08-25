import React from 'react';
import Prism from 'prismjs';

function Code(props: any) {
  React.useEffect(() => {
    Prism.highlightAll();
  }, []);
  return (
    <div>
      <h1>Example Code</h1>
      <pre>
        <code className="language-javascript">
          {props.code}
        </code>
      </pre>
    </div>
  );
}
interface CodeComponentProps {
  code: string;
}

export default function CodeComponent({ code }: CodeComponentProps) {
  return <Code code={code} />;
}