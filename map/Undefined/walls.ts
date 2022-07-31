import * as bsmap from '../../depsLocal.ts';
import { utils, v3 } from '../../depsLocal.ts';

export default (d: bsmap.v3.Difficulty) => {
    let obs: v3.Obstacle[] = [];
    obs = bsmap.v3.Obstacle.create(
        {
            b: 33.5,
            d: 0.25,
            w: 1,
            h: 3,
            x: 5,
            y: 2,
        },
        {
            b: 33.75,
            d: 0.25,
            w: 1,
            h: 5,
            x: 4,
            y: 0,
        },
        {
            b: 33,
            d: 0.25,
            w: 3,
            h: 1,
            x: 6,
            y: 0,
        },
        {
            b: 33.25,
            d: 0.25,
            w: 7,
            h: 1,
            x: 5,
            y: 2,
        },
    );
    obs = obs.concat(obs.map((w) => w.clone().mirror()));
    d.obstacles.push(...obs);
    for (let i = 0; i < 4; i++) {
        for (let j = 0; j < 2; j++) {
            for (let x = 0; x < 4; x++) {
                obs = v3.Obstacle.create({
                    b: 37 + i * 16 + j * 4 + x * 0.25,
                    x: -2 + j - utils.random(0, 2, true),
                    y: utils.random(0, 2, true),
                    d: 0.1875,
                    w: 2 - j,
                    h: 1 + j * 2,
                });
                d.addObstacles(
                    ...obs,
                    ...obs.map((o) =>
                        o
                            .clone()
                            .setPosX(o.posX - utils.random(0, 2, true))
                            .setPosY(utils.random(0, 2, true))
                            .mirror()
                    ),
                );
            }
        }
    }
    obs = bsmap.v3.Obstacle.create(
        {
            b: 97.5,
            d: 0.25,
            w: 1,
            h: 3,
            x: 5,
            y: 1,
        },
        {
            b: 97.75,
            d: 0.25,
            w: 1,
            h: 5,
            x: 4,
            y: 0,
        },
        {
            b: 95.5,
            d: 0.09375,
            w: 2,
            h: 1,
            x: 6,
            y: 1,
        },
        {
            b: 95.625,
            d: 0.09375,
            w: 2,
            h: 1,
            x: 6,
            y: 1,
        },
        {
            b: 95.75,
            d: 0.1875,
            w: 2,
            h: 1,
            x: 6,
            y: 1,
        },
        {
            b: 96,
            d: 1,
            w: 2,
            h: 1,
            x: 6,
            y: 1,
        },
        {
            b: 97,
            d: 0.1875,
            w: 2,
            h: 1,
            x: 6,
            y: 1,
        },
        {
            b: 97.25,
            d: 0.09375,
            w: 2,
            h: 1,
            x: 6,
            y: 1,
        },
        {
            b: 97.375,
            d: 0.09375,
            w: 2,
            h: 1,
            x: 6,
            y: 1,
        },
    );
    obs = obs.concat(obs.map((w) => w.clone().mirror()));
    d.obstacles.push(...obs);
};
