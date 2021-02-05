import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

/**
 * UtilsModule
 * 1.用于提供应用级别的 Utils Service
 * 2.UtilsModule 只允许提供业务无关的 Service，不可以声明任何 Component，Directive 或 Pipe
 * 3.UtilsModule 有且只能被 AppModule 导入，不允许在任何非 AppModule 中导入
 */

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
  ],
  providers: [
  ]
})
export class UtilsModule { }
