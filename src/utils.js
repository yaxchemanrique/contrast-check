export function range(length) {
  if(length < 0) throw new Error("Please enter a number greater than cero");
  
  let arr = []
  
  for (let index = 0; index < length; index++) {
    arr.push(index);
  }
  
  return arr;
}