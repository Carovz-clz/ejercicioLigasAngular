import { AfterViewInit, Component, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { NgbModal, NgbModalRef } from "@ng-bootstrap/ng-bootstrap";
import { Liga } from '../shared/liga.model';
import { ObtencionDatosService } from '../shared/obtencion-datos.service';

@Component({
  selector: 'app-login-modal',
  templateUrl: './login-modal.component.html',
  styleUrls: ['./login-modal.component.css']
})
export class LoginModalComponent implements OnInit, AfterViewInit {

 @ViewChild('contenido', {static: false}) contenidoModal: NgbModalRef;
 @Output() inicioSesion = new EventEmitter<{sesion: string, liga: Liga}>();
 modalRef: NgbModalRef;
 formulario: FormGroup;
 arrayLigas: Liga[];

  constructor(private modal: NgbModal, private obDatosService: ObtencionDatosService) { }

  ngOnInit() {
    this.arrayLigas = this.obDatosService.obtenerLigas();

    this.formulario = new FormGroup({
      'nombre': new FormControl(null, Validators.required),
      'password': new FormControl(null, Validators.required),
      'ligasSelect': new FormControl(null, Validators.required)
    });

  }

  ngAfterViewInit(){
    this.abrirModal();
  }


  abrirModal(){
    this.modalRef = this.modal.open(this.contenidoModal, { size: 'md', centered: true });
  }

  onSubmit(){
    let sesion = this.formulario.get('nombre').value;
    let ligaSelect = +this.formulario.get('ligasSelect').value;

    let liga:Liga = this.arrayLigas.find( l => l.id == ligaSelect );

    this.inicioSesion.emit({sesion, liga});
    this.modalRef.close();

  }

}
