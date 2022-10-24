import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Servoffered from './components/Servoffered';
import Work from './components/Work';
import Contact from './components/Contact';
import {Routes, Route} from 'react-router-dom'

function App() {
return (
<>
<Routes>
  <Route path="/" element={<Navbar />}>
  <Route index element={<Home />}/>
  <Route path="about" element={<About />} />
  <Route path="services" element={<Servoffered />} />
  <Route path="work" element={<Work />} />
  <Route path="contact" element={<Contact />} />
  </Route>

</Routes>
</>
)
}
export default App