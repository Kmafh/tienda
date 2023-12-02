import { Component, OnInit } from '@angular/core';
import { ResultService } from 'src/app/services/admin/result.service';

@Component({
  selector: 'app-result-admin',
  templateUrl: './result-admin.component.html',
  styleUrls: ['./result-admin.component.css']
})
export class ResultAdminComponent implements OnInit {
  table: string;

  constructor(private resultService: ResultService) {
    this.table = this.resultService.getTable();

    // Suscribirse al Observable para recibir actualizaciones
    this.resultService.getTableObservable().subscribe((newTable) => {
      this.table = newTable;
    });
  }

  ngOnInit(): void {
  }
}
