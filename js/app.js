// storing the XMLHttpRequest and JSON file in variables
var xhr = new XMLHttpRequest();
var url = "./products.json"; // call when   the readyState attribute changes 

xhr.onreadystatechange = function () {
  // check if fetch request is done
  if (xhr.readyState == 4 && xhr.status == 200) {
    // parse the JSON string
    var jsonData = JSON.parse(xhr.responseText); // call the showProducts(), passing in the parsed JSON string

    showProducts(jsonData);
  }
}; // do the HTTP call using the url variable


xhr.open("GET", url, true);
xhr.send(); // function that formats the string with HTML tags, and render the result

function showProducts(data) {
  // reads the json file and render the html with the data for the main item product
  var mainProduct = data[0].data.item;
  var mainProductTemplate = "<div class='main__item__product__image'> \
      <img src='" + mainProduct.imageName + "'> \
      <p class='main__item__product__image__name'>" + mainProduct.name + "</p> \
      <p class='main__item__product__image__price'>Por <strong>" + mainProduct.price + "</strong></p> \
      <p class='main__item__product__image__paymentConditions'>" + mainProduct.productInfo.paymentConditions + "</p></div>"; // render the object data

  document.getElementById('main__item__product').innerHTML = mainProductTemplate; // reads the json file and render the html with the data for the recommentation products

  var products = data[0].data.recommendation;
  var recommendationList = ''; // loops through the recommendation array to render a list

  for (var i = 0; i < products.length; i++) {
    var product = products[i];
    recommendationList += "<div class='main__interess__list__image swiper-slide'> \
        <img src='" + product.imageName + "' alt='" + product.name + "'> \
         <p class='main__interess__list__image__name'>" + product.name + "</p> \
         <p class='main__interess__list__image__price'>Por: <strong>" + product.price + "</strong></p> \
         <p class='main__interess__list__image__paymentConditions'>" + product.productInfo.paymentConditions + "</p> \
         <button class='main__interess__list__image__btn'>adicionar ao carrinho<i class='material-icons'>add_shopping_cart</i></button></div>";
  } // render all list of the array


  document.getElementById('swiper-wrapper').innerHTML = recommendationList;
} // setting the swiper plugin


$(document).ready(function () {
  var swiper = new Swiper('.swiper-container', {
    pagination: '.swiper-pagination',
    slidesPerView: 'auto',
    paginationClickable: true,
    spaceBetween: 0,
    loop: true,
    speed: 7500,
    autoplay: {
      enabled: true,
      delay: 10000,
      disableOnInteraction: true
    }
  });
});
