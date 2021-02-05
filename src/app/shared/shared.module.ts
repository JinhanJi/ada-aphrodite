import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TranslateModule } from '@ngx-translate/core';
import { FormsModule } from '@angular/forms';

import { PageNotFoundComponent } from './components/';
import { WebviewDirective } from './directives/';
/**
 * ShareModule
 * 1.用于声明供多个模块共享的 Component，Directive 或 Pipe
 * 2.ShareModule 不允许对外提供任何 Servcie
 * 3.ShareModule 可以按需导入到需要用到共享内容的模块中
 */

@NgModule({
  declarations: [PageNotFoundComponent, WebviewDirective],
  imports: [CommonModule, TranslateModule, FormsModule],
  exports: [TranslateModule, WebviewDirective, FormsModule]
})
export class SharedModule {}
