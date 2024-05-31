import React from "react";

import Mainpage from './landingpage/mainpage'
import Createaccount from "./createaccountpage/createaccount";
import Login from "./login/login";

import {
  BrowserRouter,
  Switch,
  Route,
  Link,
  useRouteMatch,
} from "react-router-dom";

function App() {
  return (
    <div>
    
   <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Mainpage} />
          <Route exact path="/createaccount" component={Createaccount} />
          <Route exact path="/login" component={Login} />

        </Switch>
      </BrowserRouter>
      

      
    </div>
  )
}
  



export default App;
