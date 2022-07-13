import {MyComponent,info} from 'dist';
import i18next  from 'i18next';
import { Suspense } from 'react';
import { initReactI18next, useTranslation } from 'react-i18next';
import {en,es} from 'lang';


i18next.use(initReactI18next)
.init({
  resources:{
    en:{translation:en},
    es:{translation:es}
    //sp:transactionSp
  },
  lng:"es",
  fallbackLng:"en",
  interpolation:{escapeValue:false}
})

function MyApp() {
  const {t} = useTranslation()
  return (
    <Suspense fallback="Loading....">
     <MyComponent title={t('welcome')}/>
     <p>{t('description')}</p>
    </Suspense>
  );
}

export default MyApp;
