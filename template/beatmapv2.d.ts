/** Standard color object. */
export interface IColor {
    r: number;
    g: number;
    b: number;
    a?: number;
}

/** Standard color array.
 * ```ts
 * const color = [red, green, blue] || [red, green, blue, alpha];
 * ```
 */
export type ColorArray = [number, number, number, number?];

/** Beatmap difficulty info custom data interface for Contributor. */
export interface IContributor {
    _role: string;
    _name: string;
    _iconPath: string;
}

/** Editor Info interface for Editor. */
export interface IEditorInfo {
    version?: string;
}

/** Editor interface for info custom data. */
export interface IEditor {
    _lastEditedBy?: string;
    [key: string]: IEditorInfo | string | undefined;
}

/** Base custom data interface. */
export interface ICustomDataBase {
    // deno-lint-ignore no-explicit-any
    [key: string]: any;
}

/** Custom Data interface for info.
 * @extends ICustomDataBase
 */
export interface ICustomDataInfo extends ICustomDataBase {
    _editors?: IEditor;
    _contributors?: IContributor[];
    _customEnvironment?: string;
    _customEnvironmentHash?: string;
}

/** Available mod suggestions. */
export type Suggestions = 'Chroma' | 'Cinema';

/** Available mod requirements. */
export type Requirements = Suggestions | 'Noodle Extensions' | 'Mapping Extensions';

type IInfoSettings = IInfoSettingsCustomData & IHeckInfoCustomData & IChromaInfoCustomData;
/** Custom Data interface for info difficulty.
 * @extends ICustomDataBase
 * @extends IColorScheme
 * @extends IInfoSettings
 */
export interface ICustomDataInfoDifficulty extends ICustomDataBase, IColorScheme, IInfoSettings {
    _difficultyLabel?: string;
    _editorOffset?: number;
    _editorOldOffset?: number;
    _warnings?: string[];
    _information?: string[];
    _suggestions?: LooseAutocomplete<Suggestions>[];
    _requirements?: LooseAutocomplete<Requirements>[];
}

type Curve = 'Sine' | 'Quad' | 'Cubic' | 'Quart' | 'Quint' | 'Expo' | 'Circ' | 'Back' | 'Elastic' | 'Bounce';

type Transition = 'In' | 'Out' | 'InOut';

export type Easings = `ease${Transition}${Curve}` | 'easeLinear' | 'easeStep';

export type EasingFunction = (x: number) => number;

export type PlayerObject = 'ENTIRE_PLAYER' | 'HMD' | 'LEFT_HAND' | 'RIGHT_HAND';

export type ColorPointDefinition =
    | [number, number, number, number, number, 'hsvLerp'?, Easings?]
    | [number, number, number, number, number, Easings?, 'hsvLerp'?];

export type LookupMethod = 'Regex' | 'Exact' | 'Contains' | 'StartsWith' | 'EndsWith';

export type GeometryType = 'Sphere' | 'Capsule' | 'Cylinder' | 'Cube' | 'Plane' | 'Quad' | 'Triangle';

export type ShaderType = 'TransparentLight' | 'Standard' | 'OpaqueLight';

/** Default shader keywords used in standard. */
export type ShaderKeywordsStandard =
    | 'DIFFUSE'
    | 'ENABLE_DIFFUSE'
    | 'ENABLE_FOG'
    | 'ENABLE_HEIGHT_FOG'
    | 'ENABLE_SPECULAR'
    | 'FOG'
    | 'HEIGHT_FOG'
    | 'REFLECTION_PROBE_BOX_PROJECTION'
    | 'SPECULAR'
    | '_EMISSION'
    | '_ENABLE_FOG_TINT'
    | '_RIMLIGHT_NONE'
    | '_ZWRITE_ON' // possibly not needed
    | 'REFLECTION_PROBE' // possibly not needed
    | 'LIGHT_FALLOFF'; // possibly not needed

