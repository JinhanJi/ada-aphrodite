import { Component, OnInit } from '@angular/core';
import { ModalManagerService } from '../../common/modal-manage/modal-manager.service';
import { DialogComponent } from '../dialog/dialog.component';

@Component({
  selector: 'app-first-child',
  templateUrl: './first-child.component.html',
  styleUrls: ['./first-child.component.scss']
})
export class FirstChildComponent implements OnInit {

  constructor(
    private modalManagerService: ModalManagerService,
  ) { }

  ngOnInit(): void {
    setTimeout(() => {
      console.log('first-child');
      const options = { centered: true};
      // this.modalService.open(DialogComponent, { centered: false});
      this.modalManagerService.push(DialogComponent, {priority: 3, options});
    }, 5000);
  }

}
