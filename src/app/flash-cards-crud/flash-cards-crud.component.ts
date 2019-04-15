import { Component, OnInit } from '@angular/core';
import { FirebaseService } from '../services/firebase.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-flash-cards-crud',
  templateUrl: './flash-cards-crud.component.html',
  styleUrls: ['./flash-cards-crud.component.css']
})
export class FlashCardsCrudComponent implements OnInit {
  constructor(public firebaseService: FirebaseService) { }


  addCard(form: NgForm) {
    const value = form.value;
    this.firebaseService.createCard(value.question, value.answer, value.deck);
  }


  ngOnInit() {
  }

}
