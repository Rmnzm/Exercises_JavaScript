let a = [1, 2, 3];

let b = [4, 5, 6];

let c = a.concat(b);

document.write(c);

document.write('<hr>');

let d = [1, 2, 3];

d.reverse();

document.write(d);

document.write('<hr>');

let e = [1, 2, 3];

e.push(4, 5, 6);

document.write(e);

document.write('<hr>');

let f = [1, 2, 3];

f.unshift(4, 5, 6);

document.write(f);

document.write('<hr>');

let g = ['js', 'css', 'jq'];

g.pop();

g.pop();

document.write(g);

document.write('<hr>');

let h = ['js', 'css', 'jq'];

h.shift();

h.shift();

document.write(h);

document.write('<hr>');

let i = [1, 2, 3, 4, 5];

document.write(i.slice(0, 3));

document.write('<hr>');

let j = [1, 2, 3, 4, 5];

document.write(i.slice(3, 5));

document.write('<hr>');

let k = [1, 2, 3, 4, 5];

k.splice(1,2);

document.write(k);

document.write('<hr>');

let l = [1, 2, 3, 4, 5];

l.splice(1,3);

document.write(l);

document.write('<hr>');

let m = [1, 2, 3, 4, 5];

m.splice(3,4,'a','b','c',4,5);

document.write(m);

document.write('<hr>');

let n = [1, 2, 3, 4, 5];

n.splice(1,0,'a','b');

n.splice(6,0,'c');

n.splice(8,0,'e');

document.write(n);

document.write('<hr>');

let o =  [3, 4, 1, 2, 7];

o.sort();

document.write(o);

document.write('<hr>');

let obj = {js:'test', jq: 'hello', css: 'world'};

let keys = Object.keys(obj);

document.write(keys);