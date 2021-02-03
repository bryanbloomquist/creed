import React, { Component } from "react";
import Navbar from "./components/navbar";
import Header from "./components/header";
import Container from "./components/container";
import Podcast from "./components/podcast";
import SampleAPI from "./sample-api-response.json";
import "./scss/main.scss";

class App extends Component {
  state = {
    podcasts: SampleAPI.podcasts,
  };

  render() {
    return (
      <div>
        <Navbar />
        <Header />
        <Container>
          {this.state.podcasts.slice(0, 5).map((podcast, i) => (
            <Podcast
              key={podcast.id}
              number={i + 1}
              image={podcast.image}
              title={podcast.title}
              publisher={podcast.publisher}
              episodes={podcast.total_episodes}
              website={podcast.website}
              description={podcast.description}
            />
          ))}
        </Container>
      </div>
    );
  }
}

export default App;
