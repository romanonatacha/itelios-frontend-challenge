$.getJSON("./products.json", function (data) {

  var mainProduct = data[0].data.item;
  var mainProductTemplate = "<div class='main__item__product__image'> \
    <img src='"+ mainProduct.imageName + "'> \
    <p class='main__item__product__image__name'>" +  mainProduct.name + "</p> \
    <p class='main__item__product__image__price'>" + mainProduct.price + "</p> \
    <p class='main__item__product__image__paymentConditions'>" + mainProduct.productInfo.paymentConditions + "</p></div>";

  $('.main__item__product').html(mainProductTemplate);


  var products = data[0].data.recommendation;
  var recommendationList = '<div>';

  for (var i = 0; i < products.length; i++) {
      var product = products[i];
      recommendationList += "<div class='main__interess__list__image'> \
      <img src='"+ product.imageName + "'> \
       <p class='main__interess__list__image__name'>" +  product.name + "</p> \
       <p class='main__interess__list__image__price'>" + product.price + "</p> \
       <p class='main__interess__list__image__paymentConditions'>" + product.productInfo.paymentConditions + "</p> \
       <button class='main__interess__list__image__btn'>adicionar ao carrinho</button></div><div>";
       recommendationList += "</div></div>";

  }
  recommendationList += "</div>";

  $('.main__interess__list').html(recommendationList);
});