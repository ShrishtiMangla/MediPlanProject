
const t1=performance.now();

for (let i = 0; i < 10; i++) {
    let para = document.createElement('p');
    para.textContent = 'Hello World'
    document.Body.appendChild(para);
}
const t2=performance.now();

console.log(t2-t1);


