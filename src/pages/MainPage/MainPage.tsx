import React from "react";
import './MainPage.css';
import logo from "../../logo.svg";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";

interface ItemPreview {
    name: string;
    price: number;
    image: string;
    url: string;
}

const items = [
    {
        name: "LEGO® Star Wars™ AT-AT™",
        price: 799.99,
        image: "https://sh-s7-live-s.legocdn.com/is/image//LEGO/75288_alt1?$main$",
        url: "https://www.lego.com/pl-pl/product/at-at-75288"
    } as ItemPreview,
    {
        name: "LEGO® Star Wars™ Millennium Falcon™",
        price: 2999.99,
        image: "https://sh-s7-live-s.legocdn.com/is/image//LEGO/75192_alt1?$main$",
        url: "https://www.lego.com/pl-pl/product/millennium-falcon-75192"
    } as ItemPreview,
    {
        name: "LEGO® Star Wars™ Śmigacz Sithów™",
        price: 399.99,
        image: "https://sh-s7-live-s.legocdn.com/is/image//LEGO/75272_alt1?$main$",
        url: "https://www.lego.com/pl-pl/product/sith-tie-fighter-75272"
    } as ItemPreview,
    {
        name: "LEGO® Technic™ Lamborghini Sián FKP 37",
        price: 1799.99,
        image: "https://sh-s7-live-s.legocdn.com/is/image//LEGO/42115_alt1?$main$",
        url: "https://www.lego.com/pl-pl/product/lamborghini-sian-fkp-37-42115"
    } as ItemPreview,
    {
        name: "LEGO® Technic™ Ferrari 488 GTE “AF Corse #51”",
        price: 799.99,
        image: "https://sh-s7-live-s.legocdn.com/is/image//LEGO/42125_alt1?$main$",
        url: "https://www.lego.com/pl-pl/product/ferrari-488-gte-42125"
    } as ItemPreview,
    {
        name: "LEGO® Technic™ Bugatti Chiron",
        price: 1499.99,
        image: "https://sh-s7-live-s.legocdn.com/is/image//LEGO/42083_alt1?$main$",
        url: "https://www.lego.com/pl-pl/product/bugatti-chiron-42083"
    } as ItemPreview,
    {
        name: "LEGO® Technic™ Porsche 911 GT3 RS",
        price: 1499.99,
        image: "https://sh-s7-live-s.legocdn.com/is/image//LEGO/42056_alt1?$main$",
        url: "https://www.lego.com/pl-pl/product/porsche-911-gt3-rs-42056"
    } as ItemPreview,
    {
        name: "LEGO® Technic™ Mercedes-Benz Arocs 3245",
        price: 999.99,
        image: "https://sh-s7-live-s.legocdn.com/is/image//LEGO/42043_alt1?$main$",
        url: "https://www.lego.com/pl-pl/product/mercedes-benz-arocs-3245-42043"
    }
]

const Content = () => {
    return (
        <div className="Main-content">
            <section>
                <h1>React Demo</h1>
                <p>Current routes:</p>
                <a href="/">Main Page</a><br/>
                <a href="/demo">React Demo Page</a>
            </section>
            <section>
                <h1>Products</h1>
                <div>
                    {items.map((item, index) => (
                        <div key={index} className="Main-item-preview">
                            <img src={item.image} alt={item.name} className="Main-item-preview-image"/>
                            <div>
                                <label>{item.name}</label>
                            </div>
                            <button>{item.price}</button>
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