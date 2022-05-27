let Temperatura = 0
input.onButtonPressed(Button.AB, function () {
    Temperatura = 0
    basic.showNumber(input.temperature())
    basic.showString("C")
    basic.pause(1000)
    basic.clearScreen()
})
