import React, { Component } from "react"
import ReactDOM from 'react-dom/client';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { createBrowserRouter,
        createRoutesFromElements,
        Router,
        Routes,
        Route,
        useNavigate,
        RouterProvider } from "react-router-dom";
import Vegas from './Home/Vegas';


const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Vegas />}>
      
    </Route>
  )
);

export default function Home() {




  const routeChangeVegas = () =>{ 
    
  }
  return (
    <div className='Home'>
      <div className='Card_Vegas' >
        <Card sx={{width: 229 }}>
        <CardMedia
          sx={{ height: 140 }}
          image={require('./vegas.jpg')}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Las Vegas
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Cette ville est ouf !
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small" onClick={routeChangeVegas}>Learn More</Button>
        </CardActions>
      </Card>
      </div>


      <div className='Card_LosAngeles' >
        <Card sx={{ width: 229 }}>
        <CardMedia
          sx={{ height: 140 }}
          image={require('./Hollywood.jpg')}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Los Angeles
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Cette ville est pas si ouf...
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small" onClick={() => { window.location.href = './Home/Vegas.js';  }}>Learn More</Button>
        </CardActions>
      </Card>
   

      </div>
    </div>

    
  );
}



export class Class1 extends Component {
  render() {
     return (
      
      ReactDOM.createRoot(document.getElementById("root")).render(
        <React.StrictMode>
          <RouterProvider router={router} />
        </React.StrictMode>
      )

     )
  }
}