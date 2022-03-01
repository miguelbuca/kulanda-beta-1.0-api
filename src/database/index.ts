import { createConnection } from 'typeorm'

export const connect = async () =>{

    const {
      MYSQL_HOST,
      MYSQL_PORT,
      MYSQL_USER,
      MYSQL_PASSWORD,
      MYSQL_DATABASE,
    } = process.env;

    await createConnection({
      type: "mysql",
      username: MYSQL_USER,
      password: MYSQL_PASSWORD,
      port: Number(MYSQL_PORT),
      host: MYSQL_HOST,
      database: MYSQL_DATABASE,
      entities: [__dirname + "/**/*.entity.ts"],
      synchronize: true,
      ssl: false,
    });
}