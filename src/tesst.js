// // function myFunction(y1, y2, ...y3){
// //     const [x1, ...[result]] = y3

// //     console.log(result)
// // }

// // const myArray = ['rock', 'paper', 'scissors', 'lizard', 'spock']

// // myFunction(...myArray)

// const arr = [];
// try {
//     arr.push('try');
//     throw new Error();
// } catch (e) {
//     arr.push('catch');
// } finally {
//     arr.push('finally');
// };

// function buildWordTreeFromSentences(sentenceList) {
//     let root = {}
//     sentenceList.forEach(sentence => {
//         let base = root
//         sentence.split(' ').forEach(word => {
//             if (base[word] === undefined) {
//                 base[word] = {}
//             }
//             base = base[word]
//         })
//     })
//     return root
// }

// let tree = buildWordTreeFromSentences(['Hello World', 'Hello three'])

// function func(a, b){
//     a += 1
//     b.puch(1)
// }
// const a = 0
// const b = []

// func(a, b)
// console.log(func)

 