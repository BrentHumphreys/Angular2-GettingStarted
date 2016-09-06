import {Component} from 'angular2/core';

@Component({
    //moduleId: module.id,
    selector: 'pm-products',
    templateUrl: 'app/products/product-list.component.html'
})
export class ProductListComponent {//implements OnInit {

pageTitle:string = 'ProdutList'
    constructor() { }

    ngOnInit() { 

    }

}