import { Injectable } from '@nestjs/common';
import { Pool } from 'pg';
import { databaseConfig } from './Data/database.config';
@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }

  getTest(): string {
    return 'Mon test';
  }
}

export class DatabaseService {
  private readonly pool: Pool;

  constructor() {
    this.pool = new Pool(databaseConfig);
  }

  async executeQuery(query: string, params?: any[]): Promise<any> {
    const client = await this.pool.connect();

    try {
      const result = await client.query(query, params);
      return result.rows;
    } finally {
      client.release();
    }
  }

  async insertDataBase(query: string): Promise<any> {
    const client = await this.pool.connect();
    try {
      const result = await client.query(query);
      return result;
    } finally {
      client.release();
    }
  }
}
