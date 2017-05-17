import { Component, OnInit } from '@angular/core';


import { AccessControlLogService } from '../../services/access-control-log.service';


@Component({
  selector: 'app-log-form-component',
  templateUrl: './log-form-component.component.html',
  styleUrls: ['./log-form-component.component.css']
})
export class LogFormComponentComponent implements OnInit {
  display: boolean =false;
  person: string='';
  message: string='';

  constructor( private PersonLogService: AccessControlLogService ) {}

  ngOnInit() {
  }
  submitForm(myForm) {
      console.log(myForm.value);
      this.PersonLogService.addAccessItem( myForm.value.person , myForm.value.message)
      this.display=true;
      this.person='';
      this.message='';
    }
}
