import React from "react";
import apple from "../svg/apple.svg";
import link from "../svg/link.svg";
import rss from "../svg/rss.svg";

const Podcast = (props) => {
  return (
    <div className="podcast">
      <div className="podcast__number">{props.number}</div>
      <div className="podcast__body">
        <img className="podcast__image" src={props.image} alt={props.title} />
        <div className="podcast__details">
          <h2 className="podcast__details--title">{props.title}</h2>
          <p className="podcast__details--publisher">
            by <span>{props.publisher}</span>
          </p>
          <p className="podcast__details--episodes">
            {props.episodes} episodes
          </p>
          <div className="podcast__links">
            <a className="podcast__link" href="/">
              <img
                className="podcast__link--svg"
                src={apple}
                alt="apple logo"
              />
              itunes
            </a>
            <a
              className="podcast__link"
              href={props.website}
              target="_blank"
              rel="noopener noreferrer"
            >
              <img className="podcast__link--svg" src={link} alt="weblink" />
              web
            </a>
            <a className="podcast__link" href="/">
              <img className="podcast__link--svg" src={rss} alt="rss feed" />
              rss
            </a>
          </div>
        </div>
        <div className="podcast__description">
          <p className="podcast__description--text">{props.description}</p>
        </div>
      </div>
    </div>
  );
};

export default Podcast;
