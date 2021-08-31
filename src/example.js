import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link, useParams } from 'react-router-dom';



export default function ParamsExample() {
    return (
        <Router>
            <div>
                <h2>account</h2>
                <ul>
                    <li>
                        <Link to="netfilix" >Netfilix</Link>
                    </li>
                    <li>
                        <Link to="zillow-group" >Netfilix</Link>
                    </li>
                    <li>
                        <Link to="yahoo" >Netfilix</Link>
                    </li>
                    <li>
                        <Link to="modus-create" >Netfilix</Link>
                    </li>
                </ul>

                <Switch>
                    <Route path="/:id" children={<Child />} ></Route>
                </Switch>
            </div>
        </Router>
    );
}



function Child() {
    let { id } = useParams();
    return (
        <div>
            <h3>ID: {id}</h3>
        </div>
    );
}




// export default function BasicExample() {
//     return (
//         <Router>
//             <div>
//                 <ul>
//                     <li>
//                         <Link to="/" >Home</Link>
//                     </li>
//                     <li>
//                         <Link to="/about" >About</Link>
//                     </li>
//                     <li>
//                         <Link to="/dashboard" >Dashboard</Link>
//                     </li>
//                 </ul>
//                 <hr />
//                 <Switch>
//                     <Route exact path="/" >
//                         <Home />
//                     </Route>
//                     <Route path="/about" >
//                         <About />
//                     </Route>
//                     <Route path="/dashboard" >
//                         <Dashboard />
//                     </Route>
//                 </Switch>
//             </div>
//         </Router>
//     );
// }


// function Home() {
//     return (
//         <div>
//             <h2>Home</h2>
//         </div>
//     );
// }

// function About() {
//     return (
//         <div>
//             <h2>About</h2>
//         </div>
//     );
// }

// function Dashboard() {
//     return (
//         <div>
//             <h2>Dashboard</h2>
//         </div>
//     );
// }