import { Component, OnInit } from '@angular/core';
import { CustomModal } from '../../common/custom-modal/custom-modal';

@Component({
  selector: 'app-custom-test-dialog',
  templateUrl: './custom-test-dialog.component.html',
  styleUrls: ['./custom-test-dialog.component.scss']
})
export class CustomTestDialogComponent extends CustomModal implements OnInit {

  constructor() {
    super();
  }

  ngOnInit() {
    console.log('custom-test-modal');
  }

  confirm() {
      this.onConfirm.emit("data");
  }

  cancel() {
      this.onCancel.emit();
  }

}
