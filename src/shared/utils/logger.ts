interface LogLevel {
  DEBUG: 'debug';
  INFO: 'info';
  WARN: 'warn';
  ERROR: 'error';
}

const LOG_LEVELS: LogLevel = {
  DEBUG: 'debug',
  INFO: 'info',
  WARN: 'warn',
  ERROR: 'error',
};

class Logger {
  private isDevelopment = __DEV__;

  private log(level: keyof LogLevel, message: string, data?: any) {
    if (!this.isDevelopment) return;

    const timestamp = new Date().toISOString();
    const logMessage = `[${timestamp}] [${level}] ${message}`;

    switch (level) {
      case 'DEBUG':
        console.log(logMessage, data || '');
        break;
      case 'INFO':
        console.info(logMessage, data || '');
        break;
      case 'WARN':
        console.warn(logMessage, data || '');
        break;
      case 'ERROR':
        console.error(logMessage, data || '');
        break;
    }
  }

  debug(message: string, data?: any) {
    this.log('DEBUG', message, data);
  }

  info(message: string, data?: any) {
    this.log('INFO', message, data);
  }

  warn(message: string, data?: any) {
    this.log('WARN', message, data);
  }

  error(message: string, data?: any) {
    this.log('ERROR', message, data);
  }

  componentMount(componentName: string, props?: any) {
    this.info(`${componentName} mounted`, props);
  }

  componentUnmount(componentName: string) {
    this.info(`${componentName} unmounted`);
  }

  valueChange(componentName: string, oldValue: any, newValue: any) {
    this.debug(`${componentName} value changed`, { oldValue, newValue });
  }
}

export const logger = new Logger();
