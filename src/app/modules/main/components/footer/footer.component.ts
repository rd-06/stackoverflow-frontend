import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent {

  footerItems = [
    {
      listTitle: 'STACK OVERFLOW',
      listItems: ['Questions', 'Help']
    },
    {
      listTitle: 'PRODUCTS',
      listItems: ['Teams', 'Advertising', 'Collectives', 'Talent']
    },
    {
      listTitle: 'COMPANY',
      listItems: ['About', 'Press', 'Work Here', 'Legal', 'Privacy Policy', 'Terms Of Service', 'Contact Us', 'Cookie Settings', 'Cookie Policy']
    },
    {
      listTitle: 'STACK EXCHANGE NETWORK',
      listItems: [
        'Technology',
        'Culture & recreation',
        'Life & arts',
        'Science',
        'Professional',
        'Business',
        'API',
        'Data']
    }
  ];

}
