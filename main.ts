input.onButtonPressed(Button.A, function () {
    basic.clearScreen()
    if (Interruptor) {
        basic.showString("OFF")
        Interruptor = false
        basic.clearScreen()
    } else {
        basic.showString("ON")
        Interruptor = true
        Cambio = false
        if (control2) {
            basic.showString("CM")
        } else {
            basic.showString("LM")
        }
        basic.showLeds(`
            # # # # #
            # # # # #
            # # # # #
            # # # # #
            # # # # #
            `)
        Cambio = true
    }
})
input.onButtonPressed(Button.B, function () {
    basic.clearScreen()
    Cambio = false
    led.setBrightness(255)
    if (control2) {
        basic.showString("LM")
        control2 = false
        basic.showLeds(`
            # # # # #
            # # # # #
            # # # # #
            # # # # #
            # # # # #
            `)
    } else {
        basic.showString("CM")
        control2 = true
        basic.showLeds(`
            # # # # #
            # # # # #
            # # # # #
            # # # # #
            # # # # #
            `)
    }
    Cambio = true
})
let Interruptor = false
let Cambio = false
let control2 = false
control2 = true
Cambio = true
Interruptor = false
led.setBrightness(255)
basic.forever(function () {
    if (Interruptor && Cambio) {
        if (control2) {
            if (input.lightLevel() >= 128) {
                led.setBrightness(255)
            } else {
                led.setBrightness(0)
            }
        } else {
            led.setBrightness(input.lightLevel())
        }
    } else {
        led.setBrightness(255)
    }
})
