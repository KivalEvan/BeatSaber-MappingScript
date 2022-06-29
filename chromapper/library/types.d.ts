/** Base custom data interface. */
export interface ICustomDataBase {
    [key: string]: any;
}

export type Curve = 'Sine' | 'Quad' | 'Cubic' | 'Quart' | 'Quint' | 'Expo' | 'Circ' | 'Back' | 'Elastic' | 'Bounce';
export type Transition = 'In' | 'Out' | 'InOut';
export type Easings = `ease${Transition}${Curve}` | 'easeLinear' | 'easeStep';
export type EasingFunction = (x: number) => number;

export type ColorArray = [number, number, number, number?];
export type Vector2 = [number, number];
export type Vector3 = [number, number, number];
export type ColorPointDefinition = [number, number, number, number, number, Easings?];
export type PercentPointDefinition = [number, number, Easings?];
export type Vector2PointDefinition =
    | [number, number, number, Easings?, 'splineCatmullRom'?]
    | [number, number, number, 'splineCatmullRom'?];
export type Vector3PointDefinition =
    | [number, number, number, number, Easings?, 'splineCatmullRom'?]
    | [number, number, number, number, 'splineCatmullRom'?];
export type PointDefinition = Vector2PointDefinition[] | Vector3PointDefinition[] | ColorPointDefinition[];

/** Heck Base Custom Event interface. */
export interface IHeckCustomEventDataBase {
    _track: string | string[];
}

/** AnimateTrack interface for Heck Custom Event.
 * @extends IHeckCustomEventDataBase
 */
export interface IHeckCustomEventDataAnimateTrack extends IHeckCustomEventDataBase {
    _duration: number;
    _easing?: Easings;
    _position?: string | Vector3PointDefinition[];
    _rotation?: string | Vector3PointDefinition[];
    _localRotation?: string | Vector3PointDefinition[];
    _scale?: string | Vector3PointDefinition[];
    _dissolve?: string | PercentPointDefinition[];
    _dissolveArrow?: string | PercentPointDefinition[];
    _color?: string | ColorPointDefinition[];
    _interactable?: string | PercentPointDefinition[];
    _time?: string | PercentPointDefinition[];
}

/** AssignPathAnimation interface for Heck Custom Event.
 * @extends IHeckCustomEventDataBase
 */
export interface IHeckCustomEventDataAssignPathAnimation extends IHeckCustomEventDataBase {
    _duration: number;
    _easing?: Easings;
    _position?: string | Vector3PointDefinition[];
    _rotation?: string | Vector3PointDefinition[];
    _localRotation?: string | Vector3PointDefinition[];
    _scale?: string | Vector3PointDefinition[];
    _dissolve?: string | PercentPointDefinition[];
    _dissolveArrow?: string | PercentPointDefinition[];
    _color?: string | ColorPointDefinition[];
    _interactable?: string | PercentPointDefinition[];
    _definitePosition?: string | Vector3PointDefinition[];
}

/** Heck Custom Event interface for AnimateTrack. */
export interface IHeckCustomEventAnimateTrack {
    _time: number;
    _type: 'AnimateTrack';
    _data: IHeckCustomEventDataAnimateTrack;
}

/** Heck Custom Event interface for AssignPathAnimation. */
export interface IHeckCustomEventAssignPathAnimation {
    _time: number;
    _type: 'AssignPathAnimation';
    _data: IHeckCustomEventDataAssignPathAnimation;
}

export type IHeckCustomEvent = IHeckCustomEventAnimateTrack | IHeckCustomEventAssignPathAnimation;

/** Noodle Extensions Object interface for Beatmap Object. */
export interface INEObject {
    _position?: Vector2;
    _rotation?: number | Vector3;
    _localRotation?: Vector3;
    _noteJumpMovementSpeed?: number;
    _noteJumpStartBeatOffset?: number;
    _fake?: boolean;
    _interactable?: boolean;
    _track?: string | string[];
    _animation?: INEAnimation;
}

/** Noodle Extensions Note interface for Beatmap Note.
 * @extends INEObject
 */
export interface INENote extends INEObject {
    _cutDirection?: number;
    _flip?: Vector2;
    _disableNoteGravity?: boolean;
    _disableNoteLook?: boolean;
}

/** Noodle Extensions Obstacle interface for Beatmap Obstacle.
 * @extends INEObject
 */
export interface INEObstacle extends INEObject {
    _scale?: Vector3;
}

/** Noodle Extensions Event interface for Beatmap Event.
 * @extends ICustomDataBase
 */
export interface INEEvent extends ICustomDataBase {
    _rotation?: number;
}

/** AssignPathAnimation interface for Noodle Extensions Custom Event. */
export interface INECustomEventDataAssignTrackParent {
    _childrenTracks: string[];
    _parentTrack: string;
    _worldPositionStays?: boolean;
}

/** AssignPlayerToTrack interface for Noodle Extensions Custom Event.
 * @extends INECustomEventDataBase
 */
export interface INECustomEventDataAssignPlayerToTrack extends IHeckCustomEventDataBase {
    _track: string;
}

