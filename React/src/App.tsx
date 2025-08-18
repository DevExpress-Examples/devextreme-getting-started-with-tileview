import 'devextreme/dist/css/dx.fluent.blue.light.css';
import './App.css';
import { TileView } from 'devextreme-react/tile-view';
import { tiles } from './data.js';

function TileRender(data: { icon: string; title: string; text: string }): JSX.Element {
  return (
    <>
      <div className="icon-box">
        <i className={`dx-icon-${data.icon}`}></i>
      </div>
      <div className="text-box">
        <h3 className="tile-title">{data.title}</h3>
        <p className="tile-text">{data.text}</p>
      </div>
    </>
  );
}

function App(): JSX.Element {
  return (
    <>
      <div className='demo-container'>
        <TileView
          dataSource={tiles}
          itemMargin={16}
          baseItemWidth={280}
          baseItemHeight={160}
          height={368}
          activeStateEnabled={false}
          itemRender={TileRender}
        />
      </div>
    </>
  );
}

export default App;
