export enum LogLevel {
	INFO = 'info',
	WARN = 'warn',
	ERROR = 'error',
	DEBUG = 'debug'
}

export function createLogger(): {
	setEnabled: (enabled: boolean) => void;
	log: (level: LogLevel, message: string) => void;
	info: (message: string) => void;
	warn: (message: string) => void;
	error: (message: string) => void;
	debug: (message: string) => void;
} {
	let enabled = true; // Logging is enabled by default

	function setEnabled(newEnabled: boolean): void {
		enabled = newEnabled;
	}

	function log(level: LogLevel, message: string): void {
		if (!enabled) return;

		const timestamp = new Date().toISOString();
		switch (level) {
			case LogLevel.INFO:
				console.info(`[INFO] [${timestamp}] ${message}`);
				break;
			case LogLevel.WARN:
				console.warn(`[WARN] [${timestamp}] ${message}`);
				break;
			case LogLevel.ERROR:
				console.error(`[ERROR] [${timestamp}] ${message}`);
				break;
			case LogLevel.DEBUG:
				console.debug(`[DEBUG] [${timestamp}] ${message}`);
				break;
			default:
				console.log(`[LOG] [${timestamp}] ${message}`);
		}
	}

	function info(message: string): void {
		log(LogLevel.INFO, message);
	}

	function warn(message: string): void {
		log(LogLevel.WARN, message);
	}

	function error(message: string): void {
		log(LogLevel.ERROR, message);
	}

	function debug(message: string): void {
		log(LogLevel.DEBUG, message);
	}

	return {
		setEnabled,
		log,
		info,
		warn,
		error,
		debug
	};
}
