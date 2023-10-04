import { Component, OnInit } from '@angular/core';
import { WorldBankApiService } from '../world-bank-api.service';

@Component({
  selector: 'app-world-map',
  templateUrl: './world-map.component.html',
  styleUrls: ['./world-map.component.css']
})
export class WorldMapComponent implements OnInit {
  svgCountryPaths: SVGPathElement[] = [];
  countryName: string = '';
  capitalCity: string = '';
  countryRegion: string = '';
  incomeLevel: string = '';
  longitude: string = '';
  latitude: string= '';



  constructor(private WorldBankApiService: WorldBankApiService) { }

  ngOnInit() {
      this.svgCountryPaths = Array.from(document.querySelectorAll<SVGPathElement>('path'));

      this.svgCountryPaths.forEach((pathElement) => {
        pathElement.addEventListener('mouseenter',this.onHover);
        pathElement.addEventListener('mouseleave', this.offHover);
        pathElement.addEventListener('click', this.onClick.bind(this));
      });
      
  }

  onHover(event: MouseEvent) {
    const hoverColor = event.target as SVGElement;
    hoverColor.style.fill='indigo'
  }

  offHover(event: MouseEvent) {
    const offHoverColor = event.target as SVGElement;
    offHoverColor.style.fill='';
  }

  onClick(event: MouseEvent) {
    const country = event.target as SVGPathElement;
    const idOfCountry = country.id;
    this.WorldBankApiService.getCountryData(idOfCountry).subscribe((info) => {
      this.countryName = info[1][0].name;
      this.capitalCity = info[1][0].capitalCity;
      this.countryRegion = info[1][0].region.value;
      this.incomeLevel = info[1][0].incomeLevel.value;
      this.longitude = info[1][0].longitude;
      this.latitude = info[1][0].latitude;
    });
  }

}
