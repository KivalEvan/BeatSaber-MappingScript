/**
 * @typedef {Object} ICustomDataBase
 * @property {*}
 */

/**
 * @typedef {'Sine'|'Quad'|'Cubic'|'Quart'|'Quint'|'Expo'|'Circ'|'Back'|'Elastic'|'Bounce'} Curve
 * @typedef {'In'|'Out'|'InOut'} Transition
 * @typedef {`ease${Transition}${Curve}`|'easeLinear'|'easeStep'} Easings
 */

/**
 * @callback EasingFunction
 * @param {number} x
 * @returns {number}
 */

/**
 * @typedef {[number, number, number, number?]} ColorArray
 * @typedef {[number, number]} Vector2
 * @typedef {[number, number, number]} Vector3
 * @typedef {[number, number, number, number, number, Easings?]} ColorPointDefinition
 * @typedef {[number, number, Easings?]} PercentPointDefinition
 * @typedef {[number, number, number, Easings?, 'splineCatmullRom'?] |[number, number, number, 'splineCatmullRom'?]} Vector2PointDefinition
 * @typedef {[number, number, number, number, Easings?, 'splineCatmullRom'?]|[number, number, number, number, 'splineCatmullRom'?]} Vector3PointDefinition
 * @typedef {Vector2PointDefinition[]|Vector3PointDefinition[]|ColorPointDefinition[]} PointDefinition
 */

/**
 * @typedef {Object} IHeckCustomEventDataBase
 * @property {string | string[]} _track
 * @extends IEventBase
 */

/**
 * @typedef {Object} IHeckCustomEventDataAnimateTrack
 * @property {number} _duration
 * @property {Easings} [_easing]
 * @property {string | Vector3PointDefinition[]} [_position]
 * @property {string | Vector3PointDefinition[]} [_rotation]
 * @property {string | Vector3PointDefinition[]} [_localRotation]
 * @property {string | Vector3PointDefinition[]} [_scale]
 * @property {string | PercentPointDefinition[]} [_dissolve]
 * @property {string | PercentPointDefinition[]} [_dissolveArrow]
 * @property {string | ColorPointDefinition[]} [_color]
 * @property {string | PercentPointDefinition[]} [_interactable]
 * @property {string | PercentPointDefinition[]} [_time]
 * @extends IHeckCustomEventDataBase
 */

/**
 * @typedef {Object} IHeckCustomEventDataAssignPathAnimation
 * @property {number} _duration
 * @property {Easings} [_easing]
 * @property {string | Vector3PointDefinition[]} [_position]
 * @property {string | Vector3PointDefinition[]} [_rotation]
 * @property {string | Vector3PointDefinition[]} [_localRotation]
 * @property {string | Vector3PointDefinition[]} [_scale]
 * @property {string | PercentPointDefinition[]} [_dissolve]
 * @property {string | PercentPointDefinition[]} [_dissolveArrow]
 * @property {string | ColorPointDefinition[]} [_color]
 * @property {string | PercentPointDefinition[]} [_interactable]
 * @property {string | Vector3PointDefinition[]} [_definitePosition]
 * @extends IHeckCustomEventDataBase
 */

/**
 * @typedef {Object} IHeckCustomEventAnimateTrack
 * @property {number} _time
 * @property {'AnimateTrack'} _type
 * @property {IHeckCustomEventDataAnimateTrack} _data
 */

/**
 * @typedef {Object} IHeckCustomEventAssignPathAnimation
 * @property {number} _time
 * @property {'AssignPathAnimation'} _type
 * @property {IHeckCustomEventDataAssignPathAnimation} _data
 */

/**
 * @typedef {IHeckCustomEventAnimateTrack | IHeckCustomEventAssignPathAnimation} IHeckCustomEvent
 */

/**
 * @typedef {Object} INEObject
 * @property {Vector2} [_position]
 * @property {number | Vector3} [_rotation]
 * @property {Vector3} [_localRotation]
 * @property {number} [_noteJumpMovementSpeed]
 * @property {number} [_noteJumpStartBeatOffset]
 * @property {boolean} [_fake]
 * @property {boolean} [_interactable]
 * @property {string | string[]} [_track]
 * @property {INEAnimation} [_animation]
 */

