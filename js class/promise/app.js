// function rishta(bankbalace) {
//     return new Promise((resolve, reject) => {
//         if (bankbalace > 100000) {
//             resolve('shadi mubarak')
//         } else {
//             reject('ammi ne zehar kha lya')
//         }
//     })
// }
// rishta(2000000)

//     .then(function (res) {
//         console.log(res)
//     })
//     .catch(function (err) {
//         console.log(err);
//     })


axios.get('https://fakestoreapi.com/products/1')
.then((res)=>{
    console.log(res.dta);
    for (let i = 0; i < res.data; i++) {
        const element = res.data[i];
    }

}).catch((err)=>{
    console.log(err);
});















