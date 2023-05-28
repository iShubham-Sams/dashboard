import './App.css'
import { Routes, Route } from 'react-router-dom'
import DashboardScreen from './screen/dashboard'
import Layout from './component/layout'
import TripsScreen from './screen/trips'
import TrackingScreen from './screen/tracking'
import TransportersScreen from './screen/transporters'
import AnalyticsScreen from './screen/analytics'

function App() {

  return (
    <>
      <Routes >
        <Route path='/' element={<Layout />}>
          <Route path='/' element={<DashboardScreen />} />
          <Route path='/trips' element={<TripsScreen />} />
          <Route path='/tracking' element={<TrackingScreen />} />
          <Route path='/transporters' element={<TransportersScreen />} />
          <Route path='/analytics' element={<AnalyticsScreen />} />
        </Route>
      </Routes>
    </>
  )
}

export default App
