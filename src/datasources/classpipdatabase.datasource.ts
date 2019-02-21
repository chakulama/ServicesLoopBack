import {inject} from '@loopback/core';
import {juggler} from '@loopback/repository';
import * as config from './classpipdatabase.datasource.json';

export class ClasspipdatabaseDataSource extends juggler.DataSource {
  static dataSourceName = 'classpipdatabase';

  constructor(
    @inject('datasources.config.classpipdatabase', {optional: true})
    dsConfig: object = config,
  ) {
    super(dsConfig);
  }
}
