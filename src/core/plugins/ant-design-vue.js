import Vue from 'vue';
import {
  Pagination,
  Button,
  LocaleProvider,
  Layout,
  Menu,
  Icon,
  Input,
  Tooltip,
} from 'ant-design-vue';

Vue.component(LocaleProvider.name, LocaleProvider);
Vue.component(Pagination.name, Pagination);
Vue.use(Button);
Vue.use(Layout);
Vue.use(Menu);
Vue.use(Icon);
Vue.use(Input);
Vue.use(Tooltip);
