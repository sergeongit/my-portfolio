import {
    Component,
    OnInit,
} from '@angular/core'
import { ThemePalette } from '@angular/material/core'
import { ProgressSpinnerMode } from '@angular/material/progress-spinner'
import { LoadingService } from './services/loading.service'
import { delay } from 'rxjs/operators'

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
    loading: boolean = false

    constructor(
        private _loading: LoadingService,
    ) {}

    ngOnInit(): void {
        this.listenToLoading()
    }

    /**
     * Listen to the loadingSub property in the LoadingService class. This drives the
     * display of the loading spinner.
     */
    listenToLoading(): void {
        this._loading.loadingSub
            .pipe(delay(0)) // This prevents a ExpressionChangedAfterItHasBeenCheckedError for subsequent requests
            .subscribe((loading) => {
                this.loading = loading
            })
    }
}
