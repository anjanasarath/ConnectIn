const API_URL = "http://posttestserver.com/post.php?dir=example"

 const fireApiRequest = (API_URL, jData) => {
    return fetch(API_URL, {
    method: 'POST',
    body: jData
  }).then((response) => {
    if (!response.ok) {
      throw Error(response.statusText);
    }
    return response.text();
  }).then((response) => {
    console.log(response);
    return {response}
  })
};

export const uploadImageApi = (file) => {
  var data = new FormData();
  data.append('file', file);
  return fireApiRequest(API_URL, data)
};

export const submitFormApi = (companyName, companyDesc) => {
const jdata = {
    'companyName':companyName,
    'companyDesc':companyDesc
  }
  var data = JSON.stringify(jdata)
  return fireApiRequest(API_URL,data)
};
