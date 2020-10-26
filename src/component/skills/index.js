import React from "react";
import Skills from "./Skills";

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
        <Skills />
      </div>
    );
  }
}

export default index;
