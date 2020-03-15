//------------------------------------------------------------------------

let a = [1, 2, 3];

let b = [4, 5, 6];

let arrAB = a.concat(b);

document.write(arrAB);

document.write('<hr>')

//-------------------------------------------------

let c = [1, 2, 3];

document.write(c.reverse());

document.write('<hr>')

//-------------------------------------------------

let d = [1, 2, 3];

d.push('4','5','6');

document.write(d);

document.write('<hr>')

//-------------------------------------------------

let e = [1, 2, 3];

e.unshift('4','5','6');

document.write(e);

document.write('<hr>')

//-------------------------------------------------

let f = ['js', 'css', 'jq'];

f.pop([0]);

f.pop([0]);

document.write(f);

document.write('<hr>')

//-------------------------------------------------

let g = ['js', 'css', 'jq'];

g.shift([0]);

g.shift([0]);

document.write(g);

document.write('<hr>')

//-------------------------------------------------

let h = [1, 2, 3, 4, 5];

document.write(h.slice(0,3));

document.write('<hr>')

//-------------------------------------------------

let i = [1, 2, 3, 4, 5];

document.write(i.slice(3,5));

document.write('<hr>')

//-------------------------------------------------

let k = [1, 2, 3, 4, 5];

k.splice(1,2);

document.write(k);

document.write('<hr>')

//-------------------------------------------------

let j = [1, 2, 3, 4, 5];

j.splice(0,5, [2], [3], [4]);

document.write(j);

document.write('<hr>')

//-------------------------------------------------

let l = [1, 2, 3, 4, 5];

l.splice(3,0, 'a', 'b', 'c');

document.write(l);

document.write('<hr>')

//-------------------------------------------------

let m = [1, 2, 3, 4, 5];

m.splice(1,0, 'a','b');

m.splice(6,0, 'c');

m.splice(8,0, 'e');

document.write(m);

document.write('<hr>')

//-------------------------------------------------

let n = [3, 4, 1, 2, 7];

n.sort();

document.write(n);

document.write('<hr>')

//-------------------------------------------------

let obj = {js:'test', jq: 'hello', css: 'world'};

let arr = Object.keys(obj);

document.write(arr);

document.write('<hr>')

//-------------------------------------------------