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



import { Authenticator, View, Image, Text, useTheme, Theme, ThemeProvider } from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css';
import { ID } from '@aws-amplify/datastore/lib-esm/util';
import Listings from './components/Listings';
import Feedback from './components/Feedback';


  


const components = {

  
  
  Header() {
    const { tokens } = useTheme();

    return (
      <View textAlign="center" padding={tokens.space.large}>
        <Image
          alt="Amplify logo"
          src="https://webvideo-402.s3.amazonaws.com/Logos/greenbiglogo.PNG"
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
  const { tokens } = useTheme();
  const theme: Theme = {
    name: 'Auth Example Theme',
    tokens: {
      colors: {
        background: {
          primary: {
            value: tokens.colors.transparent.value,
          },
          secondary: {
            value: tokens.colors.black.value,
          },
        },
        font: {
          interactive: {
            value: tokens.colors.white.value,
          },
          
        },
        
        brand: {
          primary: {
            '10': tokens.colors.neutral['80'],
            '80': tokens.colors.green['80'],
            '90': tokens.colors.green['90'],
            '100': tokens.colors.green['100'],
          },
        },
      },
      components: {
        
        
        tabs: {
          item: {
            _focus: {
              color: {
                value: tokens.colors.green['60'].value,
                
              },
            },
            
            _hover: {
              color: {
                value: tokens.colors.green['60'].value,
              },
            },
            _active: {
              color: {
                value: tokens.colors.green['60'].value,
              },
            },
            
          
          },
          
        },
        
        

        passwordfield: {
        button: {
          color: { value: 'white' },
          _hover: {
            backgroundColor: { value: '{colors.transparent}' },
            color: { value: 'white' },
          },
          _active: {
            backgroundColor: { value: '{colors.green.90}' },
            color: { value: 'white' },
          },
          _focus: {
            color: { value: 'white' },
          },
        },
        
      },
      fieldcontrol: {
        borderColor: {
          value: '{colors.neutral.80}',
        },
        color: {
          value: '{colors.white}',
        },
      },

        textfield:{
          
           
          color: {
            value: tokens.colors.white.value,
          },
        },
      },
      
    },
  };


  return (
    <ThemeProvider theme={theme}>
    <Authenticator className='has-background-black' loginMechanisms={['email']} signUpAttributes={['name', 'phone_number',]} components = {components}>
      
      
      

      <Router>
        


        <NavBar />

        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/TVShows' element={<TVShows/>} />
          <Route path='/Movies' element={<Movies/>} />
          <Route path='/Listings' element={<Listings/>} />
          <Route path='/ShowAdmin' element={<ShowAdmin/>}></Route>
          <Route path='/Feedback' element={<Feedback/>}/>
          <Route path='/:id' element={<Tvshow/>}></Route>
          
        </Routes>

        

        <Footer />
        
      </Router>
    </Authenticator>
    </ThemeProvider>
    


  );



}

export default App;

