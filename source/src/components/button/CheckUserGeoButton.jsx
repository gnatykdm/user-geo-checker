// CheckUserGeoButton.jsx
import './CheckUserGeoButton.css';
import { FaMapMarkerAlt, FaCheck } from 'react-icons/fa';
import { useState } from 'react';
import { Spinner } from 'react-bootstrap';

const CheckUserGeoButton = () => {
    const [loading, setLoading] = useState(false);
    const [success, setSuccess] = useState(false);

    const handleCheckGeo = () => {
        if (!navigator.geolocation) {
            console.log('Geolocation is not supported by your browser.');
            return;
        }

        setLoading(true);
        setSuccess(false);

        navigator.geolocation.getCurrentPosition(
            (position) => {
                const { latitude, longitude } = position.coords;
                const timezone = Intl.DateTimeFormat().resolvedOptions().timeZone;

                console.log('Latitude:', latitude);
                console.log('Longitude:', longitude);
                console.log('Timezone:', timezone);

                if (window.Telegram?.WebApp) {
                    window.Telegram.WebApp.sendData(
                        JSON.stringify({ latitude, longitude, timezone })
                    );
                }

                setLoading(false);
                setSuccess(true);
            },
            (error) => {
                console.error('Error getting location:', error);
                setLoading(false);
                setSuccess(false);
            },
            { enableHighAccuracy: true }
        );
    };


    return (
        <div className="check-geo-btn text-center">
            <button
                type="button"
                className="geo-btn d-flex align-items-center justify-content-center"
                onClick={handleCheckGeo}
                disabled={loading || success}
            >
                {success ? (
                    <>
                        <FaCheck className="btn-icon" /> Success
                    </>
                ) : (
                    <>
                        {loading && (
                            <Spinner
                                animation="border"
                                size="sm"
                                variant="light"
                                className="me-2"
                            />
                        )}
                        <FaMapMarkerAlt className="btn-icon" /> Check Geo
                    </>
                )}
            </button>
            {success && (
                <div className="success-text mt-2">
                    Geo-Data collected successfully!
                </div>
            )}
        </div>
    );
};

export default CheckUserGeoButton;
