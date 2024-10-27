 // Axios usong React js 
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import './App.css';
import Create from './Components/Create';
import Read from  './Components/Read'; 
import Update from  './Components/Update'; 


function App() {
  return (
    <div className="container">
    <BrowserRouter>  
    <Routes>  
     <Route exact path="/" element = { <Create/>}></Route>
     <Route  path="/read" element = { <Read/>}></Route> 
     <Route  path="/update" element={<Update/>}> </Route>
    </Routes>
    </BrowserRouter>
    </div>

  );
}

export default App;

// Navbar

// import './App.css';
// import React from 'react';
// import Navbar from './Navbar/Navbar'; 

// function App() {
//   return (
//     <div className="App">
//       <Navbar />
//     </div>
//   );
// }
// export default App;

// login 

// import './App.css';
// import React from 'react';
// import AuthForm from './Login/AuthForm'; 
// function App() {
//   return (
//     <div className="App">
//     <AuthForm/>
//     </div>
//   );
// }

// export default App;

// Side bar 

// import './App.css';
// import React from 'react';
// import Sidebar from './Sidebar/Sidebar';


// function App() {
//   return (
//     <div className="App">
//     <Sidebar/>
//     </div>
//   );
// }

// export default App;


