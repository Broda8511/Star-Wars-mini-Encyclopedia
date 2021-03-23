export const selectMovie = (movie) => {
  console.log(movie.title);
  return {
    type: "ITEM_SELECTED",
    payload: movie,
  };
};

export const selectPerson = (person) => {
  console.log(person.name);
  return {
    type: "ITEM_SELECTED",
    payload: person,
  };
};

export const selectPlanet = (planet) => {
  console.log(planet.name);
  return {
    type: "ITEM_SELECTED",
    payload: planet,
  };
};

export const selectSpec = (spec) => {
  console.log(spec.name);
  return {
    type: "ITEM_SELECTED",
    payload: spec,
  };
};

export const selectStarship = (starship) => {
  console.log(starship.name);
  return {
    type: "ITEM_SELECTED",
    payload: starship,
  };
};

export const selectVehicle = (vehicle) => {
  console.log(vehicle.name);
  return {
    type: "ITEM_SELECTED",
    payload: vehicle,
  };
};
