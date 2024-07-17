import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, ReactiveFormsModule],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'FormReactive';

  userForm: FormGroup;

  constructor(){

    this.userForm = new FormGroup({
      names: new FormControl('', [Validators.required, Validators.pattern(/^[a-zA-ZñÑ\s]{3,50}$/)]),
      number: new FormControl('', Validators.required),
      email: new FormControl('', [Validators.pattern( /^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/), Validators.required]),
      birthdate: new FormControl('', Validators.required),
      gender: new FormControl('', Validators.required),
      description: new FormControl('')
    })
  }

  handleClick(): void{
    console.log(this.userForm);
    
  }

}
