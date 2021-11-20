// const MAX_TOKENS = 10000;
const MAX_TOKENS = 1000;
const IPFS_ROOT = "https://bafybeiapdjd6fxbbbv5h5dsmc7dtfjxahqltarc3vf6n2m7axddpatfph4.ipfs.dweb.link"
const fetch = (...args) => import('node-fetch').then(({default: fetch}) => fetch(...args));

const queryForData = async () => {
  for(let i=1; i<=MAX_TOKENS; i++){
    const response = await fetch(`${IPFS_ROOT}/${i}`);
    const record = await response.json();
    // console.log('text',record);
    const attributeString = record.attributes.map(item => `"${item.trait_type}": "${item.value}"`).join(',');
    console.log(`{"name": "Doodle ${i}", ${attributeString}}`);
  }
  console.log('done');
  
}

queryForData();