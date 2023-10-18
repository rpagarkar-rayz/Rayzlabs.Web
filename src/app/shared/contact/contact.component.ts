import { Component } from '@angular/core';
import { UntypedFormBuilder, UntypedFormGroup, Validators } from '@angular/forms';
import { RayzService } from '../../service/rays.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss'],
  providers :[RayzService]
})
export class ContactComponent {
  submit!: boolean;
  contactform!: UntypedFormGroup;

  constructor(private formBuilder: UntypedFormBuilder,
   private rayzService: RayzService ) { }

  ngOnInit(): void {
    /**
     * Bootstrap validation form data
     */
    this.contactform = this.formBuilder.group({
      name: ['', ],
      email: ['', ],
      subject: ['', ],
      message: ['', ]
    })
  }

  /**
    * Returns form
    */
  get form() {
    return this.contactform.controls;
  }

  validSubmit() {
    var name =  this.contactform.get("name")!.value;
    var email =  this.contactform.get("email")!.value;
    var subject = this.contactform.get("subject")!.value;
    var message = this.contactform.get("message")!.value;
    console.log(name)
    if (name == "" || name == null) {
        document.getElementById('error-msg')!.innerHTML = "<div class='alert alert-danger error_message'>Please enter a name*</div>";
        return false;
    }
    if (email == "" || email == null) {
        document.getElementById('error-msg')!.innerHTML = "<div class='alert alert-danger error_message'>Please enter a email*</div>";
        return false;
    }
    if (subject == "" || subject == null) {
        document.getElementById('error-msg')!.innerHTML = "<div class='alert alert-danger error_message'>Please enter a subject*</div>";
        return false;
    }
    if (message == "" || message == null) {
      document.getElementById('error-msg')!.innerHTML = "<div class='alert alert-danger error_message'>Please enter a message*</div>";
      return false;
  }
    return true
  }

  submitForm() {    
    if (this.validSubmit()) {
      var name =  this.contactform.get("name")!.value;
      var email =  this.contactform.get("email")!.value;
      var subject = this.contactform.get("subject")!.value;
      var message = this.contactform.get("message")!.value;
      this.rayzService.sendContactEmail(name, email, subject, message).subscribe(res =>
        {
          
        });
    }
  }
}
