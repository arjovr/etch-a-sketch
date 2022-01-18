const container = document.querySelector('div.container');


for (let i = 0; i < (16 * 16); i++) {
    let div = document.createElement('div');
    div.classList.add('cell');
    div.addEventListener('mouseenter', (e) => {
        e.target.classList.add('filled');
    });
    container.append(div);
}