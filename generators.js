// generators
// eg.1:-

function* generator() {
    yield {
        company: "NeoSoft",
        level: "level-5"
    };
    yield "Front-End";
    yield 200;
    return "Technologies";
    yield "chandu senapathi";
    yield 220;
}
let g = generator();
console.log(g.next());
console.log(g.next());
console.log(g.next());
console.log(g.next());
console.log(g.next());

//   when we initialize the return it will only excute till return statement, after the return what ever we write , it will not executed.

// eg.2:-

function *overrideGen() {
    let out = yield 'Neosoft';
    let out_a = 'cmmi'
    let out_b= yield 'level_5'
    console.log(out)
    console.log(out_a)
    console.log(out_b)
}
let over = overrideGen();
over.next();
over.next("Technologies");
over.next("Chandu");
over.next("Senapathi");



// eg.3:-

function* idGen() {
    let id = 220;
    while (true) {
        yield id++;
    }
}
const emp_id = idGen();
console.log(emp_id.next())
console.log(emp_id.next())
console.log(emp_id.next())
console.log(emp_id.next())
console.log(emp_id.next())
console.log(emp_id.next())
console.log(emp_id.next())
console.log(emp_id.next())
console.log(emp_id.next())
console.log(emp_id.next())

// here it will gives unique id's in each time only when we are calling that emp_id.next() method



// eg.4:-

function *first(){
    yield "Neosoft";
    yield 220;
}
function *second(){
    yield 1;
    yield *first();
    yield 211;
}

let x=second();
console.log(x.next())
console.log(x.next())
console.log(x.next())
console.log(x.next())

// calling generator function in a another generator function