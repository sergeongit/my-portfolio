import {
    Component,
    OnInit,
} from '@angular/core'
import { SkillsName } from '../../storage/skills-list'

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss']
})


export class SkillsComponent implements OnInit {
    public skills = SkillsName

    constructor() {}

    public ngOnInit(): void {}

}


