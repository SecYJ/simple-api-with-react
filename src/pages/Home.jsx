import Banner from "../components/Banner";
import Header from "../components/Header";

const Home = () => {
    return (
        <>
            <Header />
            <main>
                <div className="container">
                    <Banner />
                </div>
            </main>
        </>
    );
};
export default Home;
