/**
 * @author Victor Andrade <victor.andrade@caixamagica.pt>,
 *
 * @see react-intl docs: https://github.com/formatjs/react-intl
 *
 * @version 20200116
 * @since 20200116 Initial release
 *
 */

import enLang from './entries/en-US';
import ptLang from './entries/pt-PT';

import {addLocaleData} from 'react-intl';

const AppLocale = {
  pt: ptLang,
  en: enLang,
};
addLocaleData(AppLocale.pt.data);
addLocaleData(AppLocale.en.data);

export default AppLocale;
