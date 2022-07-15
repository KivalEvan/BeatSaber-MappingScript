export function getRepeatArray(start: number, gap: number, repeat: number) {
    const arr = new Array(repeat).fill(start);
    for (let i = 0; i < repeat; i++) {
        arr[i] = arr[i] + gap * i;
    }
    return arr;
}
