// function doLoop(){
//     for (var i = 0; i < 5; i++){
//       console.log(`Loop is executing ${i} time.`);
//     }
//     console.log(`Loop is stopping finally at ${i} time.`);
//   }  
// doLoop();

function showLastName() {
    const lastName = "Sofela";
    return lastName;
  }
  
  // Define another function:
  function displayFullName() {
    return showLastName();
  }
  
  // Invoke displayFullName():
//   console.log(displayFullName());

  let a = [1, 2, 3]
  let b = [1, 2, 3]
  let c = a

  a.push("Hey")
  console.log(a, c);

  let x = "Riya";
  let y = x;

  x.toUpperCase