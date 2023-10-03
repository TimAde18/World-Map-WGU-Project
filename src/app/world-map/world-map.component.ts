import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-world-map',
  templateUrl: './world-map.component.html',
  styleUrls: ['./world-map.component.css']
})
export class WorldMapComponent implements OnInit {
  svgCountryPaths: SVGPathElement[] = [];

  ngOnInit() {
      this.svgCountryPaths = Array.from(document.querySelectorAll<SVGPathElement>('path'));
      console.log(this.svgCountryPaths)

      this.svgCountryPaths.forEach((pathElement) => {
        pathElement.addEventListener('mouseenter',this.onHover);
        pathElement.addEventListener('mouseleave', this.offHover);
      })
      
  }

  onHover(event: MouseEvent) {
    const hoverColor = event.target as SVGElement;
    hoverColor.style.fill='darkblue'
  }

  offHover(event: MouseEvent) {
    const offHoverColor = event.target as SVGElement;
    offHoverColor.style.fill='';
  }

}
