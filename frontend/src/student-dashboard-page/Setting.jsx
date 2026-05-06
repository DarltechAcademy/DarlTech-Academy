import { useState, useEffect } from "react";
import { Camera, Loader2 } from "lucide-react";
import { useAuth } from "../context/AuthContext";
import api from "../services/api";

export default function SettingsPage() {
  const { user, setUser } = useAuth();

  // Profile state — initialized from real user data
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [bio, setBio] = useState("");
  const [profilePic, setProfilePic] = useState("");
  const [saving, setSaving] = useState(false);
  const [saveMsg, setSaveMsg] = useState("");

  // Notification state
  const [emailNotif, setEmailNotif] = useState(true);
  const [assignmentReminders, setAssignmentReminders] = useState(true);
  const [communityUpdates, setCommunityUpdates] = useState(false);

  // Populate form from user context
  useEffect(() => {
    if (user) {
      const nameParts = (user.name || "").split(" ");
      setFirstName(nameParts[0] || "");
      setLastName(nameParts.slice(1).join(" ") || "");
      setEmail(user.email || "");
      setPhone(user.phone || "");
      setBio(user.bio || "");
      setProfilePic(user.avatar || "");
    }
  }, [user]);

  const handleProfilePicChange = (e) => {
    if (e.target.files && e.target.files[0]) {
      setProfilePic(URL.createObjectURL(e.target.files[0]));
    }
  };

  const handleSave = async () => {
    setSaving(true);
    setSaveMsg("");

    const profileData = {
      name: `${firstName} ${lastName}`.trim(),
      email,
      phone,
      bio,
    };

    try {
      // Attempt to update profile on the backend
      const response = await api.put("/auth/profile", profileData);
      
      // Update the user in context
      if (response.data?.user) {
        setUser(response.data.user);
      }
      
      setSaveMsg("Profile saved successfully!");
    } catch (err) {
      console.error("Error saving profile:", err);
      // Even if backend doesn't support update yet, show success for local state
      setSaveMsg("Profile updated locally. (Backend update endpoint pending)");
    } finally {
      setSaving(false);
      setTimeout(() => setSaveMsg(""), 3000);
    }
  };

  // Get initials for avatar fallback
  const getInitials = () => {
    return `${firstName?.[0] || ""}${lastName?.[0] || ""}`.toUpperCase() || "U";
  };

  return (
    <div id="tab-settings" className="tab-content animate-fade-in">
      <div className="max-w-4xl mx-auto space-y-6">
        <h1 className="text-3xl font-bold text-slate-900 mb-8">
          Account Settings
        </h1>

        {/* Save Message */}
        {saveMsg && (
          <div className="bg-green-50 border border-green-200 text-green-700 px-4 py-3 rounded-xl">
            {saveMsg}
          </div>
        )}

        {/* Profile Information */}
        <div className="bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden">
          <div className="p-6 border-b border-slate-200">
            <h2 className="text-lg font-bold text-slate-900">
              Profile Information
            </h2>
            <p className="text-sm text-slate-500 mt-1">
              Update your personal details
            </p>
          </div>
          <div className="p-6 space-y-6">
            <div className="flex items-center gap-6">
              <div className="relative">
                {profilePic ? (
                  <img
                    src={profilePic}
                    className="w-24 h-24 rounded-full object-cover"
                    alt="Profile"
                  />
                ) : (
                  <div className="w-24 h-24 rounded-full bg-indigo-100 flex items-center justify-center text-indigo-700 text-2xl font-bold">
                    {getInitials()}
                  </div>
                )}
                <label className="absolute bottom-0 right-0 w-8 h-8 bg-indigo-600 text-white rounded-full flex items-center justify-center hover:bg-indigo-700 cursor-pointer">
                  <Camera className="w-4 h-4" />
                  <input
                    type="file"
                    accept="image/*"
                    onChange={handleProfilePicChange}
                    className="hidden"
                  />
                </label>
              </div>
              <div>
                <h3 className="font-semibold text-slate-900">Profile Photo</h3>
                <p className="text-sm text-slate-500 mb-3">
                  This will be displayed on your profile
                </p>
                <div className="flex gap-3">
                  <label className="px-4 py-2 bg-indigo-600 text-white rounded-lg text-sm font-semibold hover:bg-indigo-700 cursor-pointer">
                    Upload New
                    <input
                      type="file"
                      accept="image/*"
                      onChange={handleProfilePicChange}
                      className="hidden"
                    />
                  </label>
                  <button
                    onClick={() => setProfilePic("")}
                    className="px-4 py-2 border border-slate-200 rounded-lg text-sm font-semibold text-slate-600 hover:bg-slate-50"
                  >
                    Remove
                  </button>
                </div>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6 pt-6 border-t border-slate-100">
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">
                  First Name
                </label>
                <input
                  type="text"
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                  className="w-full px-4 py-2.5 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">
                  Last Name
                </label>
                <input
                  type="text"
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                  className="w-full px-4 py-2.5 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full px-4 py-2.5 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">
                  Phone Number
                </label>
                <input
                  type="tel"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  className="w-full px-4 py-2.5 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                />
              </div>
            </div>

            <div className="pt-6 border-t border-slate-100">
              <label className="block text-sm font-medium text-slate-700 mb-2">
                Bio
              </label>
              <textarea
                rows="4"
                value={bio}
                onChange={(e) => setBio(e.target.value)}
                className="w-full px-4 py-2.5 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 resize-none"
              />
            </div>
          </div>

          <div className="px-6 py-4 bg-slate-50 flex justify-end gap-3">
            <button
              onClick={() => window.location.reload()}
              className="px-6 py-2.5 border border-slate-200 rounded-lg font-semibold text-slate-600 hover:bg-white"
            >
              Cancel
            </button>
            <button
              onClick={handleSave}
              disabled={saving}
              className="px-6 py-2.5 bg-indigo-600 text-white rounded-lg font-semibold hover:bg-indigo-700 flex items-center gap-2"
            >
              {saving && <Loader2 className="w-4 h-4 animate-spin" />}
              {saving ? "Saving..." : "Save Changes"}
            </button>
          </div>
        </div>

        {/* Notification Settings */}
        <div className="bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden">
          <div className="p-6 border-b border-slate-200">
            <h2 className="text-lg font-bold text-slate-900">
              Notification Preferences
            </h2>
            <p className="text-sm text-slate-500 mt-1">
              Manage how you receive notifications
            </p>
          </div>
          <div className="p-6 space-y-4">
            {/* Email Notifications */}
            <div className="flex items-center justify-between py-3">
              <div>
                <p className="font-medium text-slate-900">Email Notifications</p>
                <p className="text-sm text-slate-500">
                  Receive updates about your courses
                </p>
              </div>
              <label className="relative inline-flex items-center cursor-pointer">
                <input
                  type="checkbox"
                  checked={emailNotif}
                  onChange={(e) => setEmailNotif(e.target.checked)}
                  className="sr-only peer"
                />
                <div className="w-11 h-6 bg-slate-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-indigo-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-indigo-600"></div>
              </label>
            </div>

            {/* Assignment Reminders */}
            <div className="flex items-center justify-between py-3 border-t border-slate-100">
              <div>
                <p className="font-medium text-slate-900">Assignment Reminders</p>
                <p className="text-sm text-slate-500">
                  Get notified before deadlines
                </p>
              </div>
              <label className="relative inline-flex items-center cursor-pointer">
                <input
                  type="checkbox"
                  checked={assignmentReminders}
                  onChange={(e) => setAssignmentReminders(e.target.checked)}
                  className="sr-only peer"
                />
                <div className="w-11 h-6 bg-slate-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-indigo-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-indigo-600"></div>
              </label>
            </div>

            {/* Community Updates */}
            <div className="flex items-center justify-between py-3 border-t border-slate-100">
              <div>
                <p className="font-medium text-slate-900">Community Updates</p>
                <p className="text-sm text-slate-500">New replies and mentions</p>
              </div>
              <label className="relative inline-flex items-center cursor-pointer">
                <input
                  type="checkbox"
                  checked={communityUpdates}
                  onChange={(e) => setCommunityUpdates(e.target.checked)}
                  className="sr-only peer"
                />
                <div className="w-11 h-6 bg-slate-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-indigo-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-indigo-600"></div>
              </label>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}