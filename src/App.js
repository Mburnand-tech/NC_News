import { Routes, Route } from 'react-router-dom';
import { useState , useContext} from 'react'

import './App.css';

import Header from './Header'
import Home from './Home'
import Content from './Content';
import Article from './Article';
import About from './AboutPage';
import Footer from './Footer'



import { red, green } from '@mui/material/colors'
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { ThemeContext } from './contexts/themeContext'


function App() {
  const [ isLoggedIn, setIsLoggedIn ] = useState(false)
  const { currentTheme }  = useContext(ThemeContext)
  
  const themeMUI = createTheme({
    components: {
      primary:{
        main: red[500],
        article: '#f2dfce'
      }
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          backgroundColor: '#f2dfce'
        }
      }
    },
    palette: {
      primary: {
        main: '#0D7680', 
        secondary: '#1f1d1d', 
        article: '#f2dfce',
        likeButton: "#676767",
        homeButton: '#1f1d1d' 
      },
    },
  });

  return (
    <div className={`App ${currentTheme}`}>
      <ThemeProvider theme={themeMUI}>
        <Header isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />
        <Routes>
                <Route path="/" element={<Home />}/>
                <Route path="/category/:topic" element={<Content/>}/>
                <Route path="/articles/:article_id" element={<Article/>}/>
                <Route path="/about" element={<About/>}/>
        </Routes>
        <Footer/>
      </ThemeProvider>
    </div>
  );
}

export default App;
