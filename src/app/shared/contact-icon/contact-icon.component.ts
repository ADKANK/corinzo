import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-contact-icon',
  standalone: true,
  imports: [],
  templateUrl: './contact-icon.component.html',
  styleUrl: './contact-icon.component.css'
})
export class ContactIconComponent {
  @Input() imgPath: string = ""
  @Input() description: string = ""
}
