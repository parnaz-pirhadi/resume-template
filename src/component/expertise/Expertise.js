import React, { Fragment } from "react";
import { connect } from 'react-redux';
import {fetchExpertiseData} from "../../actions/ExpertiseActionCreator"


class Expertise extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
      expertiseData:{}
    };
  }

  componentDidMount(){
      this.props.fetchExpertiseData();
  }
  componentDidUpdate(prevProps, prevState){
    if(this.props.expertiseReducer!==prevProps.expertiseReducer){
      if(this.props.expertiseReducer.expertiseData){
        this.setState({expertiseData:this.props.expertiseReducer.expertiseData})
      }
    }
  }

  render() {
    const { loading ,expertiseData} = this.state;
    return (
        <div>
       <section class="expertise-wrapper section-wrapper gray-bg">
    <div class="container-fluid">
        <div class="row">
            <div class="col-md-12">
                <div class="section-title">
                    <h2>{expertiseData.title}</h2>
                </div>
            </div>
        </div>

        <div class="row">
            
                    {expertiseData&&expertiseData.expertises&&expertiseData.expertises.map((item,index)=>{
                        return(
                            <div class="col-md-6">
                            <div class="expertise-item">
                        <h3>{item.title}</h3>
                            {/* <p>{item.description}</p> */}
                            </div>
                   </div>
                        );
                    })}
                  
        </div>
    </div>
</section>    
    
    </div>
    );
  }
}
function mapStateToProps  (storeState) {
    return {
      expertiseReducer: storeState.expertiseReducer
    
    };
  }
function mapDispatchToProps (dispatch) {
    return {
      fetchExpertiseData: () =>
        dispatch(fetchExpertiseData()),

    };
  }
export default connect (mapStateToProps,mapDispatchToProps) (Expertise);
