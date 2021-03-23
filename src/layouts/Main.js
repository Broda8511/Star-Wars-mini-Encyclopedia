import React from "react";
import { Route, Switch } from "react-router-dom";

//components
import Home from "../pages/Home";
import Movie from "../components/Movie";
import MovieDetails from "../pages_details/MovieDetails";
import Person from "../components/Person";
import PersonDetails from "../pages_details/PersonDetails";
import Planet from "../components/Planet";
import PlanetDetails from "../pages_details/PlanetDetails";
import Spec from "../components/Spec";
import SpecDetails from "../pages_details/SpecDetails";
import Starship from "../components/Starship";
import StarshipDetails from "../pages_details/StarshipDetails";
import Vehicle from "../components/Vehicle";
import VehicleDetails from "../pages_details/VehicleDetails";

function Main() {
  return (
    <>
      <Switch>
        <Route path="/home" exact render={() => <Home />} />
        <Route exact path="/movies" render={() => <Movie />} />
        <Route path="/movies/:id" render={() => <MovieDetails />} />
        <Route exact path="/people" render={() => <Person />} />
        <Route path="/people/:id" render={() => <PersonDetails />} />
        <Route exact path="/planets" render={() => <Planet />} />
        <Route path="/planets/:id" render={() => <PlanetDetails />} />
        <Route exact path="/species" render={() => <Spec />} />
        <Route path="/species/:id" render={() => <SpecDetails />} />
        <Route exact path="/starships" render={() => <Starship />} />
        <Route path="/starships/:id" render={() => <StarshipDetails />} />
        <Route exact path="/vehicles" render={() => <Vehicle />} />
        <Route path="/vehicles/:id" render={() => <VehicleDetails />} />
      </Switch>
    </>
  );
}

export default Main;
