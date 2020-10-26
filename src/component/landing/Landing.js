import React from "react";
import LeftSideBar from "../leftSideBar/index";
import About from "../about/index";
import Expertise from "../expertise/index";
import Skills from "../skills/index";
import Experience from "../experience/index"
import Education from "../education/Education";
import Contact from "../contact"

class Landing extends React.Component {
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
        <div className="right-col-block blocks">
          <About/>
          <Expertise/>
          <Skills/>
          <Experience/>
          <Education/>
          <Contact/>
        </div>
      </div>
    );
  }
}

export default Landing;
