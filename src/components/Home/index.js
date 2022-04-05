// Write your code here
import Header from '../Header'
import './index.css'

const Home = () => (
  <div>
    <Header />
    <img
      src="https://assets.ccbp.in/frontend/react-js/home-lg-img.png"
      alt="home"
      className="home-image"
    />
    <img
      src="https://assets.ccbp.in/frontend/react-js/home-sm-img.png"
      alt="home"
      className="mobile-home-image"
    />
  </div>
)
export default Home
