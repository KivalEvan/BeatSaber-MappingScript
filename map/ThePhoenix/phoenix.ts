import { mod, radToDeg, vectorAdd } from '../../depsLocal.ts';
import { isVector4, types, v3, vectorMul } from '../../depsLocal.ts';
import phoenixModel from './phoenix.json' with { type: 'json' };

export default function (data: v3.Difficulty, is360?: boolean) {
   const envAry: types.v3.IChromaEnvironment[] = [];
   phoenixModel.nodes.forEach((node) => {
      const angle = isVector4(node.rotation) ? convertangles(node.rotation) : [0, 0, 0];
      envAry.push({
         geometry: {
            type: 'Cube',
            material: 'PanoramaOpaqueLight',
            // material:'PanoramaStandard'
         },
         position: vectorAdd(
            vectorMul(
               [
                  node.translation[0] + 0.0125,
                  node.translation[1],
                  -node.translation[2],
               ],
               [10, 10, 4],
            ),
            [0, 10.5, 66.3],
         ),
         rotation: [angle[2], angle[1], angle[0]],
         scale: vectorMul([node.scale[0], node.scale[1], node.scale[2]], 20),
         components: {
            ILightWithId: { type: 1 },
            TubeBloomPrePassLight: {
               colorAlphaMultiplier: 2,
               bloomFogIntensityMultiplier: 0.25,
            },
         },
      });
   });
   envAry.push(
      {
         lookupMethod: 'EndsWith',
         id: 'PyroLogo',
         // duplicate: 1,
         position: [0.11, 14, 66.47],
         rotation: [0, 180, 0],
         scale: [12, 12, 12],
      },
      {
         lookupMethod: 'EndsWith',
         id: 'PyroLogo',
         duplicate: 1,
         position: [0, 7.125, 66.47],
         rotation: [0, 180, 180],
         scale: [12, 12, 12],
      },
      {
         lookupMethod: 'EndsWith',
         id: 'PyroLogo',
         duplicate: 1,
         position: [0, 0.875, 66.47],
         rotation: [0, 180, 180],
         scale: [12, 12, 12],
      },
   );
   // for (const i of [-1, 1]) {
   //    envAry!.push(
   //       {
   //          lookupMethod: 'EndsWith',
   //          id: 'PyroLogo',
   //          duplicate: 1,
   //          position: [4 * i, 13.25, 66.47],
   //          rotation: [0, 180, 45 * i],
   //          scale: [10, 10, 10],
   //       },
   //       {
   //          lookupMethod: 'EndsWith',
   //          id: 'PyroLogo',
   //          duplicate: 1,
   //          position: [7 * i, 15.75, 66.47],
   //          rotation: [0, 180, 30 * i],
   //          scale: [10, 10, 10],
   //       },
   //       {
   //          lookupMethod: 'EndsWith',
   //          id: 'PyroLogo',
   //          duplicate: 1,
   //          position: [10 * i, 18, 66.47],
   //          rotation: [0, 180, 35 * i],
   //          scale: [10, 10, 10],
   //       },
   //       {
   //          lookupMethod: 'EndsWith',
   //          id: 'PyroLogo',
   //          duplicate: 1,
   //          position: [13 * i, 20.25, 66.47],
   //          rotation: [0, 180, 30 * i],
   //          scale: [10, 10, 10],
   //       },
   //       {
   //          lookupMethod: 'EndsWith',
   //          id: 'PyroLogo',
   //          duplicate: 1,
   //          position: [16 * i, 22.5, 66.47],
   //          rotation: [0, 180, 25 * i],
   //          scale: [10, 10, 10],
   //       },
   //       {
   //          lookupMethod: 'EndsWith',
   //          id: 'PyroLogo',
   //          duplicate: 1,
   //          position: [5 * i, 8.375, 66.47],
   //          rotation: [0, 180, 160 * i],
   //          scale: [10, 10, 10],
   //       },
   //       {
   //          lookupMethod: 'EndsWith',
   //          id: 'PyroLogo',
   //          duplicate: 1,
   //          position: [7.5 * i, 9, 66.47],
   //          rotation: [0, 180, 155 * i],
   //          scale: [10, 10, 10],
   //       },
   //       {
   //          lookupMethod: 'EndsWith',
   //          id: 'PyroLogo',
   //          duplicate: 1,
   //          position: [10 * i, 10, 66.47],
   //          rotation: [0, 180, 150 * i],
   //          scale: [10, 10, 10],
   //       },
   //       {
   //          lookupMethod: 'EndsWith',
   //          id: 'PyroLogo',
   //          duplicate: 1,
   //          position: [9.5 * i, 12, 66.47],
   //          rotation: [0, 180, 150 * i],
   //          scale: [10, 10, 10],
   //       },
   //       {
   //          lookupMethod: 'EndsWith',
   //          id: 'PyroLogo',
   //          duplicate: 1,
   //          position: [12.5 * i, 11, 66.47],
   //          rotation: [0, 180, 140 * i],
   //          scale: [10, 10, 10],
   //       },
   //       {
   //          lookupMethod: 'EndsWith',
   //          id: 'PyroLogo',
   //          duplicate: 1,
   //          position: [12 * i, 13, 66.47],
   //          rotation: [0, 180, 140 * i],
   //          scale: [10, 10, 10],
   //       },
   //       {
   //          lookupMethod: 'EndsWith',
   //          id: 'PyroLogo',
   //          duplicate: 1,
   //          position: [15 * i, 12.375, 66.47],
   //          rotation: [0, 180, 130 * i],
   //          scale: [10, 10, 10],
   //       },
   //       {
   //          lookupMethod: 'EndsWith',
   //          id: 'PyroLogo',
   //          duplicate: 1,
   //          position: [14.5 * i, 15, 66.47],
   //          rotation: [0, 180, 130 * i],
   //          scale: [10, 10, 10],
   //       },
   //       {
   //          lookupMethod: 'EndsWith',
   //          id: 'PyroLogo',
   //          duplicate: 1,
   //          position: [17.5 * i, 13.75, 66.47],
   //          rotation: [0, 180, 120 * i],
   //          scale: [10, 10, 10],
   //       },
   //       {
   //          lookupMethod: 'EndsWith',
   //          id: 'PyroLogo',
   //          duplicate: 1,
   //          position: [17 * i, 16, 66.47],
   //          rotation: [0, 180, 120 * i],
   //          scale: [10, 10, 10],
   //       },
   //       {
   //          lookupMethod: 'EndsWith',
   //          id: 'PyroLogo',
   //          duplicate: 1,
   //          position: [20 * i, 16.375, 66.47],
   //          rotation: [0, 180, 110 * i],
   //          scale: [10, 10, 10],
   //       },
   //       {
   //          lookupMethod: 'EndsWith',
   //          id: 'PyroLogo',
   //          duplicate: 1,
   //          position: [18.75 * i, 18, 66.47],
   //          rotation: [0, 180, 90 * i],
   //          scale: [10, 10, 10],
   //       },
   //       {
   //          lookupMethod: 'EndsWith',
   //          id: 'PyroLogo',
   //          duplicate: 1,
   //          position: [19.375 * i, 20.75, 66.47],
   //          rotation: [0, 180, 75 * i],
   //          scale: [10, 10, 10],
   //       },
   //       {
   //          lookupMethod: 'EndsWith',
   //          id: 'PyroLogo',
   //          duplicate: 1,
   //          position: [2.875 * i, 4.125, 66.47],
   //          rotation: [0, 180, 120 * i],
   //          scale: [10, 10, 10],
   //       },
   //       {
   //          lookupMethod: 'EndsWith',
   //          id: 'PyroLogo',
   //          duplicate: 1,
   //          position: [5.625 * i, 2.25, 66.47],
   //          rotation: [0, 180, 105 * i],
   //          scale: [10, 10, 10],
   //       }
   //    );
   // }
   data.customData.environment?.push(
      ...envAry,
      // ...ext.chroma.EnvironmentGroup.create(
      //    deepCopy(envAry).map((e) => {
      //       if (e.id === 'PyroLogo') e.duplicate = 1;
      //       return e;
      //    })
      // ).place({ rotation: [0, 180, 0] })
   );
}

// convert quaternion to euler angles
function convertangles(quaternion: types.Vector4): types.Vector3 {
   const x = Math.atan2(
      2 * quaternion[0] * quaternion[1] + 2 * quaternion[2] * quaternion[3],
      1 - 2 * quaternion[1] * quaternion[1] - 2 * quaternion[2] * quaternion[2],
   );
   const y = Math.asin(
      2 * quaternion[0] * quaternion[2] - 2 * quaternion[3] * quaternion[1],
   );
   const z = Math.atan2(
      2 * quaternion[0] * quaternion[3] + 2 * quaternion[1] * quaternion[2],
      1 - 2 * quaternion[2] * quaternion[2] - 2 * quaternion[3] * quaternion[3],
   );
   return [x, y, z].map((e) => mod(radToDeg(-e), 360)) as types.Vector3;
}
