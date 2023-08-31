import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import {
    PreloadAllModules,
    RouterModule,
    Routes,
} from '@angular/router'
import { IntroPageComponent } from './components/pages/intro-page/intro-page.component'
import { AboutMeComponent } from './components/pages/about-me/about-me.component'
import { CareerComponent } from './components/pages/career/career.component'
import { ContactsComponent } from './components/pages/contacts/contacts.component'
import { SkillsComponent } from './components/pages/skills/skills.component'
import { PageNotFoundComponent } from './components/ui-elements/page-not-found/page-not-found.component'

const routes: Routes = [
    //
    // ALL pages
    //
    {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full',
    },

    { path: 'home', component: IntroPageComponent },
    { path: 'about', component: AboutMeComponent },
    { path: 'career', component: CareerComponent },
    { path: 'contacts', component: ContactsComponent },
    { path: 'skills', component: SkillsComponent },

    //
    // 404 page
    //
    { path: '**', component: PageNotFoundComponent },
]

@NgModule({
    declarations: [],
    imports: [
        BrowserModule,
        RouterModule.forRoot(routes,
            { preloadingStrategy: PreloadAllModules }
        )
    ],
})
export class AppRoutingModule {}
