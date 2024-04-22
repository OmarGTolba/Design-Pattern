


// // function getStringIterator (input:string){
// //     let currentIndex = 0

// //     return {


// //         next(){
// //                 if(currentIndex < input.length){return {  value:input[currentIndex++]}}
// //                 return {value:undefined}
// //             }
// //     }
// // }


// // const x= "team y"
// // const Iterator = getStringIterator(x)
// // console.log(Iterator.next());





// class Stack<T> {
//     private items: T[] = []
//     push(item: T) {
//         this.items.push(item)
//     }
//     pop() {
//         this.items.pop()
//     }

//     [Symbol.iterator]() {
// let currentIndex = this.items.length-1
//         return {
//             next:() =>{
//         if(currentIndex>=0){
//             return {value: this.items[currentIndex--]}
//         }
//             }
//         }
//     }
// }
