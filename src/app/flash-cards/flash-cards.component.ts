import { Component, OnInit } from '@angular/core';
import { FirebaseService } from '../services/firebase.service';
import { FormControl } from '@angular/forms';
import { AuthService } from '../services/auth.service';
import { ClassGetter } from '@angular/compiler/src/output/output_ast';

@Component({
  selector: 'app-flash-cards',
  templateUrl: './flash-cards.component.html',
  styleUrls: ['./flash-cards.component.css']
})
export class FlashCardsComponent implements OnInit {
  flashCards: Array<any>;
  getAnswerToggle = false;

  constructor(
    public firebaseService: FirebaseService, public AService: AuthService
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

  getAnswer() {
    this.getAnswerToggle = true;
     }

}
