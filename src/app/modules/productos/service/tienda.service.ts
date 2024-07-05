import { Injectable } from '@angular/core';
import { Cristales } from 'src/app/models/cristales';
import { Libros } from 'src/app/models/libros';
import { Elementos } from 'src/app/models/elementos';

@Injectable({
  providedIn: 'root'
})
export class TiendaService {
  constructor() { }
  //! inicialización de mis interfaces
  cristal: Cristales = {
    uid: '',
    nombre:'',
    beneficios:'',
    limpieza:'',
    precio:0,
    destacado:false,
    imagenUrl:'',
    favorito:false,
  }

  elemento: Elementos = {
    uid:'',
    nombre:'',
    cantidadPorPaquete:0,
    sabor:'',
    precio:0,
    destacado:false,
    imagenUrl:'',
    favorito:false,
  }

  libro: Libros = {
    uid:'',
    titulo:'',
    descripcion:'',
    autor:'',
    precio:0,
    destacado:false,
    imagenUrl:'',
    favorito:false,
  }
  //! ------------------------------------------------------------------------------------------
  
  cristalesProd: any[] = [
    {
    uid: '',
    nombre:'Dije de ágata fucsia',
    beneficios:'La ágata favorece la calma y la armonía. Potencia la concentración, fomenta el amor y la sanación interna. Además, esta piedra te ayuda a eliminar la negatividad y la ira del corazón. Te anima a seguir adelante y a promover el amor propio y la valentía.',
    limpieza:'Recuerda purificar las piedras de ágata fucsia con agua. También puedes limpiarlas con salvia blanca o palo santo. Si prefieres, puedes cargarlas con la energía de la luz de la luna o del sol.',
    precio:250,
    destacado:true,
    imagenUrl:'',
    favorito:false,
    },
    {
      uid: '',
      nombre:'Dije de amatista',
      beneficios:'La amatista es especial para transmutar la energía en amor. Se considera que promueve la estabilidad emocional y es ideal para las sesiones de meditación. Te ayuda a tomar mejores decisiones y a conciliar el sueño si sufres de insomnio o pesadillas recurrentes.',
      limpieza:'Para limpiar una amatista, usa tierra, agua y sal, incienso, con el sol, con la luna e incluso con otra piedra energética. La mejor para tí dependerá de qué herramientas tienes a tu disposición así que prueba la que mejor se te acomode.',
      precio:250,
      destacado:false,
      imagenUrl:'',
      favorito:false,
    },
    {
      uid: '',
      nombre:'Dije de ámbar',
      beneficios:'Se dice que ayuda en diferentes procesos de sanación, transmuta la energía negativa y promueve la energía positiva lo que también ayuda a acelerar los procesos de curación. También te llena de vitalidad y potencia tu equilibrio emocional.',
      limpieza:'Para limpiar tu piedra ambarina, simplemente enciende una varita de incienso o sahumerio y pasa tu colgante de ámbar Detallesamente a través del humo pero no la mojes',
      precio:250,
      destacado:true,
      imagenUrl:'',
      favorito:false,
    },
    {
      uid: '',
      nombre:'',
      beneficios:'',
      limpieza:'',
      precio:0,
      destacado:true,
      imagenUrl:'',
      favorito:false,
    },
    {
      uid: '',
      nombre:'',
      beneficios:'',
      limpieza:'',
      precio:0,
      destacado:true,
      imagenUrl:'',
      favorito:false,
    },
    {
      uid: '',
      nombre:'',
      beneficios:'',
      limpieza:'',
      precio:0,
      destacado:true,
      imagenUrl:'',
      favorito:false,
    },
    {
      uid: '',
      nombre:'',
      beneficios:'',
      limpieza:'',
      precio:0,
      destacado:true,
      imagenUrl:'',
      favorito:false,
    },
    {
      uid: '',
      nombre:'',
      beneficios:'',
      limpieza:'',
      precio:0,
      destacado:true,
      imagenUrl:'',
      favorito:false,
    },
    {
      uid: '',
      nombre:'',
      beneficios:'',
      limpieza:'',
      precio:0,
      destacado:true,
      imagenUrl:'',
      favorito:false,
    },
    {
      uid: '',
      nombre:'',
      beneficios:'',
      limpieza:'',
      precio:0,
      destacado:true,
      imagenUrl:'',
      favorito:false,
    }
  ]

