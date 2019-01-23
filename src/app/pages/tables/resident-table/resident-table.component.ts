import { Component, OnInit } from '@angular/core';

import { ResidentService } from './resident.service';
import { LocalDataSource } from 'ng2-smart-table';

@Component({
  selector: 'ngx-resident-table',
  templateUrl: './resident-table.component.html',
  styles: [`
    nb-card {
      transform: translate3d(0, 0, 0);
    }
  `],
})
export class ResidentTableComponent implements OnInit {

  settings = {
    add: {
      addButtonContent: '<i class="nb-plus"></i>',
      createButtonContent: '<i class="nb-checkmark"></i>',
      cancelButtonContent: '<i class="nb-close"></i>',
      confirmCreate: true,
    },
    edit: {
      editButtonContent: '<i class="nb-edit"></i>',
      saveButtonContent: '<i class="nb-checkmark"></i>',
      cancelButtonContent: '<i class="nb-close"></i>',
      confirmSave: true,
    },
    delete: {
      deleteButtonContent: '<i class="nb-trash"></i>',
      confirmDelete: true,
    },
    columns: {
      firstName: {
        title: 'First name',
        type: 'string',
      },
      lastName: {
        title: 'Last name',
        type: 'string',
      },
      persCode: {
        title: 'Pers. code',
        type: 'string',
      },
      phone: {
        title: 'Phone',
        type: 'string',
      },
      email: {
        title: 'E-mail',
        type: 'string',
      },
      birthday: {
        title: 'Birthday',
        type: 'string',
      },
      apartmentId: {
        title: 'Apartment ID',
        type: 'number',
      },
    },
  };

  source: LocalDataSource = new LocalDataSource();

  constructor(private residentService: ResidentService) { }

  ngOnInit() {
    this.getResidents();
  }

  getResidents(): void {
    this.residentService.getResidents()
      .subscribe(residents => {
        this.source.load(residents);
      });
  }

  deleteResident(event: any): void {
    console.log(event.data.id);
    this.residentService.removeResidentById(event.data.id)
      .subscribe(() => {
        this.source.remove(event.data);
      });
  }

  addResident(event: any): void {
    this.residentService.addResident(event.newData)
      .subscribe(resident => {
        this.source.add(resident);
        event.confirm.resolve(event.newData);
      });
      console.log(event.data);
  }

  updateResident(event: any): void {
    console.log(event.data.id);
    this.residentService.updateResident(event.newData)
      .subscribe(() => {
        this.source.update(event.data, event.newData);
        event.confirm.resolve(event.newData);
      });
  }

}
