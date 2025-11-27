// ==========================
// MINIMALIUM - BUILD SCRIPT
// ==========================
const fs = require('fs');
const postcss = require('postcss');
const postcssImport = require('postcss-import'); 
const autoprefixer = require('autoprefixer');
const cssnano = require('cssnano');
const path = require('path');

const srcPath = path.join(__dirname, 'src', 'style.css');
const distPath = path.join(__dirname, 'dist', 'style.css');

async function build() {
  try {
    const css = fs.readFileSync(srcPath, 'utf8');

    const result = await postcss([postcssImport, autoprefixer, cssnano])  // postcssImport
      .process(css, { from: srcPath, to: distPath });

    fs.mkdirSync(path.dirname(distPath), { recursive: true });
    fs.writeFileSync(distPath, result.css);

    console.log('✅ Minimalium built successfully: dist/style.css');
  } catch (err) {
    console.error('❌ Build failed:', err);
  }
}

build();