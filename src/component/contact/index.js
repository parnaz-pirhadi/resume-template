import React from "react";
import Contact from "./Contact";

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
        <Contact />
      </div>
    );
  }
}

export default index;
