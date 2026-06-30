const fs = require('fs');
const path = require('path');
const Hjson = require('hjson');

const root = process.argv[2] || 'Localization';
let hasErrors = false;
let filesChecked = 0;

function walk(dir) {
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const fullPath = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      walk(fullPath);
    } else if (entry.isFile() && entry.name.endsWith('.hjson')) {
      validateFile(fullPath);
    }
  }
}

function validateFile(filePath) {
  filesChecked++;
  const content = fs.readFileSync(filePath, 'utf8');
  try {
    Hjson.parse(content);
  } catch (err) {
    hasErrors = true;
    const message = String(err.message).replace(/\r?\n/g, ' ');
    console.error(`::error file=${filePath}::${message}`);
  }
}

if (!fs.existsSync(root)) {
  console.error(`No se encontró la carpeta "${root}".`);
  process.exit(1);
}

walk(root);

console.log(`Archivos HJSON revisados: ${filesChecked}`);

if (hasErrors) {
  console.error('Se encontraron errores de sintaxis HJSON. Revisa los detalles arriba.');
  process.exit(1);
}

console.log('Todos los archivos HJSON son válidos.');
