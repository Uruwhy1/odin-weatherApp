/* eslint-disable no-unused-vars */
export const APIkey = "2c9441f60c944d63996153000242204";
export let tempUnit = "temp_c"
export let currentPosition = await getPosition();

// GET CURRENT POSITION
export async function getPosition() {
  try {
    const position = await new Promise((resolve, reject) => {
      navigator.geolocation.getCurrentPosition(resolve, reject);
    });
    return position.coords.latitude + "," + position.coords.longitude;
  } catch (error) {
    // Handle errors here
    console.error("Error getting current position:", error);
    return "Error getting current position";
  }
}
