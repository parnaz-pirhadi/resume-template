import React from "react";
import {connect} from 'react-redux';
import {fetchSkillsData} from "../../actions/SkillsActionCreator"


class Skills extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            loading: true,
            skillsData: {}
        };
    }

    componentDidMount() {
        this.props.fetchSkillsData();
    }

    componentDidUpdate(prevProps, prevState) {
        if (this.props.skillsReducer !== prevProps.skillsReducer) {
            if (this.props.skillsReducer.skillsData) {
                this.setState({skillsData: this.props.skillsReducer.skillsData}, () => {
                    console.log("skills", this.state.skillsData)
                })
            }
        }
    }

    render() {
        const {loading, skillsData} = this.state;
        return (
            <div>
                <section class="section-wrapper skills-wrapper gray-bg">
                    <div class="container-fluid">
                        <div class="row">
                            <div class="col-md-12">
                                <div class="section-title">
                                    <h2>{skillsData.title}</h2>
                                </div>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-md-12">
                                <div class="progress-wrapper">
                                    {skillsData && skillsData.skills && skillsData.skills.map((item, index) => {
                                        return (
                                            <span className="progress-title">{item.title}


                                            </span>
                                            // <div class="progress-item">
                                            //     <span class="progress-title">{item.title}</span>
                                            //
                                            //     <div class="progress">
                                            //         <div class="progress-bar" role="progressbar"
                                            //              aria-valuenow={item.value} aria-valuemin="0"
                                            //              aria-valuemax="100" style={{width: `${item.value}%`}}><span
                                            //             class="progress-percent"> {item.value}%</span>
                                            //         </div>
                                            //     </div>
                                            // </div>
                                        );
                                    })}
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

            </div>
        );
    }
}

function mapStateToProps(storeState) {
    return {
        skillsReducer: storeState.skillsReducer

    };
}

function mapDispatchToProps(dispatch) {
    return {
        fetchSkillsData: () =>
            dispatch(fetchSkillsData()),

    };
}

export default connect(mapStateToProps, mapDispatchToProps)(Skills);
