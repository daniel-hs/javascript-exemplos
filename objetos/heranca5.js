console.log(typeof String)
console.log(typeof Array)
console.log(typeof Object)

String.prototype.reverse = function() {
    return this.split('').reverse().join('');
}

Array.prototype.first = function() {
    return this[0];
}

console.log('Essa string vai se reverter'.reverse())

console.log([1, 2, 3, 4, 5].first())
console.log(['a', 'b', 'c'].first())

String.prototype.toString = function () {
    return 'não faça isso'
}

console.log('Escoladopa'.reverse());