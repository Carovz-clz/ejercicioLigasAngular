import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { NgbModal, NgbModalRef } from "@ng-bootstrap/ng-bootstrap";

@Component({
  selector: 'app-login-modal',
  templateUrl: './login-modal.component.html',
  styleUrls: ['./login-modal.component.css']
})
export class LoginModalComponent implements OnInit, AfterViewInit {
 @ViewChild('contenido', {static: false}) contenidoModal: NgbModalRef;
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
    this.modalRef.close();

  }

}
