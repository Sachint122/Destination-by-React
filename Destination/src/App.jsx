import './App.css';
import ItStaffing from './Component/ItStaffing/ItStaffing.jsx';
import ItStaffing2 from './Component/ItStaffing/ItStaffing2.jsx';
import TraningSec from './Component/Training/TraningSec.jsx';
import TraningSec2 from './Component/Training/TraningSec2.jsx';
import Development from './Component/WebDev/Page1.jsx';
import Sachin from './Component/WebDev/Sachin.jsx';
import Temp from "./Component/WebDev/Temp.jsx";
import WebDevelopment2 from './Component/WebDev/WebDevelopment2.jsx';
// import Animation from "./Component/Animation/Animation.jsx";

function App() {
  return (
    <div className="institute-bg min-h-screen text-gray-700">

      {/* services page with the help of telwind */}
      {/* <Development />
      <Animation/>
      <StarsCanvas/>
       <TraningSec />
      <ItStaffing />   */}

      {/* service page with the help of CSS */}
      <WebDevelopment2/>
      <TraningSec2/>
      <ItStaffing2/>
    </div>
  );
}

export default App;
