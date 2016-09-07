import {Component} from 'angular2/core';
import {ProductListComponent} from './products/product-list.component';
import {ProductService} from './products/product.service';
import {HTTP_PROVIDERS} from 'angular2/http';
import 'rxjs/Rx';
@Component({
    selector: 'pm-app',
    template: `<div>
                    <h1>{{pageTitle}}</h1>
                    <div>My First Component</div>
                </div>
                <pm-products></pm-products>
                `,
    directives: [ProductListComponent],
    providers: [HTTP_PROVIDERS,ProductService] 
    

})
export class AppComponent {
    pageTitle: string = 'Acme Product Management';
}
