import logo from './images/logo.png';
import { Link } from 'react-router-dom';
import { Button } from '@mui/material';


const Home = () => {
  return (
    <div className="background-image">
      <header className="header">
        <img src={logo} className="logo" alt="logo" />
      <div className="center-container">
        <div className='homepage-subtitle'>
            <p>Galactic Rides: The Ultimate Star Wars Vehicle Marketplace</p>
        </div>
      <div>
      <Link style={{ textDecoration: 'none' }} to="/vehicles">
      <Button 
        variant="contained" 
        size="medium" 
        color="primary"
        sx={{
        backgroundColor: '#000000', '&:hover': {backgroundColor: '#666'},
      }}>
          Start
        </Button>
        </Link>
      </div>
    </div>
    </header>
    </div>
  )
}

export default Home;


