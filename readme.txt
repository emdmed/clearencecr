
Esta es una funcion con 5 argumentos para calcular el clearance de creatinina
------------------------------------------------------------------------------
This is a 5 argument function to calculate creatinine clearance

La funcion usa 5 argumentos:
-----------------------------
The function uses 5 arguments:

eq = string (mdrd, ckd, o cogau)
sex = string (m para masculino y f para femenino - m for male and f for female)
weight = integer (peso del paciente - patient weight)
age = integer (edad del paciente- patient age)
ser_cr = integer (creatinina serica del paciente - patient serum creatinine)

El return siempre es el resultado final sin limites en los decimales
Pueden elegir la cantidad de decimales agregando una linea con .toFixed(cantidad de decimales)
------------------------------------------------------------------------------------------------
The return value is the final result without decimal limitations
Decimal limitations can be set with .toFixes(decimal places)
