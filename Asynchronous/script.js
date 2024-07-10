function func1(callback) {
  setTimeout(() => {
    console.log("Task 1");
    callback();
  }, 3000);
}
function func2(){
    console.log("Task 2");
}

func1(func2);

// asynchronous =>allow multiple operation tobe performed concurrently without waiting 
//                 Does't block the execution flow and allow the program to continue
//                 (I/o operation, network requests, fetching data)
//                 Handling with: Callback,promises,async/await