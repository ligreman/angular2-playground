import {Component, OnInit} from '@angular/core';
import {WordService} from './word.service';

@Component({
    selector: 'app-word',
    templateUrl: './word.component.html',
    styleUrls: ['./word.component.css'],
    providers: [WordService]
})
export class WordComponent implements OnInit {
    words: any;

    constructor(private service: WordService) {
    }

    search(term) {
        // this.service.search_word(term).subscribe(res => {
        this.service.search_word('').subscribe(res => {
            this.words = res;
        }, error => {
            console.log('Mousquis!');
        });
    }

    ngOnInit() {
    }

}
