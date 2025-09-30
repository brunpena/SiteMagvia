import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";

export function Mapa() {
  const center = [-24.028250, -52.383713];

  return (
    <MapContainer center={center} zoom={15} style={{ height: "400px", width: "100%", borderRadius: "12px" }}>
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
      />
      <Marker position={center}>
        <Popup>
          Fundação Educere 📍
        </Popup>
      </Marker>
    </MapContainer>
  );
}
