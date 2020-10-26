import React, { Fragment } from "react";
import { connect } from 'react-redux';
import {fetchExperienceData} from "../../actions/ExperienceActionCreator"


class Experience extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
      experienceData:{}
    };
  }

  componentDidMount(){
      this.props.fetchExperienceData();
  }
  componentDidUpdate(prevProps, prevState){
    if(this.props.experienceReducer!==prevProps.experienceReducer){
      if(this.props.experienceReducer.experienceData){
        this.setState({experienceData:this.props.experienceReducer.experienceData.history})
      }
    }
  }

  render() {
    const { loading ,experienceData} = this.state;
    return (
        <div>
       <section class="section-wrapper section-experience gray-bg">
    <div class="container-fluid">
        <div class="row">
            <div class="col-md-12">
    <div class="section-title"><h2>{experienceData.title}</h2></div>
            </div>
        </div>
        <div class="row">
            <div class="col-md-12">
                {experienceData&&experienceData.list&&experienceData.list.map((item,index)=>{
                    return(
                        <div class="content-item">
                    <small>{item.date}</small>
                    <h3>{item.subject}</h3>
                    <h4>{item.position}</h4>
                    {item.dataList.map((data,index)=>{
                        return(
                            <div className="row" style={{display:"flex"}}>
                                <i class="fa fa-check-square-o" aria-hidden="true" style={{margin:"5px"}}></i>
                                <p>{data.text}</p>

                            </div>
                        );
                    })}
                </div>
                    );
                })}
                
               
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
        experienceReducer: storeState.experienceReducer
    
    };
  }
function mapDispatchToProps (dispatch) {
    return {
        fetchExperienceData: () =>
        dispatch(fetchExperienceData()),

    };
  }
export default connect (mapStateToProps,mapDispatchToProps) (Experience);
