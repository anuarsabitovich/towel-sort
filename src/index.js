// You should implement your task here.

module.exports = function towelSort(matrix) {
    if (!Array.isArray(matrix) || !matrix.length) {
        return [];
    } else {
        let arr = [];
        for (let i = 0; i < matrix.length; i++) {
            if (i == 0 || i % 2 == 0) {
                let even = matrix[i].sort((a, b) => a - b);
                arr.push(even);
            } else {
                let odd = matrix[i].sort((a, b) => b - a);
                arr.push(odd);
            }
        }

        let arr2 = arr.flat();
        return arr2;
    }
};

// let arr = [];
// let fin2 = [];
// for (let i = 0; i < matrix.length; i++) {
//     arr.push(matrix[i]);
// }
// let merged = [].concat.apply([], arr);
// let fin = merged.sort((a, b) => a - b);
// fin2.push(fin);
// return fin2;
// function towelSort(matrix) {
//     if (!Array.isArray(matrix) || !matrix.length) {
//         return [];
//     } else {
//         let arr = [];
//         for (let i = 0; i < matrix.length; i++) {
//             arr.push(matrix[i]);
//         }
//         const merged = [].concat.apply([], arr);
//         const fin = merged.sort((a, b) => a - b);
//         console.log(fin);
//     }
// }

// let test = towelSort([
//     [1, 2, 4],
//     [5, 6, 7, 8],
//     [9, 12],
// ]);
// console.log(test);
// console.log("console works");