/** Default shader keywords used in opaque light. */
export type ShaderKeywordsOpaque =
    | 'DIFFUSE'
    | 'ENABLE_BLUE_NOISE'
    | 'ENABLE_DIFFUSE'
    | 'ENABLE_HEIGHT_FOG'
    | 'ENABLE_LIGHTNING'
    | 'USE_COLOR_FOG';

/** Default shader keywords used in transparent light. */
export type ShaderKeywordsTransparent =
    | 'ENABLE_HEIGHT_FOG'
    | 'MULTIPLY_COLOR_WITH_ALPHA'
    | '_ENABLE_MAIN_EFFECT_WHITE_BOOST';

/** Shader keywords used in billie water. */
export type ShaderKeywordsBillieWater =
    | 'FOG'
    | 'HEIGHT_FOG'
    | 'INVERT_RIMLIGHT'
    | 'MASK_RED_IS_ALPHA'
    | 'NOISE_DITHERING'
    | 'NORMAL_MAP'
    | 'REFLECTION_PROBE'
    | 'REFLECTION_PROBE_BOX_PROJECTION'
    | '_DECALBLEND_ALPHABLEND'
    | '_DISSOLVEAXIS_LOCALX'
    | '_EMISSIONCOLORTYPE_FLAT'
    | '_EMISSIONTEXTURE_NONE'
    | '_RIMLIGHT_NONE'
    | '_ROTATE_UV_NONE'
    | '_VERTEXMODE_NONE'
    | '_WHITEBOOSTTYPE_NONE'
    | '_ZWRITE_ON';

export type ShaderKeywords =
    | ShaderKeywordsStandard
    | ShaderKeywordsOpaque
    | ShaderKeywordsTransparent
    | ShaderKeywordsBillieWater;

export type EnvironmentMaterial = 'BTSPillar' | 'BillieWater' | 'InterscopeConcrete' | 'InterscopeCar';

/** Chroma interface for Difficulty Info Custom Data. */
export interface IChromaInfoCustomData extends IInfoSettingsCustomData {
    _settings?: {
        _chroma?: {
            _disableChromaEvents?: boolean;
            _disableEnvironmentEnhancements?: boolean;
            _forceZenModeWall?: boolean;
        };
    };
    _environmentalRemoval?: string[];
}

export type Vector2 = [number, number];
export type Vector3 = [number, number, number];
export type PercentPointDefinition = [number, number, Easings?];
export type Vector2PointDefinition =
    | [number, number, number, Easings?, 'splineCatmullRom'?]
    | [number, number, number, 'splineCatmullRom'?, Easings?];
export type Vector3PointDefinition =
    | [number, number, number, number, Easings?, 'splineCatmullRom'?]
    | [number, number, number, number, 'splineCatmullRom'?, Easings?];

export interface IInfoSettingsCustomData {
    _settings?: {
        [key: string]: { [key: string]: boolean | string | number | undefined } | undefined;
    };
}

/** Heck interface for difficulty info custom data.
 * Honestly, just look at heck wiki for this, it's too many.
 */
