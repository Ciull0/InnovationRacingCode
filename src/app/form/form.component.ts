import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {


  constructor() { }

  ngOnInit(): void {
  }

  formContatti = new FormGroup({
    Testo: new FormControl(''),
    SceltaMultipla: new FormControl(''),
    Mail: new FormControl('')
  })

  
  
}
