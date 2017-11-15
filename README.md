# Automatic-Agreement-Analysis
Aplicación web utilizada para el análisis de datos sobre usabilidad de un sistema computacional llamado MYO. Realizado en la BUAP.

# AGREEMENT ANALYSIS MYO
## INTRODUCCIÓN

Esta actividad experimental radicó en la observación de 14 sujetos (7 mujeres
y 7 hombres, de diferentes edades, antecedentes y experiencia) quienes efectuaron
gestos que, a su consideración, eran los más naturales para la interacción de control
entre el “Myo” (dispositivo portátil de tipo brazalete) y la ejecución de las siguientes
tareas:

1. Apagar TV.
2. Encender TV.
3. Ir al siguiente elemento en una lista.
4. Ir al elemento anterior.
5. Seleccionar una opción.
6. Subir volumen.
7. Bajar volumen.
8. Encender aire acondicionado.
9. Apagar aire acondicionado.
10. Encender la luz.
11. Aumentar intensidad de iluminación.
12. Disminuir intensidad de iluminación.
13. Apagar la luz.
14. Prender la calefacción.
15. Apagar la calefacción.
16. Encender alarma.
17. Detener alarma.
18. Contestar una llamada.
19. Finalizar llamada.

Al utilizarlos se les permitía combinarlos y mover el brazo en cualquier dirección
dentro del plano de 3 dimensiones (x, y, z).

Para realizar la actividad se elaboró una presentación de tipo Mago de Oz, la cual
se controlaba desde una habitación inperceptible para los sujetos de prueba, éstos
a su vez entraban individualmente a la segunda habitación, donde interactuaban
con una pantalla que proyectaba la presentación y reaccionaba a cada gesto que
ejecutaban con un dispositivo Myo (elaborado por nosotros), siguiendo las
instrucciones que les explicaba un integrante del equipo conforme transcurría la
proyección. Mientras eso ocurria, los demas integrantes del equipo se encargaban
de controlar la presentación, anotar los gestos realizados por los sujetos y el tiempo
que tardaban en hacerlo.

Al finalizar la primera actividad los sujetos contestaron 2 pruebas:

1. Test de usabilida de sistema (myo)
2. Familiaridad con la tecnología

Tasa de acuerdo promedio: 0.366
Tasa de desacuerdo promedio: 0.634
Diferencia de tiempo promedio entre tareas simétricas: 1.79 segundos

## ANÁLISIS DE DATOS OBTENIDOS

Para realizar el análisis de datos que obtuvimos del experimento,
desarrollamos una aplicación movil que nos facilitara reunir información importante
sobre cada una de las tareas que les presentamos a los sujetos.

El programa fue hecho con tecnologías web (HTML, CSS, Javascript y Plotly.js, una
librería que nos permitió graficar las distintas funciones para la visualización de
datos). Con el programa obtuvimos distintos datos: Las tasas de acuerdo y
desacuerdo para cada tarea, la calificación promedio que los sujetos le dieron a
cada tarea, el tiempo promedio de respuesta ante cada tarea y la obtención del
conjunto ideal de gestos para el experimento.

**Tasa de acuerdo y desacuerdo:**

Basado en la cantidad de propuestas distintas para ejecutar una tarea **_r_** y la cantidad
de sujetos que la propusieron ( **_|Pi|_** ), se puede calcular cual fue el índice de acuerdo
y desacuerdo para cada tarea. La tasa puede ir desde 0 hasta 1. Ver Fig 1 y 2.

La tarea en donde los datos estaban menos dispersos y hubo un mayor acuerdo
entre los sujetos fue en la tarea 13, donde se les indicaba que apagaran las luces.
La mayoría de estos estiraron el brazo y cerraron el puño de manera natural. No
obstante, la tarea donde hubo más desacuerdo por parte de los sujetos fue en la
tarea 10 , su opuesta, donde se les indicaba que encendieran las luces. Al querer
realizar la tarea la mayoría de los sujetos extendió el brazo y abrió la mano.

Cabe mencionar que las tareas que se referían a apagar dispositivos fueron las que,
en general, tuvieron más acuerdo que las demás tareas, sobre todo sus simétricas,
encender los distintos dispositivos.

Al final, tomando en cuanta las tasas individuales de acuerdo y desacuerdo por
tarea, se obtuvo la tasa promedio del experimento entero, la cual fue de 0.366 y la
de desacuerdo 0.634. Esto quiere decir que los gestos que realizaron los sujetos
para cada tarea no fueron tan uniformes o cooncordantes, sin embargo, la tasa de
desacuerdo no es tan alta para concluir que no se puede generar un conjunto de
gestos ideales para cada una de las tareas.

