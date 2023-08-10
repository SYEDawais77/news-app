import React, { useState, createContext } from 'react'
import NavBar from './components/NavBar';
import News from './components/News';
import LoadingBar from 'react-top-loading-bar'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css"

export const ThemeContext = createContext(null)

export default function App() {
  const [themeMode, setThemeMode] = useState("dark");
  const [progress, setProgress] = useState(0);


  const ToggleTheme = () => {
    setThemeMode((curr) => (curr === 'light' ? "dark" : "light"))
  }

  return (
    <>
      <ThemeContext.Provider value={themeMode}>

        <Router>
          <div style={{ paddingTop: "100px" }} id={themeMode}>
            <NavBar ToggleTheme={ToggleTheme}  />
            <LoadingBar
              color='#f11946'
              progress={progress}
            />
          </div>
          <Routes>
            <Route exact path='/general' element={<News  setProgress={setProgress} key="general" country='us' category='general' />} />
            <Route exact path='/' element={<News setProgress={setProgress} key='technology' country='us' category='general' />} />
            <Route exact path='/business' element={<News setProgress={setProgress} key="business" country='us' category='business' />} />
            <Route exact path='/entertainment' element={<News setProgress={setProgress} key="entertainment" country='us' category='entertainment' />} />
            <Route exact path='/health' element={<News setProgress={setProgress} key="health" country='us' category='health' />} />
            <Route exact path='/science' element={<News setProgress={setProgress} key="science" country='us' category='science' />} />
            <Route exact path='/sports' element={<News setProgress={setProgress} key="sports" country='us' category='sports' />} />
            <Route exact path='/technology' element={<News setProgress={setProgress} key="technology" country='us' category='technology' />} />
          </Routes>
        </Router>
      </ThemeContext.Provider>
    </>
  )

}
