import { Component, OnChanges, Input, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'pm-star',
    templateUrl: './star.component.html',
    styleUrls: ['./star.component.css']
})
export class StarComponent implements OnChanges {
    //Properties
    @Input() rating: number;
    starWidth: number;
    @Output() ratingClicked: EventEmitter<string> = new EventEmitter<string>();

    //Methods
    onClick(): void {
        
        this.ratingClicked.emit(`The rating ${this.rating} was clicked!`);
    }

    //OnChanges Implementation
    ngOnChanges(): void {
        this.starWidth = this.rating * 86 / 5;
    }
}