Al hacer el experimento se le presentaba al sujeto con dichas tareas una a una, se
le pedía que realizara un gesto natural con el que el pudiera llevar a cabo la tarea,
y, en seguida, se le pedía calificar su gesto en una escala del 1 al 10 dependiendo
que tan mejorable cree que podría ser su gesto.

Con base en estos datos nos dimos a la tarea de promediar las calificaciones que
dieron los sujetos al proponer sus gesto en cada tarea. Al promediar todo
automáticamente, surgió que la tarea con mejor calificaión fue la primera, Apagar
TV, con un promedio de 9.4. Quizá esto fue por ser la primer tarea que se les dijo
que realizaran, por ser una tarea sencilla y porque no habían tenido puntos de
comparación previos con otros gestos que hayan realizado en el pasado para tareas
similares. Con menor puntaje (8.4) tenemos a la tarea 13, apagar luces, que
increíblemente también resultó ser la tarea con más acuerdo de todas. Su bajo
puntaje en calificación pudo haber sido por las muchas veces que se les presentaron
tareas similares en el pasado (Apagar dispositivos), y como sentían que ya no era
creativo su gesto (La mayoría cerró el puño), le pusieron una calificación baja.
Aunque decimos “Calificación baja” no la consideramos así ya que, en realidad
todas las calificaciones oscilaron entre el 8 y 9 de promedio, lo cual es bastante alto.

Cada vez que se le presentaba al sujeto con una tarea a realizar se le contó el
tiempo de respuesta desde que se le presentaba la tarea hasta que realizaba el
gesto que él o ella quisiera. Esto para identificar qué tareas eran las que más
requerían de análisis para diseñar un gesto para realizarla.

Con los datos obtenidos observamos que la tarea que les requirió menos tiempo
para diseñar su propuesta de gesto fue la tarea 12, aumentar el brillo de una
bombilla con un promedio de 1.14 segundos de respuesta. Mientras que la que más
requirió tiempo fue la tarea 14, encender el calefactor, con un tiempo de respuesta
promedio de 5.57 segundos. El elevado tiempo de respuesta de la tarea 14 puede
ser debido a la confusión que varios nos hicieron saber acerca de la diferencia entre

el Aire Acondicionado y el calefactor, además de que ya habían pruesto distintos
gestos para tareas parecidas.

Otra cosa que pudimos observar fue que, para cada pareja de tareas simétricas
(como apagar TV/prender TV, subir volumen/ bajar volumen, etc), la primera que se
les presentaba la pensaban más rápido que la segunda ya que en la segunda solían
proponer gestos simñetricos a los que proponían para la primer tarea. Obtuvimos
también que la diferencia de tiempo de respuesta promedio entre tareas simétricas
fue de: 1.79 seg. Esto quiere decir que los participantes tardaban en promedio 1.
segundos menos en hacer el segundo gesto.

## CONJUNTO DE GESTOS IDEALES

Para cada tarea sacamos la moda de las propuestas de gesto buscando así obtener
el gesto más natural y hacer un conjunto ideal que proponga los mejores gestos
para realizar cada una de las tareas que se presentaron en el experimento.

Al analizar el conjunto ideal resultante nos dimos cuenta que, aunque algunos
sujetos también proponían gestos compuestos por movimientos o combinaciones
de varios de éstos, los más populares siempre fueron más sencillos e intuitivos. A
continuación, los resultados:

En la navegación del menú pudimos observar que algunos sujetos pensaban de
manera opuesta a los otros ya que proponían el gesto simétrico. Esto se debe a que
unos proponían el gesto indicando hacia donde se querían mover en el menú y otros
imaginaban como si fuera un pase de diapositivas. La mitad del grupo pensó de una
forma, y la otra mitad de la otra forma.

En el gesto de contestar la llamada resultó ser ese el más popular debido a que les
presentamos con una interfaz de iPhone. En el iPhone se contesta a una llamada
deslizando hacia la derecha, lo que la mayoría de ellos hizo intuitivamente.

## ARGUMENTO Y USABILIDAD (TECNOLOGÍA MYO)

Basados en la encuesta que contestaron los sujetos sobre la usabilidad de Myo (Test de
usabilidad de sistema de computadora) se obtuvo que, en general, los sujetos consideraron
que Myo tiene una calificación de 8.76 en cuanto a usabilidad del sistema se refiere
tomando en cuenta su facilidad de uso, su aplicabilidad, su interactividad, comodidad, entre
otras variables. Su alto puntaje nos sugiere que Myo es una buena tecnología para realizar
tareas de este tipo; controlar dispositivos inteligentes, entre otras cosas. Concluimos con
que Myo es una tecnología fácil e intuitiva de utilizar. Además la mayoría de los usuarios
contestaron que Myo podría ser útil para las actividades que realizan cotidianamente, sin
dejar de ser divertido de utilizar.


