export const paint = (data) => {
  const gallery = document.querySelector(".gallery");
  gallery.innerHTML = "";
  data.forEach((photo, index) => {
    const img = document.createElement("img");
    img.src = photo.urls.regular;
    img.alt = photo.alt_description;

    gallery.append(img);

    if ((index + 1) % 3 === 0) {
      img.classList.add("large");
    } else if ((index + 1) % 2 === 0) {
      img.classList.add("medium");
    } else {
      img.classList.add("small");
    }
  });
};
