import React from 'react';

/**
 * Code examples
 * @param props
 * @returns
 */
function Example(props) {
  return (
    <div className="example">
      <h1>{props.title}</h1>
      <div className="exampleCode">
        <code>{props.code}</code>
      </div>
    </div>
  );
}

export default Example;
