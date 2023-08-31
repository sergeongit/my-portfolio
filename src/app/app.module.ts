import { BrowserModule } from '@angular/platform-browser'
import { NgModule } from '@angular/core'

import { AppComponent } from './app.component'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { IntroPageComponent } from './components/pages/intro-page/intro-page.component'
import { AppRoutingModule } from './app-routing.module'
import { RouterModule } from '@angular/router'
import { AboutMeComponent } from './components/pages/about-me/about-me.component'
import { MatButtonModule } from '@angular/material/button'
import { CareerComponent } from './components/pages/career/career.component'
import { ContactsComponent } from './components/pages/contacts/contacts.component'
import { SkillsComponent } from './components/pages/skills/skills.component'
import { PageNotFoundComponent } from './components/ui-elements/page-not-found/page-not-found.component'
import { MatTooltipModule } from '@angular/material/tooltip'
import { ClipboardModule } from '@angular/cdk/clipboard'
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner'
import { MatSnackBarModule } from '@angular/material/snack-bar'
import { LoaderComponent } from './components/ui-elements/loader/loader.component'
import { LoadingService } from './services/loading.service'
import { HttpRequestInterceptor } from './services/http-request-interceptor'

@NgModule({
    declarations: [
        AppComponent,
        IntroPageComponent,
        AboutMeComponent,
        CareerComponent,
        ContactsComponent,
        SkillsComponent,
        PageNotFoundComponent,
        LoaderComponent,
    ],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        AppRoutingModule,
        RouterModule,
        MatButtonModule,
        MatTooltipModule,
        ClipboardModule,
        MatProgressSpinnerModule,
        MatSnackBarModule,
    ],
    providers: [
        LoadingService,
        HttpRequestInterceptor,
    ],
    bootstrap: [AppComponent],
})
export class AppModule {}
