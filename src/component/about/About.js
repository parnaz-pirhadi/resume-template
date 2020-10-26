import React from "react";
import { connect } from 'react-redux';
import {fetchAboutData} from "../../actions/AboutActionCreator"


class About extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
      aboutData:{}
    };
  }

  componentDidMount(){
      this.props.fetchAboutData();
  }
  componentDidUpdate(prevProps, prevState){
    if(this.props.aboutReducer!==prevProps.aboutReducer){
      if(this.props.aboutReducer.aboutData){
        this.setState({aboutData:this.props.aboutReducer.aboutData})
      }
    }
  }

  render() {
    const { loading ,aboutData} = this.state;
    return (
        <div>
        <section class="intro section-wrapper">
        <div class="container-fluid">
            <div class="row">
                <div class="col-md-12">
                    <div class="section-title">
    <h2>{aboutData.title}</h2>
                    </div>
                </div>
                <div class="col-md-12">
                    <p>
                        {aboutData.description}
    
                    </p>
                </div>
            </div>
        </div>
    </section>
    
    
    </div>
    );
  }
}
function mapStateToProps  (storeState) {
    return {
      aboutReducer: storeState.aboutReducer
    
    };
  }
function mapDispatchToProps (dispatch) {
    return {
      fetchAboutData: () =>
        dispatch(fetchAboutData()),

    };
  }
export default connect (mapStateToProps,mapDispatchToProps) (About);
