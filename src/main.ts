import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';
<<<<<<< HEAD

=======
import {ActivityModule} from './app/activity/activity.module';
>>>>>>> 412227b1cae194b32db6c7b8c02538a4b793423e
if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.log(err));
