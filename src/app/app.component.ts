import { Component, OnInit, VERSION } from '@angular/core';
import { from, of } from 'rxjs';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  name = 'Angular ' + VERSION.major;

  ngOnInit(): void {
    of(2, 4, 6, 8).subscribe(console.log);

    from([20, 15, 10, 5]).subscribe(
      item => console.log(`resulting item ... ${item}`),
      err => console.log(`error occurred ${err}`),
      () => console.log('complete')
    );

    from(['Daud', 'Hamdiya', 'Akeem', 'Anisha']).subscribe(
      name => console.log(`resulting name ... ${name}`),
      err => console.log(`error occurred ${err}`),
      () => console.log('completed')
    );
    of('Daud', 'Hamdiya', 'Akeem', 'Anisha').subscribe(
      name => console.log(`resulting name ... ${name}`),
      err => console.log(`error occurred ${err}`),
      () => console.log('completed')
    );
  }
}
