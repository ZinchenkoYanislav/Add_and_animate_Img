import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  header = 'Добавьте картинку'

  animationsForm!: FormGroup;

  url: any;
  msg = '';
  animationOnImg = '';
  animationsArr = [
    { name: 'animated bounce' },
    { name: 'animated flash' },
    { name: 'animated pulse' },
    { name: 'animated rubberBand' },
	{ name: 'animated shake' },
  ];

  ngOnInit(): void {
    this.animationsForm = new FormGroup({
      animations: new FormControl('1'),
    });
  }

  selectFile(event: any) {
    if (!event.target.files[0] || event.target.files[0].length == 0) {
      this.msg = 'You must select an image';
      return;
    }

    let mimeType = event.target.files[0].type;

    if (mimeType.match(/image\/*/) == null) {
      this.msg = 'Поддерживаются только картинки';
      return;
    }

    let reader = new FileReader();
    reader.readAsDataURL(event.target.files[0]);

    reader.onload = (_event) => {
      this.msg = '';
      this.url = reader.result;
    };
  }

  OnChange1() {
    console.log(this.animationsForm.value.animations);
    (this.animationOnImg = ''),
      (this.animationOnImg = this.animationsForm.value.animations);
  }
}