  //Arreglo con todos mis productos
  productos: any[] = [
    //inicio de lista de cristales

    {
      Nombre: "Dije de ámbar",
      Descripcion: "Se dice que ayuda en diferentes procesos de sanación, transmuta la energía negativa y promueve la energía positiva lo que también ayuda a acelerar los procesos de curación. También te llena de vitalidad y potencia tu equilibrio emocional.",
      Detalles: "Para limpiar tu piedra ambarina, simplemente enciende una varita de incienso o sahumerio y pasa tu colgante de ámbar Detallesamente a través del humo pero no la mojes",
      Precio: 350,
      Tipo: "cristal",
      Destacado: true,
      ImagenUrl: "../../assets/productos/cristales/ambar.jpg",
      Favorito: false,
      Cantidad: 1,
      Id: 3
    },
    {
      Nombre: "Dije de apatita azul",
      Descripcion: "La apatita azul propicia la motivación y ayuda a conservar la energía. Es apreciada por sus propiedades que combaten la negatividad y promueven la creatividad y la sabiduría. Se dice que ayuda a calmar la pena y la ira. En su color azul, la apatita estimula la comunicación y alivia las afecciones emocionales.",
      Detalles: "Puedes limpiarla haciendo uso de la sal marina. Pero si lo deseas puedes enterrar la piedra en agua con suficiente arroz; pasarla bajo una corriente de agua natural o dejarla durante unos minutos en el grifo de tu casa para que al momento de fluir las energías negativas se despeguen de la piedra; también puedes limpiarla con humo de incienso o enterrarla en una maceta o el jardín por dos noches consecutivas.",
      Precio: 350,
      Tipo: "cristal",
      Destacado: true,
      ImagenUrl: "../../assets/productos/cristales/apatitaAzul.jpg",
      Favorito: false,
      Cantidad: 1,
      Id: 4
    },
    {
      Nombre: "Dije de calcita azul",
      Descripcion: "La calcita azul es conocida por sus propiedades relajantes. Se dice que ayuda a eliminar las energías negativas y a evitar la ansiedad. Como los otros cristales de color azul, ayuda a mejorar tus procesos de comunicación.",
      Detalles: "Puedes  colocarla en el medio de un círculo de cuarzos de cristal, a los cuales se les pedirá que absorban y limpien todas estas energías. Otra forma será sumergirla en agua de mar por un rato y secarla con cuidado.",
      Precio: 300,
      Tipo: "cristal",
      Destacado: false,
      ImagenUrl: "../../assets/productos/cristales/calcitaAzul.jpg",
      Favorito: false,
      Cantidad: 1,
      Id: 5
    },
    {
      Nombre: "Dije de citrino",
      Descripcion: "El citrino es regenerador y limpiador. También promueve la generación de energía y estimula la creatividad. Es una piedra que atrae la abundancia y la prosperidad. Además, ayuda a mirar las diferentes situaciones con actitud positiva y optimista.",
      Detalles: "Con agua salada, después sumergirla por aproximadamente unos 10 minutos para que las energías viejas vayan quemándose y así abriendo paso a unas nuevas. Pasado el tiempo límite, la sacas y le retiras toda el agua con una nueva agua templada. Coloca el citrino en una zona que toque la luz del sol y la luz de la luna, logrando después de 24 horas que esté completamente cargado. ",
      Precio: 200,
      Tipo: "cristal",
      Destacado: false,
      ImagenUrl: "../../assets/productos/cristales/citrino.jpg",
      Favorito: false,
      Cantidad: 1,
      Id: 6
    },
    {
      Nombre: "Dije de cuarzo blanco",
      Descripcion: "Al cuarzo cristal o blanco se le atribuyen propiedades como la protección, pues absorbe y bloquea las energías negativas. Ayuda a mejorar la actitud, favorece la paz y la tranquilidad. Es ideal para meditar y conservar la concentración. También es utilizado en procesos de sanación. Además, es un buen conductor de energía.",
      Detalles: "Lavar con agua corriente y sal marina aproximadamente entre tres y cinco minutos la piedra, con el fin de limpiar todas las energías de la misma. O dejarla remojando durante el mismo tiempo en agua salada.Otra forma de purificar el cuarzo es utilizando sahumerios de mirra o ponerlo en contacto con un cristal de roca.",
      Precio: 200,
      Tipo: "cristal",
      Destacado: false,
      ImagenUrl: "../../assets/productos/cristales/cuarzoCristal.jpg",
      Favorito: false,
      Cantidad: 1,
      Id: 7
    },
    {
      Nombre: "Dije de fluorita",
      Descripcion: "La fluorita está relacionada con mantener la concentración y conciliar el sueño. Además, fomenta la paz interior y ayuda a la meditación. La fluorita también es útil para combatir la radiación de los diferentes dispositivos electrónicos.",
      Detalles: "Debes sumergirla en un recipiente que contenga una infusión fría de salvia y agua destilada, durante 30 minutos. También puede ser únicamente agua limpia y pura. No la limpies con agua y sal porque perdería su brillo. Tampoco uses productos químicos o de limpieza.",
      Precio: 350,
      Tipo: "cristal",
      Destacado: false,
      ImagenUrl: "../../assets/productos/cristales/fluorita.jpg",
      Favorito: false,
      Cantidad: 1,
      Id: 8
    },
    {
      Nombre: "Dije de rubí verde",
      Descripcion: "Los rubíes han sido la piedra preciosa de los regentes dominantes y de la nobleza. Ofrece vitalidad y brío al portador, permitiendo que viva su vida al máximo y que aproveche cada oportunidad positiva en su camino.",
      Detalles: "El rubí es una piedra preciosa durable por lo que puede resistir casi cualquier tipo de limpieza con agua, sol o humo, pero particularmente me gusta el tradicional método hindú de la India donde el rubí es especialmente venerado.",
      Precio: 350,
      Tipo: "cristal",
      Destacado: true,
      ImagenUrl: "../../assets/productos/cristales/rubiVerde.jpg",
      Favorito: false,
      Cantidad: 1,
      Id: 9
    },
    {
      Nombre: "Dije de turmalina negra",
      Descripcion: "La turmalina negra es una piedra protectora, excelente para repeler energías negativas. Aporta neutralidad en momentos de desesperación. Además, portar una piedra de turmalina es muy beneficioso para evitar daños que te puedes hacer a ti mismo.",
      Detalles: "Colócala durante toda una noche a la luz de la luna, de ser posible con agua marina. Otro método es colocarla en un envase de vidrio con agua y sal marina. Transcurrida la noche, se debe lavar con agua natural la piedra y dejar secar  en un lugar soleado.",
      Precio: 200,
      Tipo: "cristal",
      Destacado: false,
      ImagenUrl: "../../assets/productos/cristales/turmalinaNegra.jpg",
      Favorito: false,
      Cantidad: 1,
      Id: 10
    },
    //inicio de lista de elementos
    {
      Nombre: "Terapia de runas",
      Descripcion: "Una guía para aprender sobre el poder de la magia nórdica y su oráculo",
      Detalles: "Eleonora Merighi",
      Precio: 12600,
      Tipo: "libros",
      Destacado: true,
      ImagenUrl: "../../assets/productos/elementos/terapiaRunas.jpg",
      Favorito: false,
      Cantidad: 1,
      Id: 11
    },
    {
      Nombre: "60 Tiradas fáciles de tarot",
      Descripcion: "Una guía sensilla, práctica y divertida con 60 tiradas a tu alcance",
      Detalles: "Ramón Plana y Olga Roig",
      Precio: 13300,
      Tipo: "libros",
      Destacado: false,
      ImagenUrl: "../../assets/productos/elementos/tarotTiradas.jpg",
      Favorito: false,
      Cantidad: 1,
      Id: 12
    },
    {
      Nombre: "El gran libro del tarot",
      Descripcion: "Una obra excepcional, distinta a todo lo publicado",
      Detalles: "Emilio Salas",
      Precio: 14100,
      Tipo: "libros",
      Destacado: false,
      ImagenUrl: "../../assets/productos/elementos/granLibroTarot.jpg",
      Favorito: false,
      Cantidad: 1,
      Id: 13
    },
    {
      Nombre: "El tarot como llave",
      Descripcion: "Una invitación a conocer el Tarot y a dejarse seducir por su magia.",
      Detalles: "Dalia Walker",
      Precio: 9100,
      Tipo: "libros",
      Destacado: true,
      ImagenUrl: "../../assets/productos/elementos/tarotComoLlave.jpg",
      Favorito: false,
      Cantidad: 1,
      Id: 14
    },
    {
      Nombre: "Reiki: mensajes del universo",
      Descripcion: "Incluye libros y cartas",
      Detalles: "Jhonny De'Carli",
      Precio: 13900,
      Tipo: "libros",
      Destacado: true,
      ImagenUrl: "../../assets/productos/elementos/reiki.jpg",
      Favorito: false,
      Cantidad: 1,
      Id: 15
    },
    {
      Nombre: "El oraculo de la transformación",
      Descripcion: "44 cartas y guía explicativa",
      Detalles: "Doreen Virtue",
      Precio: 10900,
      Tipo: "libros",
      Destacado: false,
      ImagenUrl: "../../assets/productos/elementos/oraculoTransformacion.jpg",
      Favorito: false,
      Cantidad: 1,
      Id: 16
    },
    {
      Nombre: "El manual del tarot egipcio",
      Descripcion: "La cábala de predicción",
      Detalles: "Iglesias Janeiro",
      Precio: 13700,
      Tipo: "libros",
      Destacado: false,
      ImagenUrl: "../../assets/productos/elementos/tarotEgipcio.jpg",
      Favorito: false,
      Cantidad: 1,
      Id: 17
    },
    {
      Nombre: "El oráculo astrológico",
      Descripcion: "Contiene libros y cartas",
      Detalles: "Ana Lia Ríos",
      Precio: 10650,
      Tipo: "libros",
      Destacado: false,
      ImagenUrl: "../../assets/productos/elementos/oraculoAstrologo.jpg",
      Favorito: false,
      Cantidad: 1,
      Id: 18
    },
    {
      Nombre: "El tarot del amor",
      Descripcion: "Incluye cartas",
      Detalles: "Laura Podio",
      Precio: 11500,
      Tipo: "libros",
      Destacado: true,
      ImagenUrl: "../../assets/productos/elementos/tarotAmor.jpg",
      Favorito: false,
      Cantidad: 1,
      Id: 19
    },
    {
      Nombre: "La sanación con símbolos",
      Descripcion: "64 símbolos",
      Detalles: "Petra Neumayer",
      Precio: 10200,
      Tipo: "libros",
      Destacado: false,
      ImagenUrl: "../../assets/productos/elementos/sanacionSimbolos.jpg",
      Favorito: false,
      Cantidad: 1,
      Id: 20
    },
    //lista de sahumerios
    {
      Nombre: "Sahumerios magistrales Aromanza: relajación",
      Descripcion: "x8 varillas",
      Detalles: "Mirra consagrada",
      Precio: 1100,
      Tipo: "sahumerios",
      Destacado: true,
      ImagenUrl: "../../assets/productos/sahumerios/mirraConsagrada.jpg",
      Favorito: false,
      Cantidad: 1,
      Id: 21
    },
    {
      Nombre: "Sahumerios magistrales Aromanza: gratitud",
      Descripcion: "x8 varillas",
      Detalles: "Jazmín de la vida",
      Precio: 1100,
      Tipo: "sahumerios",
      Destacado: false,
      ImagenUrl: "../../assets/productos/sahumerios/jazminDeLaIndia.jpg",
      Favorito: false,
      Cantidad: 1,
      Id: 22
    },
    {
      Nombre: "Sahumerios magistrales Aromanza: armonía",
      Descripcion: "x8 varillas",
      Detalles: "Incienso consagrado",
      Precio: 1100,
      Tipo: "sahumerios",
      Destacado: true,
      ImagenUrl: "../../assets/productos/sahumerios/inciensoConsagrado.jpg",
      Favorito: false,
      Cantidad: 1,
      Id: 23
    },
    {
      Nombre: "Sahumerios tibetanos Aromanza: inspiración",
      Descripcion: "x8 varillas",
      Detalles: "Cristobal colón",
      Precio: 1200,
      Tipo: "sahumerios",
      Destacado: false,
      ImagenUrl: "../../assets/productos/sahumerios/cristobalColon.jpg",
      Favorito: false,
      Cantidad: 1,
      Id: 24
    },
    {
      Nombre: "Sahumerios tibetanos Aromanza: equilibrio ",
      Descripcion: "x8 varillas",
      Detalles: "Ébano marfil",
      Precio: 1200,
      Tipo: "sahumerios",
      Destacado: false,
      ImagenUrl: "../../assets/productos/sahumerios/ebanoMarfil.jpg",
      Favorito: false,
      Cantidad: 1,
      Id: 25
    },
    {
      Nombre: "Sahumerios tibetanos Aromanza: abundancia ",
      Descripcion: "x8 varillas",
      Detalles: "Vainillas encantadas",
      Precio: 1200,
      Tipo: "sahumerios",
      Destacado: false,
      ImagenUrl: "../../assets/productos/sahumerios/vainilla.jpg",
      Favorito: false,
      Cantidad: 1,
      Id: 26
    },
    {
      Nombre: "Inciensos Sagrada Madre con romero",
      Descripcion: "Palo santo",
      Detalles: "Romero",
      Precio: 980,
      Tipo: "sahumerios",
      Destacado: false,
      ImagenUrl: "../../assets/productos/sahumerios/paloRomero.jpg",
      Favorito: false,
      Cantidad: 1,
      Id: 27
    },
    {
      Nombre: "Inciensos Sagrada Madre con yagra",
      Descripcion: "Palo santo",
      Detalles: "Yagra",
      Precio: 980,
      Tipo: "sahumerios",
      Destacado: true,
      ImagenUrl: "../../assets/productos/sahumerios/paloYagra.jpg",
      Favorito: false,
      Cantidad: 1,
      Id: 28
    },
    {
      Nombre: "Inciensos Sagrada Madre con champa",
      Descripcion: "Palo santo",
      Detalles: "Champa",
      Precio: 980,
      Tipo: "sahumerios",
      Destacado: true,
      ImagenUrl: "../../assets/productos/sahumerios/paloChampa.jpg",
      Favorito: false,
      Cantidad: 1,
      Id: 29
    },
    {
      Nombre: "Pack de 25 sahumerios triple empaste",
      Descripcion: "Surtidos",
      Detalles: "",
      Precio: 980,
      Tipo: "sahumerios",
      Destacado: false,
      ImagenUrl: "../../assets/productos/sahumerios/sahumeriosComunes.png",
      Favorito: false,
      Cantidad: 1,
      Id: 30
    },
  ]
}
