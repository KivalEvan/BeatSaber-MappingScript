import { types } from '@bsmap';

export function create(): types.wrapper.ICustomDataDifficulty {
   const environment: types.v3.IChromaEnvironment[] = [
      {
         id: 'TrisWallConstructionL',
         lookupMethod: 'EndsWith',
         track: 'triConLT',
      },
      {
         id: 'TrisWallConstructionR',
         lookupMethod: 'EndsWith',
         track: 'triConRT',
      },
      {
         id: 'TrisWallConstructionLB',
         lookupMethod: 'EndsWith',
         track: 'triConLB',
      },
      {
         id: 'TrisWallConstructionRB',
         lookupMethod: 'EndsWith',
         track: 'triConRB',
      },
      {
         id: 'WallConstruction',
         lookupMethod: 'EndsWith',
         track: 'triCon',
      },
      {
         id: 'WallLasersTL',
         lookupMethod: 'EndsWith',
         track: 'triLaserLT',
      },
      {
         id: 'WallLasersTR',
         lookupMethod: 'EndsWith',
         track: 'triLaserRT',
      },
      {
         id: 'WallLasersBL',
         lookupMethod: 'EndsWith',
         track: 'triLaserLB',
      },
      {
         id: 'WallLasersBR',
         lookupMethod: 'EndsWith',
         track: 'triLaserRB',
      },
      {
         id: 'TrisWall',
         lookupMethod: 'EndsWith',
         track: 'tri',
      },
   ];

   const placements = ['TL', 'TR', 'BL', 'BR'];
   for (const placement of placements) {
      for (let i = 0; i < 5; i++) {
         environment.push({
            id: `WallLasers${placement}\\.\\[\\d+\\]GlobalTransform\\.\\[\\d+\\]Transform_Laser_${i}`,
            lookupMethod: 'Regex',
            track: `triLaser${placement}${i}`,
         });
      }
   }

   return { environment };
}
