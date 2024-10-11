<script>
  import { h } from 'vue'
  import routes from '../routes';

  export default {
    name: 'router-view',
    props: {
      currentRoute: String,
      defaultRoute: String
    },
    render() {
      return h(routes[this.currentRoute] ||
               routes[this.defaultRoute] || 'div');
    }
  };
</script>
