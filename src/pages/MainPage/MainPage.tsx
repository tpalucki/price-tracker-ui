import React from "react";
import './MainPage.css';
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import Items from "../../resources/items";

const items = Items;

const Content = () => {
    return (
        <div className="Main-content">
            <section>
                <h1>Products</h1>
                <div>
                    {items.map((item, index) => (
                        <div key={index} className="Main-item-preview">
                            <img src={item.image} alt={item.name} className="Main-item-preview-image"/>
                            <div>
                                <label>{item.name}</label>
                            </div>
                            <button type="button" className="btn btn-primary">{item.price}</button>
                        </div>
                    ))}
                </div>
            </section>
        </div>
    )
}

function MainPage() {
    return (
        <div className="Main">
            <Header/>
            <Content/>
            <Footer/>
        </div>
    );
}

export default MainPage;