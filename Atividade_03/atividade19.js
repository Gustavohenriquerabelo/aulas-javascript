
const robo = (distanciaparede) => {

    let passos = 0
    while(true)
    {
        console.log("andando...")
        passos++
        if (passos == distanciaparede)
        {console.log('Bateu e parou!'); break}
    }
}
robo(5)