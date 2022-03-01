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
                <button type="button" class="btn btn-primary w-100" onclick="phoneDetails('${phone.slug}')">Details</button>
              </div>

            </div>
        </div>
      `;
    detailDiv.appendChild(div);
  });
};
const phoneDetails = (detail) => {
  // console.log(detail);

  const url = `https://openapi.programming-hero.com/api/phone/${detail}`;
  fetch(url)
    .then((res) => res.json())
    .then((data) => displayPhoneDetails(data.data));
};
const displayPhoneDetails = (data) => {
  console.log(data);
  const phoneDetailsDiv = document.getElementById("phone-details");
  const div = document.createElement("div");
  div.innerHTML = `
  <div class="card w-50 mx-auto mb-4">
    <img src="${data.image}" class="card-img-top" alt="..." />
  </div>       
  <div class="w-75 mx-auto">
  <div class="row gx-0">
  <div class="col-12 mb-2">
     <div class="border bg-light px-2 text-center">Phone Details</div>
    </div>
  <div class="row gx-0">
    <div class="col-4">
     <div class="border bg-light px-2">brand</div>
    </div>
    <div class="col-8">
      <div class=" border bg-light px-2">${data.brand}</div>
    </div>
  </div>
  <div class="row gx-0">
    <div class="col-4">
     <div class="border bg-light px-2">name</div>
    </div>
    <div class="col-8">
      <div class=" border bg-light px-2">${data.name}</div>
    </div>
  </div>
  <div class="row gx-0">
    <div class="col-4">
     <div class="border bg-light px-2">slug</div>
    </div>
    <div class="col-8">
      <div class=" border bg-light px-2">${data.slug}</div>
    </div>
  </div>
  <div class="row gx-0">
    <div class="col-4">
     <div class="border bg-light px-2">chipSet</div>
    </div>
    <div class="col-8">
      <div class=" border bg-light px-2">Custom column padding</div>
    </div>
  </div>
  <div class="row gx-0">
    <div class="col-4">
     <div class="border bg-light px-2">displaySize</div>
    </div>
    <div class="col-8">
      <div class=" border bg-light px-2">Custom column padding</div>
    </div>
  </div>
  <div class="row gx-0">
    <div class="col-4">
     <div class="border bg-light px-2">memory</div>
    </div>
    <div class="col-8">
      <div class=" border bg-light px-2">Custom column padding</div>
    </div>
  </div>
  <div class="row gx-0">
    <div class="col-4">
     <div class="border bg-light px-2">storage</div>
    </div>
    <div class="col-8">
      <div class=" border bg-light px-2">Custom column padding</div>
    </div>
  </div>
  <div class="row gx-0">
    <div class="col-4">
     <div class="border bg-light px-2">Custom column padding</div>
    </div>
    <div class="col-8">
      <div class=" border bg-light px-2">Custom column padding</div>
    </div>
  </div>
  <div class="row gx-0">
    <div class="col-4">
     <div class="border bg-light px-2">Custom column padding</div>
    </div>
    <div class="col-8">
      <div class=" border bg-light px-2">Custom column padding</div>
    </div>
  </div>
</div>
  `;
  phoneDetailsDiv.appendChild(div);
};
