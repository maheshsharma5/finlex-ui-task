import { Component, OnInit } from '@angular/core';
import { environment } from '../environments/environment';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'questionnairev1';
  options= [{ id: 'first', label: 'first', value: 'male' }];
  ngOnInit(): void {
    const head = document.getElementsByTagName('head')[0];
    
    const link_style_css = document.createElement('link');
    link_style_css.rel = "stylesheet";
    link_style_css.href= `${environment.fxThemeServer}/styles.css?version=${Date.now()}`
    head.appendChild(link_style_css);

    const link_customer_css = document.createElement('link');
    link_customer_css.rel = "stylesheet";
    link_customer_css.href= `${environment.fxThemeServer}/customer/styles.css?version=${Date.now()}`
    head.appendChild(link_customer_css);
  }
}
