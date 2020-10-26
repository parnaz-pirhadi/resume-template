import React from "react";
// import image from "../../content/img/img-profile.jpg"

class LeftSideBar extends React.Component {
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
        <div id="main-wrapper">
          {/* <div id="preloader">
            <div id="status">
              <div class="status-mes"></div>
            </div>
          </div> */}

          <div class="columns-block">
            <div class="left-col-block blocks">
              <header class="header">
                <div class="content text-center">
                  <h1>Hi, I'm parnaz pirhadi!</h1>

                  <p class="lead">Front-End Developer</p>
                  <ul class="social-icon">
                    <li>
                      <a href="https://www.linkedin.com/in/parnaz-pirhadi-28752783">
                        <i class="fa fa-linkedin" aria-hidden="true"></i>
                      </a>
                    </li>
                    <li>
                      <a href="https://github.com/parnaz-pirhadi">
                        <i class="fa fa-git" aria-hidden="true"></i>
                      </a>
                    </li>
                    {/* <li>
                    <a href = "mailto: pirhadi_parnaz@yahoo.com">
                        <i class="fa fa-envelope" aria-hidden="true"></i>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i class="fa fa-twitter" aria-hidden="true"></i>
                      </a>
                    </li> */}
                  </ul>
                </div>
                <div class="profile-img">
                  {/* <img src={image}></img> */}
                  {/* <div class="image"></div> */}
                </div>
              </header>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default LeftSideBar;
