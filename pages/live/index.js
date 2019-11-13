import React, { Component } from "react";

const EMBED_URL = "https://embed.twitch.tv/embed/v1.js";
class Live extends Component {
  static getInitialProps({ query }) {
    const isServer = typeof window === "undefined";

    return {
      targetID: query.targetID,
      width: query.width,
      height: query.height,
      channel: query.channel,
      isServer
    };
  }
  componentDidMount() {
    let embed;
    const script = document.createElement("script");
    script.setAttribute("src", EMBED_URL);
    script.addEventListener("load", () => {
      embed = new window.Twitch.Embed(this.props.targetID, { ...this.props });
    });
    document.body.appendChild(script);
  }
  render() {
    return (
      <div className="h-100 d-flex flex-column justify-content my-3">
        <div className="h-100 p-3">
          <h1>Moi Live</h1>
          <div
            id={this.props.targetID}
            className="h-100"
          ></div>
        </div>
      </div>
    );
  }
}

// Live.defaultProps = {
//   targetID: "twitch-embed",
//   width: "940",
// 	height: "480",
// 	channel:"moikune"
// };
export default Live;
