import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { faMapMarkerAlt, faPhoneAlt as faPhone, faEnvelope as faMail } from '@fortawesome/free-solid-svg-icons';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';


// jQuery
declare var $: any;

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {



  faLocation = faMapMarkerAlt;
  faPhone = faPhone;
  faWhatsapp = faWhatsapp;
  faMail = faMail;

  formUrl: string = "";
  formSending: Boolean = false;
  formSent: Boolean = false;
  formError: Boolean = false;

  contactForm = this.fb.group({
    name: ['', [Validators.required]],
    email: ['', [Validators.email]],
    message: ['', [Validators.required]],
    _gotcha: [''],
  });

  constructor(private fb: FormBuilder, public httpClient: HttpClient) {
    this.formUrl = environment.formUrl;
  }

  ngOnInit(): void {
  }

  onSubmit() {
    if (this.contactForm.valid) {
      this.formSending = true;
      this.httpClient.post<any>(this.formUrl, this.contactForm.value).subscribe(
        data => {
          if (data.status == "success") {
            this.contactForm.reset();
            this.formSent = true;
          } else {
            this.formError = true
          }
          this.formSending = false;
        },
        error => {
          this.formError = true
          this.formSending = false;
        }
      );
    }

  }

}
