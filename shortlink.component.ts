import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-shortlink',
  template: `
    <div>
      <h2>Create Short Link</h2>
      <form [formGroup]="shortLinkForm" (ngSubmit)="onSubmit()">
        <div>
          <label for="originalUrl">Original URL:</label>
          <input type="text" id="originalUrl" formControlName="originalUrl" required>
        </div>

        <button type="submit" [disabled]="shortLinkForm!.invalid">Create Short Link</button>
      </form>
    </div>
  `,
})
export class ShortLinkComponent {
  shortLinkForm!: FormGroup; // Use non-null assertion operator

  constructor(private fb: FormBuilder) {
    this.shortLinkForm = this.fb.group({
      originalUrl: ['', [Validators.required, Validators.pattern('https?://.+')]],
    });
  }

  onSubmit() {
    if (this.shortLinkForm!.valid) {
      // Implement your short link creation logic here
      const originalUrl = this.shortLinkForm!.get('originalUrl')!.value;
      console.log('Original URL:', originalUrl);
      // Add logic to generate short link and save it to the backend
    }
  }
}
