
function test(k) {
    if(k < 10) {
        for(i = 2; i < k; i++) {
            if(k % i === 0) {
                console.log('here1');
            } else {
                console.log('here2');
            }
        }
    } else {
        let tNum = k % 10;
        if(tNum === 1 || tNum === 3 || tNum === 7 || tNum === 9) {
            console.log('here3ㄴ');
        } else {
            console.log('here4');
        }
    }
}



test(3);