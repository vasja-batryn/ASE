//name of the project folder
import * as nodePath from 'path'; //import the path module
const rootFolder = nodePath.basename(nodePath.resolve());

const buildFolder = `./dist`; // folder with results
const srcFolder = `./src`; // folder with sources

export const path = {
  build: {
    css: `${buildFolder}/css/`,
    html: `${buildFolder}/`,
    files: `${buildFolder}/files/`,
  },
  src: {
    scss: `${srcFolder}/scss/style.scss`,
    html: `${srcFolder}/*.html`,
    files: `${srcFolder}/files/**/*.*`, // files to copy to build folder
  },
  watch: {
    scss: `${srcFolder}/scss/**/*.scss`,
    html: `${srcFolder}/**/*.html`,
    files: `${srcFolder}/files/**/*.*`,
  },
  clean: buildFolder,
  buildFolder: buildFolder,
  srcFolder: srcFolder,
  rootFolder: rootFolder,
  ftp: ``,
};
