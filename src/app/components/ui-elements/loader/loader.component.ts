import { Component, OnInit } from '@angular/core'
import { ThemePalette } from '@angular/material/core'
import { ProgressSpinnerMode } from '@angular/material/progress-spinner'
import { Router } from '@angular/router'

@Component({
  selector: 'app-loader',
  templateUrl: './loader.component.html',
  styleUrls: ['./loader.component.css']
})
export class LoaderComponent implements OnInit {

    // routerEventsStream = this.router.events

    // public isPageLoading = true

    // spinner's config
    color: ThemePalette = 'primary'
    mode: ProgressSpinnerMode = 'indeterminate'
    value = 20

  constructor(
      // private router: Router,
  ) {
        // console.log('Router', )
  }

  ngOnInit(): void {
      // this.routerEventsStream.subscribe(v => console.log(v))
  }

}
