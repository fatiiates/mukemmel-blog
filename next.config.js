module.exports = {
  webpack: config => {
    config.module.rules.push({
      test: /\.md$/,
      use: "raw-loader"
    });

    return config;
  },
  env: {
    "MYSQL_HOST": "remotemysql.com",
    "MYSQL_USER": "tlNmH6sSIP",
    "MYSQL_PASSWORD": "WMBfXquXFL",
    "MYSQL_DATABASE": "tlNmH6sSIP",
  }
};
