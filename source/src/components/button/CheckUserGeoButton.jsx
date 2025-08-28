import './CheckUserGeoButton.css';
import { useState, useEffect } from 'react';
import { FaMapMarkerAlt, FaCheck } from 'react-icons/fa';
import { Spinner } from 'react-bootstrap';

const CheckUserGeoButton = () => {
    const [loading, setLoading] = useState(false);
    const [success, setSuccess] = useState(false);
    const [userId, setUserId] = useState(null);
    const [chatId, setChatId] = useState(null);
    const [switchType, setSwitchType] = useState(null);

    useEffect(() => {
        const params = new URLSearchParams(window.location.search);
        setUserId(params.get("user_id"));
        setChatId(params.get("chat_id"));
        setSwitchType(params.get("type") || "default");
    }, []);

    const handleCheckGeo = async () => {
        if (!userId || !chatId) {
            console.error("❌ Missing user_id or chat_id in URL");
            return;
        }

        setLoading(true);
        setSuccess(false);

        const timezone = Intl.DateTimeFormat().resolvedOptions().timeZone;

        const payload = {
            user_id: parseInt(userId, 10),
            chat_id: parseInt(chatId, 10),
            timezone,
            switch_type: switchType || "default",
        };

        console.log("Sending geo payload:", payload);

        try {
            const res = await fetch("/api/check-geo-data", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(payload),
            });

            if (res.ok) {
                console.log("✅ Geo data sent successfully");
                setSuccess(true);
            } else {
                console.error("❌ Failed to send geo data:", res.statusText);
            }
        } catch (err) {
            console.error("❌ Error sending geo data:", err);
        }

        setLoading(false);
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
                    Timezone saved successfully!
                </div>
            )}
        </div>
    );
};

export default CheckUserGeoButton;
