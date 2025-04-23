
import React, { useState } from 'react';
import axios from 'axios';
import "./verify_payment.css"

const VerifyPayment = ({ reference }) => {
    const [verificationResponse, setVerificationResponse] = useState(null);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);

    const handleVerification = async () => {
        setLoading(true);
        setError(null);
        try {
            const response = await axios.get(`http://localhost:8080/verify/${reference}`);
            setVerificationResponse(response.data);
        } catch (error) {
            console.error('Verification error:', error);
            setError('An error occurred while verifying the payment.');
        } finally {
            setLoading(false);
        }
    };

    return (
        <div  className="verify-payment-container">
            <button onClick={handleVerification} disabled={loading}>
                {loading ? 'Verifying...' : 'Verify Payment'}
            </button>
            {error && <p className="error">{error}</p>}
            {verificationResponse && (
                <div className="verification-response">
                    <h2>Verification Response</h2>
                    <pre>{JSON.stringify(verificationResponse, null, 2)}</pre>
                </div>
            )}
        </div>
    );
};

export default VerifyPayment;
