let x = 0
let y = 0
let db = 0
let sor = 0
let oszlop = 0
input.onGesture(Gesture.LogoDown, function () {
    if (led.point(x, y - 1)) {
        db += -1
    }
    if (y > 0) {
        led.unplot(x, y)
        y += -1
        led.plotBrightness(x, y, 80)
    }
    Vége()
})
input.onGesture(Gesture.LogoUp, function () {
    if (led.point(x, y + 1)) {
        db += -1
    }
    if (y < 4) {
        led.unplot(x, y)
        y += 1
        led.plotBrightness(x, y, 80)
    }
    Vége()
})
input.onButtonPressed(Button.A, function () {
    basic.clearScreen()
    for (let index = 0; index < 6; index++) {
        sor = randint(0, 4)
        oszlop = randint(0, 4)
        while (led.point(sor, oszlop)) {
            sor = randint(0, 4)
            oszlop = randint(0, 4)
        }
        led.plot(sor, oszlop)
    }
    x = randint(0, 4)
    y = randint(0, 4)
    while (led.point(x, y)) {
        x = randint(0, 4)
        y = randint(0, 4)
    }
    led.plotBrightness(x, y, 80)
    db = 6
})
function Vége () {
    if (db == 0) {
        basic.showLeds(`
            . # . # .
            . # . # .
            . . . . .
            # . . . #
            . # # # .
            `)
    }
}
input.onGesture(Gesture.TiltRight, function () {
    if (led.point(x + 1, y)) {
        db += -1
    }
    if (x < 4) {
        led.unplot(x, y)
        x += 1
        led.plotBrightness(x, y, 80)
    }
    Vége()
})
input.onGesture(Gesture.TiltLeft, function () {
    if (led.point(x - 1, y)) {
        db += -1
    }
    if (x > 0) {
        led.unplot(x, y)
        x += -1
        led.plotBrightness(x, y, 80)
    }
    Vége()
})
