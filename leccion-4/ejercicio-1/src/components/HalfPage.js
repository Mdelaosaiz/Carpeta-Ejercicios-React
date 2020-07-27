// Usa children para introducir todo el contenido entre la apertura y cierre de HalfPage en su interior. 

import React from 'react';

class HalfPage extends React.Component {
  render() {
      return (
          <div className="half-page">
              {this.props.children}
          </div>
      );
  }
}

/* Functional components */

export default HalfPage;
