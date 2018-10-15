Esta es una funcion con 5 argumentos para calcular el clearance de creatinina
Puede usarse tanto en el browser como en node.js

La funcion usa 5 argumentos:

eq = string (Podes elegir entre mdrd, ckd, o cogau)
sex = string
weight = string (peso del paciente)
age = integer (edad del paciente)
ser_cr = integer (creatinina del paciente)

El return siempre es el resultado final sin limites en los decimales
Pueden elegir la cantidad de decimales agregando una linea con .toFixed(cantidad de decimales)