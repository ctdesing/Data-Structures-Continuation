export function swap(arr :Array<any>, a: number, b: number) {
    let temp = arr[a]
    arr[a] = arr[b]
    arr[b] = temp
}