import React from 'react';
import Card, { CardVariant } from './component/Card';

function App() {
  return (
    <div>
      <Card onClick={(num) => console.log(num)} 
        variant={CardVariant.outlined}
        width='200px' 
        height='200px'
        >
        <button> Button !</button>
        dsa 
      </Card>
    </div >
  );
}

export default App;