
const SUPABASE_URL="https://qttxcfbgyfmvyglzwxct.supabase.co";
const SUPABASE_ANON_KEY="sb_publishable_8zeUhO0eNbsQddb7koQZ1w_VwuK8FjO";
const STORAGE_KEY="direct_by_local_draft_v6";
const STATUSES=["Pendiente","Grabando","Grabado","Editando","Terminado"];
const FILTERS=["Todos","Pendientes","Grabados","Editando","Terminados"];
const client=window.supabase?.createClient(SUPABASE_URL,SUPABASE_ANON_KEY);
let user=null;
let episodes=[];
let activeId="";
let activeDay=1;
let activeFilter="Todos";
let activeBlockId="";
let autoSaveTimer=0;
let autoSaveInFlight=false;
let autoSaveQueued=false;

const $=(id)=>document.getElementById(id);
function uid(){return crypto.randomUUID?crypto.randomUUID():`local-${Date.now()}-${Math.random().toString(16).slice(2)}`}
function setStatus(text){$("status").textContent=text}
function slugify(value){
  return String(value||"toma").toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g,"").replace(/[^a-z0-9]+/g,"-").replace(/^-|-$/g,"").slice(0,48)||"toma";
}
function shotDone(shot){return shot.estado==="grabado"||shot.done===true}
function makeShot(nombre,nivel="bloque",id=""){
  return {id:id||`${nivel}-${slugify(nombre)}-${uid().slice(0,6)}`,nombre:nombre||"Nueva toma",nivel,estado:"pendiente"};
}
function blankShot(text="",nivel="bloque"){return makeShot(text,nivel)}
function defaultEpisodeShots(){
  return [
    makeShot("Mapa general de 40.075 km","episodio","mapa-40075"),
    makeShot("Explicacion de las reglas","episodio","reglas-reto"),
    makeShot("Contador general del reto","episodio","contador-general"),
    makeShot("Presentacion del objetivo del episodio","episodio","objetivo-episodio")
  ];
}
function defaultDayShots(day){
  const shots={
    1:[
      ["Primer plano del sticker inicial","dia-1-sticker-inicial"],
      ["Dinero en cero antes de vender","dia-1-dinero-cero"],
      ["Primer lugar donde intenta vender","dia-1-primer-lugar"],
      ["Primer rechazo real","dia-1-primer-rechazo"],
      ["Recuento final del dia 1","dia-1-recuento-final"]
    ],
    2:[
      ["Viaje y llegada a Merlo","dia-2-llegada-merlo"],
      ["Multitud y ruido de la estacion","dia-2-multitud-estacion"],
      ["Dinero al comenzar el dia 2","dia-2-dinero-inicio"],
      ["Fachada o comprobante de imprenta","dia-2-imprenta"],
      ["Pedido de plancha confirmado","dia-2-pedido-confirmado"]
    ],
    3:[
      ["Retiro del paquete en imprenta","dia-3-retiro-paquete"],
      ["Apertura de la plancha completa","dia-3-apertura-plancha"],
      ["Cien stickers ordenados en mesa","dia-3-cien-stickers"],
      ["Calculo del rollo de tela","dia-3-calculo-rollo"],
      ["Cierre con pregunta de la prenda","dia-3-cierre-prenda"]
    ]
  };
  return (shots[day]||[
    [`Llegada al lugar dia ${day}`,`dia-${day}-llegada`],
    [`Recurso clave dia ${day}`,`dia-${day}-recurso-clave`],
    [`Recuento final dia ${day}`,`dia-${day}-recuento-final`]
  ]).map(([name,id])=>makeShot(name,"dia",id));
}
function defaultBlockShots(day,orden){
  const specific={
    1:{
      1:["Sticker en mano","Mapa y contador en cero"],
      3:["Persona que no frena","Reaccion despues del rechazo"],
      4:["Entrega del sticker","Pago de la primera venta"],
      7:["Billetes del dia 1","Cara despues de contar"]
    },
    2:{
      1:["Salida hacia Merlo","Reloj o cierre de imprenta"],
      3:["Speech corto probado","Persona que vuelve a escuchar"],
      6:["Camino rapido a la imprenta","Comprobante del pedido"],
      8:["Pantalla o recibo pendiente","Cara de espera"]
    },
    3:{
      1:["Paquete cerrado","Mano antes de abrir"],
      2:["Plancha completa revelada","Detalle de calidad del sticker"],
      3:["Cien stickers como problema","Mochila o mesa llena"],
      9:["Pregunta final a camara","Objeto que apunta al proximo episodio"]
    }
  };
  if(specific[day]?.[orden])return specific[day][orden].map((name)=>makeShot(name,"bloque"));
  return [makeShot(`Accion principal bloque ${orden}`,"bloque"),makeShot(`Reaccion bloque ${orden}`,"bloque")];
}
function musicGuideForBlock(day,orden,emotion=""){
  const key=`${day}-${orden}`;
  const specific={
    "1-1":["Desde el segundo 0, debajo del gancho; bajar volumen cuando entra voz.","Intriga rapida / beat minimal con golpes para sticker, mapa y contador.","Separador flash al final: whoosh corto + corte a primer conflicto."],
    "1-2":["Entrar despues de la primera frase, muy baja, dejando verguenza y respiracion.","Pad calido o piano simple, tono humano/documental.","Sin separador fuerte; micro silencio antes del primer rechazo."],
    "1-3":["Entrar justo antes del acercamiento y cortar en cada rechazo.","Percusion seca, tension social, golpes cortos para CapCut.","Separador seco si cambia a primera venta."],
    "1-4":["Entrar cuando aparece la posibilidad de venta; subir en entrega/pago.","Recompensa suave, beat calido, energia chica pero positiva.","Separador contador: ding/placa de primera venta."],
    "1-5":["Musica durante montaje completo; sincronizar ventas y contador.","Beat de progreso medio, urbano liviano, cortes al ritmo.","Separador de contador si pasa a oscuridad o riesgo."],
    "1-6":["Bajar o cortar musica al guardar celular/plata; dejar ambiente.","Drone grave o silencio con textura de calle, sensacion de caida.","Separador a negro breve antes del recuento."],
    "1-7":["Entrar en recuento final, volumen medio-bajo para escuchar numeros.","Cierre calido con pulso de logro y transicion.","Separador de cierre de dia: placa Dia 2 / viaje a Merlo."],
    "2-1":["Entrar con llegada/viaje; sostener energia de nuevo intento.","Beat esperanzador con movimiento, sin hacerlo epico.","Separador de reloj/meta antes de empezar a vender."],
    "2-2":["Musica baja y repetitiva durante rechazos; cortar en frases importantes.","Frustracion seca, loop trabado, percusion minima.","Separador corto para cambio de estrategia."],
    "2-3":["Entrar cuando prueba speech corto; ritmo mas curioso.","Intriga liviana + groove discreto, sensacion de prueba.","Separador de pregunta antes de progreso."],
    "2-4":["Musica de montaje sobre ventas/avance, con contador visible.","Beat de avance mas firme, cortes sincronizados con dinero.","Separador contador antes de cuenta regresiva."],
    "2-5":["Entrar con reloj; subir tension mientras falta poco.","Cuenta regresiva, ticks, percusion rapida y respiracion corta.","Separador tipo reloj antes de correr a imprenta."],
    "2-6":["Musica de carrera desde que decide ir hasta encargar.","Urgencia / chase urbano, pasos y cortes rapidos.","Separador de llegada: puerta/recibo/encargo confirmado."],
    "2-7":["Entrar despues del encargo, dejando aire emocional.","Calma, pad suave, guitarra/piano bajo, cierre humano.","Separador suave de noche / Dia 3."],
    "3-1":["Entrar con paquete cerrado; crecer hasta revelacion.","Build de anticipacion, riser suave, pausa antes de abrir.","Separador de pausa justo antes de mostrar plancha."],
    "3-2":["Pausa al revelar; despues entra recompensa.","Revelacion satisfactoria, acorde/beat brillante pero limpio.","Separador despues de plancha para presentar problema nuevo."],
    "3-3":["Entrar cuando la victoria se convierte en carga.","Tension baja, beat lento, textura de duda.","Separador seco hacia plan de nueva mision."],
    "3-4":["Musica debajo del plan, ritmo constante.","Motivacional sobria, pulso de sistema, energia de trabajo.","Separador con mapa/stock antes del cierre."],
    "3-5":["Arrancar como cierre y torcer a intriga en la ultima frase.","Orgullo + intriga, golpe final y silencio corto.","Separador final obligatorio hacia episodio 2."]
  };
  if(specific[key])return {entradaMusica:specific[key][0],musica:specific[key][1],separadorFinal:specific[key][2]};
  const normalized=String(emotion||"").toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g,"");
  if(/caida|riesgo|inquietud/.test(normalized))return {entradaMusica:"Entrar bajo y cortar en la decision dificil.",musica:"Drone grave o silencio con ambiente real.",separadorFinal:"Separador a negro breve."};
  if(/tension|presion|urgencia|frustracion/.test(normalized))return {entradaMusica:"Entrar antes del intento y subir con el problema.",musica:"Percusion seca / cuenta regresiva / tension urbana.",separadorFinal:"Separador con golpe corto si cambia el plan."};
  if(/alivio|satisfaccion|orgullo|revelacion/.test(normalized))return {entradaMusica:"Entrar cuando aparece el logro, dejando aire a la voz.",musica:"Recompensa calida, beat limpio y optimista.",separadorFinal:"Separador suave o placa de avance."};
  return {entradaMusica:"Usar musica baja desde el inicio del bloque y automatizar volumen bajo la voz.",musica:"Base documental suave, sin tapar dialogos.",separadorFinal:"Separador solo si cambia de dia, lugar o emocion."};
}
function defaultBlock(day,orden,overrides={}){
  const arcs={
    1:{
      names:["Pregunta inicial","Verguenza","Primer choque","Primer si","Ritmo inicial","Amenaza de cierre","Primer conteo","Caida 1","Puente a Merlo"],
      objetivos:["Presentar el reto y la meta de pasar de 1 a 100 stickers.","Mostrar que sabe vender, pero le cuesta arrancar.","Mostrar rechazos y esfuerzo real.","Conseguir la primera venta del reto.","Mostrar que empieza a agarrar ritmo.","Mostrar que seguir puede hacerlo perder todo.","Contar dinero y cerrar el dia con avance.","Abrir la necesidad de reinvertir.","Preparar el salto a Merlo."],
      sensaciones:["Como va a lograrlo?","Es bueno, pero tambien le cuesta.","Que se anime otra vez.","El reto finalmente empezo.","Esta agarrando ritmo.","Tiene que irse.","El primer dia valio la pena.","Falta un salto mas.","Manana puede cambiar todo."],
      escenas:["Sticker, mapa, ventas, rechazo, oscuridad y adelanto de la plancha.","Dudas antes de acercarse a la primera persona.","Primer intento, rechazo y reaccion.","Speech, entrega, pago y reaccion.","Ventas, conversaciones, contador y distintas aperturas.","Oscurece, guarda el celular y decide retirarse.","Recuento y precio de la plancha.","Mostrar cuanto falta para imprimir.","Cierre con promesa de Merlo."],
      dialogos:["Este sticker es todo lo que tengo para intentar construir una marca de ropa y recorrer 40.075 kilometros.","Yo se vender; el problema es arrancar.","Bueno. Ya esta. La primera siempre es la peor.","No era la primera venta de mi vida, pero si la primera de esta historia.","La verguenza no desaparecio, pero dejo de mandar.","Frenar era mejor que perder todo.","Cumpli la meta, pero todavia necesitaba llegar a la plancha.","Si no reinvierto, esto muere aca.","Manana voy a Merlo: hay mas gente, pero tambien mas ruido."],
      preguntas:["Podra llegar a 100 stickers?","Va a superar la verguenza inicial?","La proxima persona frenara?","Podra repetirlo siete veces?","Llegara antes de que oscurezca?","Alcanzo el dinero para dar el primer salto?","Mas personas significaran mas ventas?","La nueva zona ayuda o complica?","Que pasa cuando el reto sale del barrio?"]
    },
    2:{
      names:["Promesa falsa","Ruido","Ajuste de estrategia","Subida","Cuenta regresiva","Carrera","Respiro","Caida 2","Pedido pendiente"],
      objetivos:["Presentar Merlo y la meta con reloj.","Demostrar que multitud no garantiza ventas.","Cambiar estrategia y acortar speech.","Acercarse a los 9000.","Completar la meta bajo presion.","Llegar a la imprenta antes del cierre.","Respirar y recordar el motor emocional.","Dejar pendiente la entrega.","Preparar el dia de los 100."],
      sensaciones:["Hoy deberia ser mas facil.","Esta perdido entre el ruido.","Quiere ver si el gancho funciona.","Ahora si puede lograrlo.","Falta poco y se acaba el tiempo.","Que no cierre antes.","Esto significa algo mas grande.","Como se sentira tener cien?","El siguiente dia importa."],
      escenas:["Viaje, multitud, dinero actual y hora de cierre.","Gente apurada, auriculares y rechazos rapidos.","Comparar speech largo con una apertura corta.","Ventas, contador de dinero y reloj.","Actualizaciones: faltan cuatro, dos y una.","Viaje rapido, fachada y comprobante.","Comida economica y llamada.","Mostrar comprobante y espera.","Cierre con expectativa de retiro."],
      dialogos:["En Merlo hay miles de personas. En teoria, hoy deberia ser mas facil.","Habia mucha mas gente, pero era mas facil volverse ruido.","Cambie el inicio por una pregunta mas corta.","Cuando escuchaban la historia completa, vender volvia a ser la parte facil.","Necesito vender algunos mas antes de que cierre.","Si llegaba despues del cierre, tenia que esperar hasta manana.","Manana me entregan los cien. Despues tengo que convertirlos en tela.","Hoy compre tiempo, no resolvi todo.","Manana descubro si esto realmente se multiplico."],
      preguntas:["Llegara antes del cierre?","Que cambiara para llamar la atencion?","Subira el ritmo de ventas?","Cuantas ventas faltan?","Llegara a la imprenta?","Como se sentira tener cien stickers?","Que hara con tanto stock?","El pedido habra salido bien?","Cien oportunidades alcanzan?"]
    },
    3:{
      names:["Espera","Revelacion","Nuevo problema","Sistema","Orgullo contenido","Caida 3","Metodo","Riesgo mayor","Puerta al proximo"],
      objetivos:["Preparar la revelacion.","Revelar la plancha completa.","Mostrar que cien productos sin vender tambien son problema.","Presentar el plan de vender y reinvertir.","Cerrar la primera transformacion.","Anticipar la caida del episodio 2.","Mostrar sistema posible.","Mostrar que falta tela y escala.","Sembrar el proximo episodio."],
      sensaciones:["Quiere ver la plancha.","El crecimiento se volvio visible.","La victoria creo un problema mayor.","Parece posible, pero dificil.","Quiere ver si los cien alcanzan.","Algo no cierra del todo.","Hay sistema.","El reto recien empieza.","Necesito ver el proximo."],
      escenas:["Comprobante, viaje y paquete cerrado.","Abrir paquete y mostrar los 100.","Cien stickers sobre la mesa y precio del rollo.","Calculadora, paquetes y mochila.","Mapa, resumen y adelantos.","Flashes de cansancio y calculadora.","Ordenar stickers por salida.","Costo del rollo y distancia real.","Cierre con pregunta de prenda."],
      dialogos:["Empece con uno y ahora iba por cien. Al menos en teoria.","Empece con uno. Ahora tenia cien.","Ahora tenia cien cosas que todavia no habia vendido.","Por primera vez parecia que tenia un sistema.","Convirti un sticker en cien oportunidades sin usar dinero propio.","Mi plan no era tan realista como parecia.","Si vendo los cien, puedo imprimir mas y repetir.","El rollo esta lejos, pero ya no estoy en cero.","Cuantos stickers hacen falta para crear una prenda?"],
      preguntas:["Como quedo el pedido?","Puede venderlos todos?","Este sistema alcanza para el rollo?","El plan es realista?","Cuantos stickers hacen falta para una prenda?","Que falla primero: energia, plata o estrategia?","Puede escalar?","Que pasa si los cien no alcanzan?","Como sigue el reto?"]
    }
  };
  const arc=arcs[day]||arcs[1];
  const names=arc.names;
  const timesByDay=[
    ["0:00-0:45","0:45-1:40","1:40-3:10","3:10-4:25","4:25-5:50","5:50-6:20","6:20-8:20","8:20-9:00","9:00-12:00"],
    ["0:00-0:55","0:55-2:10","2:10-4:10","4:10-5:30","5:30-7:20","7:20-8:00","8:00-11:20","11:20-12:10","12:10-15:00"],
    ["0:00-0:40","0:40-1:30","1:30-2:55","2:55-4:00","4:00-5:20","5:20-5:55","5:55-7:30","7:30-8:05","8:05-10:00"]
  ];
  const objetivos=arc.objetivos||[
    "Abrir el loop del dia y plantear una pregunta fuerte.",
    "Mostrar que se puede ganar si el espectador sigue mirando.",
    "Instalar el obstaculo que hace dificil el reto.",
    "Humanizar el proceso y mostrar friccion real.",
    "Cambiar la energia con un giro visual o informacion nueva.",
    "Cortar antes de resolver una decision importante.",
    "Dar una mini victoria para que el dia respire.",
    "Abrir una pregunta que empuje al siguiente tramo.",
    "Cerrar el dia con avance visible y promesa del proximo."
  ];
  const sensaciones=arc.sensaciones||["Que raro, necesito entender.","Quiero ver si lo logra.","Esto se puede caer.","Me pasa, no es perfecto.","No esperaba eso.","No cortes ahi.","Bien, hay avance.","Falta algo importante.","Valio la pena seguir."];
  const idx=(orden-1)%9;
  const musicGuide=musicGuideForBlock(day,orden,names[idx]);
  return {
    id:uid(),
    orden,
    dia:day,
    emocion:names[idx],
    tiempo:timesByDay[(day-1)%timesByDay.length][idx],
    objetivoNarrativo:objetivos[idx],
    sensacionEspectador:sensaciones[idx],
    escena:arc.escenas?.[idx]||`Grabar la escena ${orden} del dia ${day} con accion concreta.`,
    dialogo:arc.dialogos?.[idx]||`Dia ${day}, bloque ${orden}: decir la idea central sin explicar de mas.`,
    tomasBloque:defaultBlockShots(day,orden),
    referenciasTomas:orden===1?["mapa-40075","reglas-reto","contador-general",`dia-${day}-llegada`]:[],
    entradaMusica:musicGuide.entradaMusica,
    musica:musicGuide.musica,
    separadorFinal:musicGuide.separadorFinal,
    preguntaAbierta:arc.preguntas?.[idx]||"Como sigue esto?",
    resultadoEsperado:"Que el espectador quiera pasar al siguiente bloque.",
    notasPersonales:"",
    estado:"Pendiente",
    ...overrides
  };
}
function defaultDay(day){
  const titulo=day===1?"Volver a empezar desde cero":day===2?"Escalar el problema":day===3?"Cerrar el reto":`Dia ${day}`;
  return {dia:day,titulo,tomasDia:defaultDayShots(day),bloques:Array.from({length:9},(_,i)=>defaultBlock(day,i+1))};
}
function freshEpisode(){
  return normalizeEpisode({id:uid(),episodio:episodes.length+1,titulo:`Episodio ${String(episodes.length+1).padStart(2,"0")}`,tomasEpisodio:defaultEpisodeShots(),dias:[defaultDay(1),defaultDay(2),defaultDay(3)],remote:false,created_at:new Date().toISOString(),updated_at:new Date().toISOString()});
}
function normalizeShot(shot,nivel="bloque"){
  if(typeof shot==="string")return makeShot(shot,nivel);
  return {
    id:shot.id||`${nivel}-${slugify(shot.nombre||shot.text)}-${uid().slice(0,6)}`,
    nombre:shot.nombre||shot.text||"Nueva toma",
    nivel:shot.nivel||nivel,
    estado:shot.estado||(shot.done||shot.hecha?"grabado":"pendiente")
  };
}
function legacyBlock(item,index){
  return defaultBlock(Number(item.day||item.dia||1),index+1,{
    id:item.id||uid(),
    orden:Number(item.orden||index+1),
    emocion:item.emocion||item.name||"Bloque",
    tiempo:item.tiempo||item.time||"",
    objetivoNarrativo:item.objetivoNarrativo||item.scene||"",
    sensacionEspectador:item.sensacionEspectador||"",
    escena:item.escena||item.scene||"",
    dialogo:item.dialogo||item.script||"",
    tomasBloque:Array.isArray(item.tomasBloque)?item.tomasBloque.map((shot)=>normalizeShot(shot,"bloque")):Array.isArray(item.tomas)?item.tomas.map((shot)=>normalizeShot(shot,"bloque")):[],
    referenciasTomas:Array.isArray(item.referenciasTomas)?item.referenciasTomas:[],
    entradaMusica:item.entradaMusica||item.dondeMusica||"",
    musica:item.musica||"",
    separadorFinal:item.separadorFinal||item.separador_final||"",
    preguntaAbierta:item.preguntaAbierta||"",
    resultadoEsperado:item.resultadoEsperado||"",
    notasPersonales:item.notasPersonales||item.notas||"",
    estado:item.estado||(item.done?"Terminado":"Pendiente")
  });
}
function normalizeBlock(block,index,day){
  const base=defaultBlock(day,index+1);
  const tomasBloque=Array.isArray(block.tomasBloque)&&block.tomasBloque.length
    ? block.tomasBloque.map((shot)=>normalizeShot(shot,"bloque"))
    : Array.isArray(block.tomas)&&block.tomas.length
      ? block.tomas.map((shot)=>normalizeShot(shot,"bloque"))
      : base.tomasBloque;
  const merged={...base,...block,id:block.id||uid(),orden:Number(block.orden||index+1),dia:day,tomasBloque,referenciasTomas:Array.isArray(block.referenciasTomas)?block.referenciasTomas:base.referenciasTomas,estado:STATUSES.includes(block.estado)?block.estado:"Pendiente"};
  const guide=musicGuideForBlock(merged.dia,merged.orden,merged.emocion);
  merged.entradaMusica=merged.entradaMusica||merged.dondeMusica||guide.entradaMusica;
  merged.musica=merged.musica||guide.musica;
  merged.separadorFinal=merged.separadorFinal||merged.separador_final||guide.separadorFinal;
  return merged;
}
function unwrapImportedEpisode(raw){
  let source=raw;
  if(Array.isArray(source))source=source[0]||{};
  if(source?.payload&&typeof source.payload==="object")source=source.payload;
  if(Array.isArray(source?.data))source=source.data[0]||{};
  if(Array.isArray(source?.episodes))source=source.episodes[0]||{};
  if(source?.episode&&typeof source.episode==="object")source=source.episode;
  return source||{};
}
function flatBlocksToEpisodeSource(source){
  if(!Array.isArray(source?.bloques))return source||{};
  const lineText=(items,pick)=>(items||[]).map(pick).filter(Boolean).join("\n");
  const sceneSeconds=(scene)=>Number.isFinite(Number(scene?.duracion_segundos))?`${Number(scene.duracion_segundos).toFixed(Number(scene.duracion_segundos)%1?1:0)}s - `:"";
  const sceneMain=(scene)=>scene.contenido||scene.accion||scene.titulo||scene.nombre||"";
  const sceneDetail=(scene)=>{
    const parts=[
      scene.titulo?`Titulo: ${scene.titulo}`:"",
      scene.plano?`Plano: ${scene.plano}`:"",
      scene.accion?`Accion: ${scene.accion}`:"",
      scene.contenido&&!scene.accion?`Contenido: ${scene.contenido}`:"",
      scene.dialogo_o_voz_en_off?`Dialogo/VO: ${scene.dialogo_o_voz_en_off}`:"",
      scene.voz_en_off?`Voz en off: ${scene.voz_en_off}`:"",
      scene.audio?`Audio: ${scene.audio}`:"",
      scene.texto_en_pantalla?`Texto pantalla: ${scene.texto_en_pantalla}`:"",
      scene.emocion?`Emocion: ${scene.emocion}`:"",
      scene.funcion_narrativa?`Funcion: ${scene.funcion_narrativa}`:"",
      scene.salida?`Salida: ${scene.salida}`:""
    ].filter(Boolean).join(" | ");
    return `${scene.numero?`${scene.numero}. `:""}${sceneSeconds(scene)}${parts||sceneMain(scene)}`;
  };
  const blockFeeling=(block,escenas)=>{
    const text=[
      block.tipo,block.emocion_principal,block.objetivo_narrativo,block.cliffhanger,
      ...escenas.flatMap((scene)=>[scene.titulo,scene.accion,scene.contenido,scene.dialogo_o_voz_en_off,scene.voz_en_off,scene.emocion,scene.funcion_narrativa,scene.salida])
    ].filter(Boolean).join(" ").toLowerCase();
    if(/gancho|curiosidad|suspenso|corte|ocultar|sin revelar|pendiente|notificaci[o�]n/.test(text))return "Curiosidad con presi�n: sentir que hay una promesa concreta y necesitar ver qu� pasa despu�s.";
    if(/rechazo|no pag|no cierra|consulta|duda|confusi[o�]n|critica|cr[i�]tica/.test(text))return "Incomodidad �til: entender que el avance no est� asegurado y preguntarse si la estrategia va a aguantar.";
    if(/problema|mal|deformada|devoluci[o�]n|talle|ausente|incompleto|riesgo/.test(text))return "Tensi�n real: sentir que una falla chica puede romper todo el progreso conseguido.";
    if(/venta|reserva|transferencia|pago|contador|meta|cinco|5\/5|racha/.test(text))return "Impulso de logro: querer que cierre la venta y sentir que cada n�mero cambia el futuro del reto.";
    if(/decidir|decisi[o�]n|elegir|producto|muestra|validaci[o�]n|opini[o�]n/.test(text))return "Participaci�n mental: sentir ganas de opinar y comparar si esa decisi�n tiene sentido.";
    if(/entrega|cliente|probando|fotos|comprador/.test(text))return "Expectativa humana: mirar la reacci�n del cliente como prueba final de si todo vali� la pena.";
    if(/costo|dinero|producci[o�]n|costurero|molde|lote/.test(text))return "Presi�n de negocio: sentir que el reto ya no es una idea, sino una decisi�n con plata y consecuencias.";
    return "Atenci�n activa: sentir que el bloque deja una pregunta clara y empuja a seguir mirando.";
  };
  const dayNumbers=Array.isArray(source.dias)
    ? source.dias.map((day,index)=>Number(typeof day==="object"?day.dia:day)||index+1)
    : [...new Set(source.bloques.map((block)=>Number(block.dia||1)))];
  const dias=dayNumbers.map((dayNumber)=>({
    dia:dayNumber,
    titulo:source.titulosDias?.[dayNumber]||source.day_titles?.[dayNumber]||`Dia ${dayNumber}`,
    tomasDia:[],
    bloques:source.bloques
      .filter((block)=>Number(block.dia||dayNumber)===dayNumber)
      .map((block,index)=>{
        const escenas=Array.isArray(block.escenas)?block.escenas:[];
        const orden=Number(block.orden||block.numero||block.bloque||index+1);
        const plantilla=`B${orden} P1`;
        const escena=lineText(escenas,sceneDetail)||block.escena||block.contenido||"";
        const audio=lineText(escenas,(scene)=>{
          const audioParts=[scene.audio,scene.dialogo_o_voz_en_off,scene.voz_en_off,scene.texto_en_pantalla?`Texto: ${scene.texto_en_pantalla}`:""].filter(Boolean).join(" | ");
          return audioParts?`${scene.numero?`${scene.numero}. `:""}${audioParts}`:"";
        });
        const shotSource=Array.isArray(block.tomasBloque)&&block.tomasBloque.length
          ? block.tomasBloque
          : Array.isArray(block.planos)&&block.planos.length
            ? block.planos
            : escenas.map((scene)=>`${sceneSeconds(scene)}${sceneMain(scene)}`.trim()).filter(Boolean);
        return {
          id:block.id||uid(),
          orden,
          dia:dayNumber,
          emocion:block.emocion||block.emocion_principal||block.nombre||block.tipo||`Bloque ${index+1}`,
          tiempo:block.tiempo||block.duracion||(block.duracion_segundos?`${Number(block.duracion_segundos).toFixed(1)}s`:""),
          objetivoNarrativo:block.objetivoNarrativo||block.objetivo_narrativo||block.objetivo||"",
          sensacionEspectador:block.sensacionEspectador||block.sensacion_espectador||blockFeeling(block,escenas),
          escena,
          dialogo:block.dialogo||block.dialogo_o_voz_en_off||block.voz_en_off||"",
          tomasBloque:shotSource.map((shot,shotIndex)=>typeof shot==="string"?makeShot(shot,"bloque",`d${dayNumber}-b${orden}-t${shotIndex+1}-${slugify(shot)}`):normalizeShot(shot,"bloque")),
          referenciasTomas:Array.isArray(block.referenciasTomas)?block.referenciasTomas:[],
          entradaMusica:block.entradaMusica||block.dondeMusica||block.entrada_musica||(audio?"Seguir los audios marcados por escena.":""),
          musica:block.musica||audio||"",
          separadorFinal:block.separadorFinal||block.separador_final||block.salida||"",
          preguntaAbierta:block.preguntaAbierta||block.pregunta_abierta||"",
          resultadoEsperado:block.resultadoEsperado||block.resultado_esperado||block.salida||"",
          notasPersonales:block.notasPersonales||block.notas||[`Plantilla: ${plantilla}`,block.plantilla&&block.plantilla!==plantilla?`Plantilla original: ${block.plantilla}`:"",block.tipo?`Tipo: ${block.tipo}`:""].filter(Boolean).join("\n"),
          estado:block.estado||"Pendiente"
        };
      })
  })).filter((day)=>day.bloques.length);
  return {
    id:source.id,
    episodio:source.episodio,
    titulo:source.titulo||source.title||source.titulo_provisional||"Sin titulo",
    preguntaPrincipal:source.preguntaPrincipal||source.pregunta_narrativa||"",
    objetivo:source.objetivo||source.objetivo_principal||source.objetivo_del_episodio||"",
    tomasEpisodio:Array.isArray(source.tomasEpisodio)?source.tomasEpisodio:[],
    dias
  };
}
function coerceImportedEpisode(raw){
  return flatBlocksToEpisodeSource(unwrapImportedEpisode(raw));
}
function normalizeEpisode(raw){
  raw=coerceImportedEpisode(raw);
  const importedDias=Array.isArray(raw.dias)&&raw.dias.length?raw.dias:null;
  let dias;
  if(importedDias){
    dias=importedDias.map((day,index)=>({dia:Number(day.dia||index+1),titulo:day.titulo||`Dia ${index+1}`,tomasDia:Array.isArray(day.tomasDia)?day.tomasDia.map((shot)=>normalizeShot(shot,"dia")):defaultDayShots(Number(day.dia||index+1)),bloques:(day.bloques||[]).map((block,bIndex)=>normalizeBlock(block,bIndex,Number(day.dia||index+1)))}));
  }else{
    const legacy=Array.isArray(raw.emotions)?raw.emotions:[];
    dias=[1,2,3].map((day)=>({dia:day,titulo:defaultDay(day).titulo,tomasDia:defaultDayShots(day),bloques:legacy.filter((item)=>Number(item.day||item.dia||1)===day).map(legacyBlock)}));
    dias.forEach((day)=>{if(!day.bloques.length)day.bloques=defaultDay(day.dia).bloques});
  }
  dias=dias.map((day,index)=>({dia:Number(day.dia||index+1),titulo:day.titulo||`Dia ${index+1}`,tomasDia:Array.isArray(day.tomasDia)?day.tomasDia.map((shot)=>normalizeShot(shot,"dia")):defaultDayShots(Number(day.dia||index+1)),bloques:(day.bloques&&day.bloques.length?day.bloques:defaultDay(index+1).bloques).map((block,bIndex)=>normalizeBlock(block,bIndex,Number(day.dia||index+1)))}));
  return ensureUniqueResourceIds({id:raw.id||uid(),episodio:Number(raw.episodio||1),titulo:raw.titulo||raw.title||"Sin titulo",preguntaPrincipal:raw.preguntaPrincipal||"",objetivo:raw.objetivo||"",tomasEpisodio:Array.isArray(raw.tomasEpisodio)?raw.tomasEpisodio.map((shot)=>normalizeShot(shot,"episodio")):defaultEpisodeShots(),dias,remote:Boolean(raw.remote),created_at:raw.created_at||new Date().toISOString(),updated_at:raw.updated_at||new Date().toISOString()});
}
function ensureUniqueResourceIds(episode){
  const used=new Set();
  const episodeIdMap=new Map();
  episode.tomasEpisodio=episode.tomasEpisodio.map((shot,index)=>{
    const oldId=shot.id;
    let nextId=oldId||`episodio-${slugify(shot.nombre)}`;
    if(used.has(nextId))nextId=`episodio-${slugify(shot.nombre)}-${index+1}`;
    used.add(nextId);
    shot.id=nextId;
    episodeIdMap.set(oldId,nextId);
    return shot;
  });
  episode.dias.forEach((day)=>{
    const dayMap=new Map();
    day.tomasDia=(day.tomasDia||[]).map((shot,index)=>{
      const oldId=shot.id;
      let nextId=oldId||`dia-${day.dia}-${slugify(shot.nombre)}`;
      if(used.has(nextId)||!String(nextId).startsWith(`d${day.dia}-`)&&!String(nextId).startsWith(`dia-${day.dia}-`)){
        nextId=`d${day.dia}-${slugify(shot.nombre)}${index?`-${index+1}`:""}`;
      }
      while(used.has(nextId))nextId=`${nextId}-${index+1}`;
      used.add(nextId);
      shot.id=nextId;
      dayMap.set(oldId,nextId);
      return shot;
    });
    (day.bloques||[]).forEach((block)=>{
      block.referenciasTomas=(block.referenciasTomas||[]).map((id)=>dayMap.get(id)||episodeIdMap.get(id)||id);
    });
  });
  return episode;
}
function activeEpisode(){return episodes.find((episode)=>episode.id===activeId)||episodes[0]||null}
function allBlocks(episode=activeEpisode()){return (episode?.dias||[]).flatMap((day)=>day.bloques||[])}
function episodeDayLabel(episode){return (episode?.dias||[]).map((day)=>day.dia).join(", ")||"-"}
function isLikelyBrokenEpisodeImport(item,incoming){
  if(!item||!incoming)return false;
  return Number(item.episodio)===Number(incoming.episodio);
}
async function fetchBundledEpisode2(){
  return fetchBundledEpisode("./assets/episodio_2.json?v=4","assets/episodio_2.json");
}
async function fetchBundledEpisode1(){
  return fetchBundledEpisode("./assets/episodio_1.json?v=1","assets/episodio_1.json");
}
async function fetchBundledEpisodeNumber(number){
  return fetchBundledEpisode(`./assets/episodio_${number}.json?v=1`,`assets/episodio_${number}.json`);
}
async function fetchBundledEpisode(url,label){
  const response=await fetch(url,{cache:"no-store"});
  if(!response.ok)throw new Error(`No pude leer ${label}`);
  const text=(await response.text()).trim().replace(/^```(?:json)?\s*/i,"").replace(/```\s*$/i,"").trim();
  return JSON.parse(text);
}
async function removeEpisodesForImport(incoming){
  const matches=episodes.filter((item)=>isLikelyBrokenEpisodeImport(item,incoming));
  episodes=episodes.filter((item)=>!matches.some((match)=>match.id===item.id));
  return matches.length;
}
function getBlock(id=activeBlockId){return allBlocks().find((block)=>block.id===id)||allBlocks()[0]||null}
function dayBlocks(day=activeDay){return allBlocks().filter((block)=>Number(block.dia)===Number(day))}
function isDone(block){return block.estado==="Terminado"}
function episodeShots(episode=activeEpisode()){return episode?.tomasEpisodio||[]}
function dayShotList(dayNumber,episode=activeEpisode()){return episode?.dias?.find((day)=>Number(day.dia)===Number(dayNumber))?.tomasDia||[]}
function findShotById(id,episode=activeEpisode()){
  return [...episodeShots(episode),...(episode?.dias||[]).flatMap((day)=>day.tomasDia||[])].find((shot)=>shot.id===id)||null;
}
function blockReferencedShots(block){return (block.referenciasTomas||[]).map((id)=>findShotById(id)).filter(Boolean)}
function blockSpecificShots(block){return block.tomasBloque||[]}
function blockAllNeededShots(block){return [...blockReferencedShots(block),...blockSpecificShots(block)]}
function uniquePendingShots(episode=activeEpisode()){
  const map=new Map();
  [...episodeShots(episode),...(episode?.dias||[]).flatMap((day)=>day.tomasDia||[]),...allBlocks(episode).flatMap((block)=>blockSpecificShots(block))].forEach((shot)=>{
    if(!shotDone(shot)&&!map.has(shot.id))map.set(shot.id,shot);
  });
  return [...map.values()];
}
function blockShotProgress(block){const shots=blockAllNeededShots(block);const total=shots.length||0;const done=shots.filter(shotDone).length;return total?Math.round((done/total)*100):(isDone(block)?100:0)}
function percent(done,total){return total?Math.round((done/total)*100):0}
function serializeEpisode(episode){
  return {id:episode.remote?episode.id:undefined,user_id:user.id,title:episode.titulo,days:episode.dias.length,hook:"",notes:JSON.stringify({episodio:episode.episodio,tomasEpisodio:episode.tomasEpisodio}),emotions:episode.dias,day_status:episode.dias.map((day)=>day.bloques.every(isDone)),updated_at:new Date().toISOString()};
}
async function getAccessToken(){
  if(!client)return "";
  const {data}=await client.auth.getSession();
  return data?.session?.access_token||"";
}
async function directByApi(path,options={}){
  const token=await getAccessToken();
  if(!token)throw new Error("No hay sesion activa.");
  const response=await fetch(path,{
    ...options,
    headers:{
      "Content-Type":"application/json",
      Authorization:`Bearer ${token}`,
      ...(options.headers||{})
    }
  });
  const text=await response.text();
  let body=null;
  try{body=text?JSON.parse(text):null}catch(_error){body={detail:text}}
  if(!response.ok){
    const detail=typeof body?.detail==="string"?body.detail:body?.detail?JSON.stringify(body.detail):"";
    throw new Error([body?.error,detail].filter(Boolean).join(" - ")||`Error ${response.status}`);
  }
  return body;
}
function episodeFingerprint(episode){
  return JSON.stringify((episode?.dias||[]).map((day)=>({
    dia:day.dia,
    bloques:(day.bloques||[]).map((block)=>({
      id:block.id,
      orden:block.orden,
      escena:block.escena||"",
      dialogo:block.dialogo||"",
      musica:block.musica||"",
      separadorFinal:block.separadorFinal||"",
      preguntaAbierta:block.preguntaAbierta||"",
      resultadoEsperado:block.resultadoEsperado||"",
      notasPersonales:block.notasPersonales||"",
      tomas:(block.tomasBloque||[]).map((shot)=>shot.nombre||"")
    }))
  })));
}
async function verifySavedEpisode(expected){
  if(!client||!user||!expected?.id)return true;
  const {data,error}=await client.from("direct_by_episodes").select("*").eq("id",expected.id).eq("user_id",user.id).single();
  if(error||!data)return false;
  return episodeFingerprint(normalizeRemote(data))===episodeFingerprint(expected);
}
function normalizeRemote(row){
  let notes={};
  try{notes=JSON.parse(row.notes||"{}")}catch(_error){}
  return normalizeEpisode({id:row.id,episodio:notes.episodio||1,titulo:row.title||"Sin titulo",tomasEpisodio:notes.tomasEpisodio||[],dias:Array.isArray(row.emotions)?row.emotions:[],remote:true,created_at:row.created_at,updated_at:row.updated_at});
}
function isCorruptEpisode(episode){
  const blocks=allBlocks(episode).length;
  const days=(episode?.dias||[]).length;
  return blocks===0||days===0||blocks>35||days>4;
}
function corruptReason(episode){
  const blocks=allBlocks(episode).length;
  const days=(episode?.dias||[]).length;
  if(blocks===0)return "esta vacio, tiene 0 bloques";
  if(days===0)return "no tiene dias";
  if(blocks>35)return `tiene ${blocks} bloques`;
  if(days>4)return `tiene ${days} dias`;
  return "tiene una estructura invalida";
}
function filterCleanEpisodes(list){
  return (list||[]).filter((episode)=>!isCorruptEpisode(episode));
}
function cleanEpisodeList(source=""){
  const before=episodes.length;
  episodes=filterCleanEpisodes(episodes);
  const removed=before-episodes.length;
  if(!episodes.length)episodes=[freshEpisode()];
  if(!activeId||!episodes.some((episode)=>episode.id===activeId))activeId=episodes[0].id;
  if(!activeBlockId||!allBlocks().some((block)=>block.id===activeBlockId))activeBlockId=allBlocks()[0]?.id||"";
  if(removed){
    persistLocal();
    setStatus(`Limpie ${removed} episodio${removed===1?"":"s"} vacio${removed===1?"":"s"} o mezclado${removed===1?"":"s"}${source?` de ${source}`:""}.`);
  }
  return removed;
}
function persistLocal(){localStorage.setItem(STORAGE_KEY,JSON.stringify({episodes,activeId,activeDay,activeFilter,activeBlockId}))}
function loadLocalStateMeta(){
  try{
    const parsed=JSON.parse(localStorage.getItem(STORAGE_KEY)||"{}");
    return {
      activeId:parsed.activeId||"",
      activeDay:Number(parsed.activeDay||1),
      activeFilter:parsed.activeFilter||"Todos",
      activeBlockId:parsed.activeBlockId||""
    };
  }catch(_error){
    return {activeId:"",activeDay:1,activeFilter:"Todos",activeBlockId:""};
  }
}
function collect(){
  const episode=activeEpisode();
  if(!episode)return;
  episode.titulo=$("titleInput").value.trim()||"Sin titulo";
  episode.episodio=Number($("episodeNumberInput").value)||1;
  const nextDays=Math.max(1,Math.min(10,Number($("daysInput").value)||3));
  while(episode.dias.length<nextDays)episode.dias.push(defaultDay(episode.dias.length+1));
  episode.dias=episode.dias.slice(0,nextDays);
  episode.dias.forEach((day)=>day.bloques.forEach((block)=>block.dia=day.dia));
  episode.updated_at=new Date().toISOString();
}
function collectVisibleBlockFields(){
  document.querySelectorAll(".block-card").forEach((card)=>{
    const block=getBlock(card.dataset.blockId);
    if(!block)return;
    card.querySelectorAll("[data-field]").forEach((input)=>updateBlockField(block,input.dataset.field,input.value));
    card.querySelectorAll("[data-shot-text]").forEach((input)=>{
      const index=Number(input.closest("[data-shot-index]").dataset.shotIndex);
      const shot=blockSpecificShots(block)[index];
      if(shot)shot.nombre=input.value;
    });
    card.querySelectorAll("[data-resource-name]").forEach((input)=>{
      const shot=findShotById(input.closest("[data-resource-id]")?.dataset.resourceId);
      if(shot)shot.nombre=input.value;
    });
  });
}
function remember(statusText="Guardado en memoria local."){
  collectVisibleBlockFields();
  collect();
  persistLocal();
  if(statusText)setStatus(statusText);
  scheduleAutoSave();
}
function scheduleAutoSave(){
  clearTimeout(autoSaveTimer);
  if(!client||!user)return;
  autoSaveTimer=setTimeout(()=>saveActive({silent:true}),900);
}
function loadLocal(){
  try{
    const raw=localStorage.getItem(STORAGE_KEY);
    if(!raw)return false;
    const parsed=JSON.parse(raw);
    episodes=Array.isArray(parsed.episodes)?parsed.episodes.map(normalizeEpisode):[];
    activeId=parsed.activeId||episodes[0]?.id||"";
    activeDay=Number(parsed.activeDay||1);
    activeFilter=parsed.activeFilter||"Todos";
    activeBlockId=parsed.activeBlockId||allBlocks(episodes[0]||{})[0]?.id||"";
    cleanEpisodeList("local");
    return episodes.length>0;
  }catch(_error){return false}
}
async function init(){
  if(!client){
    $("authBox").textContent="No cargo Supabase. Se guarda borrador local.";
    if(!loadLocal())episodes=[freshEpisode()];
    activeId=activeId||episodes[0].id;
    activeBlockId=activeBlockId||allBlocks()[0]?.id||"";
    render();
    return;
  }
  const {data}=await client.auth.getUser();
  user=data?.user||null;
  if(!user){
    $("authBox").textContent="Inicia sesion en User Panel para guardar en tu base personal.";
    if(!loadLocal())episodes=[freshEpisode()];
    activeId=activeId||episodes[0].id;
    activeBlockId=activeBlockId||allBlocks()[0]?.id||"";
    render();
    return;
  }
  $("authBox").textContent=`Cuenta conectada: ${user.email}`;
  await loadEpisodes();
}
async function loadEpisodes(){
  const remembered=loadLocalStateMeta();
  try{
    const data=await directByApi("./api/episode-template?directBy=1");
    episodes=filterCleanEpisodes((data.episodes||[]).map(normalizeRemote));
    if(!episodes.length){
      const episode=normalizeEpisode(await fetchBundledEpisode1());
      episode.remote=false;
      episodes=[episode];
      setStatus("No habia episodios validos guardados. Cargue episodio 1 limpio.");
    }
  }catch(error){
    $("authBox").textContent=`No pude cargar Supabase: ${error.message}. Se usa local.`;
    if(!loadLocal())episodes=[freshEpisode()];
  }
  activeId=episodes.some((episode)=>episode.id===remembered.activeId)?remembered.activeId:episodes[0].id;
  activeDay=remembered.activeDay||activeEpisode()?.dias?.[0]?.dia||1;
  activeFilter=remembered.activeFilter||activeFilter;
  activeBlockId=allBlocks().some((block)=>block.id===remembered.activeBlockId)?remembered.activeBlockId:allBlocks()[0]?.id||"";
  render();
}
async function saveActive(options={}){
  collectVisibleBlockFields();
  collect();
  const episode=activeEpisode();
  if(!episode)return false;
  if(isCorruptEpisode(episode)){
    setStatus(`No guardo este episodio: ${corruptReason(episode)}. Cargalo de nuevo con el boton del episodio.`);
    return false;
  }
  persistLocal();
  if(!options.silent)setStatus("Guardando...");
  if(autoSaveInFlight){
    autoSaveQueued=true;
    if(!options.silent)setStatus("Guardando cambios pendientes...");
    return false;
  }
  if(!client||!user){if(!options.silent)setStatus("Guardado local. Login requerido para Supabase.");return true}
  autoSaveInFlight=true;
  let data;
  let error=null;
  try{
    data=await directByApi("./api/episode-template?directBy=1",{method:"POST",body:JSON.stringify({episode,replaceEpisode:Boolean(options.replaceEpisode)})});
  }catch(apiError){
    error=apiError;
  }
  autoSaveInFlight=false;
  if(error){setStatus(`No pude guardar: ${error.message}`);return false}
  const savedRow=data?.episode||null;
  const savedId=savedRow?.id||episode.id;
  episode.id=savedId;
  episode.remote=true;
  episode.updated_at=savedRow?.updated_at||episode.updated_at;
  activeId=savedId;
  episodes=episodes.map((item)=>item===episode||item.id===episode.id?episode:item);
  persistLocal();
  if(autoSaveQueued){
    autoSaveQueued=false;
    return saveActive({silent:true});
  }
  if(!options.silent)render();
  setStatus(options.silent?"Autoguardado en Supabase.":`Guardado en Supabase.${data?.replaced?` Reemplace ${data.replaced} episodio${data.replaced===1?"":"s"} anterior${data.replaced===1?"":"es"}.`:""}`);
  return true;
}
async function deleteActive(){
  const episode=activeEpisode();
  if(!episode||!confirm(`Borrar "${episode.titulo}"?`))return;
  if(client&&user&&episode.remote)await client.from("direct_by_episodes").delete().eq("id",episode.id).eq("user_id",user.id);
  episodes=episodes.filter((item)=>item.id!==episode.id);
  if(!episodes.length)episodes=[freshEpisode()];
  activeId=episodes[0].id;
  activeBlockId=allBlocks()[0]?.id||"";
  persistLocal();
  render();
  setStatus("Episodio borrado.");
}
function render(){
  const episode=activeEpisode();
  if(!episode)return;
  $("episodeList").innerHTML=episodes.map((item)=>`<button class="episode-tab ${item.id===episode.id?"active":""}" data-open="${item.id}" type="button"><strong>${escapeHtml(item.titulo)}</strong><span>Dias ${escapeHtml(episodeDayLabel(item))} � ${allBlocks(item).filter(isDone).length}/${allBlocks(item).length} bloques</span></button>`).join("");
  document.querySelectorAll("[data-open]").forEach((button)=>button.onclick=()=>{remember("");activeId=button.dataset.open;activeDay=activeEpisode()?.dias?.[0]?.dia||1;activeBlockId=allBlocks(activeEpisode())[0]?.id||"";persistLocal();render()});
  $("titleInput").value=episode.titulo||"";
  $("episodeNumberInput").value=episode.episodio||1;
  $("daysInput").value=episode.dias.length||3;
  renderFilters();
  renderBlocks();
  renderDays();
  updateStats();
  renderRecording();
}
function renderFilters(){
  $("filters").innerHTML=FILTERS.map((filter)=>`<button class="btn small filter-btn ${activeFilter===filter?"active":""}" data-filter="${filter}" type="button">${filter}</button>`).join("");
  document.querySelectorAll("[data-filter]").forEach((button)=>button.onclick=()=>{activeFilter=button.dataset.filter;persistLocal();renderBlocks()});
}
function filterBlock(block){
  if(activeFilter==="Todos")return true;
  if(activeFilter==="Pendientes")return block.estado==="Pendiente";
  if(activeFilter==="Grabados")return block.estado==="Grabado";
  if(activeFilter==="Editando")return block.estado==="Editando";
  if(activeFilter==="Terminados")return block.estado==="Terminado";
  return true;
}
function renderBlocks(){
  const episode=activeEpisode();
  $("blocksBox").innerHTML=`${renderEpisodeResourceLibrary(episode)}${episode.dias.map((day)=>{
    const blocks=(day.bloques||[]).filter(filterBlock);
    const body=blocks.length?blocks.map(renderBlockCard).join(""):`<div class="day-card">No hay bloques con este filtro.</div>`;
    return `<section class="day-group"><div class="day-title">Dia ${day.dia}: ${escapeHtml(day.titulo)}<span>${dayProgress(day)}% terminado � ${day.bloques.length} bloques</span></div>${renderDayResourceLibrary(day)}${body}</section>`;
  }).join("")}`;
  bindResourceEvents();
  bindBlockEvents();
}
function renderEpisodeResourceLibrary(episode){
  return `<section class="shot-section resource-library" data-resource-scope="episode">
    <div class="shot-section-title">Recursos generales del episodio, una sola vez</div>
    <div class="shots">${episodeShots(episode).map(renderResourceLibraryRow).join("")}</div>
    <button class="btn small" data-add-resource type="button">Agregar recurso episodio</button>
  </section>`;
}
function renderDayResourceLibrary(day){
  return `<section class="shot-section resource-library" data-resource-scope="day" data-day="${day.dia}">
    <div class="shot-section-title">Recursos del dia ${day.dia}, una sola vez</div>
    <div class="shots">${(day.tomasDia||[]).map(renderResourceLibraryRow).join("")}</div>
    <button class="btn small" data-add-resource type="button">Agregar recurso dia ${day.dia}</button>
  </section>`;
}
function renderBlockCard(block){
  const done=isDone(block);
  return `<article class="block-card ${done?"done":""} ${block.estado==="Grabando"?"recording":""} ${block.estado==="Editando"?"editing":""}" data-block-id="${block.id}">
    <div class="block-top">
      <div class="block-num">${block.orden}</div>
      <div><div class="block-name">${escapeHtml(block.emocion)}</div><div class="block-sub">Dia ${block.dia} � ${escapeHtml(block.tiempo||"sin tiempo")} � bloque ${block.orden}</div></div>
      <select class="status-select" data-field="estado">${STATUSES.map((status)=>`<option ${block.estado===status?"selected":""}>${status}</option>`).join("")}</select>
    </div>
    <div class="grid-3">
      <div class="field"><label>Bloque</label><input data-field="orden" type="number" min="1" value="${block.orden}"></div>
      <div class="field"><label>Dia</label><input data-field="dia" type="number" min="1" max="10" value="${block.dia}"></div>
      <div class="field"><label>Emocion</label><input data-field="emocion" value="${escapeAttr(block.emocion)}"></div>
    </div>
    <div class="grid-2">
      <div class="field"><label>Horario estimado</label><input data-field="tiempo" value="${escapeAttr(block.tiempo)}"></div>
      <div class="field"><label>Donde entra la musica</label><textarea data-field="entradaMusica">${escapeHtml(block.entradaMusica||"")}</textarea></div>
    </div>
    <div class="grid-2 music-grid">
      <div class="field"><label>Estilo de musica para CapCut</label><textarea data-field="musica">${escapeHtml(block.musica||"")}</textarea></div>
      <div class="field"><label>Separador al final del bloque</label><textarea data-field="separadorFinal">${escapeHtml(block.separadorFinal||"")}</textarea></div>
    </div>
    <div class="grid-2">
      <div class="field"><label>Objetivo narrativo</label><textarea data-field="objetivoNarrativo">${escapeHtml(block.objetivoNarrativo)}</textarea></div>
      <div class="field"><label>Que debe sentir</label><textarea data-field="sensacionEspectador">${escapeHtml(block.sensacionEspectador)}</textarea></div>
    </div>
    <div class="field"><label>Escena que tengo que grabar</label><textarea data-field="escena">${escapeHtml(block.escena)}</textarea></div>
    <div class="field"><label>Dialogo o voz en off sugerida</label><textarea data-field="dialogo">${escapeHtml(block.dialogo)}</textarea></div>
    ${renderBlockResourceRefs(block)}
    <div class="field"><label>Tomas especificas pendientes de este bloque</label><div class="shots" data-shots>${blockSpecificShots(block).map((shot,index)=>renderShot(shot,index)).join("")}</div><button class="btn small" data-add-shot type="button">Agregar toma especifica</button></div>
    <div class="grid-2">
      <div class="field"><label>Pregunta abierta</label><textarea data-field="preguntaAbierta">${escapeHtml(block.preguntaAbierta)}</textarea></div>
      <div class="field"><label>Resultado esperado</label><textarea data-field="resultadoEsperado">${escapeHtml(block.resultadoEsperado)}</textarea></div>
    </div>
    <div class="field"><label>Notas personales</label><textarea data-field="notasPersonales">${escapeHtml(block.notasPersonales)}</textarea></div>
    <div><div class="block-sub">Progreso del bloque: ${blockShotProgress(block)}%</div><div class="progress-line"><div class="progress-fill" style="width:${blockShotProgress(block)}%"></div></div></div>
    <div class="block-actions"><button class="btn big primary" data-toggle-done type="button">${done?"Volver a pendiente":"Marcar como hecho"}</button><button class="btn small red" data-remove-block type="button">Borrar bloque</button></div>
  </article>`;
}
function renderShot(shot,index){
  return `<div class="shot-row" data-shot-index="${index}"><button class="shot-check ${shotDone(shot)?"done":""}" data-toggle-shot type="button">${shotDone(shot)?"?":""}</button><input class="shot-input" value="${escapeAttr(shot.nombre)}" data-shot-text><button class="btn small red shot-remove" data-remove-shot type="button">X</button></div>`;
}
function renderResourceLibraryRow(shot){
  return `<div class="resource-row" data-resource-id="${escapeAttr(shot.id)}"><div><input class="shot-input" value="${escapeAttr(shot.nombre)}" data-resource-name><small>${escapeHtml(shot.id)} � ${escapeHtml(shot.nivel)}</small></div><button class="btn small resource-state ${shotDone(shot)?"primary":"red"}" data-toggle-resource-state type="button">${shotDone(shot)?"grabado":"pendiente"}</button></div>`;
}
function renderBlockResourceRefs(block){
  const available=[...episodeShots(),...dayShotList(block.dia)];
  const used=blockReferencedShots(block);
  const options=available.filter((shot)=>!(block.referenciasTomas||[]).includes(shot.id));
  return `<div class="shot-section">
    <div class="shot-section-title">Recursos usados en este bloque</div>
    <div class="resource-ref-list">${used.length?used.map((shot)=>`<span class="resource-chip">${shotDone(shot)?"OK ":""}${escapeHtml(shot.nombre)}<button data-remove-resource-ref="${escapeAttr(shot.id)}" type="button">X</button></span>`).join(""):`<span class="block-sub">Sin recursos generales asignados.</span>`}</div>
    <div class="resource-picker">
      <select data-resource-select>${options.map((shot)=>`<option value="${escapeAttr(shot.id)}">${escapeHtml(shot.nombre)} (${escapeHtml(shot.nivel)})</option>`).join("")}</select>
      <button class="btn small" data-add-resource-ref type="button" ${options.length?"":"disabled"}>Usar recurso</button>
    </div>
  </div>`;
}
function bindResourceEvents(){
  document.querySelectorAll(".resource-library").forEach((section)=>{
    const scope=section.dataset.resourceScope;
    const dayNumber=Number(section.dataset.day||0);
    section.querySelector("[data-add-resource]").onclick=()=>{
      if(scope==="episode"){
        activeEpisode().tomasEpisodio.push(makeShot("Nuevo recurso episodio","episodio"));
      }else{
        const day=activeEpisode().dias.find((item)=>item.dia===dayNumber);
        day?.tomasDia.push(makeShot(`Nuevo recurso dia ${dayNumber}`,"dia",`dia-${dayNumber}-${slugify("Nuevo recurso")}-${uid().slice(0,6)}`));
      }
      remember();
      render();
    };
    section.querySelectorAll("[data-toggle-resource-state]").forEach((button)=>button.onclick=()=>{
      const shot=findShotById(button.closest("[data-resource-id]").dataset.resourceId);
      if(shot)shot.estado=shotDone(shot)?"pendiente":"grabado";
      remember();
      render();
    });
    section.querySelectorAll("[data-resource-name]").forEach((input)=>input.oninput=()=>{
      const shot=findShotById(input.closest("[data-resource-id]").dataset.resourceId);
      if(shot)shot.nombre=input.value;
      remember();
      updateStats();
    });
  });
}
function bindBlockEvents(){
  document.querySelectorAll(".block-card").forEach((card)=>{
    const block=getBlock(card.dataset.blockId);
    card.addEventListener("click",(event)=>{
      if(event.target.closest("input,textarea,select,button"))return;
      activeBlockId=block.id;
      activeDay=block.dia;
      persistLocal();
      updateStats();
      renderRecording();
    });
    card.querySelectorAll("[data-field]").forEach((input)=>input.oninput=()=>{updateBlockField(block,input.dataset.field,input.value);remember();renderDays();updateStats()});
    card.querySelector(".status-select").onchange=(event)=>{block.estado=event.target.value;if(block.estado==="Terminado")blockSpecificShots(block).forEach((shot)=>shot.estado="grabado");remember();render()};
    card.querySelector("[data-toggle-done]").onclick=()=>{block.estado=isDone(block)?"Pendiente":"Terminado";if(isDone(block))blockSpecificShots(block).forEach((shot)=>shot.estado="grabado");remember();render()};
    card.querySelector("[data-remove-block]").onclick=()=>{removeBlock(block.id)};
    card.querySelector("[data-add-shot]").onclick=()=>{block.tomasBloque.push(blankShot("Nueva toma especifica","bloque"));remember();render()};
    card.querySelector("[data-add-resource-ref]").onclick=()=>{const select=card.querySelector("[data-resource-select]");if(!select?.value)return;block.referenciasTomas=block.referenciasTomas||[];block.referenciasTomas=[...new Set([...block.referenciasTomas,select.value])];remember();render()};
    card.querySelectorAll("[data-remove-resource-ref]").forEach((button)=>button.onclick=()=>{block.referenciasTomas=(block.referenciasTomas||[]).filter((id)=>id!==button.dataset.removeResourceRef);remember();render()});
    card.querySelectorAll("[data-toggle-shot]").forEach((button)=>button.onclick=()=>{const shot=blockSpecificShots(block)[Number(button.closest("[data-shot-index]").dataset.shotIndex)];shot.estado=shotDone(shot)?"pendiente":"grabado";remember();render()});
    card.querySelectorAll("[data-shot-text]").forEach((input)=>input.oninput=()=>{const index=Number(input.closest("[data-shot-index]").dataset.shotIndex);blockSpecificShots(block)[index].nombre=input.value;remember();updateStats()});
    card.querySelectorAll("[data-remove-shot]").forEach((button)=>button.onclick=()=>{block.tomasBloque.splice(Number(button.closest("[data-shot-index]").dataset.shotIndex),1);remember();render()});
  });
}
function updateBlockField(block,field,value){
  if(field==="orden")block.orden=Number(value)||1;
  else if(field==="dia"){moveBlockToDay(block,Number(value)||1)}
  else block[field]=value;
}
function moveBlockToDay(block,nextDay){
  const episode=activeEpisode();
  nextDay=Math.max(1,Math.min(episode.dias.length,nextDay));
  if(block.dia===nextDay)return;
  episode.dias.forEach((day)=>day.bloques=day.bloques.filter((item)=>item.id!==block.id));
  block.dia=nextDay;
  episode.dias[nextDay-1].bloques.push(block);
}
function removeBlock(blockId){
  const episode=activeEpisode();
  episode.dias.forEach((day)=>day.bloques=day.bloques.filter((block)=>block.id!==blockId));
  activeBlockId=allBlocks()[0]?.id||"";
  remember("Bloque borrado.");
  render();
}
function renderDays(){
  const episode=activeEpisode();
  $("dayGrid").innerHTML=episode.dias.map((day)=>{
    const ids=new Map();
    [...(day.tomasDia||[]),...day.bloques.flatMap((block)=>[...blockSpecificShots(block),...blockReferencedShots(block).filter((shot)=>shot.nivel==="episodio")])].forEach((shot)=>{if(!shotDone(shot))ids.set(shot.id,shot)});
    return `<div class="day-card ${day.bloques.every(isDone)?"done":""}"><strong>Dia ${day.dia}: ${escapeHtml(day.titulo)}</strong><span>${dayProgress(day)}% � ${day.bloques.filter(isDone).length}/${day.bloques.length} bloques � ${ids.size} tomas unicas faltantes</span><ul>${day.bloques.slice(0,5).map((block)=>`<li>${escapeHtml(block.tiempo)} � ${escapeHtml(block.emocion)}</li>`).join("")}</ul></div>`;
  }).join("");
}
function dayProgress(day){return percent(day.bloques.filter(isDone).length,day.bloques.length)}
function updateStats(){
  const blocks=allBlocks();
  const current=getBlock();
  const day=activeEpisode()?.dias?.find((item)=>item.dia===Number(current?.dia||activeDay))||activeEpisode()?.dias?.[0];
  $("blockProgress").textContent=`${current?blockShotProgress(current):0}%`;
  $("dayProgress").textContent=`${day?dayProgress(day):0}%`;
  $("episodeProgress").textContent=`${percent(blocks.filter(isDone).length,blocks.length)}%`;
  $("doneBlocks").textContent=`${blocks.filter(isDone).length}/${blocks.length}`;
  $("missingShots").textContent=String(uniquePendingShots().length);
}
function renderRecording(){
  const block=getBlock();
  if(!block)return;
  const day=activeEpisode().dias.find((item)=>item.dia===block.dia);
  $("recordMeta").textContent=`Dia ${block.dia} � Bloque ${block.orden} � ${block.estado} � progreso dia ${dayProgress(day)}%`;
  $("recordScene").textContent=block.escena||"Sin escena cargada.";
  $("recordDialog").textContent=block.dialogo||"Sin dialogo cargado.";
  $("recordMusic").innerHTML=`<strong>Musica CapCut</strong><span>${escapeHtml(block.entradaMusica||"")}</span><span>${escapeHtml(block.musica||"")}</span><span>${escapeHtml(block.separadorFinal||"")}</span>`;
  $("recordProgressFill").style.width=`${dayProgress(day)}%`;
  const shots=blockAllNeededShots(block);
  $("recordShots").innerHTML=shots.map((shot,index)=>`<button class="record-shot ${shotDone(shot)?"done":""}" data-record-shot="${index}" type="button">${shotDone(shot)?"? ":""}${escapeHtml(shot.nombre)}</button>`).join("");
  document.querySelectorAll("[data-record-shot]").forEach((button)=>button.onclick=()=>{const shot=shots[Number(button.dataset.recordShot)];shot.estado=shotDone(shot)?"pendiente":"grabado";remember();renderRecording();updateStats()});
  $("recordDoneBtn").textContent=isDone(block)?"Volver a pendiente":"Marcar como hecho";
}
function setRecordingMode(active){document.body.classList.toggle("recording-mode",active);if(active)renderRecording()}
function adjacentBlock(step){const blocks=allBlocks();const index=Math.max(0,blocks.findIndex((block)=>block.id===activeBlockId));const next=blocks[Math.max(0,Math.min(blocks.length-1,index+step))];if(next){activeBlockId=next.id;activeDay=next.dia;persistLocal();renderRecording();updateStats()}}
function exportEpisode(){
  collect();
  const episode=activeEpisode();
  const payload={episodio:episode.episodio,titulo:episode.titulo,tomasEpisodio:episode.tomasEpisodio,dias:episode.dias,progreso:{episodio:$("episodeProgress").textContent,bloquesTerminados:$("doneBlocks").textContent,tomasFaltantes:Number($("missingShots").textContent)}};
  const blob=new Blob([JSON.stringify(payload,null,2)],{type:"application/json"});
  const link=document.createElement("a");
  link.href=URL.createObjectURL(blob);
  link.download=`direct-by-episodio-${episode.episodio}.json`;
  link.click();
  setTimeout(()=>URL.revokeObjectURL(link.href),1000);
}
async function importParsedEpisode(parsed){
  const unwrapped=unwrapImportedEpisode(parsed);
  const source=Array.isArray(unwrapped?.bloques)?flatBlocksToEpisodeSource(unwrapped):unwrapped;
  const episode=normalizeEpisode(source);
  if(Array.isArray(unwrapped?.bloques)&&allBlocks(episode).length!==unwrapped.bloques.length){
    throw new Error(`El archivo tiene ${unwrapped.bloques.length} bloques, pero Direct By preparo ${allBlocks(episode).length}.`);
  }
  episode.remote=false;
  const removed=await removeEpisodesForImport(episode);
  episodes.unshift(episode);
  activeId=episode.id;
  activeDay=episode.dias[0]?.dia||1;
  activeBlockId=allBlocks(episode)[0]?.id||"";
  persistLocal();
  render();
  setStatus(`Guion importado: episodio ${episode.episodio}, dias ${episodeDayLabel(episode)}, ${allBlocks(episode).length} bloques.${removed?` Reemplace ${removed} version vieja.`:""}`);
  if(client&&user){
    const saved=await saveActive({silent:true,replaceEpisode:true});
    setStatus(saved
      ? `Guion importado y guardado: episodio ${episode.episodio}, dias ${episodeDayLabel(episode)}, ${allBlocks(episode).length} bloques.${removed?` Reemplace ${removed} version vieja.`:""}`
      : `Guion importado localmente, pero no se pudo guardar en Supabase. Revisa el error arriba.`
    );
  }
  return episode;
}
function importEpisodeFile(file){
  const reader=new FileReader();
  reader.onload=async()=>{try{
    const text=String(reader.result||"").trim().replace(/^```(?:json)?\s*/i,"").replace(/```\s*$/i,"").trim();
    const parsed=JSON.parse(text);
    await importParsedEpisode(parsed);
  }catch(error){alert(`No pude importar el JSON: ${error.message}`)}};
  reader.readAsText(file);
}
async function loadBundledEpisode2(){
  return loadBundledEpisodeNumber(2);
}
async function loadBundledEpisode1(){
  return loadBundledEpisodeNumber(1);
}
async function loadBundledEpisodeNumber(number){
  try{
    setStatus(`Cargando episodio ${number}...`);
    const parsed=number===1?await fetchBundledEpisode1():number===2?await fetchBundledEpisode2():await fetchBundledEpisodeNumber(number);
    await importParsedEpisode(parsed);
  }catch(error){
    alert(`No pude cargar episodio ${number}: ${error.message}`);
  }
}
function cleanupDuplicateShots(){
  const episode=activeEpisode();
  if(!episode)return;
  const groups=new Map();
  allBlocks(episode).forEach((block)=>{
    blockSpecificShots(block).forEach((shot)=>{
      const key=slugify(shot.nombre);
      if(!groups.has(key))groups.set(key,[]);
      groups.get(key).push({block,shot});
    });
  });
  let unified=0;
  groups.forEach((items,key)=>{
    if(items.length<2)return;
    let resource=episode.tomasEpisodio.find((shot)=>slugify(shot.nombre)===key);
    if(!resource){
      resource=makeShot(items[0].shot.nombre,"episodio",key);
      resource.estado=items.some((item)=>shotDone(item.shot))?"grabado":"pendiente";
      episode.tomasEpisodio.push(resource);
    }
    items.forEach(({block,shot})=>{
      block.referenciasTomas=Array.from(new Set([...(block.referenciasTomas||[]),resource.id]));
      block.tomasBloque=blockSpecificShots(block).filter((item)=>item.id!==shot.id);
      unified+=1;
    });
  });
  episode.tomasEpisodio=dedupeShots(episode.tomasEpisodio);
  episode.dias.forEach((day)=>day.tomasDia=dedupeShots(day.tomasDia||[]));
  remember(unified?`Unifique ${unified} tomas duplicadas como recursos reutilizables.`:"No encontre tomas duplicadas por nombre.");
  render();
}
function dedupeShots(shots){
  const map=new Map();
  shots.forEach((shot)=>{
    const key=slugify(shot.nombre);
    if(!map.has(key)){map.set(key,shot);return}
    const existing=map.get(key);
    if(shotDone(shot))existing.estado="grabado";
  });
  return [...map.values()];
}
function escapeHtml(value){return String(value||"").replace(/[&<>"']/g,(char)=>({"&":"&amp;","<":"&lt;",">":"&gt;","\"":"&quot;","'":"&#039;"}[char]))}
function escapeAttr(value){return escapeHtml(value).replace(/`/g,"&#096;")}
$("newEpisodeBtn").onclick=()=>{remember("");const episode=freshEpisode();episodes.unshift(episode);activeId=episode.id;activeBlockId=allBlocks(episode)[0]?.id||"";persistLocal();render();setStatus("Nuevo episodio creado.")};
$("saveBtn").onclick=()=>saveActive();
$("deleteBtn").onclick=deleteActive;
$("duplicateBtn").onclick=()=>{remember("");const source=activeEpisode();const copy=normalizeEpisode({...structuredClone(source),id:uid(),titulo:`${source.titulo} copia`,remote:false,created_at:new Date().toISOString(),updated_at:new Date().toISOString()});episodes.unshift(copy);activeId=copy.id;activeBlockId=allBlocks(copy)[0]?.id||"";persistLocal();render();setStatus("Episodio duplicado.")};
$("addBlockBtn").onclick=()=>{const episode=activeEpisode();const day=episode.dias[Math.max(0,activeDay-1)]||episode.dias[0];const block=defaultBlock(day.dia,day.bloques.length+1);day.bloques.push(block);activeBlockId=block.id;remember("Bloque agregado.");render()};
$("resetTemplateBtn").onclick=()=>{if(!confirm("Reemplazar este episodio por el formato base de 3 dias?"))return;const episode=activeEpisode();episode.dias=[defaultDay(1),defaultDay(2),defaultDay(3)];activeBlockId=allBlocks()[0]?.id||"";remember("Formato de 3 dias restaurado.");render()};
$("recordModeBtn").onclick=()=>setRecordingMode(true);
$("exitRecordBtn").onclick=()=>setRecordingMode(false);
$("prevBlockBtn").onclick=()=>adjacentBlock(-1);
$("nextBlockBtn").onclick=()=>adjacentBlock(1);
$("recordDoneBtn").onclick=()=>{const block=getBlock();block.estado=isDone(block)?"Pendiente":"Terminado";if(isDone(block))blockSpecificShots(block).forEach((shot)=>shot.estado="grabado");remember();renderRecording();render();setRecordingMode(true)};
$("importBtn").onclick=()=>$("jsonInput").click();
$("jsonInput").onchange=(event)=>{const file=event.target.files?.[0];if(file)importEpisodeFile(file);event.target.value=""};
$("loadEpisode1Btn").onclick=loadBundledEpisode1;
$("loadEpisode2Btn").onclick=loadBundledEpisode2;
$("loadEpisode3Btn").onclick=()=>loadBundledEpisodeNumber(3);
$("loadEpisode4Btn").onclick=()=>loadBundledEpisodeNumber(4);
$("loadEpisode5Btn").onclick=()=>loadBundledEpisodeNumber(5);
$("loadEpisode6Btn").onclick=()=>loadBundledEpisodeNumber(6);
$("loadEpisode7Btn").onclick=()=>loadBundledEpisodeNumber(7);
$("exportBtn").onclick=exportEpisode;
$("cleanupShotsBtn").onclick=cleanupDuplicateShots;
$("titleInput").oninput=()=>remember();
$("episodeNumberInput").oninput=()=>remember();
$("daysInput").oninput=()=>{collect();render();remember()};
window.addEventListener("beforeunload",()=>{collectVisibleBlockFields();collect();persistLocal()});
init();
