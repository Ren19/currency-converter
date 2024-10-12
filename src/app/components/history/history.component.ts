import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../services/api.service';

@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
})
export class HistoryComponent implements OnInit {
  displayedColumns: string[] = ['id', 'user_id', 'action', 'table_name', 'record_id', 'details'];
  history: any[] = [];

  constructor(private apiService: ApiService) { }

  ngOnInit() {
    this.loadHistory();
  }

  loadHistory() {
    this.apiService.getAuditLogs().subscribe(
      (response: any[]) => {
        this.history = response.map((item: any, index: number) => ({
          ...item,
          id: index + 1, // Añade un ID incremental
          details: JSON.parse(item.new_value)
        }));
      },
      error => {
        console.error('Error fetching history:', error);
      }
    );
  }
}
