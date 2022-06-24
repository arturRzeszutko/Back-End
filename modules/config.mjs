//config file for database connection
export const config = {
  server: '127.0.0.1',
  user: 'admin',
  password: 'admin',
  database: 'university',
  pool: {
    max: 10,
    min: 0,
    idleTimeoutMillis: 30000
  },
  options: {
    trustServerCertificate: true
  }
};