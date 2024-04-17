export default function toDoubleDimensionArray(data: any[]): any[][] {
    const array = [[],[]]
    for (let i = 0; i < data.length; i++) {
        if (i % 2 === 0)
            array[0].push(data[i]);
        else
            array[1].push(data[i]);
    }
    return array
}