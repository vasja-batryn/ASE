//name of the project folder
import * as nodePath from 'path'; //import the path module
const rootFolder = nodePath.basename(nodePath.resolve());

const buildFolder = `./dist`; // folder with results
const srcFolder = `./src`; // folder with sources

export const path = {
  build: {
    html: `${buildFolder}/`,
    files: `${buildFolder}/files/`,
  },
  src: {
    html: `${srcFolder}/*.html`,
    files: `${srcFolder}/files/**/*.*`, // files to copy to build folder
  },
  watch: {
    html: `${srcFolder}/**/*.html`,
    files: `${srcFolder}/files/**/*.*`,
  },
  clean: buildFolder,
  buildFolder: buildFolder,
  srcFolder: srcFolder,
  rootFolder: rootFolder,
  ftp: ``,
};
