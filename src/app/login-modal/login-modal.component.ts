import { Component, OnInit, ViewChild } from '@angular/core';
import { NgbModal } from "@ng-bootstrap/ng-bootstrap";

@Component({
  selector: 'app-login-modal',
  templateUrl: './login-modal.component.html',
  styleUrls: ['./login-modal.component.css']
})
export class LoginModalComponent implements OnInit {
 //@ViewChild('contenido', {static: false}) contenidoModal: NgbModal;

  constructor(private modal: NgbModal) { }

  ngOnInit(): void {
    //console.log(this.contenidoModal);
    //this.modal.open(this.contenidoModal);
  }


  abrirModal(contenido){
    console.log(contenido);
    this.modal.open(contenido);
  }

}
