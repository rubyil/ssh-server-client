import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
// import { Message } from './message.model';

import * as socketIo from 'socket.io-client';

let SERVER_URL = 'http://localhost:8080';

@Injectable()
export class SocketService {
  private socket;

  constructor() {
    this.initSocket();
  }

  private initSocket(): void {
    this.socket = socketIo(SERVER_URL);
  }

  public send(message: String): void {
    this.socket.emit('input', message);
  }

  public get() {
    let observable = new Observable(observer => {
      this.socket.on('output', (data) => {
        observer.next(data);
      });
      return () => {
        this.socket.disconnect();
      };
    });
    return observable;
  }

}