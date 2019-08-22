
let p1 = new Promise((resolve, reject) => {
	setTimeout(() => {
		resolve('p1')
	}, 1000);
})

let p2 = new Promise((resolve, reject) => {
	setTimeout(() => {
		resolve('p2')
	}, 2000);
})

Prmose.all 
console.time('cost')
Promise.all([p1, p2]).then(data => {
	console.log(data);
	console.timeEnd('cost')
// [ 'p1', 'p2' ]
// cost: 2026.419ms
})

// Promise.race
console.time('cost')
Promise.race([p1, p2]).then(data => {
	console.log(data);
	console.timeEnd('cost')
	// p1
	// cost: 1014.655ms
})


