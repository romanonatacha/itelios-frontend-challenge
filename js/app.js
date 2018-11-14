$.getJSON("./products.json", function (data) {

  var mainProduct = data[0].data.item;
  var mainProductTemplate = "<div class='main__item__product__image'> \
    <img src='"+ mainProduct.imageName + "'> \
    <p class='main__item__product__image__name'>" +  mainProduct.name + "</p> \
    <p class='main__item__product__image__price'>Por <strong>" + mainProduct.price + "</strong></p> \
    <p class='main__item__product__image__paymentConditions'>" + mainProduct.productInfo.paymentConditions + "</p></div>";

  $('.main__item__product').html(mainProductTemplate);


  var products = data[0].data.recommendation;
    var recommendationList = '';

  for (var i = 0; i < products.length; i++) {
      var product = products[i];
      recommendationList += "<div class='main__interess__list__image swiper-slide'> \
      <img src='"+ product.imageName + "' alt='" + product.name + "'> \
       <p class='main__interess__list__image__name'>" +  product.name + "</p> \
       <p class='main__interess__list__image__price'>Por: <strong>" + product.price + "</strong></p> \
       <p class='main__interess__list__image__paymentConditions'>" + product.productInfo.paymentConditions + "</p> \
       <button class='main__interess__list__image__btn'>adicionar ao carrinho<i class='material-icons'>add_shopping_cart</i></button></div>";

  }


  $('.swiper-wrapper').html(recommendationList);
});