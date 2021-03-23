import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { NgbModal } from "@ng-bootstrap/ng-bootstrap";

@Component({
  selector: 'app-login-modal',
  templateUrl: './login-modal.component.html',
  styleUrls: ['./login-modal.component.css']
})
export class LoginModalComponent implements OnInit, AfterViewInit {
 @ViewChild('contenido', {static: false}) contenidoModal;

  constructor(private modal: NgbModal) { }

  ngOnInit() {
    
  }

  ngAfterViewInit(){
    this.abrirModal();
  }


  abrirModal(){
    console.log(this.contenidoModal);
    this.modal.open(this.contenidoModal, { size: 'lg', centered: true });
  }

}
