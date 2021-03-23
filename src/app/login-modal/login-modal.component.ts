import { AfterViewInit, Component, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { NgbModal, NgbModalRef } from "@ng-bootstrap/ng-bootstrap";

@Component({
  selector: 'app-login-modal',
  templateUrl: './login-modal.component.html',
  styleUrls: ['./login-modal.component.css']
})
export class LoginModalComponent implements OnInit, AfterViewInit {

 @ViewChild('contenido', {static: false}) contenidoModal: NgbModalRef;
 @Output() inicioSesion = new EventEmitter<string>();
 modalRef: NgbModalRef;
 formulario: FormGroup;

  constructor(private modal: NgbModal) { }

  ngOnInit() {
    this.formulario = new FormGroup({
      'nombre': new FormControl(null, Validators.required),
      'password': new FormControl(null, Validators.required)
    });
  }

  ngAfterViewInit(){
    this.abrirModal();
  }


  abrirModal(){
    console.log(this.contenidoModal);
    this.modalRef = this.modal.open(this.contenidoModal, { size: 'md', centered: true });
  }

  onSubmit(){
    const usuario = this.formulario.get('nombre').value;
    this.inicioSesion.emit(usuario);
    this.modalRef.close();

  }

}
