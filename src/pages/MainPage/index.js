import requests from "../../api/requests";
import "../../App.css";
import Banner from "../../components/Banner";
import Row from "../../components/Row";

export default function MainPage() {
  return (
    <div>
      <Banner />
      <Row
        title="NETFLIX ORIGINALS"
        id="NO"
        fetchURL={requests.fetchNetflixOriginals}
        isLargeRow
      ></Row>
      <Row title="Trending Now" id="TN" fetchURL={requests.fetchTrending}></Row>
      <Row title="Top Rated" id="TR" fetchURL={requests.fetchTopRated}></Row>
      <Row
        title="Action Movies"
        id="AM"
        fetchURL={requests.fetchActionMovies}
      ></Row>
      <Row
        title="Comedy Movies"
        id="CM"
        fetchURL={requests.fetchComedyMovies}
      ></Row>
    </div>
  );
}
