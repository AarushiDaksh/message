import { useState } from 'react';
import './App.css';

function App() {
  const [showMsg, setShowMsg] = useState(false);

  const ButtonClick = () => {
    setShowMsg(!showMsg);
  };

  return (
    <div className="flex items-center justify-center h-screen ">
      <div>
      <button
          onClick={ButtonClick}
          className="from-rose-400 via-fuchsia-500 to-indigo-500 bg-gradient-to-r text-white rounded-full py-3 px-8 shadow-md hover:shadow-2xl transition duration-500"
        >
          Message here!
        </button>
        {showMsg&& (
          <div className="mt-4 p-4 bg-white border border-gray-300 rounded-lg shadow-lg">
            <p className="text-pink-800 text-center">Hey Ayyu💗</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;