import {Component, OnInit, ViewChild, ChangeDetectorRef} from '@angular/core';
import {MatPaginator, MatSort, MatTableDataSource} from '@angular/material';
import { GuestbookService } from './guestbook.service';
import { NgForm } from '@angular/forms';
export interface GuestbookData {

  name: string;
  message: string;

}

/**
 * @title Data table with sorting, pagination, and filtering.
 */

 /**
 * @title Basic use of `<table mat-table>`
 */
@Component({
  selector: 'app-guestbook',
  styleUrls: ['./guestbook.component.css'],
  templateUrl: './guestbook.component.html',
})

export class GuestbookComponent implements OnInit {
  displayedColumns: string[] = ['name','message'];

  dataSource: MatTableDataSource<GuestbookData>;

  name: string;
  message:string;


  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(private guestbookService:GuestbookService) {
    // Create 100 users
    //const users = {name:"phico",message:"hello how are you this is my first test hello how are you this is my first test hello how are you this is my first test hello how are you this is my first test"};
    //console.log(users);
    // Assign the data to the data source for the table to render
    //this.dataSource = new MatTableDataSource([users]);
  }

  ngOnInit() {
    this.guestbookService.getGuestbook().subscribe(guestbook=>{
      this.dataSource = new MatTableDataSource(guestbook);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    })

  }

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }


  onSubmit (myform: NgForm) {

    this.guestbookService.postGuestbook({name:this.name,message:this.message}).subscribe(result=>{
      this.guestbookService.getGuestbook().subscribe(guestbook=>{
        this.dataSource = new MatTableDataSource(guestbook);
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
        this.name='';
        this.message='';
      })
    })
    console.log('Successful submit');
    console.log(this.name);
    console.log(this.message);
  }
}


