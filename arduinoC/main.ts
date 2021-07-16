
enum SIZE {
    //% block="29*29"
    1,
    //% block="58*58"
    2
}

enum LINE {
    //% block="1"
    1,
    //% block="2"
    2,
    //% block="3"
    3,
    //% block="4"
    4
}

enum BTN {
    //% block="A"
    A,
    //% block="B"
    B,
    //% block="A+B"
    AB
}

enum IO {
    //% block="D2"
    D2,
    //% block="D3"
    D3,
    //% block="D4"
    D4,
    //% block="D5"
    D5,
    //% block="D6"
    D6,
    //% block="D7"
    D7,
    //% block="D8"
    D8,
    //% block="D9"
    D9
}



//% color="#9933cc" iconWidth=50 iconHeight=40
namespace led {
    //% block="set servo as [N] degree with pin [IO]" blockType="command"
    //% N.shadow="range" N.params.min=0 N.params.max=180 N.defl=90
    //% IO.shadow="dropdownRound" IO.options="IO" IO.defl="IO.D2"
    export function servoBeg(parameter: any, block: any) {
        let n = parameter.N.code
        let io = parameter.IO.code

        let pin
        switch(io) {
            case "D2":
                pin = 25
                break;
            case "D3":
                pin = 26
                break;
            case "D4":
                pin = 27
                break;
            case "D5":
                pin = 9
                break;
            case "D6":
                pin = 10
                break;
            case "D7":
                pin = 13
                break;
            case "D8":
                pin = 5
                break;
            case "D9":
                pin = 2
                break;
        }

        Generator.addInclude(`addHeaderServo`, `#include <Servo.h>`);
        Generator.addObject(`addServoObject`, `Servo`, `myservo;`);
        Generator.addSetup(`addPinConfig`, `myservo.attach(${pin});`);
        Generator.addCode(`myservo.write(${n});`);
    }


}
