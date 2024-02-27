import { AfterViewInit, Component, Input, OnChanges, OnInit, SimpleChanges, ViewChild  } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { environment } from 'src/enviroments/environment';
const base_url = environment.base_url;

@Component({
  selector: 'app-minigallery',
  templateUrl: './minigallery.component.html',
  styleUrls: ['./minigallery.component.css']
})
export class MinigalleryComponent implements  OnChanges,OnInit {
  dataSource!: MatTableDataSource<any>;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @Input() maxItemsToShow: number = 6;
  @Input() data: any[] = [];
  @Input() title: any= 'title';

  url: string;
  paginatedData: any[] = [];

  constructor() {
    this.url = `${base_url}/upload/artwork/`;
  }
  ngOnInit(): void {
    console.log('Title:', this.title);
  }
  ngAfterViewInit(): void {
    this.initializeDataSource();
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['data']) {
      this.initializeDataSource();
    }
  }

  private initializeDataSource(): void {
    this.dataSource = new MatTableDataSource(this.data);
    this.dataSource.paginator = this.paginator;
    this.paginator.page.subscribe(() => {
      this.paginatedData = this.dataSource.filteredData.slice(
        this.paginator.pageIndex * this.paginator.pageSize,
        (this.paginator.pageIndex + 1) * this.paginator.pageSize
      );
    });
    this.paginatedData = this.dataSource.filteredData.slice(
      this.paginator.pageIndex * this.paginator.pageSize,
      (this.paginator.pageIndex + 1) * this.paginator.pageSize
    );
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  maxItems() {
    this.maxItemsToShow === 8?this.maxItemsToShow=this.data.length:this.maxItemsToShow = 8
  }
}
