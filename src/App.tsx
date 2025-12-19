import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import SEO from './components/SEO';
import Home from './pages/Home';
import Boletins from './pages/Boletins';
import Pastorais from './pages/Pastorais';
import Quizzes from './pages/Quizzes';
import Sociedades from './pages/Sociedades';
import UCP from './pages/sociedades/UCP';
import UPA from './pages/sociedades/UPA';
import UMP from './pages/sociedades/UMP';
import SAF from './pages/sociedades/SAF';
import Sobre from './pages/Sobre';
import Contato from './pages/Contato';

function App() {
  return (
    <Router>
      <SEO />
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/boletins" element={<Boletins />} />
          <Route path="/pastorais" element={<Pastorais />} />
          <Route path="/quizzes" element={<Quizzes />} />
          <Route path="/sociedades" element={<Sociedades />} />
          <Route path="/sociedades/ucp" element={<UCP />} />
          <Route path="/sociedades/upa" element={<UPA />} />
          <Route path="/sociedades/ump" element={<UMP />} />
          <Route path="/sociedades/saf" element={<SAF />} />
          <Route path="/sobre" element={<Sobre />} />
          <Route path="/contato" element={<Contato />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
