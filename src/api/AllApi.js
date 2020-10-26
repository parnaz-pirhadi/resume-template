import React from 'react';
import axios from 'axios';
import BaseConstant from '../constants/BaseConstant';
import { authHeader } from '../methodService/auth-header';



let AllApi = {
 
    fetchAboutData () {
    return axios.get(`${BaseConstant.API_URL}/rest/api/about.json`, { headers: authHeader() });
  },
  fetchExpertiseData () {
    return axios.get(`${BaseConstant.API_URL}/rest/api/expertise.json`, { headers: authHeader() });
  },
  fetchSkillsData () {
    return axios.get(`${BaseConstant.API_URL}/rest/api/skills.json`, { headers: authHeader() });
  },
  fetchExperienceData () {
    return axios.get(`${BaseConstant.API_URL}/rest/api/experience.json`, { headers: authHeader() });
  },
  fetchEducationData() {
    return axios.get(`${BaseConstant.API_URL}/rest/api/education.json`, { headers: authHeader() });
  },
  fetchContactData() {
    return axios.get(`${BaseConstant.API_URL}/rest/api/contact.json`, { headers: authHeader() });
  },
  makePostRequestCreator () {
    let call;
    return (url, body) => {
      if (call) {
        call.cancel();
      }
      call = axios.CancelToken.source();
      return axios.post(url, body, { cancelToken: call.token, headers: authHeader()});
    };
  }
};
let post = AllApi.makePostRequestCreator();
export default AllApi;
