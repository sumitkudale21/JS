const heros = ['naruto','goku','luffy']
console.log(heros);
const villen = ['madara','frieza','imu']
console.log(villen);

// heros.push(villen)
// console.log(heros);

const allChar = heros.concat(villen)
console.log(allChar);

const allCharspred = [...heros, ...villen]
console.log(allCharspred);
console.log(typeof allCharspred);

const recursivearray = [1,2,3,[2,3],[3,4,[4,5]]]
console.log(recursivearray);
const flatarray = recursivearray.flat(Infinity)
console.log(flatarray);





