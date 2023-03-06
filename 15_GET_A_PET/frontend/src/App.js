import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
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
         <Routes>
            <Route path='/login' element={<Login />} />
            <Route path='/register' element={<Register />} />
            <Route path='/user/profile' element={<Profile/>} />
            <Route path='/pet/mypets' element={<MyPets/>} />
            <Route path='/pet/add' element={<AddPets/>} />
            <Route path='/pet/edit/:id' element={<EditPet/>} />
            <Route path='/pet/myadoptions' element={<MyAdoptions/>} />
            <Route path='/pet/:id' element={<PetDetails/>} />
            <Route path='/' element={<Home />} />
          </Routes>
        </Container>
        <Footer />
      </UserProvider>
    </Router>
  );
}

export default App;
