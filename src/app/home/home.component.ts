import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NgForm } from '@angular/forms';

@Component({
	selector: 'home-component',
	templateUrl: './home.component.html'
})

export class HomeComponent {

	companyName: String;
	route: ActivatedRoute;
	id: String;
	flag: Boolean = true;

	constructor( private _route: ActivatedRoute) {
		this.route = _route;
		
		this.route.params.subscribe( params => {
			this.companyName = params.name;
			this.id = params.id;

		});
	}

	validate(form: NgForm) {
		console.log(form.value)
	}

	resetUserForm(userForm: NgForm) {
        userForm.resetForm();;
  }

}