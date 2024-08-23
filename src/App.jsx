import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Index from "./Pages/Index";
import About_me from "./Pages/About_me";
import Characters from "./Pages/Characters";
import Photogallery from "./Pages/Photogallery";
import What_is_roleplay from "./Pages/What_is_roleplay";
import Newsletter from "./Pages/Newsletter";
import Twitch from "./Pages/Twitch";
import CharacterDetail from "./Components/CharacterDetail";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/about_me" element={<About_me />} />
        <Route path="/characters" element={<Characters />} />
        <Route path="/character/:id" element={<CharacterDetail />} />
        <Route path="/photogallery" element={<Photogallery />} />
        <Route path="/what_is_roleplay" element={<What_is_roleplay />} />
        <Route path="/newsletter" element={<Newsletter />} />
        <Route path="/twitch" element={<Twitch />} />
      </Routes>
    </Router>
  );
};

export default App;