// Dom7
var $$ = Dom7;

// Init App
var app = new Framework7({
  	id: 'com.app',
  	root: '#app',
	theme: 'md',
	view: {
        pushState: true
    },
	cache:false,
	cacheDuration: 0,
	modalTitle: 'AppBase',
  	routes: [
		{
		path: '/home/',
    	url: 'index.html',
    	name: 'home',
  		},
		{
		path: '/brands/',
    	url: 'brands.html',
    	name: 'brands',
  		},
		{
		path: '/products/',
    	url: 'products.html',
    	name: 'products',
  		},
		{
		path: '/top/',
    	url: 'top.html',
    	name: 'top',
  		},
		{
		path: '/indoor/',
    	url: 'indoor.html',
    	name: 'indoor',
  		},
		{
		path: '/outdoot/',
    	url: 'outdoot.html',
    	name: 'outdoot',
  		},
		{
		path: '/favorites/',
    	url: 'favorites.html',
    	name: 'favorites',
  		},
		{
		path: '/info-product/',
    	url: 'info-product.html',
    	name: 'info-product',
  		},
		{
		path: '/info-product -2/',
    	url: 'info-product -2.html',
    	name: 'info-product -2',
  		},
		{
		path: '/about/',
    	url: 'about.html',
    	name: 'about',
  		},
		{
		path: '/settings/',
    	url: 'settings.html',
    	name: 'settings',
  		},
		{
		path: '/cart/',
    	url: 'cart.html',
    	name: 'cart',
  		},
	],
	dialog: {
		title: 'AppBase',
		buttonOk: 'Aceptar',
  	},
	popup: {
		closeOnEscape: true,
		backdrop : false
	},
	sheet: {
		closeOnEscape: true,
	},
	popover: {
		closeOnEscape: true,
	},
	actions: {
		closeOnEscape: true,
	}
});



$$('#btnLogin').on('click', function (e) {
	e.preventDefault();
	
	var $valid = $$('#form-login')[0].checkValidity();
	if ($valid){
        $$('#form-login').trigger('reset');	
        app.loginScreen.close('#login');
		
		//app.dialog.alert('!Welcome to AppBase !');
    }
	
});



$$(document).on('click', '#btnAddCart', function (e) {
	e.preventDefault();

	
	var notification = app.notification.create({
      icon: '<i class="material-icons">check</i>',
      title: 'Order',
      titleRightText: '',
      subtitle: '',
      text: "Your order has been received.",
      closeTimeout: 3000,
    });
    notification.open();
	
});





