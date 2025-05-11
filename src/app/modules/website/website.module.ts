import { CommonModule } from '@angular/common';
import { WebsiteRoutingModule } from './website-routing.module';
import {NgModule} from '@angular/core';

@NgModule({
  imports: [CommonModule,
    WebsiteRoutingModule],
})
export class WebsiteModule { }
