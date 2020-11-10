// 225JSnack
// 3Creare un oggetto che rappresenti un triangolo rettangolo, con le seguenti proprietà: base e altezza.
// Calcolare perimetro e area.(ripassiamo il Teorema di Pitagora ;D )

var triangolo =[
  {
  'base' : 20 ,
  'altezza' : 10 ,
  }
]




triangolo[0]['area'] = triangolo[0]['base'] * triangolo[0]['altezza']
triangolo[0]['ipotenusa'] = Math.sqrt((triangolo[0]['base'] ** 2) + (triangolo[0]['altezza'] ** 2))
triangolo[0]['perimetro'] = triangolo[0]['ipotenusa'] + triangolo[0]['altezza'] + triangolo[0]['base']


  for (var i = 0; i < triangolo.length; i++){
     for (key in triangolo[i]){
       $('#list').append(key + ': ' + triangolo[i][key] + '<br>');
     };
  };
