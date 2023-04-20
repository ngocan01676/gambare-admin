import AppLayout from './layouts/app-layout'
import { LoginPage } from './pages/login/login.page';
import { BrowserRouter, Route } from 'react-router-dom';

const App: React.FC = () => {
  const isAuthentication = true;
  return (
    <BrowserRouter>
      { isAuthentication ?  <AppLayout/> : <LoginPage/> }
    </BrowserRouter>
  )
}

export default App
