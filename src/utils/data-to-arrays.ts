export default function toDoubleDimensionArray(data: any[]): any[][] {
    const array = []
    for (let i = 0; i < data.length; i += 2) {
        array.push([data[i], data[i + 1]])
    }
    return array
}