/** Noodle Extensions Animation interface for Noodle Extensions Object. */
export interface INEAnimation {
    _position?: string | Vector3PointDefinition[];
    _rotation?: string | Vector3PointDefinition[];
    _localRotation?: string | Vector3PointDefinition[];
    _scale?: string | Vector3PointDefinition[];
    _dissolve?: string | PercentPointDefinition[];
    _dissolveArrow?: string | PercentPointDefinition[];
    _color?: string | ColorPointDefinition[];
    _interactable?: string | PercentPointDefinition[];
    _definitePosition?: string | Vector3PointDefinition[];
    _time?: string | PercentPointDefinition[];
}

/** Noodle Extensions Custom Event interface for AssignTrackParent. */
export interface INECustomEventAssignTrackParent {
    _time: number;
    _type: 'AssignTrackParent';
    _data: INECustomEventDataAssignTrackParent;
}

/** Noodle Extensions Custom Event interface for AssignPlayerToTrack. */
export interface INECustomEventAssignPlayerToTrack {
    _time: number;
    _type: 'AssignPlayerToTrack';
    _data: INECustomEventDataAssignPlayerToTrack;
}

export type INECustomEvent = INECustomEventAssignTrackParent | INECustomEventAssignPlayerToTrack;

/** Chroma interface for Beatmap Note Custom Data. */
export interface IChromaAnimation {
    _color?: string | ColorPointDefinition[];
}

/** Chroma interface for Beatmap Note Custom Data. */
export interface IChromaNote {
    _color?: ColorArray;
    _disableSpawnEffect?: boolean;
}

/** Chroma interface for Beatmap Obstacle Custom Data. */
export interface IChromaObstacle {
    _color?: ColorArray;
}

/** Chroma interface for Beatmap Event Light Custom Data. */
export interface IChromaEventLight extends ICustomDataBase {
    _color?: ColorArray;
    _lightID?: number | number[];
    _propID?: number;
    _lightGradient?: {
        _duration: number;
        _startColor: ColorArray;
        _endColor: ColorArray;
        _easing?: Easings;
    };
    _lerpType?: 'HSV' | 'RGB';
    _easing?: Easings;
}

/** Chroma interface for Beatmap Event Laser Rotation Custom Data. */
export interface IChromaEventLaser extends ICustomDataBase {
    _lockPosition?: boolean;
    _speed?: number;
    _preciseSpeed?: number;
    _direction?: number;
}

/** Chroma interface for Beatmap Event Ring Spin Custom Data. */
export interface IChromaEventRing extends ICustomDataBase {
    _nameFilter?: string;
    _reset?: boolean;
    _rotation?: number;
    _step?: number;
    _prop?: number;
    _speed?: number;
    _direction?: number;
    _counterSpin?: boolean;
    _stepMult?: number;
    _propMult?: number;
    _speedMult?: number;
}

/** Chroma interface for Beatmap Event Ring Zoom Custom Data. */
export interface IChromaEventZoom extends ICustomDataBase {
    _step?: number;
    _speed?: number;
}

/** AssignFogTrack interface for Noodle Extensions Custom Event. */
export interface IChromaCustomEventDataAssignFogTrack extends IHeckCustomEventDataBase {
    _track: string;
    _attenuation?: number | PercentPointDefinition[];
    _offset?: number | PercentPointDefinition[];
    _startY?: number | PercentPointDefinition[];
    _height?: number | PercentPointDefinition[];
}

/** Chroma Custom Event interface for AssignFogTrack. */
export interface IChromaCustomEventAssignFogTrack {
    _time: number;
    _type: 'AssignFogTrack';
    _data: IChromaCustomEventDataAssignFogTrack;
}

export type IChromaCustomEvent = IChromaCustomEventAssignFogTrack;

export type ICustomEvent = IHeckCustomEvent | IChromaCustomEvent | INECustomEvent;
export type ICustomDataNote = ICustomDataBase & IChromaNote & INENote;
export type ICustomDataObstacle = ICustomDataBase & IChromaObstacle & INEObstacle;

export interface IBaseObject {
    /** Beat time `<float>` of beatmap object. */
    _time: number;
    _customData?: ICustomDataBase;
}

export interface INote extends IBaseObject {
    /** Note placement on column.
     * ```ts
     * 0 -> Outer Left
     * 1 -> Middle Left
     * 2 -> Middle Right
     * 3 -> Outer Right
     * ```
     */
    _lineIndex: number;
    /** Note placement on row.
     * ```ts
     * 0 -> Bottom row
     * 1 -> Middle row
     * 2 -> Top row
     * ```
     */
    _lineLayer: number;
    /** Type of note.
     * ```ts
     * 0 -> Red note
     * 1 -> Blue note
     * 3 -> Bomb
     * ```
     */
    _type: 0 | 1 | 3;
    /** Cut direction of note.
     * ```ts
     * 4 | 0 | 5
     * 2 | 8 | 3
     * 6 | 1 | 7
     * ```
     */
    _cutDirection: number;
    _customData?: ICustomDataNote;
}

