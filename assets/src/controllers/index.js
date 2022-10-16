function getDataProduct() {
    var promise = axios({
        url: 'https://shop.cyberlearn.vn/api/Product',
        method: 'GET',
        ResponseType: ' JSON'
    });
    //Thành công
    promise.then(function (result) {
        renderProduct(result.data.content);
    })
    promise.catch(function (err) {
        console.log(err);
    })
}

function renderProduct(arr) {
    var contentHTML = ``;
    for (var i = 0; i < arr.length; i++) {
        var prod = arr[i];
        contentHTML += `
        <div class=" px-4 pb-5 col-12 col-sm-6 col-md-4">
            <div class="card">
                <img src="${prod.image}" class="card-img-top" alt="...">
                <div class="card-body">
                    <h5 class="card-title">${prod.name}</h5>
                    <p class="card-text">${prod.shortDescription.length > 75 ? prod.shortDescription.substr(0, 75) + '...' : prod.shortDescription}</p>
                </div>
                <div class="card-footer py-0 px-0 d-flex">
                    <div class="left">
                        <a href="./detail.html?id=${prod.id}">Buy now</a>
                    </div>
                    <div class="right">
                        <p>${prod.price}$</p>
                    </div>
                </div>
            </div>
        </div>
        `
    }
    document.querySelector('#showProduct').innerHTML = contentHTML;
}
getDataProduct();