import { Component, OnInit } from '@angular/core';
interface TablaZonasHorarias {
  [key: string]: string;
}
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit  {
  fechaHoraActual = new Date();
  diasSemana = ['Domingo', 'Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado'];
  nombreDia = this.diasSemana[this.fechaHoraActual.getDay()];
  dia = ("0" + this.fechaHoraActual.getDate()).slice(-2);
  meses = ['enero', 'febrero', 'marzo', 'abril', 'mayo', 'junio', 'julio', 'agosto', 'septiembre', 'octubre', 'noviembre', 'diciembre'];
  nombreMes = this.meses[this.fechaHoraActual.getMonth()];
  anio = this.fechaHoraActual.getFullYear();
  hora24 = ("0" + this.fechaHoraActual.getHours()).slice(-2);
  minutos = ("0" + this.fechaHoraActual.getMinutes()).slice(-2);
  segundos = ("0" + this.fechaHoraActual.getSeconds()).slice(-2);

  fechaHoraPersonalizada = `${this.nombreDia} ${this.dia} de ${this.nombreMes} del ${this.anio} hora: ${this.hora24}:${this.minutos}:${this.segundos}`;
  telefono!:'TEl:(+57) 324 576 4918';


  institutte = 'Institución de educación INTEBIEN';
  pais!: string ;
 constructor() {


  }
ngOnInit(): void {
}


obtenerPaisDeVisitante(): string {
  const zonaHoraria = Intl.DateTimeFormat().resolvedOptions().timeZone;
  const tablaZonasHorarias: TablaZonasHorarias = {
    "America/New_York": "Estados Unidos",
    "America/Los_Angeles": "Estados Unidos",
    "America/Chicago": "Estados Unidos",
    "America/Denver": "Estados Unidos",
    "Europe/London": "Reino Unido",
    "Europe/Paris": "Francia",
    "Europe/Berlin": "Alemania",
    "Europe/Rome": "Italia",
    "Europe/Madrid": "España",
    "Europe/Amsterdam": "Países Bajos",
    "Europe/Brussels": "Bélgica",
    "Europe/Zurich": "Suiza",
    "Europe/Vienna": "Austria",
    "Europe/Stockholm": "Suecia",
    "Europe/Oslo": "Noruega",
    "Europe/Helsinki": "Finlandia",
    "Europe/Moscow": "Rusia",
    "Asia/Tokyo": "Japón",
    "Asia/Shanghai": "China",
    "Asia/Singapore": "Singapur",
    "Asia/Dubai": "Emiratos Árabes Unidos",
    "Australia/Sydney": "Australia",
    "Pacific/Auckland": "Nueva Zelanda"
  };
  const pais = tablaZonasHorarias[zonaHoraria] || "desconocido";
  console.log(pais);
  return pais;
}
}





