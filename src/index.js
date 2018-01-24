const defaultConfig = {
  population: 0,
  pValue: 0.05,
  zScore: 0,
  errorMargin: 0.5
};

function mapValidProps(obj) {
  const defaultKeys = Object.keys(defaultConfig);
  const results = {};
  const invalidKeyCache = [];
  
  Object.entries(obj).forEach(([key, value]) => {
    if(defaultKeys.includes(key)) {
      results[key] = value
    } else {
      invalidKeyCache.push(key)
    }
  })

  const finalValidKeys = Object.keys(results);
  if(finalValidKeys.length === 0) {
    throw new Error(
      'No valid props passed: sample() requires at least ' +
      'one of the following available props: ' +
      '"population", "pValue", "zScore", "errorMargin".'
    )
  }
  if(invalidKeyCache.length > 0) {
    throw new Error(
      `Unexpected ${invalidKeyCache.length > 1 ? 'keys' : 'key'}: ` +
      `"${invalidKeyCache.join('", "')}"`
    )
  }
  
  return results;
};

function createConfig(settings) {
  let config;
  if(typeof settings === 'object') {
    const reassignedProps = mapValidProps(settings);
    config = Object.assign({}, defaultConfig, reassignedProps);
  };
  
  if(typeof settings === 'number') {
    config = Object.assign({}, defaultConfig, {
      population: settings
    });
  };

  return config
};