let names = [
    `Yahya`, `Komron`, `Abdulaziz`, `Akromjon`, `Abduraxmon`, `Abdubosit`, `Muhammad-Diyor`
]

let with_n = []
let without_n = []

for(ism of names){
    if(ism.includes(`n`)){
        with_n.push(ism)
        
        
    }else{
        without_n.push(ism)

        
    }
}
console.log(with_n);
console.log(without_n);