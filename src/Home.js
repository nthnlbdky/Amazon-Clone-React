import './Home.css' 
import Product from './Product'

const Home = () => {
    return (
        <div className="home">
            <div className="home__container">
                <img src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg" alt="" className="home__image" />
            <div className="home__row">
                <Product
                id="12321341" 
                title="The Lean Start up"
                price={29.99}
                image="https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._AC_SY400_.jpg"
                rating={5}
                />
                <Product
                id="49538094"
                title="Kenwood KMix Stand Mixer for Baking"
                price={239.0}
                rating={4}
                image="https://images-na.ssl-images-amazon.com/images/I/810%2BGNdkzKL._AC_SX450_.jpg"
                />
            </div>
            <div className="home__row">
            <Product
                id="12321323" 
                title="The Lean Start up"
                price={29.99}
                image="https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._AC_SY400_.jpg"
                rating={5}
                />
                <Product
                id="12321347" 
                title="The Lean Start up"
                price={29.99}
                image="https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._AC_SY400_.jpg"
                rating={5}
                />
                <Product
                id="12321351" 
                title="The Lean Start up"
                price={29.99}
                image="https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._AC_SY400_.jpg"
                rating={5}
                />
            </div>
            <div className="home__row">
            <Product
                id="12321346" 
                title="The Lean Start up"
                price={29.99}
                image="https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._AC_SY400_.jpg"
                rating={5}
                />
            </div>
            </div>
        </div>
    )
}

export default Home
