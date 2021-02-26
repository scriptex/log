[![GitHub release](https://img.shields.io/github/release/scriptex/log.svg)](https://github.com/scriptex/log/releases/latest)
[![GitHub issues](https://img.shields.io/github/issues/scriptex/log.svg)](https://github.com/scriptex/log/issues)
[![GitHub last commit](https://img.shields.io/github/last-commit/scriptex/log.svg)](https://github.com/scriptex/log/commits/master)
[![Analytics](https://ga-beacon.appspot.com/UA-83446952-1/github.com/scriptex/log/README.md)](https://github.com/scriptex/log/)

# Log

> Dynamic console logging - log using the optimal console method.
> Provides method overwriting, beforeLog and afterLog hooks.

## Usage

```javascript
// String
log('string');

// number
log(1);

// array
log(['test', '1', { object: 'prop' }, ['array']]);

// function
log(() => {
	const a = 1;
	const b = 2;

	return a + b;
});

// object
log({
	prop1: 'value1',
	prop2: {
		nestedProp1: 'nestedValue1',
		nestedProp2: 'nestedValue2',
		nestedProp3: 'nestedValue3',
		nestedProp4: 'nestedValue4'
	},
	prop3: 'value3',
	prop4: 'value4'
});

// null
log(null);

// undefined
log(undefined);
log(void 0);

// boolean
log(true);

// RegExp
log(/^[a-z]{3,}$/);

// Date
log(new Date());
log(new Date().getTime());

// Symbol
log(Symbol('foo'));

// Constructor
log(function () {});
log(class A {});
log(Array);
log(Function);
log(new Function());
```

## Support this project

[![Tweet](https://img.shields.io/badge/Tweet-Share_this_repository-blue.svg?style=flat-square&logo=twitter&color=38A1F3)](https://twitter.com/intent/tweet?text=Checkout%20this%20awesome%20software%20project%3A&url=https%3A%2F%2Fgithub.com%2Fscriptex%2Flog&via=scriptexbg&hashtags=software%2Cgithub%2Ccode%2Cawesome)
[![Donate](https://img.shields.io/badge/Donate-Support_me_on_PayPal-blue.svg?style=flat-square&logo=paypal&color=222d65)](https://www.paypal.me/scriptex)
[![Become a Patron](https://img.shields.io/badge/Become_Patron-Support_me_on_Patreon-blue.svg?style=flat-square&logo=patreon&color=e64413)](https://www.patreon.com/atanas)
[![Buy Me A Coffee](https://img.shields.io/badge/Donate-Buy%20me%20a%20coffee-yellow.svg?logo=ko-fi)](https://ko-fi.com/scriptex)

## LICENSE

MIT
