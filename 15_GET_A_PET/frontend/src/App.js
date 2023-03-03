import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import Login from './components/pages/auth/Login';
import Register from './components/pages/auth/Register';
import Home from './components/pages/Home';
import Navbar from './components/layouts/Navbar';
import Footer from './components/layouts/Footer';
import Container from './components/layouts/Container';
import Profile from './components/pages/User/Profile';

// context
import { UserProvider } from './context/UserContext';
import Message from './components/layouts/Message';
import MyPets from './components/pages/pets/MyPets';
import AddPets from './components/pages/pets/AddPets';
import EditPet from './components/pages/pets/EditPet';
import PetDetails from './components/pages/pets/PetDetails';
import MyAdoptions from './components/pages/pets/MyAdoptions';

function App() {
  return (
    <Router>
      <UserProvider >
        <Navbar />
        <Message />
        <Container>
          <Switch>
            <Route path='/login'>
              <Login />
            </Route>
            <Route path='/register'>
              <Register />
            </Route>
            <Route path='/user/profile'>
              <Profile/>
            </Route>
            <Route path='/pet/mypets'>
              <MyPets/>
            </Route>
            <Route path='/pet/add'>
              <AddPets/>
            </Route>
            <Route path='/pet/edit/:id'>
              <EditPet/>
            </Route>
            <Route path='/pet/myadoptions'>
              <MyAdoptions/>
            </Route>
            <Route path='/pet/:id'>
              <PetDetails/>
            </Route>
            <Route path='/'>
              <Home />
            </Route>
          </Switch>
        </Container>
        <Footer />
      </UserProvider>
    </Router>
  );
}

export default App;
