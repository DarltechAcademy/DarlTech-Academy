import { useState } from "react";
import { Camera } from "lucide-react";

export default function SettingsPage() {
  // Profile state
  const [firstName, setFirstName] = useState("John");
  const [lastName, setLastName] = useState("Doe");
  const [email, setEmail] = useState("john.doe@dartech.com");
  const [phone, setPhone] = useState("+1 (555) 123-4567");
  const [bio, setBio] = useState(
    "Passionate about web development and continuous learning. Currently studying full-stack development at DarTech Academy."
  );
  const [profilePic, setProfilePic] = useState(
    "https://i.pravatar.cc/150?img=11"
  );

  // Notification state
  const [emailNotif, setEmailNotif] = useState(true);
  const [assignmentReminders, setAssignmentReminders] = useState(true);
  const [communityUpdates, setCommunityUpdates] = useState(false);

  const handleProfilePicChange = (e) => {
    if (e.target.files && e.target.files[0]) {
      setProfilePic(URL.createObjectURL(e.target.files[0]));
    }
  };

  const handleSave = () => {
    // Here you can send data to your API
    const profileData = {
      firstName,
      lastName,
      email,
      phone,
      bio,
      profilePic,
      notifications: {
        emailNotif,
        assignmentReminders,
        communityUpdates,
      },
    };
    console.log("Saved profile:", profileData);
    alert("Profile saved successfully!");
  };

  return (
    <div id="tab-settings" className="tab-content animate-fade-in">
      <div className="max-w-4xl mx-auto space-y-6">
        <h1 className="text-3xl font-bold text-slate-900 mb-8">
          Account Settings
        </h1>

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
                <img
                  src={profilePic}
                  className="w-24 h-24 rounded-full object-cover"
                  alt="Profile"
                />
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
              className="px-6 py-2.5 bg-indigo-600 text-white rounded-lg font-semibold hover:bg-indigo-700"
            >
              Save Changes
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