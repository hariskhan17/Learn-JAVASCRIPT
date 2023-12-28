let allproduct= document.querySelector('.allproducts')
let apidata;

axios.get('https://api.escuelajs.co/api/v1/products')


    .then(function (response) {
        console.log(response.data);

        apidata = response.data;
        for (let i = 0; i < apidata.length; i++) {
            allproduct += `

            <div class="card" style="width: 18rem;">
            <img src="..." class="card-img-top" alt="...">
            <div class="card-body">
              <h5 class="card-title"> ${apidata[i].title}</h5>
              <h5 class="card-title"> ${apidata[i].price}</h5>
              <h5 class="card-title"> ${apidata[i].description}</h5>
              <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
              <a href="#" class="btn btn-primary">Go somewhere</a>
            </div>
          </div>


  ${apidata[i].title}
  ${apidata[i].price}
  ${apidata[i].description}
  `
        }

    }).catch(function (err) {
        console.log(err);
    })