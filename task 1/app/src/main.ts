


// function getStringIterator (input:string){
//     let currentIndex = 0

//     return {


//         next(){
//                 if(currentIndex < input.length){return {  value:input[currentIndex++]}}
//                 return {value:undefined}
//             }
//     }
// }


// const x= "team y"
// const Iterator = getStringIterator(x)
// console.log(Iterator.next());







function getStringIterator (start:number , end:number, range:number){
    let currentIndex = 0

    return {


        next(){
                if(currentIndex+range <= end){
                  currentIndex += range
                  return {value:currentIndex}}
                return {value:undefined}
            }
    }
}



const Iterator = getStringIterator(1,10,2)
// console.log(Iterator.next().value);
// console.log(Iterator.next().value);
// console.log(Iterator.next().value);
// console.log(Iterator.next().value);
// console.log(Iterator.next().value);
// console.log(Iterator.next().value);

function* testgen (start:number , end:number, range:number){
  for(let i = start; i < end; i += range) {
    yield i;
  }
}

let iterable = testgen(1, 10, 1);

console.log(iterable[Symbol.iterator]().next())
console.log(iterable[Symbol.iterator]().next())
console.log(iterable[Symbol.iterator]().next())
console.log(iterable[Symbol.iterator]().next())
console.log(iterable[Symbol.iterator]().next())
console.log(iterable[Symbol.iterator]().next())
console.log(iterable[Symbol.iterator]().next())
console.log(iterable[Symbol.iterator]().next())


// class Stack<T> {
//   private items: T[] = []
//   push(item: T) {
//       this.items.push(item)
//   }
//   pop() {
//       this.items.pop()
//   }

//   [Symbol.iterator]() {
// let currentIndex = this.items.length-1
//       return {
//           next:() =>{
//       if(currentIndex>=0){
//           return {value: this.items[currentIndex--]}
//       }
//           }
//       }
//   }
// }


// const testStack = new Stack<number>()
// testStack.push(1)
// testStack.push(2)
// testStack.push(3)
// console.log(testStack);















// type Observer<T> = (data:T)=>void

// class Observable<T> {
//     private observers : Observer<T>[]=[]
//     subscribe (observer:Observer<T>){
// this.observers.push(observer)
//     }
//     unSubscribe (observer:Observer<T>){
//         this.observers = this.observers.filter(obs => obs !== observer)
//     }
//     notify(data:T){
//         this.observers.forEach(obs => obs(data))
//     }

// }

// type Events = "iphone available"|"black Friday"
// const observable = new Observable<Events>()
// const observable1 = new Observable<Events>()


// const handleSubscribe = (data:Events)=>console.log(data)
// observable.subscribe(handleSubscribe)
// observable1.subscribe(handleSubscribe)
// // observable1.unSubscribe(handleSubscribe)
// // observable.unSubscribe(handleSubscribe)

// setTimeout(() => {
  
//   observable.notify('black Friday')
// }, 2000);







export function toastContainer(){

}