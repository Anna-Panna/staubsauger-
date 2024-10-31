basic.forever(function () {
    calliBot2.setRgbLed(C2RgbLed.LV, randint(0, 80), randint(0, 255), randint(0, 255))
    basic.pause(100)
    calliBot2.setRgbLed1(C2RgbLed.LV, 0x000000, 6)
    calliBot2.setRgbLed(C2RgbLed.RV, randint(0, 80), randint(0, 255), randint(0, 255))
    basic.pause(100)
    calliBot2.setRgbLed1(C2RgbLed.RV, 0x000000, 6)
    calliBot2.setRgbLed(C2RgbLed.LH, randint(0, 80), randint(0, 255), randint(0, 255))
    basic.pause(100)
    calliBot2.setRgbLed1(C2RgbLed.LH, 0x000000, 6)
    calliBot2.setRgbLed(C2RgbLed.RH, randint(0, 80), randint(0, 255), randint(0, 255))
    basic.pause(100)
    calliBot2.setRgbLed1(C2RgbLed.RH, 0x000000, 6)
})
basic.forever(function () {
    if (calliBot2.readLineSensor(C2Sensor.links, C2SensorStatus.dunkel) || (calliBot2.readLineSensor(C2Sensor.rechts, C2SensorStatus.dunkel) || calliBot2.readBumperSensor(C2Sensor.rechts, C2State.an) && calliBot2.readBumperSensor(C2Sensor.links, C2State.an))) {
        basic.setLedColor(0xff0000)
        calliBot2.motor(C2Motor.beide, C2Dir.rueckwaerts, 50)
        basic.pause(500)
        calliBot2.motor(C2Motor.rechts, C2Dir.rueckwaerts, 50)
        calliBot2.motor(C2Motor.links, C2Dir.vorwaerts, 50)
        basic.pause(500)
    } else {
        basic.setLedColor(0x00ff00)
        calliBot2.motor(C2Motor.beide, C2Dir.vorwaerts, 50)
    }
})
