import React, { Component } from "react";

const EMBED_URL = "https://embed.twitch.tv/embed/v1.js";
class Live extends Component {
  static async getInitialProps({ query }) {
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
    async() => {
      console.log("activate");
      if (document.querySelectorAll(`${this.props.targetId} iframe`).length > 1)
        await document.querySelectorAll(`${this.props.targetId} iframe`).pop();
    };
  }
  render() {
    return (
      <div className="h-100 d-flex flex-column justify-content my-3">
        <style jsx>{`
          #twitch-embed iframe {
            border: solid #000 0.125rem !important;
          }
        `}</style>
        <div className="h-100 p-3">
          <h1 title="Try this /live/:enter-your-favorite-streamer">Moi Live</h1>
          <div id={this.props.targetID} className="h-100"></div>
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
