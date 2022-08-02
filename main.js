'use strict';

{
    const btn = document.getElementById('btn');

    btn.addEventListener('click', () => {
        // const results = ['大吉', '中吉', '吉', '凶'];
        // const results = ['大吉', '大吉', '大吉', '大吉', '凶'];
        // btn.textContent = results[Math.floor(Math.random() * results.length)];
        const n = Math.random();
        if (n < 0.1) {
            btn.textContent = '大吉'; // 10%
        } else if (n < 0.25){
            btn.textContent = '凶'; // 15%
        } else if (n < 0.5) {
            btn.textContent = '中吉'; // 25%
        } else {
            btn.textContent = '吉'; //50%
        }
    });
}

