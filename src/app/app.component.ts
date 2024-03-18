import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { DateTime } from 'ts-luxon';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrl: './app.component.scss'
})
export class AppComponent {
    title = 'ng17-app';
    formValue: string | null = null;

    minDate = DateTime.now().minus({hours: 1});

    form = new FormGroup({
        time: new FormControl('12:43')
    });

    onSubmit(): void {
        this.formValue = JSON.stringify(this.form.controls.time.value);
    }

    setTime(): void {
        this.form.controls.time.setValue('00:00');
    }
}
