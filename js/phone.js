const phoneDetailsDiv = document.getElementById("phone-details");
const searchField = document.getElementById("search-phone");
const noResultDiv = document.getElementById("no-result");
const resultDiv = document.getElementById("result");
const detailDiv = document.getElementById("search-result");
const searchPhone = () => {
  phoneDetailsDiv.textContent = "";
  resultDiv.textContent = "";
  const searchText = searchField.value;
  const url = `https://openapi.programming-hero.com/api/phones?search=${searchText}`;
  //   console.log(url);
  fetch(url)
    .then((res) => res.json())
    .then((data) => displayPhone(data.data));
  searchField.value = "";
};

const displayPhone = (phones) => {
  console.log(phones.length);

  detailDiv.textContent = "";
  if (phones.length == 0) {
    const p = document.createElement("p");
    p.innerText = "not found result";
    noResultDiv.appendChild(p);
  } else {
    noResultDiv.textContent = "";
    phones.slice(0, 20).forEach((phone) => {
      const div = document.createElement("div");
      div.innerHTML = `
        <div class="col">
              <div class="card p-4">
                <img src="${phone?.image}" class="card-img-top" alt="..." />
                <div class="card-body">
                  <h5 class="card-title text-center">${phone?.brand}</h5>
                  <p class="card-text text-center">
                    ${phone?.phone_name}
                  </p>
                  <button type="button" class="btn btn-primary w-100" onclick="phoneDetails('${phone?.slug}')">Details</button>
                </div>
                </div>
          </div>
        `;

      detailDiv.appendChild(div);
    });
    const p = document.createElement("p");
    p.innerText = `result:${phones.length}`;
    resultDiv.appendChild(p);
  }
};
// single phone Details
const phoneDetails = (detail) => {
  // console.log(detail);

  const url = `https://openapi.programming-hero.com/api/phone/${detail}`;
  fetch(url)
    .then((res) => res.json())
    .then((data) => displayPhoneDetails(data?.data));
};
const displayPhoneDetails = (data) => {
  console.log(data);
  phoneDetailsDiv.textContent = "";
  const div = document.createElement("div");
  div.innerHTML = `
  <div class="card w-50 mx-auto mb-4 p-4">
    <img src="${data?.image}" class="card-img-top" alt="..." />
    <div class="card-body">
        <h5 class="card-title text-center">${data?.brand}</h5>
        <p class="card-text text-center">
        ${data?.name}
        </p>
      </div>
  </div>       
  <div class="w-75 mx-auto">
    <div class="row gx-0">
    <div class="col-12 mb-2">
    <div class="border bg-light px-2 text-center">Phone Details</div>
  </div>
    </div>
    <div class="row gx-0">
      <div class="col-4">
      <div class="border bg-light px-2">releaseDate</div>
      </div>
      <div class="col-8">
        <div class=" border bg-light px-2">${
          data.releaseDate ? data.releaseDate : "no fount release date"
        }</div>
      </div>
    </div>
    <div class="row gx-0">
      <div class="col-4">
      <div class="border bg-light px-2">brand</div>
      </div>
      <div class="col-8">
        <div class=" border bg-light px-2">${data?.brand}</div>
      </div>
    </div>
    <div class="row gx-0">
      <div class="col-4">
      <div class="border bg-light px-2">name</div>
      </div>
      <div class="col-8">
        <div class=" border bg-light px-2">${data?.name}</div>
      </div>
    </div>
    <div class="row gx-0">
      <div class="col-4">
      <div class="border bg-light px-2">slug</div>
      </div>
      <div class="col-8">
        <div class=" border bg-light px-2">${data?.slug}</div>
      </div>
    </div>
    <div class="row gx-0">
    <div class="col-12 my-2">
    <div class="border bg-light px-2 text-center">MainFeatures</div>
  </div>
    </div>
    <div class="row gx-0">
      <div class="col-4">
      <div class="border bg-light px-2">chipSet</div>
      </div>
      <div class="col-8">
        <div class=" border bg-light px-2">${data?.mainFeatures?.chipSet}</div>
      </div>
    </div>
    <div class="row gx-0">
      <div class="col-4">
      <div class="border bg-light px-2">displaySize</div>
      </div>
      <div class="col-8">
        <div class=" border bg-light px-2">${
          data?.mainFeatures?.displaySize
        }</div>
      </div>
    </div>
    <div class="row gx-0">
      <div class="col-4">
      <div class="border bg-light px-2">memory</div>
      </div>
      <div class="col-8">
        <div class=" border bg-light px-2">${data?.mainFeatures?.memory}</div>
      </div>
    </div>
    <div class="row gx-0">
      <div class="col-4">
      <div class="border bg-light px-2">sensors</div>
      </div>
      <div class="col-8">
        <div class=" border bg-light px-2">${data?.mainFeatures?.sensors}</div>
      </div>
    </div>
    <div class="row gx-0">
      <div class="col-4">
      <div class="border bg-light px-2">storage</div>
      </div>
      <div class="col-8">
        <div class=" border bg-light px-2">${data?.mainFeatures?.storage}</div>
      </div>
    </div>
    <div class="row gx-0">
    <div class="col-12 my-2">
    <div class="border bg-light px-2 text-center">Others</div>
  </div>
    </div>
    <div class="row gx-0">
      <div class="col-4">
      <div class="border bg-light px-2">Bluetooth</div>
      </div>
      <div class="col-8">
        <div class=" border bg-light px-2">${data?.others?.Bluetooth}</div>
      </div>
    </div>
    <div class="row gx-0">
      <div class="col-4">
      <div class="border bg-light px-2">GPS</div>
      </div>
      <div class="col-8">
        <div class=" border bg-light px-2">${data?.others?.GPS}</div>
      </div>
    </div>
    <div class="row gx-0">
      <div class="col-4">
      <div class="border bg-light px-2">NFC</div>
      </div>
      <div class="col-8">
        <div class=" border bg-light px-2">${data?.others?.NFC}</div>
      </div>
    </div>
    <div class="row gx-0">
      <div class="col-4">
      <div class="border bg-light px-2">Radio</div>
      </div>
      <div class="col-8">
        <div class=" border bg-light px-2">${data?.others?.Radio}</div>
      </div>
    </div>
    <div class="row gx-0">
      <div class="col-4">
      <div class="border bg-light px-2">USB</div>
      </div>
      <div class="col-8">
        <div class=" border bg-light px-2">${data?.others?.USB}</div>
      </div>
    </div>
    <div class="row gx-0">
      <div class="col-4">
      <div class="border bg-light px-2">WLAN</div>
      </div>
      <div class="col-8">
        <div class=" border bg-light px-2">${data?.others?.WLAN}</div>
      </div>
    </div>
</div>
  `;
  phoneDetailsDiv.appendChild(div);
};
