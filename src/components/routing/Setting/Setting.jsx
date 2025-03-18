import React, { useState, useEffect } from "react";
import axios from "axios";

function Settings({ onClose }) {
    const [uid, setuid] = useState(localStorage.getItem("uid") || "");
    const [oldPassword, setOldPassword] = useState("");
    const [newPassword, setNewPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [message, setMessage] = useState("");

    useEffect(() => {
        if (!uid) {
            setMessage("⚠️ User ID not found. Please log in.");
        }
    }, [uid]);

    const handleChangePassword = async () => {
        console.log("🔍 Sending data:", {
            uid,
            oldPassword,
            newPassword,
        });

        if (!uid || !oldPassword || !newPassword || !confirmPassword) {
            setMessage("⚠️ Please fill in all fields.");
            return;
        }

        try {
            const response = await axios.post("http://franchisebackend.railway.internal/auth/updatepassword",
                {
                    uid,
                    oldPassword,
                    newPassword,
                },
                {
                    headers: { "Content-Type": 'application/json' },
                }
            );

            console.log("Response:", response.data);
            setMessage("Password updated successfully!");

        } catch (error) {
            console.error("Error:", error.response?.data || error.message);
            setMessage("Error updating password. Try again.");
        }
    };

    return (
        <div className="max-w-md mx-auto bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-bold mb-4">Settings</h2>
            <p className="text-lg font-semibold mb-4">
                Logged in as: <span className="text-blue-600">{uid}</span>
            </p>

            <label className="block mb-2 font-semibold">Old Password:</label>
            <input
                type="password"
                value={oldPassword}
                onChange={(e) => setOldPassword(e.target.value)}
                className="w-full p-2 border rounded mb-4"
            />

            <label className="block mb-2 font-semibold">New Password:</label>
            <input
                type="password"
                value={newPassword}
                onChange={(e) => setNewPassword(e.target.value)}
                className="w-full p-2 border rounded mb-4"
            />

            <label className="block mb-2 font-semibold">Confirm New Password:</label>
            <input
                type="password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                className="w-full p-2 border rounded mb-4"
            />

            <button
                onClick={handleChangePassword}
                className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600"
            >
                Update Password
            </button>

            {message && <p className="mt-4 text-center font-semibold">{message}</p>}
        </div>
    );
}

export default Settings;
