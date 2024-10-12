import { Component } from '@angular/core';
import { BreakpointObserver } from '@angular/cdk/layout';
import { map } from 'rxjs';
import { ToContactPageComponent } from '../../components/to-contact-page/to-contact-page.component';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-info',
  standalone: true,
  imports: [ToContactPageComponent, RouterLink],
  templateUrl: './info.component.html',
  styleUrl: './info.component.scss',
})
export class InfoComponent {
  constructor(private breakpointObserver: BreakpointObserver) {}

  isTableWidth: boolean = false; //768px
  // isDesktopWidth: boolean = false; //1024px
  profileImage: string = '/assets/homepage/mobile/image-homepage-profile.jpg';
  ngOnInit() {
    this.breakpointObserver
      .observe('(min-width: 768px)')
      .pipe(map((result) => result.matches))
      .subscribe((matches) => {
        this.isTableWidth = matches;
        if (this.isTableWidth) {
          this.profileImage =
            '/assets/homepage/tablet/image-homepage-profile.jpg';
        } else {
          this.profileImage =
            '/assets/homepage/mobile/image-homepage-profile.jpg';
        }
      });
  }
}
