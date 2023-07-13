import { App } from '@/app';
import { ValidateEnv } from '@utils/validateEnv';
import { IndexRoute } from './routes/index.route';

ValidateEnv();

const app = new App([new IndexRoute()]);

app.listen();
