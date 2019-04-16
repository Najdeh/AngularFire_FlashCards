import { Component, OnInit } from '@angular/core';
import { FirebaseService } from '../services/firebase.service';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-flash-cards',
  templateUrl: './flash-cards.component.html',
  styleUrls: ['./flash-cards.component.css']
})
export class FlashCardsComponent implements OnInit {
  flashCards: Array<any>;
  cardCounter = 0;
  getAnswerToggle = false;

  constructor(
    public firebaseService: FirebaseService
  ) { }

  ngOnInit() {
    this.getData();
  }

  getData() {
    this.firebaseService.getCards()
      .subscribe(result => {
        console.log(result);
        this.flashCards = result;
      });
  }

  showData() {
    //console.log(this.flashCards.payload.doc.data().confidenceLevel);
  }

  confidenceIncrement(id) {
    // this.firebaseService.incConfidence(id);
    this.cardCounter++;
  }

  getAnswer() {
    this.getAnswerToggle = true;
  }

}
