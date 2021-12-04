function promise() {

    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('sou a promise');
            resolve();
        }, 2000);
    })

}

export default async function exe() {
    await promise();
    console.log('terminou');
}