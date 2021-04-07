import { AfterViewInit, Component, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { NgbModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import { Jugador } from 'src/app/shared/modelos/jugador.model';

@Component({
  selector: 'app-nuevo-jugador',
  templateUrl: './nuevo-jugador.component.html',
  styleUrls: ['./nuevo-jugador.component.css']
})
export class NuevoJugadorComponent implements OnInit, AfterViewInit {
  @ViewChild('contenido', {static: false}) contenidoModal: NgbModalRef;
  @Output() nuevoJugador = new EventEmitter<Jugador>();
  @Output() cancelarForm = new EventEmitter<boolean>();
  formulario: FormGroup;
  modalRef: NgbModalRef;

  constructor(private modal: NgbModal) { }

  ngOnInit(): void {
    this.formulario = new FormGroup({
      'nombre': new FormControl(null, Validators.required),
      'edad': new FormControl(null, Validators.required),
      'ciudad': new FormControl(null, Validators.required),
      'pais': new FormControl(null, Validators.required)
    });
  }

  ngAfterViewInit(){
    this.abrirModal();
  }

  abrirModal(){
    this.modalRef = this.modal.open(this.contenidoModal, { size: 'md', centered: true });
  }

  onSubmit(){
    let jugador: Jugador = {
      id: 0,
      nombre: this.formulario.get('nombre').value,
      edad: +this.formulario.get('edad').value,
      ciudad: this.formulario.get('ciudad').value,
      pais: this.formulario.get('pais').value
    }

    this.nuevoJugador.emit(jugador);
    this.modalRef.close();

  }

  cancelar(){
    this.cancelarForm.emit(false);
    this.modalRef.close();
  }



}
