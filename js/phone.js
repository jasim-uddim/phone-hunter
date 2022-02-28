const searchPhone = () => {
  const url = `https://openapi.programming-hero.com/api/phones?search=iphone`;
  fetch(url)
    .then((res) => res.json())
    .then((data) => phoneDetail(data.data));
};
// searchPhone();
const phoneDetail = (phones) => {
  //   console.log(phones);
  const detailDiv = document.getElementById("search-result");
  phones.forEach((phone) => {
    console.log(phone);
    const div = document.createElement("div");
    div.innerHTML = `
    <div class="col">
          <div class="card">
            <img src="${phone.image}" class="card-img-top" alt="..." />
            <div class="card-body">
              <h5 class="card-title">${phone.phone_name}</h5>
              <p class="card-text">
                ${phone.brand}
              </p>
            </div>
          </div>
        </div>
    `;
    detailDiv.appendChild(div);
  });
};
