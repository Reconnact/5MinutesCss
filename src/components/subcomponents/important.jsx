import React from 'react';

/**
 * Important notes
 * @param props
 * @returns
 */
function Important(props) {
  return (
    <div className="important">
      <h3 style={'color = red;'}>Remember!</h3>
      <p>{props.text}</p>
    </div>
  );
}

export default Important;
