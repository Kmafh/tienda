import { AfterViewInit, Component, Input, ViewChild  } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { environment } from 'src/enviroments/environment';
const base_url = environment.base_url;

@Component({
  selector: 'app-minigallery',
  templateUrl: './minigallery.component.html',
  styleUrls: ['./minigallery.component.css']
})
export class MinigalleryComponent  {
  displayedColumns: string[] = ['id', 'name', 'progress', 'fruit'];
  dataSource!: MatTableDataSource<any>;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @Input() maxItemsToShow: number = 6;
  @Input() data: any[] = [];

  url:string
  constructor() {
    this.url = `${base_url}/upload/artwork/`
  }
  // ngAfterViewInit() {
  //   this.dataSource.paginator = this.paginator;
    
  // }

  // applyFilter(event: Event) {
  //   const filterValue = (event.target as HTMLInputElement).value;
  //   this.dataSource.filter = filterValue.trim().toLowerCase();

  //   if (this.dataSource.paginator) {
  //     this.dataSource.paginator.firstPage();
  //   }
  // }
}
