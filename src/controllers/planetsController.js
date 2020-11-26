const Planet = require('../models/Planet');
const planetRepo  = require('../repository/planetRepository');
const swApi = require('../services/swApi');

const planetController = function (Planet) {

    const get = function (req, res) {
        Planet.find(function (err, planets) {
            if (err) {
                res.status(500);
                res.send("Erro interno do servidor");
            }
            else {
                res.status(200);
                res.send(planets);
            }
        });

    };

    const add = function (req, res) {
        const planet = new Planet(req.body);
        planet.save(function (err) {
            if (err) {
                res.status(500);
                res.send('Erro: falha ao incluir planeta...');
            }
            else {
                res.status(201);
                res.send(planet);
            }
        })
    };

    const getById = function (req, res) {
        Planet.findById(req.params.id, function (err, planet) {
            if (err) {
                res.status(404);
                res.send("Planeta não encontrado...");
            }
            else {
                res.status(200);
                res.send(planet);
            }
        })
    };

    const update = function (req, res) {
        Planet.findById(req.params.id, function (err, planet) {
            if (err) {
                res.status(404);
                res.send("Planeta não encontrado...");
            }
            else {
                planet.nome = req.body.nome;
                planet.clima = req.body.clima;
                planet.terreno = req.body.terreno;
                planet.aparicoes = req.body.aparicoes;

                planet.save(function (err) {
                    if (!err) {
                        res.status(200);
                        res.send(planet);
                    }
                    else {
                        res.status(500);
                        res.send("Falha ao atualizar planeta...");
                    }
                })
            }
        });
    };

    const del = function (req, res) {
        Planet.findById(req.params.id, function (err, planet) {
            planet.remove(function (err) {
                if (! err) {
                    res.status(204);
                    res.send("Planeta deletado...");
                }
            });
        });
    };

    return {
        add: add,
        get: get,
        getById: getById,
        update: update,
        del: del
    }
};
module.exports = planetController;