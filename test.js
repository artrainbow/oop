let wrapper = document.getElementById('wrapper');

function createNewDiv(index) {
    let newDiv = document.createElement('div');
    newDiv.innerHTML = index;
    newDiv.setAttribute('data-attr', index);
    return newDiv;
}

for (var i = 0; i < 10; i += 1) {
    wrapper.appendChild(createNewDiv(parseInt(Math.random() * 100)));
}

let arr = [];
arr = Array.from(document.querySelectorAll('div[data-attr]'));



    const arrSorted = arr.sort(function (a, b) {
        return a.attributes['data-attr'].value - b.attributes['data-attr'].value;
    });






// arr.forEach(function(el, ind){
//     setTimeout(function(){
//         wrapper.appendChild(arr[ind]);
//     }, ind*300);
// });

//console.dir( arrSorted[0].textContent);


    for (let i = 0; i < 10; i++) {
            console.log(i);
        setTimeout(function () {
            wrapper.appendChild(arrSorted[i]);
        }, 300 * i);
    }






