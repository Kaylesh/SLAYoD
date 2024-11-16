import * as a1lib from 'alt1';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {NzContentComponent, NzFooterComponent, NzHeaderComponent, NzLayoutComponent} from 'ng-zorro-antd/layout';
import {NzTypographyComponent} from 'ng-zorro-antd/typography';
import {NzButtonComponent, NzButtonGroupComponent} from 'ng-zorro-antd/button';
import {NzColDirective, NzRowDirective} from 'ng-zorro-antd/grid';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NzLayoutComponent, NzHeaderComponent, NzContentComponent, NzFooterComponent, NzTypographyComponent, NzButtonComponent, NzButtonGroupComponent, NzRowDirective, NzColDirective],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'SLAYoD';
  testContent = "";

  isAlt1Detected = !!window.alt1;
  isRsActive = false;

  constructor() {
    if(this.isAlt1Detected){
      alt1.identifyAppUrl('appconfig.json');
      this.testContent = 'Alt1 detected!'
      this.isRsActive = alt1.rsLinked;
    }

  }
}
