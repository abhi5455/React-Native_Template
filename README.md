# 🚀 React Native Quick Start Template

A beautifully designed, feature-rich React Native CLI template to kickstart your next mobile application. This template comes with a modern, charming UI and is pre-configured with essential libraries for navigation, styling, and more.

## ✨ Features

-   **Modern UI/UX**: A clean, charming, and visually appealing design right out of the box.
-   **TypeScript**: Type-safe development for a more robust and maintainable codebase.
-   **Pre-configured Navigation**:
    -   **Stack Navigator**: For managing individual screens and navigation flows.
    -   **Tab Navigator**: For easy bottom tab navigation between main sections of your app.
-   **Essential Libraries**: Comes with pre-installed and configured libraries for icons, gradients, and notifications.
-   **Developer-Friendly**: A well-structured and documented template to get you up and running in minutes.
-   **Splash Screen**: An elegant onboarding splash screen to welcome your users.

## 📚 Libraries Included

This template comes with a set of essential libraries pre-installed and configured:

| Library                         | Purpose                                      |
| ------------------------------- | -------------------------------------------- |
| `react-navigation`              | A complete navigation solution for React Native. |
| `nativewind`                    | Use Tailwind CSS for styling your application. |
| `lucide-react-native`           | A beautiful and consistent icon library.     |
| `react-native-linear-gradient`  | Add stunning gradient effects to your UI.    |
| `react-native-toast-message`    | Display toast notifications to your users.   |
| `react-native-safe-area-context`| Handle safe areas on different devices.      |
| `react-native-screens`          | Native screen optimizations.                 |

## 🚀 Getting Started

Follow these steps to get your project up and running.

### Prerequisites

-   Node.js (v18 or newer)
-   Watchman (for macOS)
-   An iOS or Android development environment set up. See the [React Native Environment Setup](https://reactnative.dev/docs/environment-setup) guide for detailed instructions.

### Installation

1.  **Clone the template**:
    ```bash
    git clone https://github.com/abhi5455/React-Native_Template.git YourProjectName
    cd YourProjectName
    ```

2.  **Install dependencies**:
    ```bash
    npm install
    # or
    yarn install
    ```

3.  **Install iOS Pods**:
    ```bash
    cd ios && pod install && cd ..
    ```

## 🏃‍♂️ Running the App

-   **To run on iOS**:
    ```bash
    npm run ios
    ```

-   **To run on Android**:
    ```bash
    npm run android
    ```

## ✏️ Renaming the Project

To rename the project to your own app name, we recommend using the `react-native-rename` library.

1.  **Run the rename command**:
    Replace `"Your New App Name"` with your desired project name.

    ```bash
    npx react-native-rename "Your New App Name"
    ```

    The script will update the project name in all the necessary files.

## 📁 Project Structure

The project follows a standard React Native CLI structure, with some additions for better organization:

```
.
├── src
│   ├── navigation    # Navigation setup (Stack, Tabs)
│   ├── screens       # All application screens
│   └── ...           # Other components and utilities
├── tailwind.config.js # NativeWind configuration
└── ...
```
