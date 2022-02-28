const searchPhone = () => {
  const searchField = document.getElementById("search-phone");
  //   console.log(searchField.value);
  const searchText = searchField.value;
  const url = `https://openapi.programming-hero.com/api/phones?search=${searchText}`;
  //   console.log(url);
  fetch(url)
    .then((res) => res.json())
    .then((data) => displayPhone(data.data));
  searchField.value = "";
};
// searchPhone();
const displayPhone = (phones) => {
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
                <h5 class="card-title text-center">${phone.brand}</h5>
                <p class="card-text text-center">
                  ${phone.phone_name}
                </p>
                <button type="button" class="btn btn-primary w-100" onclick="phoneDetails('detail')">Details</button>
              </div>

            </div>
        </div>
      `;
    detailDiv.appendChild(div);
  });
};
const phoneDetails = (detail) => {
  //   console.log("ddd");
  const url = `https://openapi.programming-hero.com/api/phone/${slug}`;
  //   console.log(url);
  fetch(url)
    .then((res) => res.json())
    .then((data) => console.log(data));
};
