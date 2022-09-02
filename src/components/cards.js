import React, {useState} from 'react';
import "bootstrap/dist/css/bootstrap.min.css"
import product from '../data/product';

export default function Cards() {
    const [search, setSearch] = useState("");
    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark p-3">
                <div className="container-fluid">
                    <a className="navbar-brand" href="/">RAYES</a>
                    <a className="navbar-brand" href="/">Home</a>
                    <a className="navbar-brand" href="/">Products</a>
                    <a className="navbar-brand" href="/">About us</a>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">                      
                    </ul>
                    <form className="d-flex">
                        <input className="form-control me-2"  type="search" placeholder="Search" aria-label="Search" 
                        onChange={(e) => {
                            setSearch(e.target.value);
                        }}
                        />
                         </form>
                         </div>
                         </div>
                        </nav>

                        <section className="py-5 container">
                            <div className="row justify-content-center">
                        {product.filter((val) => {
                            if (search === "") {
                                return val
                            } else if (val.product_name.toLowerCase().includes(search.toLowerCase())) {
                                return val
                            }
                        }).map((item) => {
                            return (
                                <div className="App col-11 col-md-6 col-lg-4 mx-0 mb-5">
                                    <div className="card p-0 overflow-hidden h-60 shadow" key={item.id}>
                                    <img src={item.thumb} className="card-img-top" alt="..." />
                                    <div className="card-body">
                                        <h5 className="card-title">{item.product_name}</h5>
                                        <p>{item.description}</p>
                                        <p className="card-text">{item.price}</p>
                                        <a href="/" className="btn btn-primary">Purchase</a>
                                    </div>
                                    </div>
                                </div>
                               
                                 )
                                }) 
                            }  
                            </div>
                        </section>            
        </>
    );
}