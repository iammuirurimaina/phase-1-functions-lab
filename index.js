function distanceFromHqInBlocks (someLocation) {
    if (someLocation < 42){
        return 42 - someLocation
    }
    else {
       return someLocation - 42
    } 

   
}
function distanceFromHqInFeet(blockName) {
    let feetDistance = distanceFromHqInBlocks(blockName) * 264
    return feetDistance
}
function distanceTravelledInFeet (start, destination){
    let distanceTravelled
    if (destination < start){
        distanceTravelled = (start - destination) * 264
        return distanceTravelled
    }
    else if (destination > start){
        distanceTravelled = (destination - start) * 264
        return distanceTravelled
    }

}
function calculatesFarePrice(start, destination){
    let distanceInFeet = distanceTravelledInFeet(start, destination)
    let fare 
    if (distanceInFeet < 400){
        fare = 0
        return fare
    }
    else if (distanceInFeet > 400 && distanceInFeet < 2000 ) {

        fare = (distanceInFeet - 400) * 0.02
        return fare
    }
    else if (distanceInFeet > 2000 && distanceInFeet < 2500) {
        fare = 25
        return fare
    }
    else {
        fare = "cannot travel that far"
        return fare
    }
}