/** Beatmap object interface for Event. */
// it took me long enough to realise Event is a built in JS class/interface, but it has no effect here anyway
export interface IEventBase extends IBaseObject {
    /** Type of event.
     * ```ts
     * 0 -> Back Lasers
     * 1 -> Ring Lights
     * 2 -> Left Lasers
     * 3 -> Right Lasers
     * 4 -> Center Lights
     * 5 -> Light Boost
     * 6 -> Extra Left Lights
     * 7 -> Extra Right Lights
     * 8 -> Ring Rotation
     * 9 -> Ring Zoom
     * 10 -> Extra Left Lasers
     * 11 -> Extra Right Lasers
     * 12 -> Left Laser Rotation
     * 13 -> Right Laser Rotation
     * 14 -> Early Lane Rotation
     * 15 -> Late Lane Rotation
     * 16 -> Utility Event 0
     * 17 -> Utility Event 1
     * 18 -> Utility Event 2
     * 19 -> Utility Event 3
     * 40 -> Special Event 0
     * 41 -> Special Event 1
     * 42 -> Special Event 2
     * 43 -> Special Event 3
     * 100 -> BPM Change
     * ```
     */
    _type: number;
    /** Value of event. */
    _value: number;
    // _floatValue: number;
    _customData?: ICustomDataBase;
}

export interface IEventLight extends IEventBase {
    _type: 0 | 1 | 2 | 3 | 4 | 6 | 7 | 10 | 11;
    /** State of light event. ( Blue | Red | White )
     * ```ts
     * 0 -> Off
     * 1 | 5 | 9 -> On
     * 2 | 6 | 10 -> Flash
     * 3 | 7 | 11 -> Fade
     * 4 | 8 | 12 -> Transition
     * ```
     */
    _value: number;
    /** Controls the brightness of the light.
     * ```ts
     * Range: 0-1 // (0% to 100%), can be more than 1.
     * ```
     */
    // _floatValue: number;
    _customData?: IChromaEventLight;
}

export interface IEventGeneric extends IEventBase {
    _type: number;
}

export interface IEventBoost extends IEventBase {
    _type: 5;
    /** Toggle between boost event. */
    _value: 0 | 1;
}

export interface IEventRing extends IEventBase {
    _type: 8;
    _customData?: IChromaEventRing;
}

export interface IEventZoom extends IEventBase {
    _type: 9;
    _customData?: IChromaEventRing & IChromaEventZoom;
}

export interface IEventLaser extends IEventBase {
    _type: 12 | 13;
    /** Laser rotation speed in degree per second multiplied by 20. */
    _value: number;
    _customData?: IChromaEventLaser;
}

export interface IEventLaneRotation extends IEventBase {
    _type: 14 | 15;
    /** Amount of angle changed clockwise.
     * ```ts
     * 0 -> -60 Degree
     * 1 -> -45 Degree
     * 2 -> -30 Degree
     * 3 -> -15 Degree
     * 4 -> 15 Degree
     * 5 -> 30 Degree
     * 6 -> 45 Degree
     * 7 -> 60 Degree
     * ```
     */
    _value: number;
    _customData?: INEEvent;
}

export interface IEventExtra extends IEventBase {
    _type: 16 | 17 | 18 | 19;
}

export interface IEventSpecial extends IEventBase {
    _type: 40 | 41 | 42 | 43;
}

export interface IEventBPMChange extends IEventBase {
    _type: 100;
}

export type IEvent =
    | IEventGeneric
    | IEventLight
    | IEventBoost
    | IEventRing
    | IEventZoom
    | IEventLaser
    | IEventLaneRotation
    | IEventExtra
    | IEventSpecial
    | IEventBPMChange;

/** Beatmap object interface for Obstacle. */
export interface IObstacle extends IBaseObject {
    /** Obstacle placement on column.
     * ```ts
     * 0 -> Outer Left
     * 1 -> Middle Left
     * 2 -> Middle Right
     * 3 -> Outer Right
     * ```
     */
    _lineIndex: number;
    // _lineLayer: number;
    /** Type of obstacle.
     * ```ts
     * 0 -> Full-height Wall
     * 1 -> Crouch Wall
     * ```
     */
    _type: number;
    _duration: number;
    _width: number;
    _customData?: ICustomDataObstacle;
}

export interface IBPMChange {
    _time: number;
    _BPM: number;
    _beatsPerBar: number;
    _metronomeOffset: number;
}

export type Parameter = string | number | boolean | string[];

export type Run = (
    cursor: number,
    notes: INote[],
    events: IEvent[],
    walls: IObstacle[],
    _: any,
    global: { params: Parameter[] },
    data: any,
    customEvents?: ICustomEvent[],
    bpmChanges?: IBPMChange[],
) => void;

export type Main = {
    name: string;
    params: { [key: string]: Parameter };
    run(
        cursor: number,
        notes: INote[],
        events: IEvent[],
        walls: IObstacle[],
        _: any,
        global: { params: Parameter[] },
        data: any,
        customEvents?: ICustomEvent[],
        bpmChanges?: IBPMChange[],
    ): void;
    errorCheck?: boolean;
};