export interface IHeckInfoCustomData extends IInfoSettingsCustomData {
    _settings?: {
        _playerOptions?: {
            _leftHanded?: boolean;
            _playerHeight?: number;
            _automaticPlayerHeight?: boolean;
            _sfxVolume?: number;
            _reduceDebris?: boolean;
            _noTextsAndHuds?: boolean;
            _noFailEffects?: boolean;
            _advancedHud?: boolean;
            _autoRestart?: boolean;
            _saberTrailIntensity?: number;
            _noteJumpStartBeatOffset?: number;
            _hideNoteSpawnEffect?: boolean;
            _adaptiveSfx?: number;
            _environmentEffectsFilterDefaultPreset?: 'AllEffects' | 'Strobefilter' | 'NoEffects';
            _environmentEffectsFilterExpertPlusPreset?: 'AllEffects' | 'Strobefilter' | 'NoEffects';
        };
        _modifiers?: {
            _energyType?: 'Bar' | 'Battery';
            _noFailOn0Energy?: boolean;
            _instaFail?: boolean;
            _failOnSaberClash?: boolean;
            _enabledObstacleType?: 'All' | 'FullHeightOnly' | 'NoObstacles';
            _fastNotes?: boolean;
            _strictAngles?: boolean;
            _disappearingArrows?: boolean;
            _ghostNotes?: boolean;
            _noBombs?: boolean;
            _songSpeed?: 'Normal' | 'Faster' | 'Slower' | 'SuperFast';
            _noArrows?: boolean;
            _proMode?: boolean;
            _zenMode?: boolean;
            _smallCubes?: boolean;
        };

        _environments?: {
            _overrideEnvironments?: boolean;
        };
        _colors?: {
            _overrideDefaultColors?: boolean;
        };
        _graphics?: {
            _mirrorGraphicsSettings?: 0 | 1 | 2 | 3;
            _mainEffectGraphicsSettings?: 0 | 1;
            _smokeGraphicsSettings?: 0 | 1;
            _burnMarkTrailsEnabled?: boolean;
            _screenDisplacementEffectsEnabled?: boolean;
            _maxShockwaveParticles?: 0 | 1 | 2;
        };
        _noteJumpDurationTypeSettings?: {
            _noteJumpFixedDuration?: number;
        };
    };
}

