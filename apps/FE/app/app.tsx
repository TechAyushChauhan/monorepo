
import { PrimeReactProvider } from 'primereact/api';
import Navbar from './component/nav';
import 'primereact/resources/themes/lara-light-blue/theme.css';  // or any other theme
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';
export function App() {
  return (
    <div>
            <PrimeReactProvider value={{ unstyled: false }}>
              <Navbar/>
      <h1>Welcome to FE!</h1>
            </PrimeReactProvider>
      {/* <NxWelcome title="@mono/FE" />
       */}
    </div>
  );
}

export default App;
