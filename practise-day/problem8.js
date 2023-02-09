var bookPrice = [180, 200, 100, 400, 350, 110, 180, 120, 150];

for(var i = 0; i < bookPrice.length; i++){
  var book = bookPrice[i];
  if(book >200 ){
    continue
  }
  console.log(book);
}

