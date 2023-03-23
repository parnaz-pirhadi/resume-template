import React from "react";
import {connect} from 'react-redux';
import {fetchContactData} from "../../actions/ContactActionCreator"


class Contact extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            loading: true,
            contactData: {}
        };
    }

    componentDidMount() {
        this.props.fetchContactData();
    }

    componentDidUpdate(prevProps, prevState) {
        if (this.props.contactReducer !== prevProps.contactReducer) {
            if (this.props.contactReducer.contactData) {
                this.setState({contactData: this.props.contactReducer.contactData})
            }
        }
    }

    render() {
        const {loading, contactData} = this.state;
        return (
            <div>

                <section class="section-contact section-wrapper">
                    <div class="container-fluid">
                        <div class="row">
                            <div class="col-md-12">
                                <div class="section-title">
                                    <h2>Contact</h2>
                                </div>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-md-12">
                                <address>
                                    <strong>Location</strong><br/>
                                    {contactData.location}
                                </address>
                                <address>
                                    <strong>Phone Number</strong><br/>
                                    {contactData.PhoneNumber}
                                </address>
                                <address>
                                    <strong>Email</strong><br/>
                                    {contactData.Email}
                                </address>
                                <address>
                                    <strong>Gmail</strong><br/>
                                    {contactData.Gmail}
                                </address>
                                <address>
                                    <strong>Github</strong><br/>
                                    {contactData.Github}
                                </address>
                                <address>
                                    <strong>Linkedin</strong><br/>
                                    {contactData.Linkedin}
                                </address>
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
        contactReducer: storeState.contactReducer

    };
}

function mapDispatchToProps(dispatch) {
    return {
        fetchContactData: () =>
            dispatch(fetchContactData()),

    };
}

export default connect(mapStateToProps, mapDispatchToProps)(Contact);
