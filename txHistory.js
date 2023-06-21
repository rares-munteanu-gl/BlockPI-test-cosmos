const { StargateClient } = require('@cosmjs/stargate');

(async function () {
  const apiUrl = 'https://cosmos.blockpi.network/rpc/v1/<api-key>/';
  const client = await StargateClient.connect(apiUrl);
  console.log('Connected');

  // Define address
  const address = 'cosmos1r694zwmv0a59hxtg9w474pcaq92vvuss02prd6';

  try {
    const searchResult = await client.searchTx({ sentFromOrTo: address });

    console.log({ [`${address} transactions:`]: processedResults });
  } catch (error) {
    console.log(error);
  }
})();
