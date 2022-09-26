const cats = ['Milo', 'Otis', 'Garfield'];

function destructivelyAppendCat(name) {
    cats.push(name);
}

function destructivelyPrependCat(name) {
    cats.unshift(name);
}

function destructivelyRemoveLastCat() {
    cats.pop();
}

function destructivelyRemoveFirstCat() {
    cats.shift();
}

const appendCat = name => [...cats, name]

const prependCat = name => [name, ...cats];

const removeLastCat = () => cats.slice(0, -1);

const removeFirstCat = () => cats.slice(1);