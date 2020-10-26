import React from "react";
import Expertise from "./Expertise";

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
        <Expertise />
      </div>
    );
  }
}

export default index;
