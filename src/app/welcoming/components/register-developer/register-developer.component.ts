import {Component, EventEmitter, Output} from '@angular/core';
import {FormControl, FormGroup, ɵValue} from "@angular/forms";

@Component({
  selector: 'app-register-developer',
  templateUrl: './register-developer.component.html',
  styleUrls: ['./register-developer.component.css']
})
export class RegisterDeveloperComponent {
  developerForm = new FormGroup({
    firstName: new FormControl(''),
    lastName: new FormControl('')
  });

  @Output() developerRegistered = new EventEmitter<{ firstName: string, lastName: string }>();

  onSubmit() {
    let firstName = this.developerForm.value.firstName != null ? this.developerForm.value.firstName.toString() : '';
    let lastName = this.developerForm.value.lastName == null ? '' : this.developerForm.value.lastName.toString();
    this.onDeveloperRegistered(firstName, lastName);
  }

  onDeveloperRegistered(firstName: string, lastName: string) {
    this.developerRegistered.emit({firstName, lastName});
  }

}
