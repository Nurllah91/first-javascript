
    var shoppingCart = {
            pen: 1,
            tShirt: 2,
            keyboard:1,
            books: 22,
        }

        // when you know the specific property name use dot notation to get the property value

        // var penCount = shoppingCart.pen;

        // alternative system

        // var penCount2 = shoppingCart['pen']


        // get all keys from an object

        // var properties = Object.keys(shoppingCart);
        // console.log(properties);

        // var propertyValue = Object.values(shoppingCart);
        // console.log(propertyValue);


        // another styles 
        var paramiterValue = "keyboard";
        var getValue = shoppingCart[paramiterValue]
        console.log(getValue);

        