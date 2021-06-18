const express = require('express');
const router = express.Router();

const monsters = require('../model/db');

console.log("MONSTERS DB IS: ", monsters);

router.get('/:monsterSlug?', (request, response) => {
    if (!!request.params.monsterSlug) {
        let monsterName = '';
        let monsterSpecies = '';

        const theMonster = monsters.find(monster => monster.slug === request.params.monsterSlug);
        console.log('the monster is: ', theMonster);
        response.render('template', {
            locals: {
                title: theMonster.name,
                species: theMonster.species,
            },
            partials: {
                partial: 'partial-monster-details'
            }
        })

    } else {
        response.render('template', {
            locals: {
                title: 'MONSTER!!',
                data: monsters
            },
            partials: {
                partial: 'partial-monster-list'
            }
        })
    }
});

module.exports = router;