const Planet  = require('../models/Planet');

const postPlanet = async (objPlanet) => {
  const planet = new Planet(objPlanet);
  await planet.save();
  return planet;
}

postPlanet().then(function (response){
  return response
}).catch(function(err){
  return err
})

const getAllPlanets = async (planetName, { perPage, page }) => await Planet
  .find({ nome: new RegExp(planetName, 'i') })
  .skip((perPage * page) - perPage)
  .limit(perPage);
  const getPlanetById = async (planetId) => await Planet.findById(planetId);
  

  const deletePlanetById = async (planetId) => await Planet.findByIdAndRemove(planetId);
  
module.exports = {
    postPlanet,
    getAllPlanets,
    getPlanetById,
    deletePlanetById,
  };
  