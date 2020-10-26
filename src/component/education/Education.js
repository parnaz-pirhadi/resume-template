import React, { Fragment } from "react";
import { connect } from 'react-redux';
import {fetchEducationData} from "../../actions/EducationActionCreator"


class Education extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
      educationData:{}
    };
  }

  componentDidMount(){
      this.props.fetchEducationData();
  }
  componentDidUpdate(prevProps, prevState){
    if(this.props.educationReducer!==prevProps.educationReducer){
      if(this.props.educationReducer.educationData){
        this.setState({educationData:this.props.educationReducer.educationData})
      }
    }
  }

  render() {
    const { loading ,educationData} = this.state;
    return (
        <div>

<section class="section-wrapper section-education">
    <div class="container-fluid">
        <div class="row">
            <div class="col-md-12">
    <div class="section-title"><h2>{educationData.title}</h2></div>
            </div>
        </div>
        <div class="row">
            <div class="col-md-12">
                <div class="content-item">
    <small>{educationData.year}</small>
    <h3>{educationData.degree}</h3>
    <h4>{educationData.university}</h4>

    <p>{educationData.location}</p>
                </div>
            
     
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
        educationReducer: storeState.educationReducer
    
    };
  }
function mapDispatchToProps (dispatch) {
    return {
        fetchEducationData: () =>
        dispatch(fetchEducationData()),

    };
  }
export default connect (mapStateToProps,mapDispatchToProps) (Education);
