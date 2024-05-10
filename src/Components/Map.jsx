import GoogleMapReact from 'google-map-react';
// import './App.css'
import { googleAPIKey } from '../../googleApikey';

const AnyReactComponent = ({ text }) => <div>{text}</div>;

function Map() {

    const defaultProps = {
        center: {
            lat: 21.4272,
            lng: 92.0061
        },
        zoom: 18
    };


    return (
        <>
            <div style={{ height: '580px', width: '500px' }}>
                <GoogleMapReact
                    bootstrapURLKeys={{ key: googleAPIKey }}
                    defaultCenter={defaultProps.center}
                    defaultZoom={defaultProps.zoom}
                >
                    <AnyReactComponent
                        lat={defaultProps.center.lat}
                        lng={defaultProps.center.lng}
                        text="My Marker"
                    />
                </GoogleMapReact>
            </div>
        </>
    )
}

export default Map
// npm i google-map-react