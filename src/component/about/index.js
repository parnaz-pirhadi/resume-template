import React from "react";
import About from "./About";

class index extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
    };
  }

  render() {
    const { loading } = this.state.loading;
    return (
      <div>
        <About />
      </div>
    );
  }
}

export default index;
