/*
  server/controllers/generateID.js
*/

let generateID = (n) => {
  let string = '0123456789';
  let tmp = '';
  for ( let i = 0; i < n; i++ ) {
    tmp += string.charAt( Math.floor(Math.random() * string.length) );
  }
  return tmp;
}

export default generateID;
