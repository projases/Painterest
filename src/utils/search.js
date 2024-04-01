const accessKey = "pd8stjR7GiEWiGPtVxUJQ8y1eq1q3snZenqxyJDBaOU";

export const search = (query) => {
  return new Promise((resolve, reject) => {
    fetch(
      `https://api.unsplash.com/search/photos?query=${query}&client_id=${accessKey}`,
    )
      .then((response) => response.json())
      .then((data) => {
        resolve(data.results);
      })
      .catch(reject);
  });
};
