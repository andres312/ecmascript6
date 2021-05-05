const helloWorld = () => {
    return new Promise((resolve, reject) => {
        (false)
            ? setTimeout(() => resolve('hello world'), 3000)
            : reject(new Error('Test error'))
    })
}

const hellowAsync = async () => {
    const hello = await helloWorld()
    //const hello2 = await otrafuncion
    console.log(hello)
}

hellowAsync()

const anotherFunction = async () => {
    try {
        const hello = await (helloWorld())
        console.log(hello)
    } catch (error) {
        console.log(error)
    }
}

anotherFunction()