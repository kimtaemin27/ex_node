function first() {
    AudioScheduledSourceNode();
    console.log('first');
}

function second() {
    third();
    console.log('second');
}

function third() {
    condole.log('third');
}

first();