import { Route , Switch} from 'react-router-dom';
import './App.css'
import Layout from '../Layout/Layout'
import Routes from '../Routes/Routes';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';

function App() {
  
  return (
    
      <Layout>
              <ToastContainer  autoClose={6000} font={"iransansweb"} rtl={true} theme={"colored"}/>
          <Switch>
              {
                    Routes.map((route,index) => (
                        <Route key={index} {...route}/>
                    ))
              }
            </Switch>
      </Layout>
   
  );
}

export default App;
