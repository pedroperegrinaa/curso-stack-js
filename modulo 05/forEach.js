const a1 = [5, 50, 80, 1, 2, 3, 5, 7, 11, 15, 22, 27]
total = 0
a1.forEach(function(v, i) {
        console.log(v, i)
    }

);

a1.forEach(valor => total += valor)
console.log(total)