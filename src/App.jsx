import './App.css'
import BannerFour from './components/banner-four/BannerFour'
import BannerTwo from './components/banner-two/BannerTwo'
import Banner from './components/banner/Banner'
import Nav from './components/nav/Nav'

function App() {

  return (
    <>
      <Nav></Nav>
      <Banner></Banner>
      <BannerTwo></BannerTwo>
      <BannerFour>git </BannerFour>
    </>
  )
}

export default App
