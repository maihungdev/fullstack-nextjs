import MediaQuery from 'react-responsive';
import CategoryGrid from '../components/desktop/category/CategoryGrid';
import CategoryGridm from '../components/mobile/category/CategoryGrid';

const Example = () => (
  <>
    <div>Device Test!</div>
    <MediaQuery query="(min-device-width: 1224px)">
     <CategoryGrid/>
    </MediaQuery>
    <MediaQuery query="(max-device-width: 1224px)">
      <CategoryGridm/>
    </MediaQuery>
  </>
)

export default Example