import { CharacteristicName } from './beatmap/shared/characteristic';
import { DifficultyName } from './beatmap/shared/difficulty';
import { EnvironmentAllName } from './beatmap/shared/environment';
import { Version } from './beatmap/shared/version';

import { INote } from './beatmap/v2/note';
import { IEvent } from './beatmap/v2/event';
import { IObstacle } from './beatmap/v2/obstacle';
import { ICustomEvent } from './beatmap/v2/custom/customEvent';
import { IBPMChange } from './beatmap/v2/custom/bpmChange';

import { IColorNote } from './beatmap/v3/colorNote';
import { IBasicEvent } from './beatmap/v3/basicEvent';
import { IObstacle as IObstacleV3 } from './beatmap/v3/obstacle';
import { IBombNote } from './beatmap/v3/bombNote';
import { IArc } from './beatmap/v3/arc';
import { IChain } from './beatmap/v3/chain';
import { ICustomEvent as ICustomEventV3 } from './beatmap/v3/custom/customEvent';
import { IBPMChange as IBPMChangeV3 } from './beatmap/v3/custom/bpmChange';

import { Either } from './utils';

export interface IObjectSelect {
   selected?: boolean;
}

export interface IMapData {
   currentBPM: number;
   songBPM: number;
   NJS: number;
   offset: number;
   characteristic: CharacteristicName;
   difficulty: DifficultyName;
   environment: EnvironmentAllName;
   version: Version;
}

export type Parameter = Readonly<string | number | boolean | string[]>;
export type ReceivedArguments<T extends { [key: string]: Parameter }> = {
   [K in keyof T]: T[K] extends string[] ? string : T[K];
} & {
   [K in keyof T as number]: T[K] extends string[] ? string : T[K];
};

export type Run<T extends { [key: string]: Parameter } = {}> = (
   cursor: number,
   notes: (Either<INote, IColorNote> & IObjectSelect)[],
   events: (Either<IEvent, IBasicEvent> & IObjectSelect)[],
   walls: (Either<IObstacle, IObstacleV3> & IObjectSelect)[],
   _: any,
   global: { params: ReceivedArguments<T> },
   data: IMapData,
   customEvents: Either<ICustomEvent, ICustomEventV3>[],
   bpmChanges: Either<IBPMChange, IBPMChangeV3>[],
   bombs: (IBombNote & IObjectSelect)[],
   arcs: (IArc & IObjectSelect)[],
   chains: (IChain & IObjectSelect)[],
) => void;

export type RunV2<T extends { [key: string]: Parameter } = {}> = (
   cursor: number,
   notes: (INote & IObjectSelect)[],
   events: (IEvent & IObjectSelect)[],
   walls: (IObstacle & IObjectSelect)[],
   _: any,
   global: { params: ReceivedArguments<T> },
   data: IMapData,
   customEvents: ICustomEvent[],
   bpmChanges: IBPMChange[],
   bombs: never[],
   arcs: never[],
   chains: never[],
) => void;

export type RunV3<T extends { [key: string]: Parameter } = {}> = (
   cursor: number,
   notes: (IColorNote & IObjectSelect)[],
   events: (IBasicEvent & IObjectSelect)[],
   walls: (IObstacleV3 & IObjectSelect)[],
   _: any,
   global: { params: ReceivedArguments<T> },
   data: IMapData,
   customEvents: ICustomEventV3[],
   bpmChanges: IBPMChangeV3[],
   bombs: (IBombNote & IObjectSelect)[],
   arcs: (IArc & IObjectSelect)[],
   chains: (IChain & IObjectSelect)[],
) => void;

export type Main<T extends { [key: string]: Parameter } = {}> = {
   name: string;
   params: T;
   run: Run<T> | RunV2<T> | RunV3<T>;
   errorCheck?: boolean;
};

declare global {
   function addError(note: Either<IColorNote, INote>, reason?: string): void;
   function addWarning(note: Either<IColorNote, INote>, reason?: string): void;
}
