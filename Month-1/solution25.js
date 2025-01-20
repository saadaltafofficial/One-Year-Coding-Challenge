function multiplicationTable(tableOf, tableupTo){
    for(let i=1; i <= tableupTo; i++){
        let table = tableOf * i
        console.log(`${tableOf} * ${i} = ${table}`)
    }

}
console.log(multiplicationTable(3, 10))
