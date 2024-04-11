import { Component, OnInit } from '@angular/core';

declare global {
  interface Window {
    Microsoft: any;
    bingMapsLoaded?: () => void;
  }
}

@Component({
  selector: 'app-bing-map',
  templateUrl: './bing-map.component.html',
  styleUrls: ['./bing-map.component.css'],
})
export class BingMapComponent implements OnInit {
  
  map: any;

  ngOnInit(): void {
    if (typeof window.Microsoft === 'undefined') {
      window.bingMapsLoaded = () => {
        this.loadMap();
      };
    } else {
      this.loadMap();
    }
  }

  loadMap(): void {
    const mapElement = document.getElementById('bing-map');
    
    if (mapElement) {
      this.map = new window.Microsoft.Maps.Map(mapElement, {
        credentials: 'AsbApNxLCsT0b3ESXiXJqLolw913S-mfrDHrIA88C00FFD2HCe-5H0XQzaqEUeFk',
      });
    } else {
      console.error('Element with ID "bing-map" not found.');
    }
  }
}

// 'AsbApNxLCsT0b3ESXiXJqLolw913S-mfrDHrIA88C00FFD2HCe-5H0XQzaqEUeFk'