/**
 * @typedef {Object} INENote
 * @property {number} [_cutDirection]
 * @property {Vector2} [_flip]
 * @property {boolean} [_disableNoteGravity]
 * @property {boolean} [_disableNoteLook]
 * @extends INEObject
 */

/**
 * @typedef {Object} INEObstacle
 * @property {Vector3} _scale
 * @extends INEObject
 */

/**
 * @typedef {Object} INEEvent
 * @property {number} _rotation
 * @extends ICustomDataBase
 */

/**
 * @typedef {Object} INECustomEventDataAssignTrackParent
 * @property {string[]} _childrenTracks
 * @property {string} _parentTrack
 * @property {boolean} [_worldPositionStays]
 */

/**
 * @typedef {Object} INECustomEventDataAssignPlayerToTrack
 * @property {string} _track
 * @extends INECustomEventDataBase
 */

/**
 * @typedef {Object} INEAnimation
 * @property {string | Vector3PointDefinition[]} [_position]
 * @property {string | Vector3PointDefinition[]} [_rotation]
 * @property {string | Vector3PointDefinition[]} [_localRotation]
 * @property {string | Vector3PointDefinition[]} [_scale]
 * @property {string | PercentPointDefinition[]} [_dissolve]
 * @property {string | PercentPointDefinition[]} [_dissolveArrow]
 * @property {string | ColorPointDefinition[]} [_color]
 * @property {string | PercentPointDefinition[]} [_interactable]
 * @property {string | Vector3PointDefinition[]} [_definitePosition]
 * @property {string | PercentPointDefinition[]} [_time]
 */

/**
 * @typedef {Object} INECustomEventAssignTrackParent
 * @property {number} _time
 * @property {'AssignTrackParent'} _type
 * @property {INECustomEventDataAssignTrackParent} _data
 */

/**
 * @typedef {Object} INECustomEventAssignPlayerToTrack
 * @property {number} _time
 * @property {'AssignPlayerToTrack'} _type
 * @property {INECustomEventDataAssignPlayerToTrack} _data
 */

/**
 * @typedef {INECustomEventAssignTrackParent | INECustomEventAssignPlayerToTrack} INECustomEvent
 */

/**
 * @typedef {Object} IChromaAnimation
 * @property {string | ColorPointDefinition[]} [_color]
 */

/**
 * @typedef {Object} IChromaNote
 * @property {ColorArray} [_color]
 * @property {boolean} [_disableSpawnEffect]
 */

/**
 * @typedef {Object} IChromaObstacle
 * @property {ColorArray} [_color]
 */

/**
 * @typedef {Object} IChromaEventLight
 * @property {ColorArray} [_color]
 * @property {number | number[]} [_lightID]
 * @property {number} [_propID]
 * @property {{_duration: number,_startColor: ColorArray, _endColor: ColorArray,_easing: Easings}} [_lightGradient]
 * @property {'HSV' | 'RGB'} [_lerpType]
 * @property {Easings} [_easing]
 * @extends ICustomDataBase
 */

/**
 * @typedef {Object} IChromaEventLaser
 * @property {boolean} [_lockPosition]
 * @property {number} [_speed]
 * @property {number} [_preciseSpeed]
 * @property {number} [_direction]
 * @extends ICustomDataBase
 */

/**
 * @typedef {Object} IChromaEventRing
 * @property {string} [_nameFilter]
 * @property {boolean} [_reset]
 * @property {number} [_rotation]
 * @property {number} [_step]
 * @property {number} [_prop]
 * @property {number} [_speed]
 * @property {number} [_direction]
 * @property {boolean} [_counterSpin]
 * @property {number} [_stepMult]
 * @property {number} [_propMult]
 * @property {number} [_speedMult]
 * @extends ICustomDataBase
 */

/**
 * @typedef {Object} IChromaEventZoom
 * @property {number} [_step]
 * @property {number} [_speed]
 * @extends ICustomDataBase
 */

/**
 * @typedef {Object} IChromaCustomEventDataAssignFogTrack
 * @property {string} _track
 * @property {number | PercentPointDefinition[]} [_attenuation]
 * @property {number | PercentPointDefinition[]} [_offset]
 * @property {number | PercentPointDefinition[]} [_startY]
 * @property {number | PercentPointDefinition[]} [_height]
 * @extends IHeckCustomEventDataBase
 */

