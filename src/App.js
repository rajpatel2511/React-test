import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';
import { Suspense, lazy } from 'react';
import List from './List';
// import User from './User';
// import List from './List';
import './style.css';

const AddUser = lazy(()=>import("./addUser"))
const User = lazy(()=> import("./User"))
function App() {
  return (
  <Router>
     <Switch>

     <Route path='/'>
      {""} 
         <menu className="menu">
         <Link to="/list">Todolist</Link> <Link to="/user">User</Link> <Link to="/addUser">AddUser</Link>  
         
         </menu>{""}

         <Route path='/list'>
       <Suspense fallback={<h2>Loading......</h2>}>
        <List/>
      </Suspense>

       </Route>    

     <Route path='/user'>
      <User/>
       </Route>

       <Route path='/addUser'>
        <Suspense fallback={<h2>Loading......</h2>}>
        <AddUser/>
       </Suspense>
       </Route>

   


     </Route>
     </Switch>
   </Router>
    
  );
}

export default App;
