const loadStuffData = async () => {
  const response = await fetch("./staffs.json");
  const data = await response.json();
  console.log(data);

  const stuffContainer = document.getElementById("stuffs");

  for (stuff of data) {
    const div = document.createElement("div");
    div.innerHTML = `
    <div class="card bg-base-100 shadow-xl">
                <figure class="px-10 pt-10">
                  <img class="h-48 rounded-full border border-purple-900" src=${stuff.image} alt="${stuff.name} image" class="rounded-xl" />
                </figure>
                <div class="card-body items-center text-center">
                  <h2 class="card-title">${stuff.name}</h2>
                  <p class="font-medium text-lg"> ${stuff.job_title}</p>
                  <p class="font-medium text-lg"><a href="mailto:${stuff.email}">${stuff.email}</a></p>
                  <div class="card-actions">
                    <button class="btn btn-secondary text-white"><a href="tel:${stuff.mobile}">Call Now</a></button>
                  </div>
                </div>
              </div>
    `;
    stuffContainer.appendChild(div);
  }
};
loadStuffData();
