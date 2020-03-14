const esprima = require('esprima');
const safeEval = require('notevil');
const editor = document.getElementById("editor");
const compileButton = document.getElementById("compileButton");
const resultado = document.getElementById('resultado')
const analizadorLexico = document.getElementById('lexico')
const analizadorSintactico = document.getElementById('sintactico')
const analizadorSemantico = document.getElementById('semantico')
const about = document.getElementById('about')
let audio = new Audio("./icons/goku-scream.mp3");


analizadorLexico.addEventListener('click', () => {
  audio.play();

  const result = lexico(editor.value)
  resultado.value = JSON.stringify(result, undefined, 3)
})

analizadorSintactico.addEventListener('click', () => {0
  audio.play();

  const result = parse(editor.value)
  resultado.value = JSON.stringify(result, undefined, 3)
})

analizadorSemantico.addEventListener('click', () => analisisSemantico(editor.value))

const analisisSemantico = (program) => {
  audio.play();
  try {
    const result = safeEval(program)
    resultado.value = JSON.stringify(result, undefined, 3)
  } catch (error) {
    resultado.value = error;
  }
}

/*Realizar compilacion */
compileButton.addEventListener("click", () => analisisSemantico(editor.value));

/*Analizador Lexico */
const lexico = (program) => esprima.tokenize(program);

//Compilador sintactico

const parse = program => {
  try {
    return esprima.parseScript(program)
  } catch (err) {
    return `¡ERROR! ${err.description}`
  }

};

