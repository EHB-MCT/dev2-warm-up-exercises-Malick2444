import {
    getRandomScores,
    getStudentJSON,
    runTitle
} from './lib.js';

runTitle();

//const to make variable, button1a so that know first button, document.getelementbyID to get the html element called button-1a
const button1a = document.getElementById('button-1a')
//also const for content meaning what ssupposed to appear
const content1 = document.getElementById('content-1')

function warmup1() {
    console.log("Exercise week 1");
}

function warmup2() {
    console.log("Exercise week 2");
    const scores = getRandomScores(10);
}

function warmup3() {
    let student = getStudentJSON();
}

function warmup4() {
    let main, min, max;
}

function warmup5() {

}