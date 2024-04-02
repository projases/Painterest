import { accessKey } from "./accessKey";

export const randomQuery = () => {
  return new Promise((resolve, reject) => {
    fetch(
      `https://api.unsplash.com/photos/random?client_id=${accessKey}&count=30`,
    )
      .then((response) => response.json())
      .then((data) => {
        resolve(data);
      })
      .catch(reject);
  });
};
