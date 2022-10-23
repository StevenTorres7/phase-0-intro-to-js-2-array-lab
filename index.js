const cats = ['Milo', 'Otis', 'Garfield'];

function destructivelyAppendCat (name) {
cats.push(name);
return cats;
}

function destructivelyPrependCat (name) {
    cats.unshift(name);
    return cats;
}

function destructivelyRemoveLastCat (name) {
    cats.pop(name);
    return cats;
}

function destructivelyRemoveFirstCat(name) {
    cats.shift(name);
    return cats;
}

function appendCat(name){
  const ans = [...cats];
    ans.push(name)
    return ans;
}

function prependCat(name){
    const ans = [...cats];
        ans.unshift(name)
        return ans;

}

function removeLastCat(name){
    const ans = [...cats];
        ans.pop(name);
        return ans;
}

function removeFirstCat(name){
    const ans = [...cats];
        ans.shift(name);
        return ans;
}