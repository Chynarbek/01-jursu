import React from 'react';
import { Link } from "react-router-dom";

const Item = ({ item }) => {
    return (

        (<div className="col-4 mt-4">
            <div className="card card-product">
                <img className="card-img-top card-product-img" src={item.image} alt=""></img>
                <div className="card-body">
                    <h2 className="card-title">
                        {item.title}
                    </h2>
                    <p className="card-text product-desc">
                        {item.description}
                    </p>
                    <p>
                        <Link to={"/product/"+item.id} className="btn btn-primary mr-2" >
                            Detail
                        </Link>
                        
                    </p>
                </div>
            </div>
        </div>)

    );
};

export default Item;
