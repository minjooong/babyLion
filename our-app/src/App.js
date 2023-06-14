import logo from './logo.svg';
import './App.css';
import './index.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

function App() {
  return (
    <div className="flex justify-center items-center h-screen">
      <h1 className="text-3xl font-bold underline">hello world!</h1>
      <div className="bg-blue-500 text-white px-4 py-2 rounded-lg">
        Hello, Tailwind CSS!
      </div>
    </div>

  )
}

export default App;
