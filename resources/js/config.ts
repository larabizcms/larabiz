const config = {
    defaultPath: '/',
    apiBaseUrl: import.meta.env.VITE_APP_API_URL || location.origin + '/api/v1',
    fontFamily: `'Public Sans', sans-serif`,
    miniDrawer: false,
    container: true,
    mode: 'light',
    presetColor: 'default',
    themeDirection: 'ltr',
    adminAnalyticsEnabled: (window as any).LaraBiz.adminAnalyticsEnabled,
    supportedLanguages: (window as any).LaraBiz.supportedLanguages || ["en", "vi"],
    language: localStorage.getItem('i18nextLng') || (window as any).LaraBiz.language || "en",
    recaptchaSiteKey: (window as any).LaraBiz.recaptchaSiteKey,
    firebaseConfig: (window as any).LaraBiz.firebaseConfig,
};

export default config;
export const drawerWidth = 260;

export const twitterColor = '#1DA1F2';
export const facebookColor = '#3b5998';
export const linkedInColor = '#0e76a8';
