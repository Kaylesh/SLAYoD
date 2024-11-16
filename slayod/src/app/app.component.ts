import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import * as a1lib from 'alt1';
import {NzContentComponent, NzFooterComponent, NzHeaderComponent, NzLayoutComponent} from 'ng-zorro-antd/layout';
import {NzTypographyComponent} from 'ng-zorro-antd/typography';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NzLayoutComponent, NzHeaderComponent, NzContentComponent, NzFooterComponent, NzTypographyComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'SLAYoD';
  footer = 'Version 0. WIP.'
}
