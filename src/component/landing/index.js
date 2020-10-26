import React from "react";
import Landing from "./Landing";

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
        <Landing />
      </div>
    );
  }
}

export default index;
