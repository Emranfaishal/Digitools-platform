import './App.css'
import BannerFive from './components/banner-five/BannerFive'
import BannerFour from './components/banner-four/BannerFour'
import BannerSix from './components/banner-six/BannerSix'
import BannerTwo from './components/banner-two/BannerTwo'
import Banner from './components/banner/Banner'
import Nav from './components/nav/Nav'

function App() {

  return (
    <>
      <Nav></Nav>
      <Banner></Banner>
      <BannerTwo></BannerTwo>
      
      <BannerFour></BannerFour>
      <BannerFive></BannerFive>
      <BannerSix></BannerSix>
    </>
  )
}

export default App
