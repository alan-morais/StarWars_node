const axios = require('axios');

const express = require('express');

var swApi = {

    async getNamePlanet(planetName) {
        try {
            const { data } = await axios.get(`https://swapi.dev/api/planets/?search=${planetName}`)
            if (data.count === 0) throw new Error('Nenhum planeta encontrado com esse nome :/');
            if (data.count > 1) throw new Error('Voce precisa ser mais específico em relação ao nome...');
            const apiName = data.results[0].name.toString();
            const postName = new RegExp(planetName.toString(), 'i');
            if (!apiName.match(postName)) throw new Error('Nenhum planeta encontrado com esse nome  :/');
            const aparicoes = data.results[0].films
            const total = aparicoes.length;
            return data.results[0]
        } catch (error) {
            console.error(error);
        }
    }
}

swApi.getNamePlanet('Tatooine')
    .then(function (response) {
        return response
    })

module.exports = swApi;
