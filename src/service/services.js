import { getApi } from "./config/index";

//get all characters
export const getAllCharacters = (data) => getApi("/character");
//get all locations
export const getAllLocations = (data) => getApi("/location");
//get all episodes
export const getAllEpisides = (data) => getApi("/episode");
