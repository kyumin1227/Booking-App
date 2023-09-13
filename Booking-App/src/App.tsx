import Nav from './client/components/Nav';
import { Outlet, Routes, Route } from "react-router-dom";
import HomePage from './client/pages/HomePage';
import CalendarPage from './client/pages/CalendarPage';


function App() {

  const Layout = () => {
    return(
      <>
        <Nav />
        
        <Outlet />
      </>
    )
  }
  

  return (
    <>
      <Routes>
        {/* Navbar가 필요한 route */}
        <Route path='/' element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path='/calendar' element={<CalendarPage />} />
        </Route>

        {/* Navbar가 필요없는 route */}
        <Route path='/noNav' element={<HomePage />} />
      </Routes>
    </>
  )
}

export default App;