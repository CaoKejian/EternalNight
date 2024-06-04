// 使用示例
// const log = createLogger()
// log.error('这是一个错误信息')
// log.info('这是一条普通信息')
// log.warning('这是一条警告信息')
interface Log {
  error(message: string): void;
  info(message: string): void;
  warning(message: string): void;
}
export function createLogger(): Log {
  const RESET = '\x1b[0m'
  const colors = {
    error: '\x1b[31m', // 红色
    info: '\x1b[37m',   // 白色
    warning: '\x1b[33m', // 黄色
  }

  const log: Log = {
    error(message) {
      console.log(colors.error + '[ERROR] ' + message + RESET)
    },
    info(message) {
      console.log(colors.info + '[INFO] ' + message + RESET)
    },
    warning(message) {
      console.log(colors.warning + '[WARNING] ' + message + RESET)
    },
  }

  return log
}