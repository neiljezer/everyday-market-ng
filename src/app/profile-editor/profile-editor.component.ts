import { Component } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-profile-editor',
  templateUrl: './profile-editor.component.html',
  styleUrl: './profile-editor.component.css'
})
export class ProfileEditorComponent {

  profileForm = new FormGroup ({

    name: new FormGroup(''),
    email: new FormGroup(''),
    dateOfBirth: new FormGroup(''),
    streetAddress: new FormGroup(''),
    province: new FormGroup(''),
    country: new FormGroup(''),


  })

}
