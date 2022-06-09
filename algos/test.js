let x = [];

let num = 0;
while (num < 100) {
	for (var i = 0; i < Math.random() * 50; i++) {
        j = parseInt(Math.random() * 500) - 250 + i
		x.push(j);
	}
	num += 1;
}

console.log(x)