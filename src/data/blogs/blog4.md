# 🚀 Upload to Play Store from Replit (Expo EAS Build Tutorial)

Learn how to build and publish your Expo app (APK & AAB) to the Google Play Store directly from Replit using EAS.

---

## 📋 Requirements

Before starting, make sure you have:

- A Google Play Store Developer Account  
- An Expo Account  
- A working Expo project in Replit  

---

## ⚙️ 1. Install EAS CLI

Open your Replit project and run:

```bash
npm install -g eas-cli
```

---

## 🔐 2. Log in to your Expo Account

```bash
eas login
```

Enter your Expo credentials when prompted.

---

## 🛠️ 3. Configure `eas.json`

Create or update a file called `eas.json` in the root of your project:

```json
{
  "cli": {
    "version": ">= 18.7.0",
    "appVersionSource": "remote"
  },
  "build": {
    "development": {
      "developmentClient": true,
      "distribution": "internal"
    },
    "preview": {
      "distribution": "internal",
      "android": {
        "buildType": "apk"
      },
      "env": {
        "EXPO_PUBLIC_DOMAIN": "https://url.replit.app"
      }
    },
    "production": {
      "autoIncrement": true,
      "env": {
        "EXPO_PUBLIC_DOMAIN": "https://url.replit.app"
      }
    }
  },
  "submit": {
    "production": {}
  }
}
```

⚠️ **Important:**  
Make sure there is **no trailing comma** after the `production` block.

---

## 📦 4. Build Your App

### Generate APK (for testing)

```bash
eas build --platform android --profile preview
```

### Generate AAB (for Play Store)

```bash
eas build --platform android --profile production
```

---

## ⏳ 5. Wait for the Build

- Builds run on Expo servers  
- Typical time: **10–30 minutes**  
- Track progress in your Expo dashboard  

Once finished, download your APK or AAB file.

---

## 📲 6. Install or Publish

### APK (Testing)

- Download the `.apk`
- Install it manually on your Android device  

### AAB (Production)

1. Go to Google Play Console  
2. Select your app  
3. Navigate to **Release**  
4. Upload your `.aab` file  
5. Complete the publishing steps  

---

## 📝 Additional Notes

- **APK** → for internal testing  
- **AAB** → required for Play Store publishing  
- Make sure your app has:
  - App icon  
  - Versioning configured  
  - Permissions properly set  

---

## ⚠️ Common Issues & Fixes

### 1. Environment Variables / Backend Connection

Make sure your backend URL is defined in `app.json` or `eas.json`:

```json
{
  "expo": {
    "extra": {
      "EXPO_PUBLIC_DOMAIN": "https://url.replit.app"
    }
  }
}
```

This ensures your app can connect to your backend.

---

### 2. Credentials in Expo Go

You may add credentials (like database or API keys) in Expo, but:

- It’s not always required  
- Only include what your app strictly needs  

---

### 3. Signing Key / Fingerprint Issue

When running `eas build`, you might see:

> Prompt to generate a new key fingerprint

⚠️ **Important: Do NOT generate a new key if you already have one.**

If you do:
- Your app signature changes  
- Google Play won’t recognize updates  
- You may need to recreate the app release  

✅ Always keep **one consistent signing key**

---

### 4. Play Store Testing Requirement

Before publishing:

- You must run a **closed test**
- Minimum:
  - **12 testers**
  - **14 days**

---

### 5. Google Play Integrity Error

If you encounter integrity-related errors:

👉 Accept the **Google Privacy Policy** inside Play Console  

This usually resolves the issue.

---

## ✅ Final Checklist

Before submitting your app:
- [ ] AAB file generated  
- [ ] App properly configured (icons, version, permissions)  
- [ ] Backend URL set (`EXPO_PUBLIC_DOMAIN`)  
- [ ] Signing key consistent  
- [ ] Closed testing completed  
- [ ] Google Play requirements fulfilled  

---

## 🎯 Summary

Using Expo EAS with Replit allows you to:

- Build APKs for testing  
- Generate AABs for production  
- Deploy your app without local Android setup  
