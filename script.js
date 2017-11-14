
var r = 19;          // Tareas
var rArray = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19];
// Tareas en Array
var p = 14;         // Sujetos

var pis = [3, 4, 2, 2, 3, 5, 5, 3, 4, 7, 5, 5, 2, 6, 4, 5, 4, 4, 3];   // Cantidad de propuestas por tarea
var piNombres =
[["B","C","A→"],["C","A","A↑","B"],
["D","E"], ["E","D"], ["C","B","E"], ["C","E↓","E","C↓","B↓"],
["C", "D↑","D", "C↑","B↑"], ["E", "C", "A"],  ["D","B","C","B↓"],
["B","E↓","E","A","C","B↓","C↓"], ["EB","E↓","E","C↓","B"],
["DB","D↑","D","C↑","B"], ["B", "C"], ["B","E↓","D","A","C","D↑"],
["E↓","B","B↓","C"], ["B","A","C","D↑","E"], ["C","B","E↓","E"],
["E","C","A","B"], ["D","B","C"]]; //Nombre de propuestas

var piArray = [[6,7,1],[3,9,1,1],[7,7],[7,7],[8,5,1],[1,4,5,1,3],
[1,4,5,1,3],[3,3,8],[2,9,2,1],[2,1,1,5,3,1,1],[1,7,3,1,2],[1,7,3,1,2],
[10,4],[2,1,1,8,1,1],[2,10,1,1],[1,6,5,1,1],[3,8,1,2],[10,2,1,1],
[5,7,2]]; //Cantidad individuos per answ

//CONJUNTO DE GESTOS IDEALES
var conjuntoIdeal = new Array();
var indexMayor;
for (var i = 0; i < piArray.length; i++) {
  for (var j = 0; j < piArray[i].length-1; j++) {
    if ((piArray[i][j]>piArray[i][j+1]) && j==0) {
      indexMayor = j;
    } else if(piArray[i][indexMayor]>piArray[i][j+1]){
      indexMayor = indexMayor;
    }else{
      indexMayor = j+1;
    }
  }

  conjuntoIdeal[i] = piNombres[i][indexMayor];
  console.log((i+1) + ": " + piNombres[i][indexMayor]);
}




// AGREEMENT RATE
var AR = new Array();
var suma = 0;

for (var i = 0; i < r; i++) {
  suma = 0;
  rArray[i] = i+1;
  for (var j = 0; j < pis[i]; j++) {
    suma += (piArray[i][j] * (piArray[i][j] - 1)) / 2;
  }
  AR[i] = suma / ((p * (p-1)) / 2);
}

// DISAGREEMENT RATE
var DR = new Array();

for (var i = 0; i < r; i++) {
  suma = 0;
  rArray[i] = i+1;
  for (var j = 0; j < pis[i]; j++) {
    suma += (piArray[i][j] * (p - piArray[i][j])) / 2;
  }
  DR[i] = suma / ((p * (p-1)) / 2);
}


var tareas = ["Apagar TV","Prender TV ","Item siguiente","Item anterior","Reproducir/seleccionar","Bajar volumen","Subir volumen","Encender AC","Apagar AC","Prender luces","Disminuir brillo","Aumentar brillo","Apagar luces","Encender calefactor","Apagar calefactor","Encender alarma","Apagar alarma","Contestar llamada","Colgar llamada8"];

var textFinal = new Array();

for (var i = 0; i < r; i++) {
  textFinal[i] = tareas[i] + '<br>Gesto: ' + conjuntoIdeal[i];
}

// PROMEDIO CALIFICACIONES
var rawCalificacionesTareas = [
  [10,10,10,10,10,8,8,10,10,10,9,9,10,9,9,10,10,10,10],
  [10,6,8,10,10,10,9,8,8,9,9,10,7,9,7,6,6,4,10],
  [10,9,10,10,10,10,10,10,10,10,10,10,10,9,10,10,10,10,10],
  [8,8,9,8,9,9,9,8,8,8,8,8,8,8,8,9,9,8,9],
  [9,10,10,8,8,9,9,9,9,9,10,7,7,10,10,10,10,9,10],
  [10,10,10,8,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10],
  [10,10,10,10,9,9,9,9,9,10,9,9,10,10,10,9,9,10,9],
  [10,8,7,10,8,7,7,8,8,9,8,7,8,8,8,8,8,8,8],
  [9,9,9,9,7,9,7,10,10,10,9,9,9,10,9,8,10,9,9],
  [8,5,7,7,8,8,9,9,9,8,9,8,8,8,8,7,8,9,9],
  [10,7,8,8,8,8,8,7,8,6,6,8,6,7,7,7,8,8,7],
  [10,10,10,8,10,10,10,5,5,8,8,8,8,10,10,8,10,10,10],
  [8,8,6,6,8,9,9,8,8,9,8,8,7,8,8,9,8,9,10],
  [10,9,10,9,10,10,9,10,9,10,10,9,10,10,9,10,10,10,9]
];


