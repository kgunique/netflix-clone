import Banner from './Banner';
import './homescreen.css';
import Nav from './Nav';
import requests from './Request';
import Row from './Row';

function HomeScreen() {
    return (
        <div className="homescreen">
            {/* Navbar */}
            <Nav />

            {/* Banner */}
            <Banner/>
         
            <Row title="A Netflix Original"
                fetchUrl={requests.fetchNetflixOriginals}
                isLargeRow
            />
             <Row title="Trending Now"
                fetchUrl={requests.fetchTrending}
            />
            <Row title="Top Rated"
                fetchUrl={requests.fetchTopRated}
            />
            <Row title="Action Movies"
                fetchUrl={requests.fetchActionMovies}
            />
            <Row title="Horror Movies"
                fetchUrl={requests.fetchHorrorMovies}
            />
            <Row title="Romantic Movies"
                fetchUrl={requests.fetchRomanceMovies}
            />
              <Row title="Documentaries"
                fetchUrl={requests.fetchDocumentaries}
            />
        </div>
    )
}

export default HomeScreen