/**
 * @typedef {Object} IChromaCustomEventAssignFogTrack
 * @property {number} _time
 * @property {'AssignFogTrack'} _type
 * @property {IChromaCustomEventDataAssignFogTrack} _data
 */

/**
 * @typedef {IChromaCustomEventAssignFogTrack} IChromaCustomEvent
 */

/**
 * @typedef {IHeckCustomEvent | IChromaCustomEvent | INECustomEvent}ICustomEvent
 * @typedef {ICustomDataBase & IChromaNote & INENote}ICustomDataNote
 * @typedef {ICustomDataBase & IChromaObstacle & INEObstacle} ICustomDataObstacle
 */

/**
 * @typedef {Object} IBaseObject
 * @property {number} _time
 * @property {ICustomDataBase} [_customData]
 */

/**
 * @typedef {Object} INote
 * @property {number} _lineIndex
 * @property {number} _lineLayer
 * @property {0|1|3} _type
 * @property {number} _cutDirection
 * @property {ICustomDataNote} [_customData]
 * @extends IBaseObject
 */

/**
 * @typedef {Object} IEventBase
 * @property {number} _type
 * @property {number} _value
 * @property {ICustomDataBase} [_customData]
 * @extends IBaseObject
 */

/**
 * @typedef {Object} IEventGeneric
 * @property {0|1|2|3|4|6|7|10|11} _type
 * @property {number} _value
 * @property {IChromaEventLight} [_customData]
 * @extends IEventBase
 */

/**
 * @typedef {Object} IEventGeneric
 * @property {number} _type
 * @extends IEventBase
 */

/**
 * @typedef {Object} IEventExtra
 * @property {5} _type
 * @property {0|1} _value toggle between boost event
 * @extends IEventBase
 */

/**
 * @typedef {Object} IEventExtra
 * @property {8} _type
 * @property {IChromaEventRing} [_customData]
 * @extends IEventBase
 */

/**
 * @typedef {Object} IEventExtra
 * @property {9} _type
 * @property {IChromaEventRing & IChromaEventZoom} [_customData]
 * @extends IEventBase
 */

/**
 * @typedef {Object} IEventExtra
 * @property {12|13} _type
 * @property {IChromaEventLaser} [_customData]
 * @extends IEventBase
 */

/**
 * @typedef {Object} IEventExtra
 * @property {14|15} _type
 * @property {INEEvent} [_customData]
 * @extends IEventBase
 */

/**
 * @typedef {Object} IEventExtra
 * @property {16|17|18|19} _type
 * @extends IEventBase
 */

/**
 * @typedef {Object} IEventSpecial
 * @property {40|41|42|43} _type
 * @extends IEventBase
 */

/**
 * @typedef {Object} IEventBPMChange
 * @property {100} _type
 * @extends IEventBase
 */

/**
 * @typedef {IEventGeneric|IEventLight|IEventBoost|IEventRing|IEventZoom|IEventLaser|IEventLaneRotation|IEventExtra|IEventSpecial|IEventBPMChange} IEvent
 */

/**
 * @typedef {Object} IObstacle
 * @property {number} _lineIndex
 * @property {number} _type
 * @property {number} _duration
 * @property {number} _width
 * @property {ICustomDataObstacle} [_customData]
 * @extends IBaseObject
 */

/**
 * @typedef {Object} IBPMChange
 * @property {number} _time
 * @property {number} _BPM
 * @property {number} _beatsPerBar
 * @property {number} _metronomeOffset
 */

/**
 * @typedef {string|number|boolean|string[]} Parameter
 */

/**
 * @callback Run
 * @param {number} cursor
 * @param {INote[]} notes
 * @param {IEvent[]} events
 * @param {IObstacle[]} walls
 * @param {*} _
 * @param {{params Parameter[]}} global
 * @param {*} data
 * @param {ICustomEvent[]} [customEvents]
 * @param {IBPMChange[]} [bpmChanges]
 * @returns {void}
 */

/**
 * @typedef {Object} Main
 * @property {string} name
 * @property {{[key:string] Parameter}} params
 * @property {Run} run
 * @property {boolean} [errorCheck]
 */
