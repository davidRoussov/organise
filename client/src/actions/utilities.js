const utilities = response => new Promise((resolve, reject) => {
  if(response.ok) resolve(response);
  else {
    response.json()
      .then(json => reject(json))
      .catch(() => reject(response.statusText));
  }
});

export default utilities;