var promedioCalificacionesTareas = new Array();
var sumaPromedio = 0;

for (var i = 0; i < 19; i++) {
  for (var j = 0; j < 14; j++) {
    sumaPromedio = sumaPromedio + rawCalificacionesTareas[j][i];
  }
  promedioCalificacionesTareas[i] = sumaPromedio/14/10;
  sumaPromedio = 0;
}

//PROMEDIO TIEMPOS
var rawTiemposTareas = [
  [1,1,1,0,2,1,1,1,1,1,1,0,1,1,1,1,1,1,1],
  [2.9,3,2,14,2,9.6,2,2.9,1,4,1.5,2,2,6,3,1,3,4,2.6],
  [10,2,4,1,1,11,9,26,2,18,19,2,2,46.3,3,10.3,2,5,1],
  [3,1,1,1,3,4,2,1,1,2,1,1,1,2,1,1,1,4,1],
  [2,1,4,1,32,1,1,2,1,1,1,2,2,2,1,1,2,3,1],
  [1,2,2,2,2,7,1,3,2,2,1,1,2,2,1,1,4,1,2],
  [2,3,10,1,1,1,1,7,1,7,4,0,2,3,2,2,1,1,2],
  [5,3,5,3,3,1,1,4,1,1,2,1,2,1,1,2,1,1,1],
  [2,2,2,2,1,2,2,1,3,1,1,1,1,2,1,3,1,2,1],
  [2.12,2.22,1,1,1,18.1,1,1,1,1,1.3,1,2,1,1,2.1,5,2,2],
  [1.8,3.7,2.3,2.3,2.5,3,2.1,3,4,1,3,1,2.2,1,2,1.5,1,5.1,3],
  [3,2,1,1,3,4.3,3,3,1,2,2,2,3,2,3,4,1,2,2],
  [6,4,1,2,3,3,1,3,4,1,1,1,2,1.8,2,1,3,1,1],
  [4,2,1,1,8,4,6,6,1,2,4,1,1,7,1,3,2,14,4]
];

var promedioTiemposTareas = new Array();
sumaPromedio = 0;

for (var i = 0; i < 19; i++) {
  for (var j = 0; j < 14; j++) {
    sumaPromedio = sumaPromedio + rawTiemposTareas[j][i];
  }
  promedioTiemposTareas[i] = sumaPromedio/14/10;
  sumaPromedio = 0;
}


var trace1 = {
  x: rArray,
  y: AR,
  text: textFinal,
  type: 'scatter',
  mode: 'lines+markers',
  name: 'Tasa de acuerdo',
  marker: {
     color: '#23ab74',
     size: 12
   }
};

var trace2 = {
  x: rArray,
  y: DR,
  type: 'scatter',
  mode: 'lines+markers',
  name: 'Tasa de desacuerdo',
  marker: {
     size: 12,
     color: '#f44a46'
   }
};

var trace3 = {
  x: rArray,
  y: promedioCalificacionesTareas,
  type: 'scatter',
  text: tareas,
  mode: 'lines+markers',
  name: 'Calificación promedio por sujetos',
  marker: {
     size: 12,
     color: '#f0b423'
   }
};

var trace4 = {
  x: rArray,
  y: promedioTiemposTareas,
  type: 'scatter',
  text: tareas,
  mode: 'lines+markers',
  name: 'Tiempo de reacción promedio',
  marker: {
     size: 12,
     color: '#76d2f5'
   }
};



var layout = {
  title:'Tasas de Acuerdo y desacuerdo',
  xaxis: {
    title: 'TAREAS',
    zeroline: 'true',
    autotick: false,
    ticks: 'outside',
    tick0: 0,
    dtick: 1,
    ticklen: 8,
    tickwidth: 4,
    tickcolor: '#000'
  },
  yaxis: {
    title: 'TASA',
    zeroline: 'true',
    autotick: false,
    ticks: 'outside',
    tick0: 0,
    dtick: 0.1,
    ticklen: 8,
    tickwidth: 4,
    tickcolor: '#000'
  }
};

var data = [trace1, trace2, trace3, trace4];

Plotly.newPlot('myDiv', data, layout);


// **  RPOMEDIO DE TASAS **
suma = 0;

for (var i = 0; i < AR.length; i++) {
  suma += AR[i];
}
var promedioAR = suma/19;
PromedioAcuerdo.innerText = "Tasa de acuerdo promedio: " + Number((promedioAR).toFixed(3));
PromedioDesacuerdo.innerText = "Tasa de desacuerdo promedio: " + Number(1- (promedioAR).toFixed(3));
