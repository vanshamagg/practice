const p1 = new Promise((resolve, reject) => {
    // ..
    // GET INFO FROM DATABASE
    // ..
    let data = 'Vansham'; // THIS WILL HAVE THE DATA
    if (data) resolve(data);
    else reject('Something happened while fetching data from the database!');
});
console.log(p1);;
// p1
//     .then(data => console.log('WE HAVE The following DATA => ', data))
//     .catch(err => console.log(err));
