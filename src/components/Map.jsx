import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import 'leaflet/dist/leaflet.css'

export default function Map() {
  const position = [53.9684, 18.5315]

  return (
    <section
      id="map"
      className="min-h-screen flex items-center justify-center bg-gray-100 px-4 sm:px-8 md:px-16"
    >
      <div className="w-full h-[300px] sm:h-[400px] md:h-[500px] rounded-2xl overflow-hidden shadow-lg">
        <MapContainer
          center={position}
          zoom={16}
          scrollWheelZoom={false}
          className="w-full h-full"
        >
          <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
          <Marker position={position}>
            <Popup>
              FlowCoffee
              <br />
              <a
                href={`https://www.google.com/maps/dir/?api=1&destination=${position[0]},${position[1]}`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 underline"
              >
                Prowadź mnie
              </a>
            </Popup>
          </Marker>
        </MapContainer>
      </div>
    </section>
  )
}
