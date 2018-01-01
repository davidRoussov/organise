const utilities = response => new Promise((resolve, reject) => {
  if(response.ok) resolve(response);
  else {
    response.json()
      .then(json => reject(json))
      .catch(() => reject(response.statusText));
  }
});

export default utilities;

export const handleResponse = response => new Promise((resolve, reject) => {
  if(response.ok) {
    response.json()
      .then(response => resolve(response))
      .catch(() => reject('expected a json response from api'))
  }
  else {
    response.json()
      .then(response => reject(response.message))
      .catch(() => reject(response.statusText))
  }
});