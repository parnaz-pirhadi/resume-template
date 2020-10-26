import React from "react";
import LeftSideBar from "./LeftSideBar";

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
        <LeftSideBar />
      </div>
    );
  }
}

export default index;
