export const selectMovie = (movie) => {
  return {
    type: "ITEM_SELECTED",
    payload: movie,
  };
};

export const selectPerson = (person) => {
  return {
    type: "ITEM_SELECTED",
    payload: person,
  };
};

export const selectPlanet = (planet) => {
  return {
    type: "ITEM_SELECTED",
    payload: planet,
  };
};

export const selectSpec = (spec) => {
  return {
    type: "ITEM_SELECTED",
    payload: spec,
  };
};

export const selectStarship = (starship) => {
  return {
    type: "ITEM_SELECTED",
    payload: starship,
  };
};

export const selectVehicle = (vehicle) => {
  return {
    type: "ITEM_SELECTED",
    payload: vehicle,
  };
};
