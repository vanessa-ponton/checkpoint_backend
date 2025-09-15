import { DataSource } from "typeorm";
import { Pays } from '../entities/pays';
; 

export const dataSource = new DataSource({
  type: "sqlite",
  database: "database.sqlite",
  entities: [Pays],
  synchronize: true,
});