/** Noodle Extensions Object interface for Beatmap Object. */
interface INEObject {
    _position?: Vector2;
    _rotation?: number | Vector3;
    _localRotation?: Vector3;
    _noteJumpMovementSpeed?: number;
    _noteJumpStartBeatOffset?: number;
    _fake?: boolean;
    _interactable?: boolean;
    _track?: string | string[];
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

/** AssignPathAnimation interface for Noodle Extensions Custom Event.
 * @extends IHeckCustomEventDataBase
 */
export interface INECustomEventDataAnimateTrack extends IHeckCustomEventDataBase {
    _dissolve?: string | PercentPointDefinition[];
    _dissolveArrow?: string | PercentPointDefinition[];
    _interactable?: string | PercentPointDefinition[];
    _time?: string | PercentPointDefinition[];
}

/** AssignPathAnimation interface for Noodle Extensions Custom Event.
 * @extends IHeckCustomEventDataBase
 */
export interface INECustomEventDataAssignPathAnimation extends IHeckCustomEventDataBase {
    _dissolve?: string | PercentPointDefinition[];
    _dissolveArrow?: string | PercentPointDefinition[];
    _interactable?: string | PercentPointDefinition[];
    _definitePosition?: string | Vector3PointDefinition[];
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
    _playerTrackObject?: PlayerObject;
}

/** Noodle Extensions Animation interface for Noodle Extensions Object. */
export interface INEAnimation {
    _position?: string | Vector3PointDefinition[];
    _rotation?: string | Vector3PointDefinition[];
    _localRotation?: string | Vector3PointDefinition[];
    _scale?: string | Vector3PointDefinition[];
    _dissolve?: string | PercentPointDefinition[];
    _dissolveArrow?: string | PercentPointDefinition[];
    _interactable?: string | PercentPointDefinition[];
    _definitePosition?: string | Vector3PointDefinition[];
    _time?: string | PercentPointDefinition[];
}

/** Chroma Material interface for Environment Enhancement. */
export interface IChromaMaterial {
    _shader: LooseAutocomplete<ShaderType | EnvironmentMaterial>;
    /** Overrides default shader keywords. */
    _shaderKeywords?: LooseAutocomplete<ShaderKeywords>[];
    _collision?: boolean;
    _track?: string;
    _color?: ColorArray;
}

/** Chroma Geometry interface for Environment Enhancement. */
export interface IChromaGeometryBase {
    _type: GeometryType;
    _material: IChromaMaterial | string;
    _collision?: boolean;
}

/** Chroma Geometry Custom interface for Environment Enhancement. */
export interface IChromaGeometryCustom {
    _type: 'CUSTOM';
    _mesh: {
        _vertices: Vector3[];
        _uv?: Vector2[];
        _triangles?: number[];
    };
    _material: IChromaMaterial | string;
    _collision?: boolean;
}

export type IChromaGeometry = IChromaGeometryBase | IChromaGeometryCustom;

/** Chroma interface for Environment Enhancement Base. */
export interface IChromaEnvironmentBase {
    /** Look up environment object name.
     *
     * This grabs every environment objects that match the string.
     * ```ts
     * id: 'Environment.[0]GlowLine' || 'Environment\.\\[\\d+\\]GlowLine$' // Regex example
     * ```
     */
    _id?: unknown;
    /** Look-up method to grab the object name.
     *
     * Regex is considered an advanced method and more powerful than other methods.
     */
    _lookupMethod?: unknown;
    _geometry?: unknown;
    /** Assign track to the object for animation use. */
    _track?: string;
    /** Duplicate the object by set amount.
     *
     * **WARNING:** You should always duplicate only one at a time unless you know what you are doing.
     */
    _duplicate?: number;
    _active?: boolean;
    _scale?: Vector3;
    _position?: Vector3;
    _rotation?: Vector3;
    _localPosition?: Vector3;
    _localRotation?: Vector3;
    /** Assign light ID for duplicated object. */
    _lightID?: number;
}

/** Chroma interface for Environment Enhancement ID.
 *
 * @extends IChromaEnvironmentBase
 */
export interface IChromaEnvironmentID extends IChromaEnvironmentBase {
    _id: string;
    _lookupMethod: LookupMethod;
    _geometry?: never;
}

/** Chroma interface for Environment Enhancement Geometry.
 *
 * @extends IChromaEnvironmentBase
 */
export interface IChromaEnvironmentGeometry extends IChromaEnvironmentBase {
    _id?: never;
    _lookupMethod?: never;
    _geometry: IChromaGeometry;
}

/** Chroma interface for Environment Enhancement. */
export type IChromaEnvironment = IChromaEnvironmentID | IChromaEnvironmentGeometry;

/** Chroma interface for Beatmap Object Animation Custom Data. */
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

/** AnimateComponent interface for Chroma Custom Event. */
export interface IChromaCustomEventDataAnimateTrack extends IHeckCustomEventDataBase {
    _color?: string | ColorPointDefinition[];
}

/** AnimateComponent interface for Chroma Custom Event. */
export interface IChromaCustomEventDataAssignPathAnimation extends IHeckCustomEventDataBase {
    _color?: string | ColorPointDefinition[];
}

/** AssignFogTrack interface for Chroma Custom Event. */
export interface IChromaCustomEventDataAssignFogTrack extends IHeckCustomEventDataBase {
    _track: string;
    _duration: number;
    _attenuation?: number | PercentPointDefinition[];
    _offset?: number | PercentPointDefinition[];
    _startY?: number | PercentPointDefinition[];
    _height?: number | PercentPointDefinition[];
}

/** Chroma Custom Data interface for difficulty custom data. */
export interface IChromaCustomData {
    _environment?: IChromaEnvironment[];
    _materials?: { [key: string]: IChromaMaterial };
}

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
}

/** AssignPathAnimation interface for Heck Custom Event.
 * @extends IHeckCustomEventDataBase
 */
export interface IHeckCustomEventDataAssignPathAnimation extends IHeckCustomEventDataBase {
    _easing?: Easings;
    _position?: string | Vector3PointDefinition[];
    _rotation?: string | Vector3PointDefinition[];
    _localRotation?: string | Vector3PointDefinition[];
    _scale?: string | Vector3PointDefinition[];
}

