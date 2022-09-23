import { BeatPerMinute, ext, NoteJumpSpeed, types, v3 } from '../../depsLocal.ts';

const { NE } = ext;
const { between } = ext.selector;

export function text(data: v3.Difficulty, BPM: BeatPerMinute, NJS: NoteJumpSpeed) {
    const diffText = {
        danmakuX: [
            [
                [105.6881, 186.3046],
                [72.5725, 186.3046],
                [72.5725, 173.3871],
                [101.1083, 173.3871],
                [101.1083, 132.6385],
                [86.3119, 132.6385],
                [99.8811, 111.98],
                [101.1083, 109.8569],
                [97.7027, 108.3303],
                [95.7252, 112.1386],
                [82.6716, 132.4037],
                [83.0238, 132.6385],
                [41.8055, 132.6385],
                [41.8055, 173.3871],
                [69.0495, 173.3871],
                [69.0495, 186.3046],
                [36.1688, 186.3046],
                [36.1688, 189.7101],
                [69.0495, 189.7101],
                [69.0495, 212.844],
                [72.5725, 212.844],
                [72.5725, 189.7101],
                [105.6881, 189.7101],
                [105.6881, 186.3046],
            ],
            [
                [6.9284, 142.7376],
                [31.9413, 142.7376],
                [31.9413, 113.0275],
                [1.1743, 113.0275],
                [1.1743, 116.433],
                [28.4183, 116.433],
                [28.4183, 139.2147],
                [3.7578, 139.2147],
                [3.2434, 145.3845],
                [0, 170.8037],
                [3.5229, 171.5083],
                [4.2275, 166.5761],
                [28.5358, 166.5761],
                [23.5473, 207.407],
                [22.8991, 208.2642],
                [19.2517, 209.4585],
                [18.789, 209.4385],
                [17.8061, 209.4373],
                [8.7017, 209.1966],
                [3.7578, 208.8514],
                [4.7959, 212.1171],
                [4.8147, 212.2569],
                [19.2094, 212.7372],
                [19.4936, 212.7266],
                [25.9523, 210.4954],
                [27.8911, 206.7317],
                [31.9953, 168.96],
                [32.1761, 165.6367],
                [32.2032, 165.4159],
                [32.2936, 163.207],
                [32.2936, 163.1706],
                [4.5798, 163.1706],
                [6.8756, 143.3154],
                [6.9284, 142.7376],
            ],
            [
                [97.5853, 169.9816],
                [72.5725, 169.9816],
                [72.5725, 154.7156],
                [97.5853, 154.7156],
                [97.5853, 169.9816],
            ],
            [
                [97.5853, 151.1927],
                [72.5725, 151.1927],
                [72.5725, 136.1615],
                [97.5853, 136.1615],
                [97.5853, 151.1927],
            ],
            [
                [45.211, 169.9816],
                [45.211, 154.7156],
                [69.0495, 154.7156],
                [69.0495, 169.9816],
                [45.211, 169.9816],
            ],
            [
                [45.211, 136.1615],
                [69.0495, 136.1615],
                [69.0495, 151.1927],
                [45.211, 151.1927],
                [45.211, 136.1615],
            ],
            [
                [44.6239, 109.0349],
                [41.8055, 110.2092],
                [47.4763, 119.0764],
                [51.3503, 128.1104],
                [51.6697, 129.233],
                [54.9578, 127.8239],
                [44.6239, 109.0349],
            ],
            [
                [66.5835, 107.156],
                [63.5303, 108.2128],
                [66.1572, 113.3199],
                [70.8087, 126.2867],
                [71.0459, 127.4716],
                [74.2165, 126.1798],
                [66.5835, 107.156],
            ],
            [
                [222.1798, 172.3303],
                [222.1798, 168.9248],
                [153.2477, 168.9248],
                [157.4588, 163.6404],
                [159.589, 160.4697],
                [208.2055, 160.4697],
                [208.2055, 129.5853],
                [133.989, 129.5853],
                [133.989, 160.4697],
                [155.1266, 160.4697],
                [152.0029, 164.8734],
                [148.6679, 168.9248],
                [118.0183, 168.9248],
                [118.0183, 172.3303],
                [145.4972, 172.3303],
                [118.6196, 191.1839],
                [116.022, 192.411],
                [118.6055, 194.8771],
                [136.455, 184.3082],
                [136.455, 209.556],
                [139.8605, 209.556],
                [139.8605, 186.422],
                [167.9266, 186.422],
                [167.9266, 212.844],
                [171.4495, 212.844],
                [171.4495, 186.422],
                [201.9816, 186.422],
                [201.9816, 204.0367],
                [200.6406, 205.7512],
                [200.2202, 205.7982],
                [189.8322, 205.7641],
                [187.1853, 205.6807],
                [188.5945, 208.7339],
                [201.2136, 208.4826],
                [202.8036, 208.1468],
                [203.8817, 207.7076],
                [205.5046, 204.0367],
                [205.5046, 184.778],
                [221.9449, 193.1156],
                [222.2749, 192.6294],
                [224.411, 190.2972],
                [218.4878, 188.0625],
                [194.466, 172.3303],
                [222.1798, 172.3303],
            ],
            [
                [148.1982, 127.3541],
                [151.6037, 127.3541],
                [151.6037, 119.956],
                [187.8899, 119.956],
                [187.8899, 126.767],
                [191.2954, 126.767],
                [191.2954, 119.956],
                [220.5358, 119.956],
                [220.5358, 116.433],
                [191.2954, 116.433],
                [191.2954, 107.156],
                [187.8899, 107.156],
                [187.8899, 116.433],
                [151.6037, 116.433],
                [151.6037, 107.156],
                [148.1982, 107.156],
                [148.1982, 116.433],
                [119.545, 116.433],
                [119.545, 119.956],
                [148.1982, 119.956],
                [148.1982, 127.3541],
            ],
            [
                [137.5119, 146.6128],
                [204.8, 146.6128],
                [204.8, 156.9468],
                [137.5119, 156.9468],
                [137.5119, 146.6128],
            ],
            [
                [137.5119, 132.9908],
                [204.8, 132.9908],
                [204.8, 143.2073],
                [137.5119, 143.2073],
                [137.5119, 132.9908],
            ],
            [
                [171.4495, 183.0165],
                [171.4495, 172.3303],
                [190.4734, 172.3303],
                [192.3758, 174.3865],
                [202.8036, 183.0165],
                [171.4495, 183.0165],
            ],
            [
                [150.1945, 172.3303],
                [167.9266, 172.3303],
                [167.9266, 183.0165],
                [138.2165, 183.0165],
                [147.2881, 175.2273],
                [150.1945, 172.3303],
            ],
            [
                [255.0605, 204.6238],
                [259.7578, 204.6238],
                [277.8422, 177.3798],
                [286.767, 163.8752],
                [287.2367, 163.8752],
                [287.3224, 163.9962],
                [296.7486, 177.3798],
                [314.833, 204.6238],
                [320, 204.6238],
                [289.8202, 160.7046],
                [317.6514, 119.3688],
                [312.8367, 119.3688],
                [295.6917, 145.4385],
                [294.3377, 147.3891],
                [288.674, 155.9662],
                [288.0587, 156.9468],
                [287.589, 156.9468],
                [279.3688, 145.4385],
                [261.8716, 119.3688],
                [257.0569, 119.3688],
                [285.0055, 160.4697],
                [255.0605, 204.6238],
            ],
        ].map((n) => n.map((m) => m.map((o) => (o *= 0.01)))) as types.Vector2[][],
        unidentified: [
            [
                [39.5021, 190.4564],
                [39.5021, 160.083],
                [67.8838, 160.083],
                [67.8838, 157.6763],
                [39.5021, 157.6763],
                [39.5021, 131.5353],
                [70.1245, 131.5353],
                [70.1245, 129.1286],
                [3.4855, 129.1286],
                [3.4855, 131.5353],
                [37.0954, 131.5353],
                [37.0954, 190.4564],
                [14.8548, 190.4564],
                [14.8548, 149.2116],
                [12.4481, 149.2116],
                [12.4481, 190.4564],
                [0, 190.4564],
                [0, 192.8631],
                [73.278, 192.8631],
                [73.278, 190.4564],
                [39.5021, 190.4564],
            ],
            [
                [156.5975, 143.4855],
                [156.5975, 141.0788],
                [129.8755, 141.0788],
                [129.8755, 122.4896],
                [127.4689, 122.4896],
                [127.4689, 141.0788],
                [101.6598, 141.0788],
                [101.6598, 143.4855],
                [124.7303, 143.4855],
                [100.1295, 180.3469],
                [99.5851, 180.7469],
                [99.8407, 180.9203],
                [101.371, 182.5054],
                [101.4108, 182.5726],
                [102.478, 181.7079],
                [125.4863, 147.8017],
                [127.1369, 143.4855],
                [127.4689, 143.4855],
                [127.4689, 177.7593],
                [111.0373, 177.7593],
                [111.0373, 180.166],
                [127.4689, 180.166],
                [127.4689, 196.7635],
                [129.8755, 196.7635],
                [129.8755, 180.166],
                [145.4772, 180.166],
                [145.4772, 177.7593],
                [129.8755, 177.7593],
                [129.8755, 143.4855],
                [130.3734, 143.4855],
                [155.6017, 182.3237],
                [157.3411, 180.5369],
                [157.5934, 180.3319],
                [136.7585, 153.0855],
                [132.8631, 143.4855],
                [156.5975, 143.4855],
            ],
            [
                [93.029, 146.556],
                [93.029, 196.9295],
                [95.4357, 196.9295],
                [95.4357, 142.2407],
                [103.2249, 124.4108],
                [103.6515, 123.1535],
                [101.3278, 122.6556],
                [88.4382, 149.4249],
                [82.0747, 157.6763],
                [83.9004, 159.5851],
                [89.1627, 152.6822],
                [93.029, 146.556],
            ],
            [
                [237.9253, 130.8714],
                [237.9253, 128.4647],
                [167.2199, 128.4647],
                [167.2199, 130.8714],
                [207.8008, 130.8714],
                [189.3826, 153.9104],
                [165.7261, 170.8714],
                [165.9602, 171.1203],
                [167.3029, 172.7801],
                [201.2448, 144.6473],
                [201.2448, 197.0125],
                [203.6514, 197.0125],
                [203.6514, 141.4938],
                [210.244, 131.5403],
                [210.6224, 130.8714],
                [237.9253, 130.8714],
            ],
            [
                [237.9253, 170.7884],
                [239.5021, 168.9626],
                [211.9535, 148.5934],
                [210.0415, 147.4689],
                [208.4647, 149.0456],
                [237.9253, 170.7884],
            ],
            [
                [320, 126.0581],
                [286.639, 126.0581],
                [286.639, 155.1867],
                [286.0564, 166.5295],
                [270.9543, 195.6846],
                [271.1768, 195.878],
                [272.6141, 197.5104],
                [281.0257, 188.3162],
                [287.5867, 172.0689],
                [287.9668, 170.0415],
                [317.5104, 170.0415],
                [317.5104, 192.1162],
                [317.4498, 192.8415],
                [315.6556, 194.1751],
                [315.4357, 194.1909],
                [314.6896, 194.2216],
                [304.7394, 194.244],
                [302.3236, 194.1909],
                [303.3311, 196.5137],
                [303.4025, 196.7635],
                [307.2, 196.761],
                [315.7834, 196.532],
                [317.0955, 196.3485],
                [319.9793, 192.7162],
                [320, 192.0332],
                [320, 126.0581],
            ],
            [
                [277.0125, 176.0166],
                [277.0125, 127.8838],
                [251.7012, 127.8838],
                [251.7012, 184.3154],
                [254.1909, 184.3154],
                [254.1909, 176.0166],
                [277.0125, 176.0166],
            ],
            [
                [289.0456, 155.1867],
                [289.0456, 148.9626],
                [317.5104, 148.9626],
                [317.5104, 167.6349],
                [288.2988, 167.6349],
                [289.0456, 155.1867],
            ],
            [
                [317.5104, 128.4647],
                [317.5104, 146.556],
                [289.0456, 146.556],
                [289.0456, 128.4647],
                [317.5104, 128.4647],
            ],
            [
                [254.1909, 173.527],
                [254.1909, 152.6141],
                [274.6058, 152.6141],
                [274.6058, 173.527],
                [254.1909, 173.527],
            ],
            [
                [274.6058, 130.3734],
                [274.6058, 150.2075],
                [254.1909, 150.2075],
                [254.1909, 130.3734],
                [274.6058, 130.3734],
            ],
        ].map((n) => n.map((m) => m.map((o) => (o *= 0.01)))) as types.Vector2[][],
        unknown: [
            [
                [52.7976, 140.0641],
                [51.4298, 138.6279],
                [51.0776, 138.6915],
                [49.0156, 138.9001],
                [48.8993, 138.9015],
                [7.181, 138.9015],
                [5.6087, 138.8727],
                [1.1599, 138.5582],
                [0, 138.4227],
                [0, 141.2268],
                [1.7741, 141.1221],
                [6.4103, 140.958],
                [7.181, 140.9532],
                [49.4465, 140.9532],
                [48.1258, 143.1923],
                [33.811, 157.806],
                [32.1436, 158.8032],
                [34.127, 160.3761],
                [41.4133, 154.3543],
                [51.7034, 141.4319],
                [52.0398, 140.9546],
                [52.7976, 140.0641],
            ],
            [
                [25.9885, 148.8865],
                [23.5948, 148.8865],
                [23.7316, 152.648],
                [9.8483, 183.4238],
                [4.7873, 185.7491],
                [6.8391, 187.4589],
                [15.8974, 181.8624],
                [25.9413, 153.0447],
                [25.9885, 148.8865],
            ],
            [
                [67.7752, 184.1077],
                [69.143, 186.2962],
                [97.5935, 174.6014],
                [116.5282, 154.3543],
                [118.2475, 151.3486],
                [116.9481, 149.2285],
                [114.6577, 153.5084],
                [96.2257, 173.0284],
                [93.2787, 174.8825],
                [76.5777, 182.1805],
                [67.7752, 184.1077],
            ],
            [
                [70.9211, 138.0124],
                [69.5533, 139.4486],
                [71.7877, 140.9805],
                [86.4239, 153.2437],
                [86.5142, 153.3319],
                [88.0872, 151.7589],
                [86.5778, 150.361],
                [71.9443, 138.699],
                [70.9211, 138.0124],
            ],
            [
                [173.9859, 137.8756],
                [171.5922, 137.1917],
                [169.6486, 144.4951],
                [158.7348, 165.5738],
                [132.9515, 184.0393],
                [134.798, 185.9543],
                [160.3762, 166.8733],
                [171.993, 143.8516],
                [172.5497, 142.2526],
                [172.7993, 141.4969],
                [173.9859, 137.8756],
            ],
            [
                [224.5266, 132.5411],
                [221.9962, 132.5411],
                [222.0618, 133.2599],
                [222.2013, 136.5078],
                [222.2013, 144.0308],
                [206.5399, 144.0308],
                [201.3983, 143.8112],
                [200.7267, 143.7572],
                [200.9318, 148.4078],
                [200.9318, 160.5813],
                [200.9291, 160.8857],
                [200.7684, 163.3436],
                [200.7267, 163.5905],
                [203.1887, 163.5905],
                [202.9842, 160.6661],
                [202.9836, 160.5129],
                [202.9836, 146.0825],
                [245.4542, 146.0825],
                [245.0623, 149.3044],
                [239.498, 166.6189],
                [238.5467, 168.3095],
                [216.9948, 184.2274],
                [216.9353, 184.2445],
                [213.3044, 185.2027],
                [212.4899, 185.3387],
                [214.268, 187.3221],
                [225.0765, 183.0805],
                [240.4617, 169.1302],
                [243.1002, 163.8757],
                [247.5059, 147.4503],
                [247.6707, 146.5599],
                [248.1768, 144.6771],
                [248.1898, 144.6463],
                [246.6852, 143.6204],
                [243.0632, 144.0308],
                [242.9921, 144.0308],
                [224.2531, 144.0308],
                [224.2531, 136.5078],
                [224.476, 132.892],
                [224.5266, 132.5411],
            ],
            [
                [269.5277, 184.1077],
                [270.8955, 186.2962],
                [299.346, 174.6014],
                [318.2807, 154.3543],
                [320, 151.3486],
                [318.7006, 149.2285],
                [316.4102, 153.5084],
                [297.9782, 173.0284],
                [295.0313, 174.8825],
                [278.3303, 182.1805],
                [269.5277, 184.1077],
            ],
            [
                [272.6737, 138.0124],
                [271.3058, 139.4486],
                [273.5402, 140.9805],
                [288.1765, 153.2437],
                [288.2667, 153.3319],
                [289.8397, 151.7589],
                [288.3303, 150.361],
                [273.6968, 138.699],
                [272.6737, 138.0124],
            ],
        ].map((n) => n.map((m) => m.map((o) => (o *= 0.01)))) as types.Vector2[][],
    };

    const mapText = {
        'ExpertPlusStandard.dat': 'danmakuX',
        'ExpertStandard.dat': 'unidentified',
        'ExpertPlusOneSaber.dat': 'unknown',
    };

    const t = diffText[mapText[data.fileName as keyof typeof mapText] as keyof typeof diffText];
    if (t) {
        for (const dx of t) {
            let { coordinates, rotations, sizes } = NE.drawPath(dx);
            coordinates = coordinates.map((c) => {
                c[0] -= 1.625;
                c[1] -= 2.125;
                return c;
            });
            for (const i in sizes) {
                const time = 25 + coordinates[i][1] * 1;
                data.customData.fakeObstacles?.push({
                    b: time,
                    d: 0.001,
                    h: 1,
                    w: 1,
                    x: 0,
                    y: 0,
                    customData: {
                        noteJumpMovementSpeed: 10,
                        noteJumpStartBeatOffset: 12,
                        size: [0.0001, sizes[i], 0.0001],
                        localRotation: [0, 0, rotations[i]],
                        uninteractable: true,
                        coordinates: coordinates[i],
                        color: [0, 0, 0],
                        animation: {
                            definitePosition: [[...coordinates[i], 11, 0]],
                            dissolve: [
                                [0, 0],
                                [1, 1 / 16],
                                [1, 15 / 16],
                                [0, 1],
                            ],
                            color: [
                                [0, 0, 0, 1, 0],
                                [1, 1, 1, 1, 1 / 16],
                                [0, 0, 0, 1, 2 / 16],
                                [0, 0, 0, 1, 7.5 / 16],
                                [1, 1, 1, 1, 7.75 / 16],
                                [0, 0, 0, 1, 8 / 16],
                                [1, 1, 1, 1, 8.5 / 16],
                                [0, 0, 0, 1, 9 / 16],
                                [0, 0, 0, 1, 15.5 / 16],
                                [1, 1, 1, 1, 15.75 / 16],
                                [0, 0, 0, 1, 1],
                            ],
                        },
                    },
                });
            }
        }
    }
}