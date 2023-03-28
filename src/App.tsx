/* eslint-disable @typescript-eslint/no-unused-vars */
import React from 'react';
import logo from './logo.svg';
import './App.css';
import 'bulma/css/bulma.min.css';
import NavBar from './components/NavBar';
import Footer from './components/Footer';
import Home from './components/Home';
import { BrowserRouter as Router, Route, Routes, useParams } from 'react-router-dom';
import TVShows from './components/TVShows';
import Movies from './components/Movies';
import Tvshow from './components/Tvshow';
import ShowAdmin from './components/ShowAdmin';



import { Authenticator, View, Image, Text, useTheme } from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css';
import { ID } from '@aws-amplify/datastore/lib-esm/util';
import Listings from './components/Listings';

const components = {
  Header() {
    const { tokens } = useTheme();

    return (
      <View textAlign="center" padding={tokens.space.large}>
        <Image
          alt="Amplify logo"
          src="https://docs.amplify.aws/assets/logo-dark.svg"
        />
      </View>
    );
  },

  Footer() {
    const { tokens } = useTheme();

    return (
      <View textAlign="center" padding={tokens.space.large}>
        <Text color={tokens.colors.neutral[80]}>
          &copy; All Rights Reserved
        </Text>
      </View>
    );
  },
}




function App() {
  const {id} = useParams();

  return (
    
    <Authenticator loginMechanisms={['email']} signUpAttributes={['name', 'phone_number',]} components = {components}>
      
      

      <Router>
        


        <NavBar />

        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/TVShows' element={<TVShows />} />
          <Route path='/Movies' element={<Movies />} />
          <Route path='/Listings' element={<Listings/>} />
          <Route path='/ShowAdmin' element={<ShowAdmin/>}></Route>
          <Route path='/:id' element={<Tvshow/>}></Route>
          
        </Routes>

        

        <Footer />
        
      </Router>
    </Authenticator>
    


  );



}

export default App;

