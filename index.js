
const hq = 42
const feet = 264
function distanceFromHqInBlocks(destination){
  if (destination >= 42){
      return destination - hq
    }
  else if (destination <= 42) {
      return hq - destination
    }
 }
 function distanceFromHqInFeet(destination){
   return distanceFromHqInBlocks(destination)*feet
 }
 
 function distanceTravelledInFeet (headquarters, num2){
    if (num2 > headquarters){
        return (num2 - headquarters)*feet;
    }else{
    return (headquarters - num2)*feet;
    }
}
function calculatesFarePrice(start, destination) {
    const totalFeet = distanceTravelledInFeet(start, destination)
    let cost
    if (totalFeet < 400) {
        return 0;
    } else if ((totalFeet >= 400) && (totalFeet <= 2000)) {
        return cost = (totalFeet - 400) * .02
    } else if (totalFeet > 2500) {
        return 'cannot travel that far'
    } else if (totalFeet > 2000) {
        return 25
    } 
}