interface Config {
  apiUrl: string;
  apiKey: string;
}

const appConfig: Config = {
  apiUrl: process.env.REACT_APP_UNSPLASH_BASE_URL!,
  apiKey: process.env.REACT_APP_UNSPLASH_API_KEY!,
};

export default appConfig;
