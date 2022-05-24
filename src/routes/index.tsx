import React from 'react';
import { NavigationContainer } from '@react-navigation/native';

import { AppStackRoutes } from './app.stack.routes';
import { AppTabRoutes } from './app.tabs.routes';
import { LoadAnimation } from '../components/LoadAnimation';

export function Routes() {

   return (

      <NavigationContainer>
         <AppTabRoutes />
      </NavigationContainer>
   );
}