export type ICustomEventDataAnimateTrack =
    & IHeckCustomEventDataAnimateTrack
    & IChromaCustomEventDataAnimateTrack
    & INECustomEventDataAnimateTrack;

export type ICustomEventDataAssignPathAnimation =
    & IHeckCustomEventDataAssignPathAnimation
    & IChromaCustomEventDataAssignPathAnimation
    & INECustomEventDataAssignPathAnimation;

/** Custom Event interface for AnimateTrack. */
export interface ICustomEventAnimateTrack {
    _time: number;
    _type: 'AnimateTrack';
    _data: ICustomEventDataAnimateTrack;
}

/** Custom Event interface for AssignPathAnimation. */
export interface ICustomEventAssignPathAnimation {
    _time: number;
    _type: 'AssignPathAnimation';
    _data: ICustomEventDataAssignPathAnimation;
}

/** Custom Event interface for InvokeEvent. */
// export interface IHeckCustomEventInvokeEvent {
//     _time: number;
//     _type: 'InvokeEvent';
//     _data: IHeckCustomEventDataInvokeEvent;
// }

/** Custom Event interface for AssignFogTrack. */
export interface ICustomEventAssignFogTrack {
    _time: number;
    _type: 'AssignFogTrack';
    _data: IChromaCustomEventDataAssignFogTrack;
}

/** Custom Event interface for AssignTrackParent. */
export interface ICustomEventAssignTrackParent {
    _time: number;
    _type: 'AssignTrackParent';
    _data: INECustomEventDataAssignTrackParent;
}

/** Custom Event interface for AssignPlayerToTrack. */
export interface ICustomEventAssignPlayerToTrack {
    _time: number;
    _type: 'AssignPlayerToTrack';
    _data: INECustomEventDataAssignPlayerToTrack;
}

export type ICustomEvent =
    | ICustomEventAnimateTrack
    | ICustomEventAssignPathAnimation
    | ICustomEventAssignFogTrack
    | ICustomEventAssignTrackParent
    | ICustomEventAssignPlayerToTrack;

/** Point Definition interface. */
export interface IPointDefinition {
    _name: string;
    _points: PercentPointDefinition[] | Vector2PointDefinition[] | Vector3PointDefinition[] | ColorPointDefinition[];
}
/** Beatmap difficulty custom data interface for BPM Change. */
export interface IBPMChange {
    _time: number;
    _bpm?: never;
    _BPM: number;
    _beatsPerBar: number;
    _metronomeOffset: number;
}

/** Beatmap difficulty custom data interface for MediocreMapper BPM Change. */
export interface IBPMChangeOld {
    _time: number;
    _bpm: number;
    _BPM: never;
    _beatsPerBar: number;
    _metronomeOffset: number;
}

/**
 * @extends IBPMChange
 */
export interface IBPMChangeTime extends IBPMChange {
    _newTime: number;
}

/** Beatmap difficulty custom data interface for Bookmark. */
export interface IBookmark {
    _time: number;
    _name: string;
    _color?: ColorArray;
}

export interface IAnimation {
    _animation?: INEAnimation & IChromaAnimation;
}

/** Custom Data interface for difficulty file.
 * @extends ICustomDataBase
 * @extends IChromaCustomData
 */
export interface ICustomDataDifficulty extends ICustomDataBase, IChromaCustomData {
    _customEvents?: ICustomEvent[];
    _pointDefinitions?: IPointDefinition[];
    _time?: number;
    _bpmChanges?: IBPMChangeOld[];
    _BPMChanges?: IBPMChange[];
    _bookmarks?: IBookmark[];
}

export type ICustomDataNote = ICustomDataBase & IChromaNote & INENote & IAnimation;
export type ICustomDataObstacle = ICustomDataBase & IChromaObstacle & INEObstacle & IAnimation;

export interface IBaseObject {
    /** Beat time `<float>` of beatmap object. */
    _time: number;
    _customData?: ICustomDataBase;
}

