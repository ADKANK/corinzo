import { Component } from '@angular/core';
import { PageInfoComponent } from '../../shared/page-info/page-info.component';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ContactIconComponent } from '../../shared/contact-icon/contact-icon.component';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [PageInfoComponent, CommonModule, ReactiveFormsModule, ContactIconComponent],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent {
  contactForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.contactForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      mobile: ['', Validators.required],
      details: ['', Validators.required]
    });
  }

  onSubmit() {
    if (this.contactForm.valid) {
      console.log(this.contactForm.value);
    }
  }
}
