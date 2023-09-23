import { Outlet } from 'react-router-dom';
import Headers from './components/Header';
import Footer from './components/Footer';

function App() {
  return (
    <div>
      <Headers />
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  )
}

export default App
