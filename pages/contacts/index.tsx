import type { NextPage } from 'next'
import Meta from '../../components/Meta/Meta'
import { YMaps, Map, Placemark } from '@pbe/react-yandex-maps';
import Banner from "../../components/Banner/Banner";

const Contacts: NextPage = () => {
    return (
        <div className = 'flex flex-col items-center justify-center'>
          <Meta title = 'контакты' description = 'связь с нами' />
          <Banner />
          <YMaps>
              <Map width = '70rem'
                   height = '30rem'
                   defaultState={{
                       center: [61.672195, 50.789462],
                       zoom: 10,
                   }}
              >
                  <Placemark geometry={[61.672195, 50.789462]} />
              </Map>

          </YMaps>
        </div>
    )
}

export default Contacts
