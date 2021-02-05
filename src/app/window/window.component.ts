import { Component, OnInit } from '@angular/core';
import { ModalManagerService } from './common/modal-manage/modal-manager.service'
import { CustomTestDialogComponent } from './components/custom-test-dialog/custom-test-dialog.component';
import { DialogComponent } from './components/dialog/dialog.component';

@Component({
  selector: 'app-window',
  templateUrl: './window.component.html',
  styleUrls: ['./window.component.scss']
})
export class WindowComponent implements OnInit {

  constructor(
    private modalManagerService: ModalManagerService
  ) { }

  ngOnInit(): void {
    const options = {
      size: 'xl',
    }
    this.modalManagerService.push(CustomTestDialogComponent, { custom: true });
    this.modalManagerService.push(DialogComponent, {priority: 1, options: {size: 'lg'}});
    this.modalManagerService.push(DialogComponent, {priority: 1, options});
    setTimeout(() => {
      this.modalManagerService.push(DialogComponent, { priority: 2 });
    }, 0);
  }

  openModal() {
    const option = {centered: true};
    this.modalManagerService.push(DialogComponent, {priority: 1});
    setTimeout(() => {
      const options = {
        size: 'xl',
      }
      this.modalManagerService.push(DialogComponent, { priority: 2, options });
    }, 0);
  }

}
