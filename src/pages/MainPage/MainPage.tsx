import React from "react";
import './MainPage.css';
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import Items from "../../resources/items";

const items = Items;

const Content = () => {
    return (
        <div className="content">
            <section>
                <h1>Products</h1>
                <div>
                    {items.map((item, index) => (
                        <div key={index} className="item-preview">
                            <img src={item.image} alt={item.name} className="item-preview-image"/>
                            <div className="d-flex flex-column flex-grow-1">
                                <div className="fs-3">{item.name}</div>
                                <div>{`Rok ${item.releaseYear}, liczba elementów: ${item.numberOfElements}, cena/el: ${Math.fround(item.price / item.numberOfElements).toFixed(2)}zł`}</div>
                            </div>
                            <button type="button"
                                    className="btn btn-outline-primary btn-lg">{`od ${item.price} zł`}</button>
                        </div>
                    ))}
                </div>
            </section>
            <section>
                <nav aria-label="Page navigation example">
                    <ul className="pagination justify-content-center">
                        <li className="page-item">
                            <a className="page-link" href="#" aria-label="Previous">
                                <span aria-hidden="true">&laquo;</span>
                            </a>
                        </li>
                        <li className="page-item"><a className="page-link" href="#">1</a></li>
                        <li className="page-item"><a className="page-link" href="#">2</a></li>
                        <li className="page-item"><a className="page-link" href="#">3</a></li>
                        <li className="page-item"><a className="page-link" href="#">4</a></li>
                        <li className="page-item"><a className="page-link" href="#">5</a></li>
                        <li className="page-item">
                            <a className="page-link" href="#" aria-label="Next">
                                <span aria-hidden="true">&raquo;</span>
                            </a>
                        </li>
                    </ul>
                </nav>
            </section>
        </div>
    )
}

function MainPage() {
    return (
        <div className="Main container-fluid">
            <Header/>
            <Content/>
            <Footer/>
        </div>
    );
}

export default MainPage;