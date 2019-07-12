import React, { Component } from "react";
import Loader from "./Loader";

class Tags extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tags: null
    };
  }

  componentDidMount = () => {
    fetch("https://conduit.productionready.io/api/tags")
      .then(res => res.json())
      .then(tags =>
        this.setState({
          tags: tags.tags
        })
      );
  };
  render() {
    const { tags } = this.state;
    return (
      <>
        <h4>Popular tags</h4>

        {tags ? (
          tags.map((tag, index) => {
            return (
              <a
                className="button is-rounded is-small is-rounded is-dark"
                key={index}
                href="/#"
              >
                {tag}
              </a>
            );
          })
        ) : (
          <Loader />
        )}
      </>
    );
  }
}

export default Tags;
