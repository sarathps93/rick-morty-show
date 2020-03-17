import { transports, createLogger, format } from 'winston';

const logger = createLogger({
  format: format.combine(
    format((info) => {
      const formattedInfo = info;
      formattedInfo.level = info.level.toUpperCase();
      return formattedInfo;
    })(),
    format.timestamp(),
    format.colorize({ all: true }),
    format.printf((info) => {
      const {
        timestamp, level, message, ...args
      } = info;

      const ts = timestamp.slice(0, 19).replace('T', ' ');
      const output = `${ts} [${level}]: ${message} ${Object.keys(args).length ? JSON.stringify(args, null, 2) : ''}`;
      return output;
    }),
  ),
  transports: [
    new transports.Console(),
  ],
});

export default logger;