export interface ISpecialEventsKeywordFiltersKeywords {
    _keyword: string;
    _specialEvents: number[];
}

// yea i dont even know but it exist
export interface ISpecialEventsKeywordFilters {
    _keywords: ISpecialEventsKeywordFiltersKeywords[];
}

/** Beatmap object interface for Waypoint. */
// as far as i know, it does not have customData as of yet
// what does this do anyway?
export interface IWaypoint extends IBaseObject {
    _lineIndex: number;
    _lineLayer: number;
    _offsetDirection: 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 9;
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
    _floatValue: number;
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
    _floatValue: number;
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
    /** Changes the BPM to this value. */
    _floatValue: number;
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
    _lineLayer: number;
    /** Type of obstacle.
     * ```ts
     * 0 -> Full-height Wall
     * 1 -> Crouch Wall
     * ```
     */
    _type: number;
    _duration: number;
    _width: number;
    _height: number;
    _customData?: ICustomDataObstacle;
}

/** not a burst slider. */
export interface ISlider {
    /** Color type `<int>` of base slider.
     * ```ts
     * 0 -> Red
     * 1 -> Blue
     * ```
     */
    _colorType: 0 | 1;
    _headTime: number;
    _headLineIndex: number;
    _headLineLayer: number;
    /** Head control point length multiplier `<float>` of slider. */
    _headControlPointlengthMultiplier: number;
    /** Head cut direction `<int>` of slider.
     * ```ts
     * 4 | 0 | 5
     * 2 | 8 | 3
     * 6 | 1 | 7
     * ```
     * ---
     * Grid represents cut direction from center.
     */
    _headCutDirection: 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8;
    _tailTime: number;
    _tailLineIndex: number;
    _tailLineLayer: number;
    /** Tail control point length multiplier `<float>` of slider. */
    _tailControlPointLengthMultiplier: number;
    /** Tail cut direction `<int>` of slider.
     * ```ts
     * 4 | 0 | 5
     * 2 | 8 | 3
     * 6 | 1 | 7
     * ```
     * ---
     * Grid represents cut direction from center.
     */
    _tailCutDirection: 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8;
    /** Mid anchor mode `<int>` of slider.
     * ```ts
     * 0 -> Straight
     * 1 -> Clockwise
     * 2 -> Counter-Clockwise
     * ```
     */
    _sliderMidAnchorMode: 0 | 1 | 2;
}

/** Beatmap object interface for Note. */
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

/** Difficulty interface for difficulty file. */
export interface IDifficulty {
    _version: `2.${0 | 2 | 4 | 5 | 6}.0`;
    _notes: INote[];
    _sliders: ISlider[];
    _obstacles: IObstacle[];
    _events: IEvent[];
    _waypoints: IWaypoint[];
    _specialEventsKeywordFilters?: ISpecialEventsKeywordFilters;
    _customData?: ICustomDataDifficulty;
}

/** Available characteristic from both base game and modded. */
export type CharacteristicName =
    | 'Standard'
    | 'NoArrows'
    | 'OneSaber'
    | '360Degree'
    | '90Degree'
    | 'Lightshow'
    | 'Lawless';

export type DifficultyName = 'Easy' | 'Normal' | 'Hard' | 'Expert' | 'ExpertPlus';

/** Difficulty rename to human readable. */
export type DifficultyRank = 1 | 3 | 5 | 7 | 9;

export type GenericFileName = `${DifficultyName}${CharacteristicName | ''}.dat`;

