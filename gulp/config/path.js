//name of the project folder
import * as nodePath from 'path'; //import the path module
const rootFolder = nodePath.basename(nodePath.resolve());

const buildFolder = `./dist`; // folder with results
const srcFolder = `./src`; // folder with sources

export const path = {
  build: {
    files: `${buildFolder}/files/`,
  },
  src: {
    files: `${srcFolder}/files/**/*.*`, // files to copy to build folder
  },
  watch: {
    files: `${srcFolder}/files/**/*.*`,
  },
  clean: buildFolder,
  buildFolder: buildFolder,
  srcFolder: srcFolder,
  rootFolder: rootFolder,
  ftp: ``,
};
