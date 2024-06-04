import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RecaptchaService } from '../service/recaptcha.service';
import { ReCaptchaV3Service } from 'ng-recaptcha';

@Component({
  selector: 'app-home',
  imports: [
    CommonModule
  ],
  standalone: true,
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {

}
