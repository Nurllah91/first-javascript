function kmConverter(mile){
    const kilomitters = mile*1.39;
    return(kilomitters);
}


const distanceMile = 45;
const distanceKilomiters = kmConverter(distanceMile);
console.log(distanceKilomiters);