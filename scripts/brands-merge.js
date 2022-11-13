const path = require('path');
const fs = require('fs');
const directoryPath = path.join(__dirname, '..', 'public', 'brands', 'info');

const run = () => {
  const files = fs.readdirSync(directoryPath);
  console.log('scanning brands...');
  const results = files.map((file) => {
    console.log('exporting brand', file);
    const content = fs.readFileSync(path.join(directoryPath, file), 'utf-8');
    return JSON.parse(content);
  });
  fs.writeFileSync(
    path.join(directoryPath, '..', 'list.json'),
    JSON.stringify(results, null, 2),
  );
  console.log('exported all brands successfully!');
};

run();
