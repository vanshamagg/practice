function cancel() {
    console.log(this)
}

(async => {
    const pr = new Promise((resolve, reject) => {
        reject('Vansham')
        // setTimeout(() => reject('Vansham'), 5000);
    });

    cancel.call(pr)
})();