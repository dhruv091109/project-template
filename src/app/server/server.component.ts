import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styleUrls: ['./server.component.css']
})
export class ServerComponent implements OnInit {
  allowAddServer: boolean = false;
  ngOnInit(): void {
    setTimeout( 
      () => {
        this.allowAddServer = true;
      },2000
    )  
  }

  serverId: number = 10;
  serverStatus: string = 'offline';
  



  getServerStatus() {
    return this.serverStatus;
  }
}
