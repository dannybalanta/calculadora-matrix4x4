// llama la función borrar
function borrar () {
    // llama la función borrar y limpia la memoria
    numberString = ""
    val1 = ""
    val2 = ""
    operador = ""
}
function evaluarNumero () {
    // Cada que se presiona un dígito se añade a la variable numberString, y estos digitos en bloque (uno, dos o mas dígitos) se añaden a las variables val1 y val2 que son las que intervienen en la operación matemática deseada
    if (val1 == "") {
        // primera cadena se adiciona a la variable val1
        val1 = numberString
        numberString = ""
    } else if (val2 == "") {
        // segunda cadena se adiciona a la variable val2
        val2 = numberString
        numberString = ""
    }
}
function calcular () {
    // Realiza el cálculo solicitado según la tecla presionada entre la cadena almacenada a las variables val1 y val2. Al ser variable float permite calcular con decimales
    if (val1 == "" || val2 == "") {
        // si no hay nada almacenado en las variables val1 y val2 enviar mensaje de error si no se realiza la operación completa entre dos digitos, es decir si se presiona un digito y un operador y se presiona el signo igual.
        basic.showString("e")
    } else if (operador == "+") {
        // Realiza la suma de lo almacenado en val1 y val2
        basic.showNumber(parseFloat(val1) + parseFloat(val2))
    } else if (operador == "-") {
        // Realiza la resta de lo almacenado en val1 y val2
        basic.showNumber(parseFloat(val1) - parseFloat(val2))
    } else if (operador == "x") {
        // Realiza la multiplicación de lo almacenado en val1 y val2
        basic.showNumber(parseFloat(val1) * parseFloat(val2))
    } else if (operador == "/") {
        // Realiza la división de lo almacenado en val1 y val2
        basic.showNumber(parseFloat(val1) / parseFloat(val2))
    } else if (operador == "^") {
        // Realiza la potencia de lo almacenado entre val1 y val2 siendo la operación val1 elevado a val2
        basic.showNumber(parseFloat(val1) ** parseFloat(val2))
    }
}
function buscaTecla () {
    // se inactivan las teclas de la primera fila gobernadas por el pin 0
    pins.digitalWritePin(DigitalPin.P0, 0)
    // se activan las teclas de la cuarta fila gobernadas por el pin 8 y los pines 13, 14, 15 y 16
    pins.digitalWritePin(DigitalPin.P8, 1)
    if (pins.digitalReadPin(DigitalPin.P13) == 1) {
        escribeNumeros(".")
    } else if (pins.digitalReadPin(DigitalPin.P14) == 1) {
        escribeNumeros("0")
    } else if (pins.digitalReadPin(DigitalPin.P15) == 1) {
        // llama la función evaluarNumero para dar el resultado
        evaluarNumero()
        basic.showString("=")
        // pausa de 50 milisegundos antes de mostrar el resultado en pantalla
        basic.pause(50)
        // llama a la función calcular previamente definida
        calcular()
    } else if (pins.digitalReadPin(DigitalPin.P16) == 1) {
        // llama a la función evaluarNumero para realizar la suma
        evaluarNumero()
        operador = "+"
        basic.showString("+")
    } else {
        // limpia la pantalla
        basic.clearScreen()
    }
    // Detectar las Teclas de la tercera fila
    // se inactivan las teclas de la cuarta fila gobernadas por el pin 8
    pins.digitalWritePin(DigitalPin.P8, 0)
    // se activan las teclas de la tercera fila gobernadas por el pin 2 y los pines 13, 14, 15 y 16
    pins.digitalWritePin(DigitalPin.P2, 1)
    if (pins.digitalReadPin(DigitalPin.P13) == 1) {
        escribeNumeros("7")
    } else if (pins.digitalReadPin(DigitalPin.P14) == 1) {
        escribeNumeros("8")
    } else if (pins.digitalReadPin(DigitalPin.P15) == 1) {
        escribeNumeros("9")
    } else if (pins.digitalReadPin(DigitalPin.P16) == 1) {
        // llama a la función evaluarNumero para realizar la resta
        evaluarNumero()
        operador = "-"
        basic.showString("-")
    } else {
        // limpia la pantalla
        basic.clearScreen()
    }
    // Detectar las Teclas de la segunda fila
    // se inactivan las teclas de la tercera fila gobernadas por el pin 2
    pins.digitalWritePin(DigitalPin.P2, 0)
    // se activan las teclas de la segunda fila gobernadas por el pin 1
    pins.digitalWritePin(DigitalPin.P1, 1)
    if (pins.digitalReadPin(DigitalPin.P13) == 1) {
        escribeNumeros("4")
    } else if (pins.digitalReadPin(DigitalPin.P14) == 1) {
        escribeNumeros("5")
    } else if (pins.digitalReadPin(DigitalPin.P15) == 1) {
        escribeNumeros("6")
    } else if (pins.digitalReadPin(DigitalPin.P16) == 1) {
        // llama la función evaluarNumero para dar el resultado de la división
        evaluarNumero()
        operador = "/"
        basic.showString("/")
    } else {
        // limpia la pantalla
        basic.clearScreen()
    }
    // Detectar las Teclas de la primera fila
    // se inactivan las teclas de la segunda fila gobernadas por el pin 1
    pins.digitalWritePin(DigitalPin.P1, 0)
    // se activan las teclas de la primer fila gobernadas por el pin 0
    pins.digitalWritePin(DigitalPin.P0, 1)
    if (pins.digitalReadPin(DigitalPin.P13) == 1) {
        escribeNumeros("1")
    } else if (pins.digitalReadPin(DigitalPin.P14) == 1) {
        escribeNumeros("2")
    } else if (pins.digitalReadPin(DigitalPin.P15) == 1) {
        escribeNumeros("3")
    } else if (pins.digitalReadPin(DigitalPin.P16) == 1) {
        // llama la función evaluarNumero para dar el resultado de la multiplicación
        evaluarNumero()
        operador = "x"
        basic.showString("x")
    } else if (input.buttonIsPressed(Button.AB)) {
        evaluarNumero()
        operador = "^"
        basic.showString("^")
    } else {
        // limpia la pantalla
        basic.clearScreen()
    }
}
function escribeNumeros (key: string) {
    // adiciona los digitos de cada número presionado a la cadena.
    basic.showString(key)
    numberString = "" + numberString + key
}
/**
 * 09-03-2021
 * 
 * Proyecto: Calculadora en micro:bit con teclado de membrana 4 x 4 que realiza suma, resta, multiplicación, división y potenciación. Es posible asignar cualquiera otra operación matemática a las teclas A+B de la micro:bit o cambiar lo que hace la tecla B de la micro:bit si se desea.
 * 
 * Autor: Danny Balanta
 * 
 * Materiales:
 * 
 * Teclado de Membrana 4 x 4
 * 
 * Protoboard de 850 Pines
 * 
 * Adafruit DragonTail o Kittenbot IOBit v 2.0
 * 
 * Enclosure negro humo para micro:bit
 * 
 * 8 Cables tipo Dupont y 8 cables doble punta tipo jumper
 * 
 * Compartimiento de batería 2 x 1.5V AAA con sus baterías incluidas
 * 
 * Créditos a: http://www.suppertime.co.uk/blogmywiki/2020/07/microbit-calculator-keypad/
 * 
 * Filas:
 * 
 * Fila #     / pin asignado en la micro:bit
 * 
 * 1.          0
 * 
 * 2.          1
 * 
 * 3.          2
 * 
 * 4           8
 * 
 * Columnas:
 * 
 * Columna #    / pin asignado en la micro:bit
 * 
 * 1.              13
 * 
 * 2.              14
 * 
 * 3.              15
 * 
 * 4.              16
 * 
 * Equivalencias del teclado de membrana en las operaciones:
 * 
 * A = x
 * 
 * B = /
 * 
 * C = -
 * 
 * D = +
 * 
 * * = .
 * 
 * # = Es el signo igual =
 */
/**
 * inicializa la variable operador y las variables val1 y val2, y numberString
 */
let operador = ""
let val2 = ""
let val1 = ""
let numberString = ""
// llama la función borrar
borrar()
basic.forever(function () {
    // función bucle estándar de la micro:bit
    while (true) {
        buscaTecla()
        if (input.buttonIsPressed(Button.A)) {
            basic.showString("c")
            borrar()
        }
        if (input.buttonIsPressed(Button.B)) {
            // muestra la cadena almacenada en val1
            basic.showString(val1)
            // muestra el operador
            basic.showString(operador)
            // muestra la cadena almacenada en val2
            basic.showString(val2)
        }
    }
})
