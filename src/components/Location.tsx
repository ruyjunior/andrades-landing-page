import React from "react";
import { FaMapMarkerAlt, FaDirections } from "react-icons/fa";
const address = 'Av. Vasco da Gama, 292 - Engenho Velho de Brotas, Salvador - BA, 40240-090, Brasil '

const Location: React.FC = () => {
    const googleMapsUrl = `https://www.google.com/maps?q=${address}&output=embed`;
    const directionsUrl = `https://www.google.com/maps/dir/?api=1&destination=${address}`;

    return (
        <section id="location" className="py-16 bg-gray-100">
            <div className="container mx-auto px-6 text-center">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 flex items-center justify-center gap-2">
                    <FaMapMarkerAlt className="text-secundary" />
                    Nossa Localização
                </h2>
                <p className="mt-4 text-gray-600">
                    Venha treinar com a gente! Estamos localizados em um espaço moderno e bem equipado.
                </p>

                <div className="mt-8 w-full max-w-4xl mx-auto shadow-lg rounded-lg overflow-hidden">
                    <iframe
                        src={googleMapsUrl}
                        width="100%"
                        height="400"
                        loading="lazy"
                        className="border-0"
                        allowFullScreen
                    ></iframe>
                </div>

                <a
                    href={directionsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-6 inline-flex items-center px-6 py-3 bg-secundary text-black text-lg font-semibold rounded-lg shadow-md hover:bg-primary-dark transition duration-300"
                >
                    <FaDirections className="mr-2" />
                    Traçar Rota
                </a>
            </div>
        </section>
    );
};

export default Location;
