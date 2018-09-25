"use strict";
function fn0({x=5,y=8} = {}) {
    console.log(x,y);
}
function fn1({x,y} = { x:1,y:2 }) {
    console.log(x,y);
}
function fn2(x=10,y=20) {
    console.log(x,y)
}
fn0({x:1}); // 1 8
fn0(1,2);  // 5 8

fn1();  // 1 2
fn1({z:1});  // undefined undefined

fn2(99);  //  99 20

console.log("-------------------------");

function fn3(x,y,z) {
    console.log(x,y,z);
}
function fn4(x,y,...args) {
    console.log("fn4");
    console.log(x);
    console.log(y);
    console.log(...args);
}
let arr = [1,2,3,4,5,6];
fn3.apply(null,arr);
fn4.apply(null,arr);

fn3.call(null,arr);
