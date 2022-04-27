const GOOGLE_API_KEY = "AIzaSyAhNMu3EkSaRiSqJOQshLIcQwIbPKjs7wg";

export async function getAddressFromCoords(coords) {
  const response = await fecth (`https://maps.googleapis.com/maps/api/geocode/json?latlng=${coords.lat},${coords.lng}&key=${GOOGLE_API_KEY}`)
  if (!response.ok) {
    throw new Error("Failed to fetch address. Please try again!");
}
const data = await response.json();
if (data.error_message) {            
    throw new Error(data.error_message);
}
const address = data.results[0].formatted_address;
return address;

}

export async function getCoordsFromAddress(address){
    console.log('address', address);
    const uriAddress = encodeURI(address);
    const response = await fetch(`https://maps.googleapis.com/maps/api/geocode/json?address=${uriAddress}&key=${GOOGLE_API_KEY}`);
    if (!response.ok) {
        throw new Error("Failed to fetch coordinates. Please try again!");
    }
    const data = await response.json();
    if (data.error_message) {            
        throw new Error(data.error_message);
    }
    if (data.results.length === 0 ) {
        throw new Error('The addess was not found, try to complete it with state city and country.')
    }    
    const coordinates = data.results[0].geometry.location;
    return coordinates;
}