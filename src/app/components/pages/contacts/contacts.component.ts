import { Component, } from '@angular/core'
import { MatSnackBar } from '@angular/material/snack-bar'

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.scss']
})
export class ContactsComponent {
    email = 'sergechaplygin@gmail.com'

    // parameters for snackbar
    durationInSeconds = 2 // appearing time

    constructor(
        private snackBar: MatSnackBar,
        ) {}

    openSnackBar(): void {
        this.snackBar.open('Copied', '', { duration: this.durationInSeconds * 1000} );
    }
}
