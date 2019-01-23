import { Component, OnInit } from '@angular/core';
import { ApartmentService } from './apartment.service';
import { LocalDataSource } from 'ng2-smart-table';

@Component({
  selector: 'ngx-apartment-table',
  templateUrl: './apartment-table.component.html',
  styles: [`
    nb-card {
      transform: translate3d(0, 0, 0);
    }
  `],
})
export class ApartmentTableComponent implements OnInit {

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
      number: {
        title: 'Number',
        type: 'number',
      },
      residentcount: {
        title: 'Resident count',
        type: 'string',
      },
      rooms: {
        title: 'Rooms',
        type: 'string',
      },
      floor: {
        title: 'Floor',
        type: 'string',
      },
      fullarea: {
        title: 'Full area',
        type: 'string',
      },
      livingarea: {
        title: 'Living area',
        type: 'string',
      },
      houseId: {
        title: 'House ID',
        type: 'number',
      },
    },
  };

  source: LocalDataSource = new LocalDataSource();

  constructor(private apartmentService: ApartmentService) { }

  ngOnInit() {
    this.getApartments();
  }

  getApartments(): void {
    this.apartmentService.getApartments()
      .subscribe(apartments => {
        this.source.load(apartments);
        console.log(apartments);
    });
  }

  deleteApartment(event: any): void {
    this.apartmentService.removeApartmentById(event.data.id)
      .subscribe(() => {
        this.source.remove(event.data);
      });
  }

  addApartment(event: any): void {
    this.apartmentService.addApartment(event.newData)
      .subscribe(x => {
        this.source.add(x);
        event.confirm.resolve(event.newData);
      });
  }

  updateApartment(event: any): void {
    this.apartmentService.updateApartment(event.newData)
      .subscribe(() => {
        this.source.update(event.data, event.newData);
        event.confirm.resolve(event.newData);
      });
  }
}
