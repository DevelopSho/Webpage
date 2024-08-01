import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Index from "./Pages/Index";
import About_me from "./Pages/About_me";
import Characters from "./Pages/Characters";
import Photogallery from "./Pages/Photogallery";
import What_is_roleplay from "./Pages/What_is_roleplay";
import Newsletter from "./Pages/Newsletter";
import Twitch from "./Pages/Twitch";

const App = () => {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/About_me" element={<About_me />} />
          <Route path="/Characters" element={<Characters />} />
          <Route path="/Photogallery" element={<Photogallery />} />
          <Route path="/What_is_roleplay" element={<What_is_roleplay />} />
          <Route path="/Newsletter" element={<Newsletter />} />
          <Route path="/Twitch" element={<Twitch />} />
        </Routes>
      </Router>
    </>
  );
};

export default App;