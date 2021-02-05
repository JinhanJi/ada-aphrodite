import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

/**
 * CoreModule
 * 1.用引入或提供应用级别共享的 Module，Service
 * 2.CoreModule只允许提供 Service，不可以声明任何 Component，Directive 或 Pipe
 * 3.CoreModule有且只能被 AppModule 导入，不允许在任何非 AppModule 中导入
 */
@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ]
})
export class CoreModule { }
