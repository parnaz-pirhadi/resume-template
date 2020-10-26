import React from "react";
import Education from "./Education";

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
        <Education />
      </div>
    );
  }
}

export default index;
