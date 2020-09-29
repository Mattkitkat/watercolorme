import { Component, OnInit, ViewChild } from '@angular/core';

export interface IContext {
    data:string;
}

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})

export class ModalComponent {
    constructor() {}
}