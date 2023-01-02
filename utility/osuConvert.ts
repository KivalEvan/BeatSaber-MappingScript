const fileInput: string = Deno.readTextFileSync(prompt('osu! map file name')!);
const BPM = 180;
const offset = -1.02;

const parsed = fileInput
    .match(/\[[\w]+\][\s\w:'"|/\-,.\(\)]+/g)!
    .map((s: string) => s.split('\r\n').filter((c) => c != ''));

const mapped: { [key: string]: any } = {};
parsed.forEach((p) => (mapped[p.shift()!.slice(1).replace(']', '')] = p));

interface TimingPoint {
    time: number;
    beatLength: number;
    meter: number;
    sampleSet: number;
    sampleIndex: number;
    volume: number;
    uninherited: boolean;
    effects: number;
}

interface KeysoundCircle {
    time: number;
    type: 'note';
    hitSound: number;
    hitSample?: number[];
}
interface KeysoundSlider {
    time: number;
    type: 'slider';
    hitSound: number;
    backAndForth: number;
    length: number;
    edgeSound?: number[];
    edgeSet?: number[][];
    hitSample?: number[];
}
interface KeysoundSpinner {
    time: number;
    type: 'spinner';
    hitSound: number;
    endTime: number;
    hitSample?: number[];
}

type Keysound = KeysoundCircle | KeysoundSlider | KeysoundSpinner;

const timingPoints: TimingPoint[] = [];
mapped.TimingPoints.forEach((tp: string) => {
    const newTP = tp.split(',').map((n) => parseFloat(n));
    timingPoints.push({
        time: newTP[0] / 1000,
        beatLength: newTP[1],
        meter: newTP[2],
        sampleSet: newTP[3],
        sampleIndex: newTP[4],
        volume: newTP[5] / 100,
        uninherited: newTP[6] > 0 ? true : false,
        effects: newTP[7],
    });
});
timingPoints.reverse();

const keysounds: Keysound[] = [];
mapped.HitObjects.forEach((hs: string) => {
    const newHS = hs.split(',').filter((c) => !c.match(/^[A-Z]/));
    if ((parseInt(newHS[3]) & 0x01) === 1) {
        keysounds.push({
            time: parseInt(newHS[2]) / 1000,
            type: 'note',
            hitSound: parseInt(newHS[4]),
            hitSample: newHS[5]
                .split(':')
                .filter((n) => n !== '')
                .map((n) => parseInt(n)),
        });
    }
    if ((parseInt(newHS[3]) & 0x02) === 2) {
        if (newHS.length === 7) {
            keysounds.push({
                time: parseInt(newHS[2]) / 1000,
                type: 'slider',
                hitSound: parseInt(newHS[4]),
                backAndForth: parseInt(newHS[5]),
                length: parseFloat(newHS[6]),
                hitSample: [0, 0, 0, 0],
            });
        } else {
            keysounds.push({
                time: parseInt(newHS[2]) / 1000,
                type: 'slider',
                hitSound: parseInt(newHS[4]),
                backAndForth: parseInt(newHS[5]),
                length: parseFloat(newHS[6]),
                edgeSound: newHS[7].split('|').map((n) => parseInt(n)),
                edgeSet: newHS[8].split('|').map((n) => n.split(':').map((m) => parseInt(m))),
                hitSample: newHS[9]
                    .split(':')
                    .filter((n) => n !== '')
                    .map((n) => parseInt(n)),
            });
        }
    }
    if ((parseInt(newHS[3]) & 0x08) === 8) {
        keysounds.push({
            time: parseInt(newHS[2]) / 1000,
            type: 'spinner',
            hitSound: parseInt(newHS[4]),
            endTime: parseInt(newHS[5]) / 1000,
            hitSample: newHS[6]
                .split(':')
                .filter((n) => n !== '')
                .map((n) => parseInt(n)),
        });
    }
});

const sampleSet: { [key: number]: string } = {
    0: 'auto',
    1: 'normal',
    2: 'soft',
    3: 'drum',
};
const hitSample: { [key: number]: string } = {
    1: 'normal',
    2: 'whistle',
    4: 'finish',
    8: 'clap',
};

interface KeysoundMap {
    _id: number;
    _file: string;
}
const keysoundMap: KeysoundMap[] = [];
let id = 0;
const getKeysound = (key: Keysound, index = 0, offset = 0): KeysoundNote[] => {
    const ary: KeysoundNote[] = [];
    let samSet = sampleSet[
        key.type === 'slider' && key.edgeSet?.[index][0] ? key.edgeSet[index][0] : (key.hitSample?.[0] ||
            timingPoints.find((tp) => !tp.uninherited && tp.time <= key.time + offset)!.sampleSet) ??
            0
    ];
    if (samSet === 'auto') {
        samSet = sampleSet[timingPoints.find((tp) => !tp.uninherited && tp.time <= key.time + offset)!.sampleSet];
    }
    let sampleIndex = (key.hitSample?.[2] ||
        timingPoints.find((tp) => !tp.uninherited && tp.time <= key.time + offset)!.sampleIndex) ??
        1;
    if (
        (key.type === 'slider' &&
            typeof key.edgeSound?.[index] === 'number' &&
            (key.edgeSound[index] === 0 || key.edgeSound[index] & 0x01)) ||
        key.hitSound & 0x01 ||
        key.hitSound === 0
    ) {
        if (
            !keysoundMap.find(
                (kms) => kms._file === `${samSet}-hit${hitSample[1]}${sampleIndex > 1 ? sampleIndex : ''}.wav`,
            )
        ) {
            keysoundMap.push({
                _id: id++,
                _file: `${samSet}-hit${hitSample[1]}${sampleIndex > 1 ? sampleIndex : ''}.wav`,
            });
        }
        ary.push({
            _id: keysoundMap.find(
                (kms) => kms._file === `${samSet}-hit${hitSample[1]}${sampleIndex > 1 ? sampleIndex : ''}.wav`,
            )!._id,
            _type: 'hit',
            _volume: timingPoints.find((tp) => !tp.uninherited && tp.time <= key.time + offset)!.volume ?? 1,
            _pitch: 1,
            _offset: 0,
        });
    }
    samSet = sampleSet[
        key.type === 'slider' && key.edgeSet?.[index][1] ? key.edgeSet[index][1] : (key.hitSample?.[1] ||
            timingPoints.find((tp) => !tp.uninherited && tp.time <= key.time + offset)!.sampleSet) ??
            0
    ];
    if (samSet === 'auto') {
        samSet = sampleSet[timingPoints.find((tp) => !tp.uninherited && tp.time <= key.time + offset)!.sampleSet];
    }
    sampleIndex = (key.hitSample?.[2] ||
        timingPoints.find((tp) => !tp.uninherited && tp.time <= key.time + offset)!.sampleIndex) ??
        1;
    if (
        (key.type === 'slider' && typeof key.edgeSound?.[index] === 'number' && key.edgeSound[index] & 0x02) ||
        key.hitSound & 0x02
    ) {
        if (
            !keysoundMap.find(
                (kms) => kms._file === `${samSet}-hit${hitSample[2]}${sampleIndex > 1 ? sampleIndex : ''}.wav`,
            )
        ) {
            keysoundMap.push({
                _id: id++,
                _file: `${samSet}-hit${hitSample[2]}${sampleIndex > 1 ? sampleIndex : ''}.wav`,
            });
        }
        ary.push({
            _id: keysoundMap.find(
                (kms) => kms._file === `${samSet}-hit${hitSample[2]}${sampleIndex > 1 ? sampleIndex : ''}.wav`,
            )!._id,
            _type: 'hit',
            _volume: timingPoints.find((tp) => !tp.uninherited && tp.time <= key.time)!.volume ?? 1,
            _pitch: 1,
            _offset: 0,
        });
    }
    if (
        (key.type === 'slider' && typeof key.edgeSound?.[index] === 'number' && key.edgeSound[index] & 0x04) ||
        key.hitSound & 0x04
    ) {
        if (
            !keysoundMap.find(
                (kms) => kms._file === `${samSet}-hit${hitSample[4]}${sampleIndex > 1 ? sampleIndex : ''}.wav`,
            )
        ) {
            keysoundMap.push({
                _id: id++,
                _file: `${samSet}-hit${hitSample[4]}${sampleIndex > 1 ? sampleIndex : ''}.wav`,
            });
        }
        ary.push({
            _id: keysoundMap.find(
                (kms) => kms._file === `${samSet}-hit${hitSample[4]}${sampleIndex > 1 ? sampleIndex : ''}.wav`,
            )!._id,
            _type: 'hit',
            _volume: timingPoints.find((tp) => !tp.uninherited && tp.time <= key.time)!.volume ?? 1,
            _pitch: 1,
            _offset: 0,
        });
    }
    if (
        (key.type === 'slider' && typeof key.edgeSound?.[index] === 'number' && key.edgeSound[index] & 0x08) ||
        key.hitSound & 0x08
    ) {
        if (
            !keysoundMap.find(
                (kms) => kms._file === `${samSet}-hit${hitSample[8]}${sampleIndex > 1 ? sampleIndex : ''}.wav`,
            )
        ) {
            keysoundMap.push({
                _id: id++,
                _file: `${samSet}-hit${hitSample[8]}${sampleIndex > 1 ? sampleIndex : ''}.wav`,
            });
        }
        ary.push({
            _id: keysoundMap.find(
                (kms) => kms._file === `${samSet}-hit${hitSample[8]}${sampleIndex > 1 ? sampleIndex : ''}.wav`,
            )!._id,
            _type: 'hit',
            _volume: timingPoints.find((tp) => !tp.uninherited && tp.time <= key.time)!.volume ?? 1,
            _pitch: 1,
            _offset: 0,
        });
    }
    return ary;
};

interface Note {
    _time: number;
    _lineIndex: number;
    _lineLayer: number;
    _type: number;
    _cutDirection: number;
    _customData?: {
        _keysound: KeysoundNote[];
    };
}
interface KeysoundNote {
    _id: number;
    _type: 'hit' | 'miss' | 'badcut';
    _volume: number;
    _pitch: number;
    _offset: number;
}

const sliderMultiplier = parseFloat(
    mapped.Difficulty.find((s: string) => s.startsWith('SliderMultiplier'))!.split(':')[1],
);

const closestValue = (n: number, p: number[]) => {
    return n;
    const val: number[] = [];
    p.forEach((prec) => val.push((Math.round(n * prec) * 10 ** prec) / 10 ** prec / prec));
    return val.reduce((a, b) => (Math.abs(b - n) < Math.abs(a - n) ? b : a));
};
const getMultiplier = (n: number) => {
    return 1 / (100 / Math.abs(n));
};
const notes: Note[] = [];
const BPMChanges: any[] = [];
const toBeatSaberNote = (key: Keysound): void => {
    if (key.type === 'note') {
        notes.push({
            _time: closestValue(((key.time + offset) * BPM) / 60, [8, 12]) + 1,
            _lineIndex: 2,
            _lineLayer: 0,
            _type: 1,
            _cutDirection: 8,
            _customData: {
                _keysound: getKeysound(key),
            },
        });
    }
    if (key.type === 'slider') {
        const sliderMs = closestValue((((600 * key.length) / (BPM * sliderMultiplier) / 1000) * BPM) / 60, [16, 24]) *
            getMultiplier(timingPoints.find((tp) => !tp.uninherited && tp.time <= key.time)!.beatLength);
        for (let i = 0; i <= key.backAndForth; i++) {
            notes.push({
                _time: closestValue(((key.time + offset) * BPM) / 60, [16, 24]) + sliderMs * i + 1,
                _lineIndex: i ? 0 : 1,
                _lineLayer: 0,
                _type: 0,
                _cutDirection: 8,
                _customData: {
                    _keysound: getKeysound(key, i, ((sliderMs * i) / BPM) * 60),
                },
            });
        }
    }
    if (key.type === 'spinner') {
        notes.push({
            _time: closestValue(((key.endTime + offset) * BPM) / 60, [8, 12]) + 1,
            _lineIndex: 3,
            _lineLayer: 0,
            _type: 1,
            _cutDirection: 8,
            _customData: {
                _keysound: getKeysound(key),
            },
        });
    }
};

keysounds.forEach((k) => toBeatSaberNote(k));
timingPoints.forEach((tp) => {
    if (tp.uninherited) {
        BPMChanges.push({
            _time: ((tp.time + offset) * BPM) / 60,
            _BPM: (1 / tp.beatLength) * 1000 * 60,
            _beatsPerBar: 4,
            _metronomeOffset: 4,
        });
    }
});
BPMChanges.sort((a, b) => a._time - b._time);
// keysounds.forEach((k) => {
//     if (k.hitSample) {
//         if (!k.hitSample.every((hs) => hs === 0)) console.log(k);
//     }
// });
console.log(keysoundMap);
Deno.writeTextFileSync(
    'map.json',
    JSON.stringify(
        {
            _version: '2.5.0',
            _customData: {
                _BPMChanges: BPMChanges,
                _keysound: keysoundMap,
            },
            _events: [],
            _notes: notes,
            _obstacles: [],
            _waypoints: [],
        },
        null,
        2,
    ),
);
