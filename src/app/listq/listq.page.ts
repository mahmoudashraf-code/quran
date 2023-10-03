import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-listq',
  templateUrl: './listq.page.html',
  styleUrls: ['./listq.page.scss'],
})
export class ListqPage implements OnInit {
  quranList=[
    {"id":1,"name":"ma"},
    {"id":2,"name":"ma"},
    {"id":3,"name":"ma"},
    {"id":4,"name":"ma"},
    {"id":5,"name":"ma"},
    {"id":6,"name":"ma"},
    {"id":7,"name":"ma"},
    {"id":8,"name":"ma"}
  ]
  constructor(private router:Router) { }
  ngOnInit() {
  }
  onclic(b){
    this.router.navigate(['/book',b.id]);
  }
 
}
