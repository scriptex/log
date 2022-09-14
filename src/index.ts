type UnknownFunction = (input: unknown) => unknown;

const isConstructable = (f: unknown): boolean => {
	try {
		// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Reflect
		// If support for older environments is a must:
		// https://github.com/tvcutsem/harmony-reflect
		Reflect.construct(String, [], f as any);
	} catch (e) {
		return false;
	}

	return true;
};

const on = (fn: UnknownFunction | null, input: unknown): unknown => {
	if (fn && typeof fn === 'function') {
		return fn(input);
	}

	return;
};

const log = (
	input: any,
	method: string = '',
	beforeLog: UnknownFunction | null = null,
	afterLog: UnknownFunction | null = null
): unknown => {
	let fn = 'log';

	const isMap = input instanceof Map;
	const isSet = input instanceof Set;
	const isNull = input === null;
	const isArray = Array.isArray(input);
	const isError = input instanceof Error && typeof input.message !== 'undefined';
	const isObject = typeof input === 'object';
	const isRegExp = isObject && !isNull && !isArray && input.constructor === RegExp;
	const isJsObject = isObject && !isNull && !isArray && input.constructor === Object;
	const isFunction = typeof input === 'function';
	const isConstructor = isConstructable(input);

	if (isJsObject || isMap) {
		fn = 'dir';
	}

	if (isArray || isSet) {
		fn = 'table';
	}

	if (isError || isRegExp || isFunction || isConstructor) {
		input = input.toString();
	}

	if (isMap) {
		input = Object.fromEntries(input);
	}

	if (isSet) {
		input = Array.from(input);
	}

	const func = method || fn;

	if (console && (console as any)[func] && typeof (console as any)[func] === 'function') {
		on(beforeLog, input);

		(console as any)[func](input);

		on(afterLog, input);
	}

	return input;
};
