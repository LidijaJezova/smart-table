import { Component, OnInit } from '@angular/core';

import { HouseService } from './house.service';
import { House } from './house';
import { LocalDataSource } from 'ng2-smart-table';

@Component({
  selector: 'ngx-smart-table',
  templateUrl: './smart-table.component.html',
  styles: [`
    nb-card {
      transform: translate3d(0, 0, 0);
    }
  `],
})
export class SmartTableComponent implements OnInit {

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
      street: {
        title: 'Street',
        type: 'string',
      },
      city: {
        title: 'City',
        type: 'string',
      },
      country: {
        title: 'Country',
        type: 'string',
      },
      postindex: {
        title: 'Post index',
        type: 'string',
      },
    },
  };

  source: LocalDataSource = new LocalDataSource();

  houses: House[];

  constructor(private houseService: HouseService) { }

  ngOnInit() {
    this.getHouses();
  }

  getHouses(): void {
    this.houseService.getHouses()
    .subscribe(houses => {
      this.houses = houses;
      this.source.load(this.houses);
    });
  }

  deleteHouse(event: any): void {
    this.houseService.removeHouseById(event.data.id)
      .subscribe(() => {
        this.source.remove(event.data);
    });
  }

  addHouse(event: any): void {
     this.houseService.addHouse(event.newData)
      .subscribe(house => {
        this.houses.push(house);
        event.confirm.resolve(event.newData);
      });
  }

  updateHouse(event: any): void {
    console.log(event.data.id);
    this.houseService.updateHouse(event.newData)
      .subscribe(() => {
        this.source.update(event.data, event.newData);
      });
      event.confirm.resolve(event.newData);
  }

}
