import React from 'react';
import Detail from '../components/Detail';
import Item from "../components/Item";
import { Route } from "react-router-dom";
import Navbar from "../components/Navbar";
import menu from '../data/Menu'

const App = () => {
    console.log()
    return (
        <div>
            <Navbar />
            <div className="container border shadow-sm mt-4">
                <Route path="/" exact>
                    <div class="row">

                        {
                            menu.map(item => (
                                <Item item={item} />
                            ))
                        }
                    </div>


                </Route>
                <Route path="/product/:id" exact>
                    <Detail />
                </Route>
            </div>
        </div >
    );
};



export default App;