export function authHeader () {
    let auth = JSON.parse(localStorage.getItem("auth"));
    return { "Content-Type": "application/json"};
    // if (auth && auth.value && auth.value.accessToken) {
    //   return { "Content-Type": "application/json", "Authorization": "Bearer " + auth.value.accessToken };
    // } 
    // else {
    //   return {};
    // }
  }
  export function authHeaderFile () {
    let auth = JSON.parse(localStorage.getItem("auth"));
    if (auth && auth.value && auth.value.accessToken) {
      return { "Content-Type": "application/octet-stream", "Authorization": "Bearer " + auth.value.accessToken };
    } else {
      return {};
    }
  }
  