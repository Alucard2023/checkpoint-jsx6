import React from 'react';
import './App.css';
import Prophoto from './Component/profile/Prophoto';
import 'bootstrap/dist/css/bootstrap.min.css';
import Adress from './Component/profile/Adress';
import Fullname from './Component/profile/Fullname';

function App() {
  return (
   <div className='app'>
<Prophoto/>
<Adress/>
<Fullname/>



    </div>
  );
}

export default App;
