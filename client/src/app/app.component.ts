import { Component } from '@angular/core';
import { SocketService } from './services/socket.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: [
    '../assets/css/bootstrap.min.css',
    '../assets/css/core.css',
    '../assets/css/icons.css',
    '../assets/css/components.css',
    '../assets/css/pages.css',
    '../assets/css/menu.css',
    '../assets/css/responsive.css',
    './app.component.css'
  ]
})

export class AppComponent {
  messages = [];
  connection;
  message;

  constructor(private socketService: SocketService) {

  }

  ngOnInit() {
    this.connection = this.socketService.get().subscribe(message => {
      this.messages = [...this.messages, message];
    })
  }

  send() {
    this.socketService.send(this.message + String.fromCharCode(13));
    this.message = '';
  }

  keys(e) {
    console.log(e);
  }

  ngOnDestroy() {
    this.connection.unsubscribe();
  }


}