/** List of available v2 environment in base game. */
export type EnvironmentName =
    | 'DefaultEnvironment'
    | 'OriginsEnvironment'
    | 'TriangleEnvironment'
    | 'NiceEnvironment'
    | 'BigMirrorEnvironment'
    | 'DragonsEnvironment'
    | 'KDAEnvironment'
    | 'MonstercatEnvironment'
    | 'CrabRaveEnvironment'
    | 'PanicEnvironment'
    | 'RocketEnvironment'
    | 'GreenDayEnvironment'
    | 'GreenDayGrenadeEnvironment'
    | 'TimbalandEnvironment'
    | 'FitBeatEnvironment'
    | 'LinkinParkEnvironment'
    | 'BTSEnvironment'
    | 'KaleidoscopeEnvironment'
    | 'InterscopeEnvironment'
    | 'SkrillexEnvironment'
    | 'BillieEnvironment'
    | 'HalloweenEnvironment'
    | 'GagaEnvironment';
/** List of available v3 environment in base game. */
export type EnvironmentV3Name = 'WeaveEnvironment' | 'PyroEnvironment' | 'EDMEnvironment' | 'TheSecondEnvironment';
/** List of available 360 environment in base game. */
export type Environment360Name = 'GlassDesertEnvironment';
/** List of all available environment in base game. */
export type EnvironmentAllName = EnvironmentName | EnvironmentV3Name | Environment360Name;

/** Color Scheme interface for difficulty info custom data. */
export interface IColorScheme {
    _colorLeft?: Omit<IColor, 'a'>;
    _colorRight?: Omit<IColor, 'a'>;
    _envColorLeft?: Omit<IColor, 'a'>;
    _envColorRight?: Omit<IColor, 'a'>;
    _envColorWhite?: Omit<IColor, 'a'>;
    _envColorLeftBoost?: Omit<IColor, 'a'>;
    _envColorRightBoost?: Omit<IColor, 'a'>;
    _envColorWhiteBoost?: Omit<IColor, 'a'>;
    _obstacleColor?: Omit<IColor, 'a'>;
}

/** List of available color scheme in base game. */
export type ColorSchemeList =
    | 'Default Custom'
    | 'The First'
    | 'Origins'
    | 'KDA'
    | 'Crab Rave'
    | 'Noir'
    | 'Rocket'
    | 'Green Day'
    | 'Timbaland'
    | 'FitBeat'
    | 'Linkin Park'
    | 'BTS'
    | 'Kaleidoscope'
    | 'Interscope'
    | 'Skrillex'
    | 'Billie Eilish'
    | 'Spooky'
    | 'Gaga'
    | 'Weave'
    | 'Pyro'
    | 'EDM'
    | 'The Second'
    | 'Glass Desert';

export type IEnvironmentScheme = {
    readonly [key in ColorSchemeList]: Readonly<IColorScheme>;
};

/** Info interface for info file. */
export interface IInfoData {
    _version: `2.${0 | 2}.0`;
    _songName: string;
    _songSubName: string;
    _songAuthorName: string;
    _levelAuthorName: string;
    _beatsPerMinute: number;
    _shuffle: number;
    _shufflePeriod: number;
    _previewStartTime: number;
    _previewDuration: number;
    _songFilename: string;
    _coverImageFilename: string;
    _environmentName: EnvironmentName | EnvironmentV3Name;
    _allDirectionsEnvironmentName: Environment360Name;
    _songTimeOffset: number;
    _customData?: ICustomDataInfo;
    _difficultyBeatmapSets: IInfoSetData[];
}
/** Info Set interface for info. */
export interface IInfoSetData {
    _beatmapCharacteristicName: CharacteristicName;
    _difficultyBeatmaps: IInfoSetDifficulty[];
}
/** Info Set interface for info. */
export interface IInfoSetDifficulty {
    _difficulty: DifficultyName;
    _difficultyRank: DifficultyRank;
    _beatmapFilename: LooseAutocomplete<GenericFileName>;
    _noteJumpMovementSpeed: number;
    _noteJumpStartBeatOffset: number;
    _customData?: ICustomDataInfoDifficulty;
}

export type LooseAutocomplete<T extends string | number> = T extends string ? T | Omit<string, T> : T | Omit<number, T>;
