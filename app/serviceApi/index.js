const API_URL = "http://posttestserver.com/post.php?dir=example"

export const uploadImageApi = (file) => {
  var data = new FormData();
  data.append('file', file);

  return fetch(API_URL, {
      method: 'POST',
      body: data
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

export const submitFormApi = (companyName, companyDesc) => {
  var data = new FormData();
  data.append('companyName', companyName);
  data.append('companyDesc', companyDesc)

  return fetch(API_URL,{
    method: 'POST',
    body: data
  }).then((response) => {
    if(!response.ok) {
      throw Error(response.statusText);
    }
    return response.text();
  }).then((response) => {
    console.log(response);

    return {response}
  })
};
