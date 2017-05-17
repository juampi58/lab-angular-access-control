import { Injectable } from '@angular/core';

@Injectable()
export class AccessControlLogService {

    logMessages: Array<Object>=[
      {person: 'Juan', message:'training', createdAt: new Date()},
      {person: 'Isak', message:'running', createdAt: new Date()}
    ]
  constructor() { }
    getAccessLog(){
      return this.logMessages;
    }
    addAccessItem(person:string,message:string){
      const newLog={
        person:person,
        message:message,
        createdAt:new Date()
      }
      this.logMessages.push(newLog);
      console.log(this.logMessages);
      this.logMessages.forEach(function(log){
        console.log(log['person'],log['message']);
      });

    }
}
