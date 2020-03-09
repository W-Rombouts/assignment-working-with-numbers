let arr = []
for (let i = 0; i < 500; i++) {
    if (arr<250) {
        arr.push((Math.random()*290)+10)
    }
    else{
        arr.push((Math.random()*200)+500)
    }
    
}

let highIndex = 0;
let highValue = 0;

for (let i = 0; i < arr.length; i++) {
    if (arr[i]>highValue) {
        highValue = arr[i]
        highIndex = i
    }
    
}

let aantalGetallen = arr.length
let output = `Uit het array van ${aantalGetallen} getallen is het getal ${highValue} het grootst. Dit getal zit in index ${highIndex} in het array.`

let mijnpara = document.createElement('p');
mijnpara.innerText = output
document.body.appendChild(mijnpara)



