import React from "react";
import Experience from "./experience";

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
        <Experience />
      </div>
    );
  }
}

export default index;
