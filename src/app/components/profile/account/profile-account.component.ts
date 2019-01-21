import {Component, OnInit} from '@angular/core';
import {PageComponent} from '@components/page/page.component';

@Component({
	selector: 'zm-profile-account',
	templateUrl: './profile-account.component.html',
	styleUrls: ['./profile-account.component.scss']
})
export class ProfileAccountComponent implements OnInit {

	constructor() {
	}

	ngOnInit() {

	}

}

@Component({
	selector: 'zm-profile-account-page',
	templateUrl: './profile-account.page.component.html',
	styleUrls: ['./profile-account.page.component.scss']
})
export class ProfileAccountPageComponent implements PageComponent {

	constructor() {
	}

	ngOnInit() {

	}

}
