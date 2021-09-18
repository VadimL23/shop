import React from 'react';
import cn from 'classnames';
import s from './style.module.scss';
import { YMaps, Map, Polygon } from 'react-yandex-maps';

type IProps = {
  //onClick?: (event: React.MouseEvent<HTMLElement>, index: number) => void,
  //className?: string,
  //children?: React.ReactNode,
};

const mapState = {
  center: [59.9386, 30.3141],
  zoom: 9,
  searchControlProvider: 'yandex#search',
};

const geometryGreenArea = {
  coordinates: [
    [
      [59.9864, 30.1662],
      [59.9885, 30.1683],
      [59.9898, 30.177],
      [59.9926, 30.1904],
      [60.0058, 30.1951],
      [60.0213, 30.2185],
      [60.0372, 30.2246],
      [60.0843, 30.2218],
      [60.0983, 30.2676],
      [60.0978, 30.2999],
      [60.0947, 30.3448],
      [60.0902, 30.3702],
      [60.0838, 30.3784],
      [60.0622, 30.387],
      [60.0537, 30.4001],
      [60.0436, 30.4341],
      [60.0196, 30.456],
      [60.0098, 30.4746],
      [59.9912, 30.4815],
      [59.98, 30.5222],
      [59.9686, 30.551],
      [59.9576, 30.5517],
      [59.9392, 30.5387],
      [59.9176, 30.5259],
      [59.889, 30.5241],
      [59.8698, 30.5317],
      [59.8548, 30.506],
      [59.8477, 30.4613],
      [59.8267, 30.4369],
      [59.8175, 30.396],
      [59.8106, 30.3257],
      [59.8343, 30.273],
      [59.8153, 30.2079],
      [59.8189, 30.1674],
      [59.8443, 30.1409],
      [59.8613, 30.1423],
      [59.8742, 30.179],
      [59.9023, 30.2048],
      [59.9373, 30.201],
      [59.9723, 30.2099],
      [59.983, 30.1924],
    ],
  ],
  fillRule: 'evenOdd',
};

const optionsGreenArea = {
  fillColor: '#00FF00',
  strokeColor: '#109810',
  opacity: 0.5,
  strokeWidth: 5,
};

const geometryRedArea = {
  coordinates: [
    [
      [60.0387, 29.9955],
      [60.0595, 30.1487],
      [60.066, 30.1679],
      [60.0773, 30.1846],
      [60.0828, 30.2029],
      [60.0952, 30.2026],
      [60.1075, 30.1974],
      [60.1272, 30.2246],
      [60.1287, 30.2575],
      [60.1329, 30.3203],
      [60.1301, 30.3821],
      [60.1264, 30.4632],
      [60.1109, 30.5064],
      [60.0667, 30.4954],
      [60.0471, 30.6611],
      [60.0241, 30.7085],
      [59.9735, 30.7002],
      [59.9249, 30.7099],
      [59.8735, 30.6776],
      [59.8058, 30.6906],
      [59.7528, 30.6583],
      [59.7157, 30.6219],
      [59.7073, 30.4427],
      [59.7115, 30.2676],
      [59.7014, 30.1439],
      [59.7132, 30.045],
      [59.7607, 30.0018],
      [59.786, 29.8974],
      [59.8455, 29.8047],
      [59.8918, 29.6687],
      [59.9304, 29.6687],
      [59.9968, 29.7003],
      [60.0042, 29.6981],
      [60.0226, 29.6778],
      [60.0264, 29.6813],
      [60.0199, 29.7245],
      [60.0219, 29.7918],
      [60.0383, 29.9659],
    ],
  ],
  fillRule: 'evenOdd',
};

const optionsRedArea = {
  fillColor: '#DB709377',
  strokeColor: '#990066',
  opacity: 0.5,
  strokeWidth: 5,
};

const DeliveryPage = () => {
  // React.useEffect(() => {
  //   loadScript("https://api-maps.yandex.ru/2.1/?apikey=c8214d76-a83c-48a0-ac30-18f3a3f2ccb0&lang=ru_RU", () => {
  //     window.ymaps.ready(init);
  //   });
  // }, []);
  return (
    <div className={cn(s.delivery_block)}>
      <div className={cn(s.content_description)}>
        <table className={cn(s.features_table)}>
          <thead>
            <tr>
              <td>Общая стоимость заказа</td>
              <td className={cn(s.green)}>Зеленая облать</td>
              <td className={cn(s.grey)}>Бордовая зона</td>
            </tr>
          </thead>

          {/* <tfoot>
	<tr>
		<td >Итого по размерам</td>
		<td className={cn(s.grey)}>Мелкие</td>
		<td className={cn(s.grey)}>Средние</td>
		<td className={cn(s.green)}>Крупные</td>
	</tr>
</tfoot> */}

          <tbody>
            <tr>
              <td>Менее 1500 рублей</td>
              <td className={cn(s.green)}>150</td>
              <td className={cn(s.grey)}>300</td>
            </tr>

            <tr>
              <td>От 1500 до 2500 рублей</td>
              <td className={cn(s.green)}>0</td>
              <td className={cn(s.grey)}>150</td>
            </tr>

            <tr>
              <td>От 2500 рублей</td>
              <td className={cn(s.green)}>0</td>
              <td className={cn(s.grey)}>0</td>
            </tr>
          </tbody>
        </table>
      </div>
      <div className={cn(s.content_map)}>
        <YMaps>
          <Map
            defaultState={mapState}
            options={{ autoFitToViewport: 'always' }}
            modules={['package.full']}
            height='100%'
            width='100%'
          >
            <Polygon
              geometry={geometryGreenArea.coordinates}
              fillRule={geometryGreenArea.fillRule}
              options={optionsGreenArea}
            />
            <Polygon
              geometry={geometryRedArea.coordinates}
              fillRule={geometryGreenArea.fillRule}
              options={optionsRedArea}
            />
          </Map>
        </YMaps>
      </div>
    </div>
  );
};

export { DeliveryPage };
