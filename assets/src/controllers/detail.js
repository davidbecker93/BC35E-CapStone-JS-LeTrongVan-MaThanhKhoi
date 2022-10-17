function getById() {
    var paramId = new URLSearchParams(window.location.search);
    var id = paramId.get('id');
    var promise = axios({
        url: `https://shop.cyberlearn.vn/api/Product/getbyid?id=${id}`,
        method: 'GET',
        ResponseType: 'JSON'
    });

    promise.then(function (result) {
        console.log(result.data.content);
        var productDetail = result.data.content;
        renderDetail(productDetail);
    });

    promise.catch(function (error) {
        console.log(error);
    });
}

function renderDetail(arrProduct) {
    var content = `
         <div class=" col-4 pr-0">
                    <div class="left">
                        <img src="${arrProduct.image}">
                    </div>
                </div>
                <div class=" col-8">
                    <div class="right">
                        <h3>${arrProduct.name}</h3>
                        <p>${arrProduct.description}</p>
                        <h4>Available size</h4>
                        <ul class="size d-flex">
                            <li>${arrProduct.size[0]}</li>
                            <li>${arrProduct.size[1]}</li>
                            <li>${arrProduct.size[2]}</li>
                            <li>${arrProduct.size[3]}</li>
                            <li>${arrProduct.size[4]}</li>
                        </ul>
                        <h5>${arrProduct.price}$</h5>
                        <ul class="soLuong d-flex">
                            <li>
                                <button>+</button>
                            </li>
                            <li>
                                <span>1</span>
                            </li>
                            <li>
                                <button>-</button>
                            </li>
                        </ul>
                        <button onclick="addBuy()">Add to cart</button>
                    </div>
                </div>
        `;
    document.querySelector('#showProductName').innerHTML = content;
}

function getProduct() {
    var promise = axios({
        url: `https://shop.cyberlearn.vn/api/Product`,
        method: 'GET',
        ResponseType: 'JSON'
    });

    promise.then(function (result) {
        console.log(result.data.content);
        var product = result.data.content;
        renderCard(product);
    });

    promise.catch(function (error) {
        console.log(error);
    });
}

function renderCard(arrProduct) {
    var content = ``;
    for (var index = 0; index < arrProduct.length; index++) {
        var product = arrProduct[index];
        content += `
         <div class=" px-4 pb-5 col-12 col-sm-6 col-md-4">
                    <div class="card">
                        <img src="${product.image}" alt="...">
                        <div class="card-body">
                            <h5 class="card-title">${product.name}</h5>
                            <p class="card-text">${product.shortDescription}</p>
                        </div>
                        <div class="card-footer py-0 px-0 d-flex ">
                            <div class="left">
                                <a href="./detail.html?id=${product.id}">Buy now</a>
                            </div>
                            <div class="right">
                                <p>${product.price}$</p>
                            </div>
                        </div>
                    </div>
                </div>
        `;
    }
    document.querySelector('#showProduct').innerHTML = content;
}

var count = 0;
function addBuy() {
    count++;
    console.log(count);
    document.querySelector("#numBuy").innerHTML = "(" + count + ")";
};

window.onload = function () {
    getById();
    getProduct();
}
