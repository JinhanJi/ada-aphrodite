import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WindowRoutingModule } from './window-routing.module';
import { CustomModalModule } from './common/custom-modal/custom-modal.module';

import { WindowComponent } from './window.component';
import { SharedModule } from '../shared/shared.module';

import { FirstChildComponent } from './components/first-child/first-child.component';
import { DialogComponent } from './components/dialog/dialog.component';
import { CustomTestDialogComponent } from './components/custom-test-dialog/custom-test-dialog.component';

@NgModule({
  declarations: [WindowComponent, FirstChildComponent, DialogComponent, CustomTestDialogComponent],
  imports: [
    CommonModule,
    SharedModule,
    WindowRoutingModule,
    CustomModalModule
  ]
})
export class WindowModule { }
