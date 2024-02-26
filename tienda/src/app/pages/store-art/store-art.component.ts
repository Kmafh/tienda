import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import {
  DialogComponent,
  DialogData,
} from 'src/app/components/dialog/dialog.component';
import { Forms } from 'src/app/interfaces/form.interface';
import { BaseService } from '../../services/base/base.service';
import { environment } from 'src/enviroments/environment';
import { User } from 'src/app/models/user';
import { UserService } from 'src/app/services/user.service';
const endpoint: any = environment.base_url;

@Component({
  selector: 'app-store-art',
  templateUrl: './store-art.component.html',
  styleUrls: ['./store-art.component.css'],
})
export class StoreArtComponent implements OnInit{
  data: any;
  user:User
  maxItemsToShow:number;
  constructor(public dialog: MatDialog,
    private baseService: BaseService,
    private userService: UserService
    ) {
      this.user = this.userService.user
      this.user = JSON.parse(this._user)
      this.setData()
      this.maxItemsToShow=8
    }

    ngOnInit(): void {
      this.user = JSON.parse(this._user)
      this.setData()

    }
  get token(): string {
    return sessionStorage.getItem('token') || '';
  }
  get _user(): string {
    return sessionStorage.getItem('us') || '';
  }
  openDialog(type: string, row?: any): void {
    const data: DialogData = {
      type: type,
      group: Forms.artworkraGroup,
      data: row || null,
    };
    const dialogRef = this.dialog.open(DialogComponent, {
      data: data || null,
    });

    dialogRef.afterClosed().subscribe((result) => {
      console.log('The dialog was closed');
    });
  }

  setData() {
    const url:string = `${endpoint}/artwork/${this.user.uid}`
    this.baseService.getItemsByUid(url).subscribe((resp:any) => {
      this.data = resp.artworks;
    })
  }
  maxItems() {
    this.maxItemsToShow === 8?this.maxItemsToShow=this.data.length:this.maxItemsToShow = 8
  }
}
