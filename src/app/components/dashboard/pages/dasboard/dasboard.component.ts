import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import Chart from 'chart.js/auto';


@Component({
  selector: 'app-dasboard',
  templateUrl: './dasboard.component.html',
  styleUrls: ['./dasboard.component.css']
})
export class DasboardComponent {
  
  @ViewChild('populationChart', { static: true }) populationChart!: ElementRef;
  popChart:any = Chart;
  @ViewChild('populationChart1', { static: true }) populationChart1!: ElementRef;
  popChart1:any = Chart;
  @ViewChild('populationChart2', { static: true }) populationChart2!: ElementRef;
  popChart2:any = Chart;
  @ViewChild('populationChart3', { static: true }) populationChart3!: ElementRef;
  popChart3:any = Chart;
  @ViewChild('pageviewsChart', { static: true }) pageviewsChart!: ElementRef;
  pagChart:any = Chart;
  @ViewChild('usageChart', { static: true }) usageChart!: ElementRef;
  usChart:any = Chart;
  @ViewChild('usageChart1', { static: true }) usageChart1!: ElementRef;
  usChart1:any = Chart;



  constructor() { }

  ngOnInit(): void {
    this.createChart();
  }

  createChart() {

    this.popChart = new Chart(this.populationChart.nativeElement, {
      type: 'line',
      data: {
        labels: ["Jan", "Feb", "Mar", "Apr", "May" ],
        datasets: [{
          label: "Earnings", data: ['300', '676', '372', '579', '350' ],
          backgroundColor: 'rgba(255,0,0,0.2)', borderColor: 'rgba(255,0,0,1)',
          borderWidth: 2,
          pointRadius : 0,
          tension: 0.3,
          fill : true
        }]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        aspectRatio: 5, transitions: { show: { animations: { x: { from: 0 }, y: { from: 0 } } }, hide: { animations: { x: { to: 0 }, y: { to: 0 } } } },
        scales: { x: { display: false }, y: { display: false }, },
        plugins: { legend: { display: false, }, },
      }
    });

    this.popChart1 = new Chart(this.populationChart1.nativeElement, {
      type: 'line',
      data: {
        labels: ["Jan", "Feb", "Mar", "Apr", "May" ],
        datasets: [{
          label: "Earnings", data: ['300', '476', '372', '579', '350' ],
          backgroundColor: 'rgba(255, 165, 0,0.2)', borderColor: 'rgba(255, 165, 0,1)',
          borderWidth: 2,
          tension: 0.3,
          pointRadius : 0,
          fill : true
        }]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        aspectRatio: 5, transitions: { show: { animations: { x: { from: 0 }, y: { from: 0 } } }, hide: { animations: { x: { to: 0 }, y: { to: 0 } } } },
        scales: { x: { display: false }, y: { display: false }, },
        plugins: { legend: { display: false, }, },
      }
    });
    this.popChart2 = new Chart(this.populationChart2.nativeElement, {
      type: 'line',
      data: {
        labels: ["Jan", "Feb", "Mar", "Apr", "May" ],
        datasets: [{
          label: "Earnings", data: ['300', '676', '572', '579', '350' ],
          backgroundColor: 'rgba(88, 255, 0,0.2)', borderColor: 'rgba(88, 255, 1)',
          borderWidth: 2,
          tension: 0.3,
          pointRadius : 0,
          fill : true
        }]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        aspectRatio: 5, transitions: { show: { animations: { x: { from: 0 }, y: { from: 0 } } }, hide: { animations: { x: { to: 0 }, y: { to: 0 } } } },
        scales: { x: { display: false }, y: { display: false }, },
        plugins: { legend: { display: false, }, },
      }
    });
    this.popChart3 = new Chart(this.populationChart3.nativeElement, {
      type: 'line',
      data: {
        labels: ["Jan", "Feb", "Mar", "Apr", "May" ],
        datasets: [{
          label: "Earnings", data: ['300', '676', '372', '279', '350' ],
          backgroundColor: 'rgba(88, 42, 255,0.2)', borderColor: 'rgba(88, 42, 255,1)',
          borderWidth: 2,
          tension: 0.3,
          pointRadius : 0,
          fill : true
        }]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        aspectRatio: 5, transitions: { show: { animations: { x: { from: 0 }, y: { from: 0 } } }, hide: { animations: { x: { to: 0 }, y: { to: 0 } } } },
        scales: { x: { display: false }, y: { display: false }, },
        plugins: { legend: { display: false, }, },
      }
    });

    this.usChart = new Chart(this.usageChart.nativeElement, {
      type: 'doughnut',
      data: {
        labels:  ["2020", "2021", "2022", "2023"],
        datasets: [{
          label: "Earnings", data: ['110', '276', '172', '59'],
          backgroundColor: ['rgba(255, 205, 0, 0.6)', 'rgba(255, 0, 26, 0.6)', 'rgba(4, 0, 255, 0.6)', 'rgba(0, 255, 128, 0.6)'],
          borderColor: ['rgba(255, 205, 0, 0.6)', 'rgba(255, 0, 26, 0.6)', 'rgba(4, 0, 255, 0.6)', 'rgba(0, 255, 128, 0.6)'],
          borderWidth: 0,
        }]
      },
      options: {
        responsive: true,
        cutout: '80%',
        maintainAspectRatio: false,
        aspectRatio: 5, transitions: { show: { animations: { x: { from: 0 }, y: { from: 0 } } }, hide: { animations: { x: { to: 0 }, y: { to: 0 } } } },
        scales: { x: { display: false }, y: { display: false }, },
        plugins: { legend: { display: true, position : 'bottom' },},

      }
    });

    this.usChart1 = new Chart(this.usageChart1.nativeElement, {
      type: 'doughnut',
      data: {
        labels:  ["Current Customers", "New Customers", "Retargeted Customers"],
        datasets: [{
          label: "Earnings", data: ['110', '276', '172'],
          backgroundColor: ['rgba(255, 205, 0, 0.6)', 'rgba(255, 0, 26, 0.6)', 'rgba(4, 0, 255, 0.6)', 'rgba(0, 255, 128, 0.6)'],
          borderColor: ['rgba(255, 205, 0, 0.6)', 'rgba(255, 0, 26, 0.6)', 'rgba(4, 0, 255, 0.6)', 'rgba(0, 255, 128, 0.6)'],
          borderWidth: 0,
        }]
      },
      options: {
        responsive: true,
        cutout: '80%',
        maintainAspectRatio: false,
        aspectRatio: 5, transitions: { show: { animations: { x: { from: 0 }, y: { from: 0 } } }, hide: { animations: { x: { to: 0 }, y: { to: 0 } } } },
        scales: { x: { display: false }, y: { display: false }, },
        plugins: { legend: { display: true, position : 'right' },},

      }
    });

    this.pagChart = new Chart(this.pageviewsChart.nativeElement, {
      type: 'bar',
      data: {
        labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul"],
        datasets: [{
          label: "Downloads", data: ['222', '476', '372', '879', '245', '1110', '89'],
          backgroundColor(context) { const index: number = context?.dataIndex; const value: any = context?.dataset?.data[index]; return value < 0 ? 'rgba(0, 0, 102,0.6)' : 'rgba(0, 0, 102,0.6)' },
          borderColor: (context) => { const index: number = context?.dataIndex; const value: any = context?.dataset?.data[index]; return value < 0 ? 'rgba(255, 0, 26, 0.6)' : 'rgba(4, 0, 255, 0.6)'},
          borderWidth: 1,
        },
        {
          label: "Earnings", data: ['752', '276', '572', '479', '645', '510', '389'],
          backgroundColor(context) { const index: number = context?.dataIndex; const value: any = context?.dataset?.data[index]; return value < 0 ? 'rgba(0, 90, 14,0.6)' : 'rgba(0, 90, 14,0.6)'},
          borderColor: (context) => { const index: number = context?.dataIndex; const value: any = context?.dataset?.data[index]; return value < 0 ? 'rgba(0, 90, 14,0.6)' : 'rgba(0, 90, 14,0.6)'},
          borderWidth: 1,
        },]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        aspectRatio: 5, transitions: { show: { animations: { x: { from: 0 }, y: { from: 0 } } }, hide: { animations: { x: { to: 0 }, y: { to: 0 } } } },
        scales: { x: { display: true }, y: { display: true }, },
        plugins: { legend: { display: true, position: 'top' },  },

      }
    });

    // this.grChart = new Chart(this.growthChart.nativeElement, {
    //   type: 'line',
    //   data: {
    //     labels: ["Sun", "Mon", "Tues", "Wed", "Thurs", "Fri", "Sat"],
    //     datasets: [{
    //       label: "Earnings", data: ['0', '276', '372', '79', '192', '45', '78'],
    //       backgroundColor: 'rgba(255, 0, 26, 0.6)', borderColor: 'rgba(255, 0, 26, 0.6)',
    //       borderWidth: 1,
    //     }]
    //   },
    //   options: {
    //     responsive: true,
    //     maintainAspectRatio: false,
    //     aspectRatio: 5, transitions: { show: { animations: { x: { from: 0 }, y: { from: 0 } } }, hide: { animations: { x: { to: 0 }, y: { to: 0 } } } },
    //     scales: { x: { display: false }, y: { display: false }, },
    //     plugins: { legend: { display: false, }, },
    //     elements: {
    //       point: { radius: 0.1 }, line: { tension: 0 }
    //     }

    //   }
    // });

    // this.gnChart = new Chart(this.genderChart.nativeElement, {
    //   type: 'line',
    //   data: {
    //     labels: ["2019", "2020", "2021", "2022", "2023", "2024", "2025"],
    //     datasets: [
    //       {
    //         label: "Male", data: ['0', '276', '372', '79', '192', '545', '78'],
    //         backgroundColor: '#00bdfb', borderColor: '#00bdfb',
    //         borderWidth: 1,
    //       },
    //       {
    //         label: "Female", data: ['20', '76', '672', '709', '12', '145', '178'],
    //         backgroundColor: '#ff68b3', borderColor: '#ff68b3',
    //         borderWidth: 1,
    //       }
    //     ]
    //   },
    //   options: {
    //     responsive: true,
    //     maintainAspectRatio: false,
    //     aspectRatio: 5, transitions: { show: { animations: { x: { from: 0 }, y: { from: 0 } } }, hide: { animations: { x: { to: 0 }, y: { to: 0 } } } },
    //     scales: { x: { display: true, grid: { display: false } }, y: { display: true, ticks: { maxTicksLimit: 5 } } },
    //     plugins: { legend: { display: true, }, },
    //     elements: { point: { radius: 3 }, line: { tension: 0.1 } }
    //   }
    // });

    // this.brChart = new Chart(this.browserChart.nativeElement, {
    //   type: 'doughnut',
    //   data: {
    //     labels: ["2020", "2021", "2022", "2023"],
    //     datasets: [{
    //       label: "Earnings", data: ['110', '276', '172', '79'],
    //       backgroundColor: ['rgba(255, 205, 0, 0.6)', 'rgba(255, 0, 26, 0.6)', 'rgba(4, 0, 255, 0.6)', 'rgba(0, 255, 128, 0.6)'],
    //       borderColor: '#fff',
    //       borderWidth: 1,
    //     }]
    //   },
    //   options: {
    //     responsive: true,
    //     maintainAspectRatio: false,
    //     aspectRatio: 5, transitions: { show: { animations: { x: { from: 0 }, y: { from: 0 } } }, hide: { animations: { x: { to: 0 }, y: { to: 0 } } } },
    //     scales: { x: { display: false }, y: { display: false }, },
    //     plugins: { legend: { display: true, }, },

    //   }
    // });

  }


}
